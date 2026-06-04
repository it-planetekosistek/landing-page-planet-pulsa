import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getArtikelBySlug } from "@/lib/contentful";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const { slug } = await props.params;
  const artikel = await getArtikelBySlug(slug);

  if (!artikel) {
    return {};
  }

  return {
    title: artikel.fields.title,
    description: artikel.fields.summary || "Artikel Planet Pulsa",
  };
}

export default async function ArtikelPage(props: Props) {
  const { slug } = await props.params;
  const artikel = await getArtikelBySlug(slug);

  if (!artikel) {
    notFound();
  }

  const { title, publishDate, thumbnail, content, summary } = artikel.fields;
  const imageUrl = thumbnail?.fields?.file?.url ? `https:${thumbnail.fields.file.url}` : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50/50 to-blue-50/60 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-50 translate-x-1/3"></div>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pt-16 relative z-10">
        {/* Breadcrumb */}
        <nav className="mb-4">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Beranda</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium truncate max-w-xs">{title}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="mb-10 pb-4 border-b-2 border-gray-200">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{title}</h1>
          {publishDate && (
            <p className="text-sm text-gray-500 mb-6">
              Dipublikasikan pada {new Date(publishDate).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
          {imageUrl && (
            <div className="w-full h-64 md:h-80 relative rounded-2xl overflow-hidden mb-8">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none text-justify prose-a:text-gray-900 prose-a:no-underline prose-a:font-normal hover:prose-a:text-gray-900 prose-p:!mb-3 prose-p:!mt-0 prose-p:!leading-snug prose-ul:!mb-4 prose-ul:!mt-1 prose-li:!mb-1.5 prose-li:!mt-0 prose-ol:my-3 prose-h2:mb-3 prose-h2:mt-6 prose-h3:mb-2 prose-h3:mt-4">
          {content ? (
            documentToReactComponents(content)
          ) : (
            <p className="text-gray-600">Artikel belum memiliki konten.</p>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}