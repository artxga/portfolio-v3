'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

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
      className=""
      aria-label="Toggle dark mode"
    >
      {darkMode ? <Sun className='text-[var(--foreground)] hover:text-[var(--accent)]' size={32} /> : <Moon className='text-[var(--foreground)] hover:text-[var(--accent)]' size={32} />}
    </button>
  )
}

export default DarkModeToggle
