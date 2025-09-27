"use client"

import { LucideIcon, Box, Shield, Leaf, Zap, Heart,Diamond , Star,ShoppingCart , Flag} from "lucide-react"

/**
 * Value Item Interface
 */
interface ValueItem {
  iconName: string
  title: string
  description: string
}

/**
 * Values Section Props
 */
interface ValuesSectionProps {
  sectionTitle: string
  sectionSubtitle: string
  values: ValueItem[]
  headerIcon?: string
  className?: string
  headingTitle?: string
}

/**
 * Values Section Component
 *
 * A fully dynamic and reusable component for displaying company values or features.
 *
 * Features:
 * - Customizable section title and subtitle
 * - Dynamic value items with icons, titles, and descriptions
 * - Responsive three-column layout
 * - Dark and light theme support
 * - Clean typography and spacing
 * - Reusable across different sections
 */
export function ValuesSection({
  sectionTitle,
  sectionSubtitle,
  headingTitle,
  values,
  headerIcon,
  className = ""
}: ValuesSectionProps) {
  // Icon mapping
  const iconMap: Record<string, LucideIcon> = {
    Box,
    Shield,
    Leaf,
    Star,
    Zap,
    Heart,
    Diamond,
    ShoppingCart,
    Flag
  }

  // Helper function to get icon component
  const getIcon = (iconName: string): LucideIcon => {
    return iconMap[iconName] || Box
  }
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className=" gap-12 mb-16">
          {/* Left Column - Section Title */}
          <div className=" mb-12">
            {/* Badge */}
            <div className="flex items-center border-[0.5px] border-[#25252518] dark:border-[#FAFAFA] rounded-full px-4 py-3 gap-3 max-w-fit">
              {headerIcon && (
                <div className=" flex items-center justify-center">
                  {(() => {
                    const HeaderIconComponent = getIcon(headerIcon)
                    return (
                      <HeaderIconComponent
                        className="w-6 h-6 text-[#252525] dark:text-[#FAFAFA]"
                        strokeWidth={1.5}
                      />
                    )
                  })()}
                </div>
              )}
              <span className="text-[#252525] text-xl dark:text-[#FAFAFA] font-medium">
                {sectionTitle}
              </span>
            </div>

          </div>
            {/* Main Heading */}
            <div className="grid grid-cols-2 items-center">
            <h2 className="text-4xl w-full md:text-5xl lg:text-[44px]  text-[#252525] dark:text-[#FAFAFA] leading-tight">
            {headingTitle}
            </h2>

          {/* Right Column - Section Description */}
          <div className="flex items-center">
            <p className="text-lg md:text-[24PX] text-[#252525]  text-right dark:text-[#FAFAFA] leading-relaxed">
              {sectionSubtitle}
            </p>
          </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = getIcon(value.iconName)
            return (
              <div key={index} className="space-y-4 p-9 bg-[#FBFBFB] dark:bg-[#2A2A2A] rounded-4xl">
                {/* Icon */}
                <div className="w-14 h-14 rounded-full border border-[#2525255f] dark:border-[#fafafa28] mb-18 flex items-center justify-center">
                  <IconComponent
                    className="w-6 h-6 text-[#252525] dark:text-[#FAFAFA]"
                    
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl  text-[#252525] font-medium dark:text-[#FAFAFA]">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-xl  text-[#252525] dark:text-[#FAFAFA] leading-relaxed">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}