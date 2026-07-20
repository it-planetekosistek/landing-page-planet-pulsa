import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PanduanList from "@/components/PanduanList";

export const metadata: Metadata = {
  title: "Panduan Planet Pulsa | Panduan Lengkap Menggunakan Aplikasi",
  description: "Panduan lengkap menggunakan Planet Pulsa, mulai dari daftar, deposit, transaksi, hingga tips bisnis pulsa dan PPOB.",
};

export default function PanduanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50/50 to-blue-50/60 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-50 translate-x-1/3"></div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-16 relative z-10">
        <PanduanList />
      </main>
      <Footer />
    </div>
  );
}
