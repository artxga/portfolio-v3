"use client"

import { Earth, Languages } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { useLanguage } from "@/context/language-context"
import SupportedLanguages from "@/core/types/supported-languages"
import useIsSmallScreen from "@/hooks/use-is-small-screen"
import { cn } from "@/lib/utils"

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)
  const { language, setLanguage } = useLanguage()
  const isSmallScreen = useIsSmallScreen()
  const iconSize = isSmallScreen ? 24 : 30

  const containerRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
    } else {
      const timeout = setTimeout(() => setShouldRender(false), 200)
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

  const toggleMenu = () => {
    if (isSmallScreen) setIsOpen(prev => !prev)
  }

  const showMenu = () => {
    if (!isSmallScreen) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      setIsOpen(true)
    }
  }

  const hideMenu = () => {
    if (!isSmallScreen) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false)
      }, 200)
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
      <div className="cursor-pointer hover:text-[var(--accent)] transition-colors duration-200">
        <Earth size={iconSize} />
      </div>

      {shouldRender && (
        <div
          className={cn(
            "absolute bg-[var(--background)]-80 backdrop-blur-xl border border-[var(--accent)] rounded-xl shadow-xl p-3 w-36 z-50 transition-all duration-200 transform",
            isSmallScreen ? "top-10 right-0" : "bottom-12 right-0",
            isOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-1"
          )}
          onMouseEnter={showMenu}
          onMouseLeave={hideMenu}
        >
          {!isSmallScreen && (
            <div className="absolute right-3 -bottom-2 w-3 h-3 bg-[var(--background)] border-r border-b border-[var(--accent)] rotate-45 z-0" />
          )}

          <ul className="relative z-10 space-y-2 text-sm">
            <li
              className={cn(
                "flex items-center gap-2 px-2 py-1 rounded cursor-pointer hover:bg-[var(--accent)/10] transition",
                language === "en" && "bg-[var(--accent)/10] font-semibold"
              )}
              onClick={() => changeLanguage("en")}
            >
              <Languages size={14} /> English
            </li>
            <li
              className={cn(
                "flex items-center gap-2 px-2 py-1 rounded cursor-pointer hover:bg-[var(--accent)/10] transition",
                language === "es" && "bg-[var(--accent)/10] font-semibold"
              )}
              onClick={() => changeLanguage("es")}
            >
              <Languages size={14} /> Español
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
