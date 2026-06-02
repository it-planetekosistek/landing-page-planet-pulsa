import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mashuri",
    role: "Pengusaha Kios",
    text: "Harganya murah dan pelayanan nggak pernah mengecewakan. Saya pakai aplikasi Planet Pulsa ini lebih dari 3 tahun.",
    avatar: "M"
  },
  {
    name: "Hadinur Habib",
    role: "Minimarket",
    text: "Saya udah beberapa kali pindah aplikasi dan akhirnya ketemu dengan Planet Pulsa ini, alhamdulillah cocok. Mantap !",
    avatar: "H"
  },
  {
    name: "Rizki Wahyudi",
    role: "Mahasiswa",
    text: "Aplikasi simple tapi keren. Transaksi aman, cepat, dan harganya murah. Recommended lah untuk nambah penghasilan.",
    avatar: "R"
  },
];

export default function Testimonials() {
  return (
    <section className="py-16" id="testimonials">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Testimoni Pengguna</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Alasan mereka memilih Planet Pulsa</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex gap-0.5 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 mb-6 text-lg">"{t.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                {t.avatar}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
