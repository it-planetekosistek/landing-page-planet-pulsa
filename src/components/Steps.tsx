import { Search, CreditCard, CheckCircle2, Download, UserPlus, Store } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Download className="w-8 h-8 text-primary" />,
    title: "Download Aplikasi",
    description: "Download aplikasi di Play Store.",
  },
  {
    number: "02",
    icon: <UserPlus className="w-8 h-8 text-primary" />,
    title: "Isi Data Usaha",
    description: "Isi Data Usaha di Aplikasi Planet Pulsa.",
  },
  {
    number: "03",
    icon: <Store className="w-8 h-8 text-primary" />,
    title: "Mulai Transaksi",
    description: "Jual Produk untuk Mendapatkan Keuntungan.",
  },
];

export default function Steps() {
  return (
    <section id="steps" className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5 rounded-4xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Panduan <span className="text-primary">Pendaftaran</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          3 langkah mudah bergabung dengan Planet Pulsa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="text-center"
          >
            <div className="relative inline-flex items-center justify-center mb-6">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
              <div className="relative w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                {step.icon}
              </div>
              <div className="absolute -top-2 -right-2 bg-accent text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                {step.number}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
