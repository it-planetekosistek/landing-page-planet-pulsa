"use client";

import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-accent/25 backdrop-blur-md border-b border-orange-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/planetpulsa-logo.png"
              alt="Planet Pulsa Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              PLANET PULSA
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Beranda
            </Link>
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Keunggulan
            </button>
            <button
              onClick={() => scrollToSection("steps")}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Panduan
            </button>
            <Link href="/blog" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Blog
            </Link>
            <a
              href="https://play.google.com/store/apps/details?id=id.co.aviana.planetpulsaappr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Download Aplikasi
            </a>
          </div>

          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white/95 backdrop-blur">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-700 hover:text-primary transition-colors font-medium px-2 py-1">
                Beranda
              </Link>
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-700 hover:text-primary transition-colors font-medium text-left px-2 py-1"
              >
                Keunggulan
              </button>
              <button
                onClick={() => scrollToSection("steps")}
                className="text-gray-700 hover:text-primary transition-colors font-medium text-left px-2 py-1"
              >
                Panduan
              </button>
              <Link href="/blog" className="text-gray-700 hover:text-primary transition-colors font-medium px-2 py-1">
                Blog
              </Link>
              <a
                href="https://play.google.com/store/apps/details?id=id.co.aviana.planetpulsaappr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full font-medium transition-colors text-center"
              >
                Download Aplikasi
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
