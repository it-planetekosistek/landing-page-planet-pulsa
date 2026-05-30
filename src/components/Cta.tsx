import { ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <section className="py-16 md:py-24">
      <div className="bg-gradient-to-r from-primary to-accent rounded-4xl p-10 md:p-16 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Saatnya Jadi Pengusaha !
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Bergabunglah dengan ribuan pengguna aplikasi Planet Pulsa dan nikmati kemudahan transaksi pulsa, paket data, dan berbagai produk digital lainnya.
        </p>
        <div className="flex justify-center">
        <a
          href="https://play.google.com/store/apps/details?id=id.co.aviana.planetpulsaappr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 mx-auto"
        >
          Daftar Gratis Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
