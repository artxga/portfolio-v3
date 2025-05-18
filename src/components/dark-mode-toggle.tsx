'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  const iconSize = 24

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark'
    setDarkMode(isDark)
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [])

  const toggleTheme = () => {
    const newTheme = darkMode ? 'light' : 'dark'
    setDarkMode(!darkMode)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className="hover:cursor-pointer"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <Sun className='text-[var(--foreground)] hover:text-[var(--accent)]' size={iconSize} /> : <Moon className='text-[var(--foreground)] hover:text-[var(--accent)]' size={iconSize} />}
    </button>
  )
}

export default DarkModeToggle
