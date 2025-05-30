import type { Activity } from "@/types/activity"

export const activitiesData: Activity[] = [
  {
    title: "Gotong Royong",
    description: "Kegiatan bersih-bersih lingkungan",
    frequency: "Bulanan",
    image: "/images/gotong-royong.jpg",
    detailDescription:
      "Kegiatan gotong royong rutin yang diadakan setiap bulan untuk membersihkan lingkungan sekitar Balamoa Lapangan. Kegiatan ini bertujuan untuk menjaga kebersihan dan keindahan lingkungan serta mempererat hubungan antar warga.",
    schedule: "Setiap hari Minggu pertama dalam bulan",
    location: "Lapangan Balamoa dan sekitarnya",
    participants: "Seluruh anggota komunitas dan warga sekitar",
    gallery: ["/images/gotong-royong.jpg", "/images/gallery-1.jpg", "/images/gallery-6.jpg"],
  },
  {
    title: "Olahraga Bersama",
    description: "Kegiatan olahraga rutin",
    frequency: "Mingguan",
    image: "/images/olahraga-bersama.jpg",
    detailDescription:
      "Kegiatan olahraga bersama yang diadakan setiap minggu untuk menjaga kesehatan dan kebugaran anggota komunitas. Berbagai jenis olahraga dilakukan seperti sepak bola, voli, dan senam pagi.",
    schedule: "Setiap hari Sabtu pagi",
    location: "Lapangan Balamoa",
    participants: "Anggota komunitas dan warga yang berminat",
    gallery: ["/images/olahraga-bersama.jpg", "/images/gallery-7.jpg", "/images/gallery-2.jpg"],
  },
  {
    title: "Pelatihan Keterampilan",
    description: "Pengembangan potensi masyarakat",
    frequency: "Triwulan",
    image: "/images/pelatihan-keterampilan.jpg",
    detailDescription:
      "Program pelatihan keterampilan untuk mengembangkan potensi masyarakat Balamoa Lapangan. Pelatihan meliputi berbagai bidang seperti kerajinan tangan, pertanian, dan kewirausahaan.",
    schedule: "Setiap tiga bulan sekali",
    location: "Balai Pertemuan Balamoa",
    participants: "Anggota komunitas yang mendaftar",
    gallery: ["/images/pelatihan-keterampilan.jpg", "/images/gallery-8.jpg", "/images/gallery-5.jpg"],
  },
  // ** rest of code here **
]
