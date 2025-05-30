"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import type { GalleryImage } from "@/types/gallery"

interface GalleryLightboxProps {
  images: GalleryImage[]
  selectedIndex: number
  onClose: () => void
  onNavigate: (direction: "next" | "prev") => void
}

export function GalleryLightbox({ images, selectedIndex, onClose, onNavigate }: GalleryLightboxProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
        <DialogTitle className="sr-only">
          {images[selectedIndex].alt || `Gambar ${selectedIndex + 1} dari ${images.length}`}
        </DialogTitle>
        <motion.div
          className="relative flex items-center justify-center min-h-[70vh]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close button */}
          <DialogClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-50"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>

          {/* Previous button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 text-white hover:bg-white/20 z-50"
            onClick={() => onNavigate("prev")}
          >
            <ChevronLeft className="h-8 w-8" />
            <span className="sr-only">Previous</span>
          </Button>

          {/* Image container */}
          <div className="w-full h-full flex items-center justify-center p-8">
            <Image
              src={images[selectedIndex].src || "/placeholder.svg"}
              alt={images[selectedIndex].alt}
              width={1200}
              height={800}
              className="max-h-[80vh] max-w-full w-auto h-auto object-contain"
            />
          </div>

          {/* Next button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 text-white hover:bg-white/20 z-50"
            onClick={() => onNavigate("next")}
          >
            <ChevronRight className="h-8 w-8" />
            <span className="sr-only">Next</span>
          </Button>

          {/* Image counter */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        </motion.div>

        {/* Image caption */}
        <div className="bg-black text-white p-4 text-center">
          <p className="text-lg">{images[selectedIndex].alt}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
