"use client"

import { useEffect, useState } from "react"

export function useScrollSpy(sectionIds: string[]) {
  const [currentSection, setCurrentSection] = useState(sectionIds[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "0px 0px -40% 0px",
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return currentSection
}
