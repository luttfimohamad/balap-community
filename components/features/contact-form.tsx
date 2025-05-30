"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { motion } from "framer-motion"
import { useContactForm } from "@/hooks/use-contact-form"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export function ContactForm() {
  const { formData, isSubmitting, formStatus, showAlert, handleInputChange, handleSubmit, setShowAlert } =
    useContactForm()

  return (
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="space-y-2" variants={itemVariants}>
            <Label htmlFor="name">Nama *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Nama Anda"
              required
            />
          </motion.div>
          <motion.div className="space-y-2" variants={itemVariants}>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Anda"
              required
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Label htmlFor="subject">Subjek *</Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Subjek pesan"
            required
          />
        </motion.div>
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Label htmlFor="message">Pesan *</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tulis pesan Anda di sini..."
            className="min-h-[120px]"
            required
          />
        </motion.div>

        {showAlert && formStatus.type && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <Alert
              className={formStatus.type === "success" ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}
              autoDismiss={true}
              onDismiss={() => setShowAlert(false)}
            >
              {formStatus.type === "success" ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <AlertCircle className="h-4 w-4 text-red-600" />
              )}
              <AlertDescription className={formStatus.type === "success" ? "text-green-800" : "text-red-800"}>
                {formStatus.message}
              </AlertDescription>
            </Alert>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  )
}
