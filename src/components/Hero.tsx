import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm font-medium">Aplikasi Agen Pulsa & PPOB</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Agen Pulsa & PPOB <br />
              <span className="text-accent">Paket Data Murah</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
              Transaksi Pulsa Semua Operator, Paket Data Internet, Token PLN, Voucher Game, Produk Digital dan PPOB dengan Harga Murah.
          </p>
          
          {/* New features section */}
          <div className="flex flex-col sm:flex-row gap-6 mb-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 font-medium">Produk Lengkap</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 font-medium">Harga Murah</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-gray-700 font-medium">Layanan Terbaik</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=id.co.aviana.planetpulsaappr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-2 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              Daftar Sekarang
            </a>
          </div>

          
        </div>

        <div className="relative flex items-center justify-center hidden lg:flex">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          
          <div className="relative w-80 h-80 max-w-full">
            <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl bg-white">
              <img
                src="/hero-mockup.png"
                alt="Planet Pulsa - Aplikasi Agen Pulsa dan PPOB Murah"
                className="scale-110 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
