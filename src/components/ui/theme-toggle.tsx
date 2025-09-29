"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

/**
 * Theme Toggle Component
 *
 * A button component that toggles between light and dark themes.
 * Uses next-themes for theme management and displays appropriate
 * icons based on the current theme state.
 *
 * Features:
 * - Animated icon transitions with popup effects
 * - Moon vibrating animation
 * - Sun clock-rotation animation
 * - Sheet-like theme transition effects
 * - System theme detection
 * - Accessible button with proper ARIA labels
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isAnimating, setIsAnimating] = React.useState(false)

  // Ensure component is mounted before rendering to avoid hydration issues
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground"
      >
        <Sun className="h-5 w-5" />
      </Button>
    )
  }

  /**
   * Toggle between light and dark themes with animations
   */
  const toggleTheme = () => {
    setIsAnimating(true)
    setTheme(theme === "light" ? "dark" : "light")

    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 800)
  }

  return (
    <div className="theme-sheet">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="hover:bg-transparent transition-colors duration-200 relative overflow-hidden"
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      >
        {theme === "light" ? (
          <Sun
            className={`h-6 w-6 ${isAnimating ? 'sun-rotate' : ''}`}
            style={{ color: '#FFA500' }}
          />
        ) : (
          <Moon
            className={`h-6 w-6 ${isAnimating ? 'moon-vibrate' : ''}`}
            style={{ color: '#4A90E2' }}
          />
        )}

        {/* Background animation overlay */}
        <div
          className={`absolute inset-0 rounded-full transition-all duration-300 ${
            isAnimating ? 'bg-white/10 scale-150' : 'scale-0'
          }`}
        />
      </Button>
    </div>
  )
}