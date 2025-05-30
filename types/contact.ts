import type React from "react"
export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>
  text: string
}

export interface SocialLink {
  icon: React.ComponentType<{ className?: string }>
  label: string
  href: string
}

export interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface FormStatus {
  type: "success" | "error" | null
  message: string
}
