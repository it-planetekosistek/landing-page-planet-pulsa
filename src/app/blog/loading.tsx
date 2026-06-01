import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function SkeletonCard() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 rounded-2xl bg-white animate-pulse">
      <div className="flex-shrink-0 w-full sm:w-48 h-32 bg-gray-200 rounded-xl"></div>
      <div className="flex flex-col justify-center flex-1 gap-3">
        <div className="h-6 bg-gray-200 rounded-lg w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded-lg w-full"></div>
        <div className="h-4 bg-gray-200 rounded-lg w-5/6"></div>
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50/50 to-blue-50/60 relative overflow-hidden">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-16 relative z-10">
        <div className="h-10 bg-gray-200 rounded-lg w-64 mb-10 animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}