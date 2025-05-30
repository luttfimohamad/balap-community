"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Instagram, Facebook, Twitter, Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"
import type { ContactInfo as ContactInfoType, SocialLink } from "@/types/contact"

const contactInfo: ContactInfoType[] = [
  {
    icon: MapPin,
    text: "Balamoa Lapangan, Indonesia",
  },
  {
    icon: Phone,
    text: "+62 123 4567 890",
  },
  {
    icon: Mail,
    text: "balap@example.com",
  },
]

const socialLinks: SocialLink[] = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function ContactInfo() {
  return (
    <motion.div
      className="space-y-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" variants={itemVariants}>
        Hubungi Kami
      </motion.h2>
      <motion.p className="text-muted-foreground" variants={itemVariants}>
        Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau ingin bergabung dengan komunitas Balap.
      </motion.p>
      <motion.div className="space-y-4" variants={itemVariants}>
        {contactInfo.map((info, index) => {
          const IconComponent = info.icon
          return (
            <motion.div
              key={index}
              className="flex items-center gap-3"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <IconComponent className="h-5 w-5 text-primary flex-shrink-0" />
              <span>{info.text}</span>
            </motion.div>
          )
        })}
      </motion.div>
      <motion.div className="space-y-2" variants={itemVariants}>
        <h3 className="text-lg font-medium">Ikuti Kami</h3>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Button size="icon" variant="outline" asChild>
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <IconComponent className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </a>
                </Button>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </motion.div>
  )
}
