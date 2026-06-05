import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { getArtikelPulsas } from "@/lib/contentful";
import type { Metadata } from "next";
export const revalidate = 60;

export const metadata: Metadata = {
  title:
    "Blog Planet Pulsa | Pulsa Murah, Aplikasi Agen Pulsa, PPOB & Bisnis Digital",
  description:
    "Baca artikel terbaru seputar pulsa murah, aplikasi agen pulsa, PPOB, token listrik, bisnis digital, top up e-wallet, dan teknologi pembayaran di Planet Pulsa.",
  keywords: [
    "Planet Pulsa",
    "Pulsa Murah",
    "Aplikasi Agen Pulsa",
    "PPOB",
    "Bisnis Pulsa",
    "Token Listrik",
    "Top Up Ewallet",
    "Pulsa Online",
    "Bisnis Digital",
  ],
  alternates: {
    canonical: "https://planetpulsa.id/blog",
  },
  openGraph: {
    title:
      "Blog Planet Pulsa | Pulsa Murah, Aplikasi Agen Pulsa, PPOB & Bisnis Digital",
    description:
      "Artikel terbaru tentang pulsa murah, PPOB, bisnis digital, top up e-wallet, dan teknologi pembayaran.",
    url: "https://planetpulsa.id/blog",
    siteName: "Planet Pulsa",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Blog Planet Pulsa | Pulsa Murah, Aplikasi Agen Pulsa, PPOB & Bisnis Digital",
    description:
      "Artikel terbaru tentang pulsa murah, PPOB, bisnis digital, dan teknologi pembayaran - Planet Pulsa",
  },
};

export default async function BlogPage() {
  const articles = await getArtikelPulsas();
  
  const firstTenArticles = articles.slice(0, 10);
  const otherArticles = articles.slice(10);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50/50 to-blue-50/60 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-50 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-30 translate-y-1/2"></div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-16 relative z-10">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
        Artikel Pulsa, PPOB, Bisnis Digital & Teknologi
        </h1>
        <p className="text-gray-600 mb-10">
        Blog Planet Pulsa menghadirkan berbagai artikel informatif seputar
        layanan digital, pembayaran online, perkembangan teknologi, serta
        tips dan strategi untuk mengembangkan usaha secara lebih efektif.
        </p>

        {articles.length === 0 ? (
          <div className="text-center py-20 text-gray-600 text-lg">
            Belum ada artikel yang tersedia.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {firstTenArticles.map((artikel, index) => (
                <BlogCard key={artikel.sys.id} artikel={artikel} index={index} />
              ))}
            </div>

            {otherArticles.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Artikel Pulsa dan Bisnis Digital Lainnya
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {otherArticles.map((artikel) => (
                    <Link
                      key={artikel.sys.id}
                      href={`/blog/${artikel.fields.slug}`}
                      className="text-gray-700 hover:text-primary font-medium py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      {artikel.fields.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}