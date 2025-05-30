"use client"

import Image from "next/image"
import type { AboutItem } from "@/types/about"
import { motion } from "framer-motion"

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
      duration: 0.6,
    },
  },
}

const aboutItems: AboutItem[] = [
  {
    title: "Visi",
    description: "Menjadi komunitas yang inklusif dan berdampak positif bagi masyarakat Balamoa Lapangan.",
  },
  {
    title: "Misi",
    description:
      "Membangun kebersamaan, mengembangkan potensi, dan meningkatkan kualitas hidup masyarakat melalui berbagai kegiatan positif.",
  },
  {
    title: "Nilai",
    description: "Kebersamaan, gotong royong, kreativitas, dan kepedulian sosial.",
  },
]

export function AboutSection() {
  return (
    <section id="tentang" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tentang Kami</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Balap (Balamoa Lapangan) adalah komunitas yang didirikan untuk menjadi rumah bagi masyarakat di Balamoa
                Lapangan.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/about-meeting.jpg"
                alt="About Balap"
                width={600}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                {aboutItems.map((item, index) => (
                  <li key={index}>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
