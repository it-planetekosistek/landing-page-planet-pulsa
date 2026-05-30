import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Steps from "@/components/Steps";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50/50 to-blue-50/60 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-50 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-30 translate-y-1/2"></div>

      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <Hero />
        <Features />
        <Steps />
        <Cta />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}
