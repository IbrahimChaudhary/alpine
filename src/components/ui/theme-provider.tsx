"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes"

/**
 * Theme Provider Component
 *
 * Wraps the application with next-themes provider to enable
 * system-wide dark/light mode switching functionality.
 *
 * Features:
 * - System theme detection
 * - Persistent theme storage
 * - Smooth theme transitions
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}