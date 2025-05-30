"use client"

import Image from "next/image"
import { MobileNavigation } from "@/components/ui/mobile-navigation"
import { ScrollAwareHeader } from "@/components/features/scroll-aware-header"
import Link from "next/link"
import type React from "react"

function SmoothScrollLink({
  href,
  children,
  className,
  onClick,
}: {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only handle smooth scroll for hash links
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        const headerHeight = 64 // 16 * 4 = 64px (h-16)
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }
    onClick?.()
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}

const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Tentang Kami", href: "#tentang" },
  { name: "Kegiatan", href: "#kegiatan" },
  { name: "Galeri", href: "#galeri" },
  { name: "Kontak", href: "#kontak" },
]

export function Header() {
  return (
    <ScrollAwareHeader>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo-balap.png"
            alt="Balap Logo"
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
          <span className="text-xl font-bold">BALAP</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <SmoothScrollLink
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary hover:opacity-80"
            >
              {item.name}
            </SmoothScrollLink>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <MobileNavigation navigation={navigation} />
      </div>
    </ScrollAwareHeader>
  )
}
