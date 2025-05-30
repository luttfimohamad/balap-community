import type React from "react"
export interface StatItem {
  icon: React.ComponentType<{ className?: string }>
  value: number
  label: string
  suffix: string
}
