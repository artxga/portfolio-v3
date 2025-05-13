"use client"

import { Languages } from 'lucide-react';
import { useState } from 'react';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showMenu = () => setIsOpen(true);
  const hideMenu = () => setIsOpen(false);

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
        <div className="absolute bottom-10 right-0 bg-[var(--background)] border-[var(--accent)]  rounded-lg shadow-lg p-2 w-32 z-50">
          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:text-[var(--accent)]">{'English'}</li>
            <li className="cursor-pointer hover:text-[var(--accent)]">{'Español'}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
