"use client"

import type React from "react"

import { useState } from "react"
import type { FormData, FormStatus } from "@/types/contact"

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<FormStatus>({ type: null, message: "" })
  const [showAlert, setShowAlert] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setFormStatus({ type: "error", message: "Nama harus diisi" })
      return false
    }
    if (!formData.email.trim()) {
      setFormStatus({ type: "error", message: "Email harus diisi" })
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormStatus({ type: "error", message: "Format email tidak valid" })
      return false
    }
    if (!formData.subject.trim()) {
      setFormStatus({ type: "error", message: "Subjek harus diisi" })
      return false
    }
    if (!formData.message.trim()) {
      setFormStatus({ type: "error", message: "Pesan harus diisi" })
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus({ type: null, message: "" })

    if (!validateForm()) {
      setShowAlert(true)
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate success
      setFormStatus({
        type: "success",
        message: "Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda kembali.",
      })
      setShowAlert(true)

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.",
      })
      setShowAlert(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    formData,
    isSubmitting,
    formStatus,
    showAlert,
    handleInputChange,
    handleSubmit,
    setShowAlert,
  }
}
