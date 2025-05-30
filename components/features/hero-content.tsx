"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ChevronRight, ArrowRight, Users, Calendar, MapPin } from "lucide-react"
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

export function HeroContent() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <>
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90" />
        <Image
          src="/images/hero-background.jpg"
          alt="Hero Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
      </div>

      {/* Hero content */}
      <div className="container relative z-10 px-4 py-24 md:px-6 md:py-32 lg:py-40 xl:py-48 pt-24 md:pt-32 lg:pt-40 xl:pt-48">
        {mounted ? (
          <motion.div
            className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center min-h-[70vh]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left column - Text content */}
            <div className="space-y-6">
              <motion.div variants={itemVariants}>
                <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
                  Komunitas Terbaik
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
                variants={itemVariants}
              >
                <span className="block">BALAP</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl text-gray-300 mt-2">Balamoa Lapangan</span>
              </motion.h1>

              <motion.p className="max-w-[600px] text-gray-300 md:text-xl" variants={itemVariants}>
                Komunitas yang berdedikasi untuk membangun kebersamaan dan mengembangkan potensi masyarakat di Balamoa
                Lapangan.
              </motion.p>

              <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
                <Button size="lg" className="group" asChild>
                  <SmoothScrollLink href="#tentang">
                    Tentang Kami
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </SmoothScrollLink>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-500/50 text-orange-400 hover:bg-orange-500/20 hover:border-orange-400"
                  asChild
                >
                  <SmoothScrollLink href="#kontak">
                    Hubungi Kami
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </SmoothScrollLink>
                </Button>
              </motion.div>

              <motion.div className="flex flex-wrap gap-6 pt-4" variants={itemVariants}>
                <motion.div className="flex items-center gap-2" variants={itemVariants}>
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm text-gray-300">100+ Anggota</span>
                </motion.div>
                <motion.div className="flex items-center gap-2" variants={itemVariants}>
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-sm text-gray-300">50+ Kegiatan</span>
                </motion.div>
                <motion.div className="flex items-center gap-2" variants={itemVariants}>
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm text-gray-300">Balamoa Lapangan</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Right column - Image and decorative elements */}
            <motion.div className="relative mx-auto lg:ml-auto" variants={itemVariants}>
              <div className="relative">
                {/* Main image */}
                <div className="relative z-10 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/images/hero-community.jpg"
                    alt="Balap Community"
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary/50 blur-xl opacity-50" />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/50 blur-xl opacity-30" />

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-black p-3 rounded-lg shadow-lg border border-white/10 backdrop-blur-sm"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Sejak 2018</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-black p-3 rounded-lg shadow-lg border border-white/10 backdrop-blur-sm"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Komunitas Aktif</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center min-h-[70vh]">
            {/* Fallback content when JS is not loaded yet */}
            <div className="space-y-6">
              <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">Komunitas Terbaik</Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">BALAP</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl text-gray-300 mt-2">Balamoa Lapangan</span>
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Komunitas yang berdedikasi untuk membangun kebersamaan dan mengembangkan potensi masyarakat di Balamoa
                Lapangan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="#tentang">Tentang Kami</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10" asChild>
                  <Link href="#kontak">Hubungi Kami</Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto lg:ml-auto">
              <Image
                src="/images/hero-community.jpg"
                alt="Balap Community"
                width={700}
                height={500}
                className="rounded-lg object-cover border border-white/10 shadow-2xl"
                priority
              />
            </div>
          </div>
        )}

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            className="flex flex-col items-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
          >
            <span className="text-sm text-gray-400 mb-2">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center pt-1">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-white"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-auto fill-white"
          preserveAspectRatio="none"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </>
  )
}
