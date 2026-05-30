import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Planet Pulsa - Isi Pulsa & Paket Data Cepat & Aman",
  description: "Isi pulsa, paket data, token PLN, dan voucher game dengan mudah, cepat, dan aman di Planet Pulsa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
