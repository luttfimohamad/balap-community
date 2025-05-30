"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"
import { motion } from "framer-motion"
import type { GalleryImage } from "@/types/gallery"

interface GalleryDialogProps {
  images: GalleryImage[]
  isOpen: boolean
  onClose: () => void
  onImageClick: (index: number) => void
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

export function GalleryDialog({ images, isOpen, onClose, onImageClick }: GalleryDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Galeri Foto Komunitas Balap</DialogTitle>
            <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={onClose}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogHeader>
          <motion.div
            className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-lg cursor-pointer"
                variants={imageVariants}
                whileHover={{ scale: 1.05 }}
                onClick={() => onImageClick(index)}
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
          <div className="flex justify-end mt-4">
            <Button variant="outline" onClick={onClose}>
              Tutup
            </Button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
