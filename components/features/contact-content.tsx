"use client"

import { motion } from "framer-motion"
import { ContactInfo } from "@/components/features/contact-info"
import { ContactForm } from "@/components/features/contact-form"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function ContactContent() {
  return (
    <motion.div
      className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <ContactInfo />
      <ContactForm />
    </motion.div>
  )
}
