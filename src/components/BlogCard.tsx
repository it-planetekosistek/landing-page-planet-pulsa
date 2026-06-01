import Link from "next/link";
import Image from "next/image";
import { FileText } from "lucide-react";
import { ArtikelPulsa } from "@/lib/types";

interface BlogCardProps {
  artikel: ArtikelPulsa;
}

export default function BlogCard({ artikel }: BlogCardProps) {
  const { title, slug, summary, thumbnail } = artikel.fields;
  const imageUrl =
  thumbnail?.fields?.file?.url
    ? `https:${thumbnail.fields.file.url}`
    : null;

  return (
    <Link
      href={`/blog/${slug}`}
      className="flex flex-col sm:flex-row gap-3 p-3 border border-gray-200 rounded-2xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300 bg-white"
    >
      <div className="flex-shrink-0 w-full sm:w-32 h-24 relative overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 128px"
          />
        ) : (
          <FileText className="w-10 h-10 text-gray-400" />
        )}
      </div>
      <div className="flex flex-col justify-center flex-1">
        <h3 className="text-base font-bold text-gray-900 line-clamp-2 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{summary}</p>
      </div>
    </Link>
  );
}