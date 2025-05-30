"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { motion } from "framer-motion"

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function Footer() {
  return (
    <motion.footer
      className="w-full border-t bg-background py-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo-balap.png"
            alt="Balap Logo"
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
          <span className="text-lg font-bold">BALAP</span>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Balap (Balamoa Lapangan). Semua hak dilindungi.
        </p>
        <div className="flex gap-4">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon
            return (
              <Link key={index} href={social.href} className="text-muted-foreground hover:text-foreground">
                <IconComponent className="h-5 w-5" />
                <span className="sr-only">{social.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </motion.footer>
  )
}
