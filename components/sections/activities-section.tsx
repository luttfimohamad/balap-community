import { ActivitiesContent } from "@/components/features/activities-content"
import { activitiesData } from "@/data/activities"

export function ActivitiesSection() {
  return (
    <section id="kegiatan" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <ActivitiesContent activities={activitiesData} />
      </div>
    </section>
  )
}
