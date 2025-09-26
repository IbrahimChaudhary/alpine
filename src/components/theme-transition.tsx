"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

/**
 * Theme Transition Component
 *
 * Creates a visual overlay animation when switching between themes
 * to provide smooth, engaging transition effects across the entire page.
 */
export function ThemeTransition() {
  const { theme } = useTheme()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [previousTheme, setPreviousTheme] = useState(theme)

  useEffect(() => {
    if (theme !== previousTheme && previousTheme !== undefined) {
      setIsTransitioning(true)

      // Reset transition state after animation completes
      const timer = setTimeout(() => {
        setIsTransitioning(false)
        setPreviousTheme(theme)
      }, 600)

      return () => clearTimeout(timer)
    }
  }, [theme, previousTheme])

  if (!isTransitioning) return null

  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none"
      style={{
        background: theme === 'dark'
          ? 'radial-gradient(circle at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)'
          : 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 50%, transparent 100%)',
        animation: 'themeTransitionOverlay 0.6s ease-in-out'
      }}
    />
  )
}