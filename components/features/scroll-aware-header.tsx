"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useScrollDirection } from "@/hooks/use-scroll-direction"

interface ScrollAwareHeaderProps {
  children: React.ReactNode
}

export function ScrollAwareHeader({ children }: ScrollAwareHeaderProps) {
  const { scrollDirection, isAtTop, isInHero } = useScrollDirection(10, 500)

  return (
    <motion.header
      className={`
        fixed top-0 z-40 w-full border-b transition-all duration-300
        ${
          isInHero
            ? "bg-transparent backdrop-blur-none border-transparent"
            : isAtTop
              ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-border"
              : "bg-background/98 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-sm border-border"
        }
      `}
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: scrollDirection === "down" && !isAtTop ? -100 : 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <div className={`transition-colors duration-300 ${isInHero ? "text-white" : "text-foreground"}`}>{children}</div>
    </motion.header>
  )
}
