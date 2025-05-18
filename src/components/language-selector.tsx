"use client"

import { Languages } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/context/language-context"
import SupportedLanguages from "@/core/types/supported-languages"
import useIsSmallScreen from "@/hooks/use-is-small-screen"
import { cn } from "@/lib/utils"
import Image from "next/image"

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)
  const { language, setLanguage } = useLanguage()
  const isSmallScreen = useIsSmallScreen()

  const containerRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isOpen) setShouldRender(true)
    else {
      const timeout = setTimeout(() => setShouldRender(false), 150)
      return () => clearTimeout(timeout)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isSmallScreen || !isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen, isSmallScreen])

  const toggleMenu = () => isSmallScreen && setIsOpen(prev => !prev)

  const showMenu = () => {
    if (!isSmallScreen) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      setIsOpen(true)
    }
  }

  const hideMenu = () => {
    if (!isSmallScreen) {
      timeoutRef.current = setTimeout(() => setIsOpen(false), 150)
    }
  }

  const changeLanguage = (lang: SupportedLanguages) => {
    setLanguage(lang)
    if (isSmallScreen) setIsOpen(false)
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={showMenu}
      onMouseLeave={hideMenu}
      onClick={toggleMenu}
    >
      <div className="p-2 rounded-lg transition-colors cursor-pointer hover:bg-[var(--accent)/10] hover:text-[var(--accent)]">
        <Languages size={24} />
      </div>

      {shouldRender && (
        <div
          className={cn(
            "absolute z-50 w-36 p-3 mt-2 text-sm rounded-xl border border-[var(--details)] bg-[var(--background)] shadow-xl backdrop-blur-lg transition-all duration-200",
            isSmallScreen ? "top-10 right-0" : "bottom-12 right-0",
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          )}
          onMouseEnter={showMenu}
          onMouseLeave={hideMenu}
        >
          {!isSmallScreen && (
            <div className="absolute right-4 -bottom-1 w-3 h-3 rotate-45 bg-[var(--background)] border-r border-b border-[var(--details)] z-0" />
          )}

          <ul className="relative z-10 space-y-2">
            {[
              {
                label: "English",
                value: "en",
                flag: "https://flagcdn.com/gb.svg",
              },
              {
                label: "Español",
                value: "es",
                flag: "https://flagcdn.com/es.svg",
              },
            ].map(({ label, value, flag }) => (
              <li
                key={value}
                onClick={() => changeLanguage(value as SupportedLanguages)}
                className={cn(
                  "px-2 py-1 rounded-md flex items-center gap-2 cursor-pointer transition hover:bg-[var(--accent)/10]",
                  language === value && "bg-[var(--accent)/10] font-medium"
                )}
              >
                <Image
                  src={flag}
                  width={20}
                  height={14}
                  alt={`${label} flag`}
                  className="rounded-sm shadow-sm"
                />
                {label}
              </li>
            ))}
          </ul>

        </div>
      )}
    </div>
  )
}

export default LanguageSelector