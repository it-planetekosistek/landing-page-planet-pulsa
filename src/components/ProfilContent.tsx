"use client";

import { useState } from "react";
import { Zap, Smartphone, Wallet, Globe, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqItems = [
  { question: "Apakah Planet Pulsa aman digunakan?", answer: "Planet Pulsa menggunakan enkripsi SSL dan sistem keamanan terpercaya untuk melindungi data dan transaksi Anda." },
  { question: "Apakah pendaftaran gratis?", answer: "Ya. Pendaftaran di Planet Pulsa gratis." },
  { question: "Apakah bisa mendaftarkan downline?", answer: "Tentu saja. Anda dapat mendaftarkan downline tanpa batas." },
  { question: "Apakah bisa menjual pulsa semua operator?", answer: "Iya ! Planet Pulsa menyediakan pulsa untuk semua operator di Indonesia, lengkap dan murah." },
];

const features = [
  { title: "Transaksi Instan", description: "Setiap transaksi diproses secara instan dan otomatis.", icon: Zap },
  { title: "Deposit Otomatis", description: "Deposit saldo masuk 24 jam non-stop.", icon: Wallet },
  { title: "Pulsa All Operator", description: "Layanan pulsa untuk semua operator Indonesia.", icon: Smartphone },
  { title: "PPOB Lengkap", description: "Berbagai produk digital dan pembayaran tagihan.", icon: Globe },
];

export default function ProfilContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {/* PROFIL */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
  <p className="text-accent font-semibold uppercase tracking-wider mb-3">
    Profil Kami
  </p>

  <h1 className="text-3xl md:text-3xl font-bold text-gray-900">
    Kenali Planet Pulsa Lebih Dekat
  </h1>
</div>
            <div className="text-gray-700 text-lg space-y-4 leading-relaxed text-justify mb-12">
              <p>
                Planet Pulsa adalah platform layanan PPOB dan agen pulsa yang telah melayani masyarakat Indonesia sejak tahun 2017. Kami hadir untuk memberikan kemudahan dalam menjalankan bisnis digital melalui sistem transaksi yang cepat, stabil, dan mudah digunakan. Berbagai produk digital tersedia dalam satu aplikasi, mulai dari pulsa all operator, paket data internet, token listrik, hingga berbagai layanan pembayaran lainnya.
              </p>
              <p>
                Dengan pengalaman lebih dari 8 tahun, Planet Pulsa terus berkomitmen menghadirkan harga yang kompetitif, layanan yang terpercaya, dan dukungan pelanggan yang responsif. Hingga saat ini, Planet Pulsa telah dipercaya oleh ribuan mitra di berbagai daerah Indonesia sebagai solusi untuk menjalankan bisnis pulsa dan PPOB dengan lebih mudah, aman, dan menguntungkan.
              </p>
              <p>
                Planet Pulsa terus berinovasi untuk menghadirkan layanan transaksi digital yang lebih cepat, lengkap, dan menguntungkan bagi seluruh mitra di Indonesia.
              </p>
            </div>

            {/* STATS CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-blue-200">
                <h3 className="text-xl font-semibold mb-2">Pengalaman</h3>
                <p className="text-4xl font-bold">8+ Tahun</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 text-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-orange-200">
                <h3 className="text-xl font-semibold mb-2">Produk Aktif</h3>
                <p className="text-4xl font-bold">2.500+</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 text-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-purple-200">
                <h3 className="text-xl font-semibold mb-2">Uptime Server</h3>
                <p className="text-4xl font-bold">99,96%</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 text-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-green-200">
                <h3 className="text-xl font-semibold mb-2">Layanan</h3>
                <p className="text-4xl font-bold">24/7 Online</p>
              </div>
            </div>
          </div>
        </section>

        {/* KEUNGGULAN */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Keunggulan Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
                    <p className="text-gray-600">{f.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">FAQ</h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{item.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-4 text-gray-600">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Saatnya jadi pengusaha</h2>
            <p className="text-xl text-white/90 mb-8">
              Mulai bisnis pulsa dan PPOB dengan Planet Pulsa.<br />Tanpa Biaya Pendaftara, Tanpa Ribet !
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=id.co.aviana.planetpulsaappr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Daftar Sekarang <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
