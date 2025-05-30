import { ContactContent } from "@/components/features/contact-content"

export function ContactSection() {
  return (
    <section id="kontak" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <ContactContent />
      </div>
    </section>
  )
}
