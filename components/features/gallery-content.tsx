"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { GalleryDialog } from "@/components/features/gallery-dialog"
import { GalleryLightbox } from "@/components/features/gallery-lightbox"
import type { GalleryImage } from "@/types/gallery"

interface GalleryContentProps {
  images: GalleryImage[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export function GalleryContent({ images }: GalleryContentProps) {
  const [showAllPhotos, setShowAllPhotos] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const displayedImages = images.slice(0, 8)

  const openGallery = () => {
    setShowAllPhotos(true)
  }

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "next" | "prev") => {
    if (selectedImage === null) return

    if (direction === "next") {
      setSelectedImage((selectedImage + 1) % images.length)
    } else {
      setSelectedImage((selectedImage - 1 + images.length) % images.length)
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage === null) return

      switch (event.key) {
        case "Escape":
          closeLightbox()
          break
        case "ArrowLeft":
          navigateImage("prev")
          break
        case "ArrowRight":
          navigateImage("next")
          break
      }
    }

    if (selectedImage !== null) {
      document.addEventListener("keydown", handleKeyDown)
      return () => document.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedImage])

  return (
    <>
      <motion.div
        className="flex flex-col items-center justify-center space-y-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Galeri</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Momen-momen berharga dari kegiatan komunitas kami.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="mx-auto grid max-w-5xl grid-cols-2 gap-4 py-12 md:grid-cols-3 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {displayedImages.map((image, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg cursor-pointer"
            variants={imageVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={300}
              height={300}
              className="h-full w-full object-cover transition-all hover:scale-105"
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Button variant="outline" onClick={openGallery}>
          Lihat Semua Foto
        </Button>
      </motion.div>

      <GalleryDialog
        images={images}
        isOpen={showAllPhotos}
        onClose={() => setShowAllPhotos(false)}
        onImageClick={openLightbox}
      />

      {selectedImage !== null && (
        <GalleryLightbox
          images={images}
          selectedIndex={selectedImage}
          onClose={closeLightbox}
          onNavigate={navigateImage}
        />
      )}
    </>
  )
}
