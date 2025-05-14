"use client"

import SupportedLanguages from '@/core/types/supported-languages'
import { localStorageService } from '@/services/local-storage-service'
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'

interface LanguageContextType {
  language: SupportedLanguages
  setLanguage: (language: SupportedLanguages) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

/**
 * The LanguageProvider component manages the language state and provides it to
 * components down the tree via the LanguageContext.
 *
 * It uses the browser's language as the default language. If the user has
 * previously selected a language, it will be used instead.
 *
 * @example
 * <LanguageProvider>
 *   <MyComponent />
 * </LanguageProvider>
 */
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<SupportedLanguages>('en')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const stored = localStorageService.getItem<SupportedLanguages>('language')
    const browserLang = navigator.language.split('-')[0] as SupportedLanguages

    setLanguage(stored ?? browserLang)
  }, [])

  useEffect(() => {
    localStorageService.setItem('language', language)
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
