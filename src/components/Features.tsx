import { Zap, Shield, Clock, DollarSign, Smartphone, Award, Headset } from "lucide-react";

const features = [
  {
    icon: <Award className="w-8 h-8 text-white" />,
    bgColor: "bg-blue-500",
    cardBgColor: "bg-blue-50",
    title: "Produk Super Lengkap",
    description: "Pulsa, Paket Data, Token PLN, Voucher Game & PPOB dalam Satu Aplikasi.",
  },
  {
    icon: <Shield className="w-8 h-8 text-white" />,
    bgColor: "bg-accent",
    cardBgColor: "bg-orange-50",
    title: "Aman & Terpercaya",
    description: "Sistem Keamanan Berlapis Menjamin Keamanan Transaksi Anda.",
  },
  {
    icon: <Clock className="w-8 h-8 text-white" />,
    bgColor: "bg-purple-500",
    cardBgColor: "bg-purple-50",
    title: "24 Jam Nonstop",
    description: "Layanan & Transaksi Tersedia Kapan Saja, Tanpa Hari Libur.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-white" />,
    bgColor: "bg-green-500",
    cardBgColor: "bg-green-50",
    title: "Harga Murah",
    description: "Belanja Semua Produk dengan Harga Murah. Cuan Setiap Hari.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-white" />,
    bgColor: "bg-red-500",
    cardBgColor: "bg-red-50",
    title: "Mudah Digunakan",
    description: "Aplikasi Dibuat dengan UI yang Modern dan Mudah Digunakan.",
  },
  {
    icon: <Headset className="w-8 h-8 text-white" />,
    bgColor: "bg-indigo-500",
    cardBgColor: "bg-indigo-50",
    title: "CS Ramah",
    description: "CS Ramah dan Tepat untuk Setiap Transaksi Anda.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Kenapa Pilih <span className="text-accent">Planet Pulsa?</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Kami memberikan pelayanan terbaik dengan berbagai keunggulan yang membuat transaksi Anda nyaman dan aman.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${feature.cardBgColor} rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all`}
          >
            <div className={`${feature.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
