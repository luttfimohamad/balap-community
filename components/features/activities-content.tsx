"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { ActivityDetailDialog } from "@/components/features/activity-detail-dialog"
import type { Activity } from "@/types/activity"

interface ActivitiesContentProps {
  activities: Activity[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
}

export function ActivitiesContent({ activities }: ActivitiesContentProps) {
  const [selectedActivity, setSelectedActivity] = useState<number | null>(null)

  const openActivityDetail = (index: number) => {
    setSelectedActivity(index)
  }

  const closeActivityDetail = () => {
    setSelectedActivity(null)
  }

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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Kegiatan Kami</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Berbagai kegiatan yang kami lakukan untuk membangun komunitas yang lebih baik.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {activities.map((activity, index) => (
          <motion.div key={index} variants={cardVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Card className="overflow-hidden h-full cursor-pointer" onClick={() => openActivityDetail(index)}>
              <CardHeader>
                <CardTitle>{activity.title}</CardTitle>
                <CardDescription>{activity.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  width={400}
                  height={200}
                  className="aspect-video rounded-md object-cover"
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span className="text-sm text-muted-foreground">{activity.frequency}</span>
                </div>
                <Button variant="ghost" size="sm" onClick={() => openActivityDetail(index)}>
                  Detail <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {selectedActivity !== null && (
        <ActivityDetailDialog
          activity={activities[selectedActivity]}
          isOpen={selectedActivity !== null}
          onClose={closeActivityDetail}
        />
      )}
    </>
  )
}
