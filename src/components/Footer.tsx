import Link from "next/link";
import { Zap, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img
                src="/planetpulsa-footer.png"
                alt="Planet Pulsa Footer Logo"
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-bold">Planet Pulsa</span>
            </Link>
            <p className="text-slate-400 mb-4">
              Solusi tepat untuk Jual Pulsa, Paket Data Internet, Voucher Game & PPOB dengan Layanan Terbaik. Murah Setiap Hari !
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Tentang Kami</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-400 hover:text-white transition-colors">Beranda</Link></li>
              <li><Link href="/profil-planet-pulsa" className="text-slate-400 hover:text-white transition-colors">Profil</Link></li>
              <li><Link href="/#features" className="text-slate-400 hover:text-white transition-colors">Keunggulan</Link></li>
              <li><Link href="/#steps" className="text-slate-400 hover:text-white transition-colors">Panduan</Link></li>
              <li><Link href="/blog" className="text-slate-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-slate-400">
              <li>Email : support@planetpulsa.id</li>
              <li>WhatsApp : +62 813 7120 4616</li>
              <li>Jam Layanan : 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
          <p>© 2026 Planet Pulsa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
