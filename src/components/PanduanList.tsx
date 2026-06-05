"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";

// Array warna background berbeda untuk setiap card
const cardBackgrounds = [
  "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
  "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200",
  "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200",
  "bg-gradient-to-br from-green-50 to-green-100 border-green-200",
  "bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200",
];

// Array warna ikon berbeda untuk setiap card
const iconColors = [
  "text-blue-600",
  "text-orange-600",
  "text-purple-600",
  "text-green-600",
  "text-pink-600",
];

// Daftar panduan (kamu bisa edit ini secara manual)
// Tambahkan atau hapus item sesuai kebutuhan
const panduanList = [
  {
    urutan: 25, // Urutkan panduan, angka lebih kecil muncul lebih atas
    title: "Panduan Menggunakan Webportal",
    url: "/", // Ganti dengan URL kamu sendiri
    summary: "Panduan menggunakan webportal Planet Pulsa untuk akses file rekap transaksi dan layanan lainnya.",
  },
  {
    urutan: 26, // Urutkan panduan, angka lebih kecil muncul lebih atas
    title: "Sambungkan Printer Bluetooth",
    url: "/", // Ganti dengan URL kamu sendiri
    summary: "Panduan sambungkan printer Bluetooth ke aplikasi Planet Pulsa untuk mencetak struk transaksi.",
  },
  {
    urutan: 27, // Urutkan panduan, angka lebih kecil muncul lebih atas
    title: "Cara Daftarkan Downline",
    url: "/", // Ganti dengan URL kamu sendiri
    summary: "Panduan mendaftarkan downline dan dapatkan komisi hingga puluhan juta rupiah.",
  },
  {
    urutan: 28, // Urutkan panduan, angka lebih kecil muncul lebih atas
    title: "Panduan Transaksi",
    url: "/", // Ganti dengan URL kamu sendiri
    summary: "Cara melakukan transaksi di Planet Pulsa. Pembelian pulsa, paket data, dan layanan lainnya.",
  },
  {
    urutan: 29,
    title: "Cara Deposit Saldo",
    url: "/", // Ganti dengan URL kamu sendiri
    summary: "Panduan deposit saldo melalui transfer bank, QRIS, dan metode pembayaran lainnya.",
  },
  {
    urutan: 30,
    title: "Cara Daftar Akun",
    url: "/", // Ganti dengan URL kamu sendiri
    summary: "Panduan langkah demi langkah mendaftarkan akun Planet Pulsa dengan mudah dan cepat.",
  },
  // Tambahkan panduan baru di bawah ini
];

// Urutkan daftar panduan berdasarkan urutan
const sortedPanduanList = [...panduanList].sort((a, b) => a.urutan - b.urutan);

// Komponen card panduan
function PanduanCard({ panduan, index }: { panduan: typeof panduanList[0]; index: number }) {
  // Ambil warna berdasarkan index, loop jika lebih dari 5
  const bgClass = cardBackgrounds[index % cardBackgrounds.length];
  const iconColorClass = iconColors[index % iconColors.length];

  return (
    <Link
      href={panduan.url}
      target={panduan.url.startsWith("http") ? "_blank" : "_self"}
      rel={panduan.url.startsWith("http") ? "noopener noreferrer" : ""}
      className="flex flex-col sm:flex-row gap-3 p-3 border border-gray-200 rounded-2xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300 bg-white"
    >
      <div className={`flex-shrink-0 w-full sm:w-32 h-24 relative overflow-hidden rounded-xl flex items-center justify-center border ${bgClass}`}>
        <BookOpen className={`w-12 h-12 relative z-10 ${iconColorClass}`} />
      </div>
      <div className="flex flex-col justify-center flex-1">
        <h3 className="text-base font-bold text-gray-900 line-clamp-2 mb-1">{panduan.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{panduan.summary}</p>
      </div>
    </Link>
  );
}

export default function PanduanList() {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Panduan Planet Pulsa
      </h1>
      <p className="text-gray-600 mb-10">
        Panduan menggunakan aplikasi Planet Pulsa. Panduan lain yang belum tersedia bisa menghubungi kami melalui halaman kontak.
      </p>

      {sortedPanduanList.length === 0 ? (
        <div className="text-center py-20 text-gray-600 text-lg">
          Belum ada panduan yang tersedia.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedPanduanList.map((panduan, index) => (
            <PanduanCard key={panduan.urutan} panduan={panduan} index={index} />
          ))}
        </div>
      )}
    </>
  );
}
