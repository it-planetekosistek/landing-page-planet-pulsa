import ProfilContent from "@/components/ProfilContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
metadataBase: new URL("https://www.planetpulsa.id"),
  title:
    "Profil Planet Pulsa | Agen Pulsa Murah & PPOB Terpercaya",

  description:
    "Kenali Planet Pulsa lebih dekat. Platform agen pulsa dan PPOB terpercaya sejak 2017 dengan lebih dari 10.000 mitra aktif, layanan 24 jam, deposit otomatis, pulsa all operator, dan berbagai produk digital untuk kebutuhan transaksi sehari-hari.",

  keywords: [
    "planet pulsa",
    "profil planet pulsa",
    "agen pulsa murah",
    "aplikasi agen pulsa",
    "pulsa all operator",
    "server pulsa",
    "deposit otomatis",
    "PPOB terpercaya",
    "bisnis pulsa",
    "jual pulsa online",
    "token listrik",
    "paket data murah",
    "planetpulsa.id",
  ],

  alternates: {
    canonical: "https://www.planetpulsa.id/profil-planet-pulsa",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Kenali Planet Pulsa Lebih Dekat | Agen Pulsa Murah & PPOB Terpercaya",

    description:
      "Platform agen pulsa dan PPOB terpercaya sejak 2017 dengan lebih dari 10.000 mitra aktif, layanan 24 jam, deposit otomatis, dan berbagai produk digital.",

    url: "https://www.planetpulsa.id/profil-planet-pulsa",

    siteName: "Planet Pulsa",

    locale: "id_ID",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Kenali Planet Pulsa Lebih Dekat | Agen Pulsa Murah & PPOB Terpercaya",

    description:
      "Platform agen pulsa dan PPOB terpercaya sejak 2017 dengan layanan lengkap dan transaksi digital yang mudah.",
  },
};

export default function ProfilPage() {
  return <ProfilContent />;
}