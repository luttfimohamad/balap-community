"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Clock, MapPin, Users } from "lucide-react"
import { motion } from "framer-motion"
import type { Activity } from "@/types/activity"
import { GalleryLightbox } from "@/components/features/gallery-lightbox"
import { useState, useEffect } from "react"

interface ActivityDetailDialogProps {
  activity: Activity
  isOpen: boolean
  onClose: () => void
}

export function ActivityDetailDialog({ activity, isOpen, onClose }: ActivityDetailDialogProps) {
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<number | null>(null)

  const openGalleryLightbox = (index: number) => {
    setSelectedGalleryImage(index)
  }

  const closeGalleryLightbox = () => {
    setSelectedGalleryImage(null)
  }

  const navigateGalleryImage = (direction: "next" | "prev") => {
    if (selectedGalleryImage === null) return

    if (direction === "next") {
      setSelectedGalleryImage((selectedGalleryImage + 1) % activity.gallery.length)
    } else {
      setSelectedGalleryImage((selectedGalleryImage - 1 + activity.gallery.length) % activity.gallery.length)
    }
  }

  // Handle keyboard navigation for gallery
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedGalleryImage === null) return

      switch (event.key) {
        case "Escape":
          closeGalleryLightbox()
          break
        case "ArrowLeft":
          navigateGalleryImage("prev")
          break
        case "ArrowRight":
          navigateGalleryImage("next")
          break
      }
    }

    if (selectedGalleryImage !== null) {
      document.addEventListener("keydown", handleKeyDown)
      return () => document.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedGalleryImage])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{activity.title}</DialogTitle>
            <DialogDescription className="text-base">{activity.description}</DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <div className="relative h-60 w-full overflow-hidden rounded-lg">
              <Image src={activity.image || "/placeholder.svg"} alt={activity.title} fill className="object-cover" />
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">{activity.detailDescription}</p>

              <div className="grid gap-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>{activity.schedule}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{activity.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>{activity.participants}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Galeri Kegiatan</h3>
                <div className="grid grid-cols-3 gap-2">
                  {activity.gallery.map((img, i) => (
                    <motion.div
                      key={i}
                      className="relative h-24 overflow-hidden rounded-md cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => openGalleryLightbox(i)}
                    >
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`Gallery ${i + 1}`}
                        fill
                        className="object-cover transition-all hover:scale-110"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <Button variant="outline" onClick={onClose}>
                  Tutup
                </Button>
              </div>
            </div>
          </div>
          {selectedGalleryImage !== null && (
            <GalleryLightbox
              images={activity.gallery.map((src, index) => ({ src, alt: `${activity.title} - Foto ${index + 1}` }))}
              selectedIndex={selectedGalleryImage}
              onClose={closeGalleryLightbox}
              onNavigate={navigateGalleryImage}
            />
          )}
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
