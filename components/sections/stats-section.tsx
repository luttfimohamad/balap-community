import { StatsContent } from "@/components/features/stats-content"
import { statsData } from "@/data/stats"

export function StatsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <StatsContent stats={statsData} />
      </div>
    </section>
  )
}
