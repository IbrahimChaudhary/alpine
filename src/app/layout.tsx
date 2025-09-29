import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { ThemeTransition } from "@/components/ui/theme-transition";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "sonner";

/**
 * Font Configuration
 * Using SF Pro Display for the entire application to match Apple's design system
 * Falls back to system fonts for optimal cross-platform compatibility
 */

/**
 * Application Metadata
 * SEO and browser configuration for the SONIC application
 */
export const metadata: Metadata = {
  title: "SONIC - Alpine Theme",
  description: "A modern Next.js application with Tailwind CSS and shadcn/ui components",
  keywords: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "TypeScript"],
  authors: [{ name: "SONIC Team" }],
  viewport: "width=device-width, initial-scale=1",
};

/**
 * Root Layout Component
 *
 * The main layout wrapper for the entire application that provides:
 * - Theme provider for dark/light mode support
 * - Global navigation bar
 * - Font configuration
 * - Base styling and structure
 *
 * This layout is applied to all pages in the application,
 * ensuring consistent theming and navigation experience.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased"
        style={{
          fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, system-ui, sans-serif'
        }}
      >
        {/* Theme Provider - Enables dark/light mode across the app */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {/* Global Navigation */}
          <Navbar />

          {/* Main Application Content */}
          <main className="min-h-screen bg-background">
            {children}
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Theme Transition Overlay */}
          <ThemeTransition />

          {/* Toast Notifications */}
          <Toaster
            position="top-right"
            expand={true}
            richColors={true}
            closeButton={true}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
