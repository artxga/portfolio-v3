"use client"

import DarkModeToggle from "./dark-mode-toggle"
import LanguageSelector from "./language-selector"

const MobileNavbar = () => {
  return (
    <nav
      className="fixed top-0 z-40 w-full md:hidden h-16 bg-[var(--background)]-80 backdrop-blur-xl"
    >
      <div className="flex items-center justify-end h-full px-6">
        <div className="flex items-center gap-4">
          <DarkModeToggle />
          <LanguageSelector />
        </div>
      </div>
    </nav>
  )
}

export default MobileNavbar
