"use client"

import { Languages } from "lucide-react"
import { useState, useRef } from "react"
import { useLanguage } from "@/context/language-context"

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { setLanguage } = useLanguage()

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const showMenu = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsOpen(true)
  }

  const hideMenu = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 250)
  }

  const changeLanguage = (lang: 'en' | 'es') => {
    setLanguage(lang)
    console.log(`Idioma cambiado a: ${lang === 'en' ? 'Inglés' : 'Español'}`)
  }

  return (
    <div
      className="relative"
      onMouseEnter={showMenu}
      onMouseLeave={hideMenu}
    >
      <div className="cursor-pointer hover:text-[var(--accent)]">
        <Languages size={32} />
      </div>

      {isOpen && (
        <div
          className="absolute bottom-10 right-0 bg-[var(--background)] border-[var(--accent)] border-[1px]  rounded-lg shadow-lg p-2 w-32 z-50"
          onMouseEnter={showMenu}
          onMouseLeave={hideMenu}
        >
          <ul className="space-y-2 text-sm">
            <li
              className="cursor-pointer hover:text-[var(--accent)]"
              onClick={() => changeLanguage('en')}
            >
              {'English'}
            </li>
            <li
              className="cursor-pointer hover:text-[var(--accent)]"
              onClick={() => changeLanguage('es')}
            >
              {'Español'}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LanguageSelector
