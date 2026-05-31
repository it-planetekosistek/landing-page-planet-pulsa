import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://planetpulsa.id"),

  title: {
    default:
      "Planet Pulsa - Aplikasi Agen Pulsa, Paket Data & PPOB Murah",
    template: "%s | Planet Pulsa",
  },

  description:
    "Planet Pulsa adalah aplikasi agen pulsa dan PPOB murah untuk transaksi pulsa all operator, paket data internet, token PLN, e-wallet, voucher game, dan pembayaran tagihan dengan proses cepat, aman, dan harga kompetitif.",

  keywords: [
  "planet pulsa",
  "agen pulsa",
  "isi pulsa",
  "aplikasi agen pulsa",
  "paket data murah",
  "ppob murah",
  "server pulsa",
  "reseller pulsa",
  "token pln",
],

  authors: [
    {
      name: "Planet Pulsa",
    },
  ],

  creator: "Planet Pulsa",

  publisher: "Planet Pulsa",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://planetpulsa.id",
    siteName: "Planet Pulsa - Agen Pulsa & Paket Data Murah",

    title:
      "Planet Pulsa - Aplikasi Agen Pulsa, Paket Data & PPOB Murah",

    description:
      "Aplikasi agen pulsa dan PPOB murah untuk transaksi pulsa, paket data internet, token PLN, e-wallet, voucher game, dan berbagai pembayaran digital lainnya.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Planet Pulsa",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Planet Pulsa - Aplikasi Agen Pulsa, Paket Data & PPOB Murah",

    description:
      "Transaksi pulsa, paket data, PPOB, token PLN dan pembayaran digital lebih mudah, cepat dan aman.",

    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://planetpulsa.id",
  },

  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
  <Script
    id="schema-org"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            name: "Planet Pulsa",
            url: "https://planetpulsa.id",
            logo: "https://planetpulsa.id/logo.png",
          },
          {
            "@type": "WebSite",
            name: "Planet Pulsa - Agen Pulsa & Paket Data Murah",
            url: "https://planetpulsa.id",
          },
        ],
      }),
    }}
  />

  {children}
</body>
    </html>
  );
}
