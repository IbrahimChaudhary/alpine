"use client"

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

/**
 * AnimatedButton Component
 * 
 * A reusable button component with animated border effect
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.className - Additional CSS classes for the button
 * @param {Function} props.onClick - Click handler
 * @param {boolean} props.disabled - Disabled state
 * @param {Object} props.style - Inline styles
 * @param {string} props.containerClassName - Additional CSS classes for the container
 */
export function AnimatedButton({ 
  children, 
  className = "", 
  onClick,
  disabled = false,
  style = {},
  containerClassName = "",
  ...props 
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  containerClassName?: string;
  [key: string]: any;
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (buttonRef.current) {
      const { width, height } = buttonRef.current.getBoundingClientRect()
      setDimensions({ width, height })
    }
  }, [children])

  const createPath = () => {
    const w = dimensions.width + 16
    const h = dimensions.height + 16
    const inset = 4
    const radius = (h - (inset * 2)) / 2 + 4

    return `
      M ${inset + radius} ${inset}
      L ${w - inset - radius} ${inset}
      Q ${w - inset} ${inset} ${w - inset} ${inset + radius}
      L ${w - inset} ${h - inset - radius}
      Q ${w - inset} ${h - inset} ${w - inset - radius} ${h - inset}
      L ${inset + radius} ${h - inset}
      Q ${inset} ${h - inset} ${inset} ${h - inset - radius}
      L ${inset} ${inset + radius}
      Q ${inset} ${inset} ${inset + radius} ${inset}
    `
  }

  return (
    <div className={`relative inline-block p-2 ${containerClassName}`}>
      <button
        ref={buttonRef}
        className={`relative z-10 ${className}`}
        style={style}
        onClick={onClick}
        disabled={disabled}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => !disabled && setIsHovered(false)}
        {...props}
      >
        {children}
      </button>

      {/* Animated SVG Border */}
      {dimensions.width > 0 && !disabled && (
        <svg
          className="absolute pointer-events-none"
          style={{
            top: '0px',
            left: '0px',
            width: dimensions.width + 16,
            height: dimensions.height + 16
          }}
          viewBox={`0 0 ${dimensions.width + 16} ${dimensions.height + 16}`}
          fill="none"
        >
          <motion.path
            d={createPath()}
            stroke="#252525"
            className="dark:stroke-[#FAFAFA]"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </svg>
      )}
    </div>
  )
}