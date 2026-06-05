import Link from "next/link";
import Image from "next/image";
import { Pencil } from "lucide-react";
import { ArtikelPulsa } from "@/lib/types";

// Array warna background berbeda untuk setiap card
const cardBackgrounds = [
  "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
  "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200",
  "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200",
  "bg-gradient-to-br from-green-50 to-green-100 border-green-200",
  "bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200",
];

// Array warna ikon berbeda untuk setiap card
const iconColors = [
  "text-blue-600",
  "text-orange-600",
  "text-purple-600",
  "text-green-600",
  "text-pink-600",
];

interface BlogCardProps {
  artikel: ArtikelPulsa;
  index: number;
}

export default function BlogCard({ artikel, index }: BlogCardProps) {
  const { title, slug, summary, thumbnail } = artikel.fields;
  const imageUrl =
  thumbnail?.fields?.file?.url
    ? `https:${thumbnail.fields.file.url}`
    : null;

  // Ambil warna berdasarkan index, loop jika lebih dari 5
  const bgClass = cardBackgrounds[index % cardBackgrounds.length];
  const iconColorClass = iconColors[index % iconColors.length];

  return (
    <Link
      href={`/blog/${slug}`}
      className="flex flex-col sm:flex-row gap-3 p-3 border border-gray-200 rounded-2xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300 bg-white"
    >
      <div className={`flex-shrink-0 w-full sm:w-32 h-24 relative overflow-hidden rounded-xl flex items-center justify-center border ${imageUrl ? '' : bgClass}`}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 128px"
          />
        ) : (
          <Pencil className={`w-10 h-10 relative z-10 ${iconColorClass}`} />
        )}
      </div>
      <div className="flex flex-col justify-center flex-1">
        <h3 className="text-base font-bold text-gray-900 line-clamp-2 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{summary}</p>
      </div>
    </Link>
  );
}