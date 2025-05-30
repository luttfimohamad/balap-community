import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ActivitiesSection } from "@/components/sections/activities-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { StatsSection } from "@/components/sections/stats-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {/* Add padding-top to account for fixed header */}
      <main className="flex-1 pt-16">
        <HeroSection />
        <AboutSection />
        <ActivitiesSection />
        <GallerySection />
        <StatsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
