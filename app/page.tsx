"use client";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Portfolio } from "@/components/portfolio";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Fixed header */}
      <Header />

      {/* Main content with proper spacing */}
      <main className="pt-16">
        {" "}
        {/* Account for fixed header */}
        {/* Hero section - Full viewport height */}
        <section id="home" className="min-h-[90vh] flex items-center">
          <Hero />
        </section>
        {/* Divider with style */}
        <div className="max-w-4xl mx-auto px-8 py-16">
          <div className="h-px bg-linear-to-r from-transparent via-secondary to-transparent opacity-30"></div>
        </div>
        {/* Portfolio section */}
        <section id="portfolio" className="py-20">
          <Portfolio />
        </section>
        {/* Another divider */}
        <div className="max-w-4xl mx-auto px-8 py-8">
          <div className="h-px bg-linear-to-r from-transparent via-primary to-transparent opacity-20"></div>
        </div>
        {/* About section */}
        <section id="about" className="py-20">
          <About />
        </section>
        {/* Contact section */}
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-surface">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <p className="text-primary text-sm">
            © {new Date().getFullYear()} Samson Ajayi. Built with Next.js &
            Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
}
