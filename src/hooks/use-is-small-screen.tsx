"use client"

import { useEffect, useState } from "react"

function useIsSmallScreen() {
  const [isSmall, setIsSmall] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)")
    const update = () => setIsSmall(mediaQuery.matches)

    update()
    mediaQuery.addEventListener("change", update)

    return () => mediaQuery.removeEventListener("change", update)
  }, [])

  return isSmall
}

export default useIsSmallScreen