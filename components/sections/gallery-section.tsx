import { GalleryContent } from "@/components/features/gallery-content"
import { galleryImages } from "@/data/gallery"

export function GallerySection() {
  return (
    <section id="galeri" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <GalleryContent images={galleryImages} />
      </div>
    </section>
  )
}
