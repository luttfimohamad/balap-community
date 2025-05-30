"use client"

import { useState, useEffect } from "react"

interface ScrollState {
  scrollDirection: "up" | "down" | null
  isAtTop: boolean
  scrollY: number
  isInHero: boolean
}

export function useScrollDirection(threshold = 10, heroHeight = 600) {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollDirection: null,
    isAtTop: true,
    scrollY: 0,
    isInHero: true,
  })

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const updateScrollDirection = () => {
      const scrollY = window.scrollY
      const isAtTop = scrollY < threshold
      const isInHero = scrollY < heroHeight

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }

      setScrollState({
        scrollDirection: scrollY > lastScrollY ? "down" : "up",
        isAtTop,
        scrollY,
        isInHero,
      })

      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDirection)
        ticking = true
      }
    }

    // Initial call to set the state
    updateScrollDirection()

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [threshold, heroHeight])

  return scrollState
}
