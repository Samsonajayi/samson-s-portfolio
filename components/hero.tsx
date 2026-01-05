"use client";

import { ArrowDown, Download } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Geometric background elements */}
      <div className="geometric-bg geometric-square top-10 left-37.5"></div>
      <div className="geometric-bg geometric-circle bottom-20 right-50"></div>

      {/* Interactive gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(220, 38, 38, 0.15), transparent 50%)`,
        }}
      />

      <div className="container mx-auto px-8 max-w-300">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 border-2 border-primary">
              <div className="w-2 h-2 bg-secondary"></div>
              <span className="text-sm font-bold uppercase tracking-wider">
                Available for work
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight uppercase tracking-tight">
                Hi, I'm
                <br />
                <span className="relative">
                  <span className="text-secondary">Samson</span>
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-secondary/20 -rotate-1"></div>
                </span>
              </h1>

              {/* Subtitle */}
              <div className="mt-8 pl-4 border-l-2 border-secondary">
                <p className="text-xl text-muted font-semibold uppercase tracking-wide">
                  Fullstack Developer
                </p>
                <p className="text-lg text-muted mt-2">
                  Based in Lagos, Nigeria
                </p>
              </div>
            </div>

            {/* Stats - Geometric */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "50+", label: "Projects" },
                { number: "3+", label: "Years" },
                { number: "100%", label: "Dedication" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-4 border-2 border-primary text-center"
                >
                  <div className="text-3xl font-black text-secondary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm font-bold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="group px-8 py-4 bg-secondary text-background font-bold uppercase tracking-wider border-2 border-secondary hover:bg-transparent hover:text-secondary transition-all flex items-center gap-3"
              >
                View My Work
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                className="group px-8 py-4 bg-background text-secondary font-bold uppercase tracking-wider border-2 border-secondary hover:bg-secondary hover:text-background transition-all flex items-center gap-3"
              >
                Download CV
                <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            {/* Frame */}
            <div className="absolute -inset-4 border-2 border-primary rotate-6"></div>
            <div className="absolute -inset-8 border-2 border-secondary -rotate-3"></div>

            {/* Image Container */}
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/10"></div>

              <img
                src="/Image5.png"
                alt="Samson Ajayi"
                className="relative w-full max-w-md mx-auto border-8 border-background shadow-[20px_20px_0_0_var(--color-primary)] hover:shadow-[30px_30px_0_0_var(--color-secondary)] transition-all duration-300"
              />

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-primary bg-background flex items-center justify-center rotate-45">
                <div className="w-8 h-8 bg-secondary -rotate-45"></div>
              </div>

              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-background border-2 border-secondary">
                <span className="text-sm font-bold uppercase tracking-wide text-secondary">
                  That's me!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 flex justify-center">
          <a href="#work" className="animate-bounce">
            <div className="w-12 h-20 border-2 border-primary flex items-start justify-center pt-4">
              <div className="w-1 h-6 bg-secondary"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
