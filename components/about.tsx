"use client";

import { Target, Users, Book, Sparkles } from "lucide-react";
import { useState } from "react";

export function About() {
  const [activeTab, setActiveTab] = useState("story");

  return (
    <section id="about" className="py-20 relative">
      {/* Geometric background */}
      <div className="absolute top-20 right-10 w-40 h-40 border-2 border-primary rotate-45 opacity-5"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 border-2 border-secondary -rotate-12 opacity-5"></div>

      <div className="container mx-auto px-8 max-w-300">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-0.5 bg-secondary"></div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                About <span className="text-secondary">Me</span>
              </h2>
            </div>
            <div className="hidden md:block w-32 h-0.5 bg-primary"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Image & Stats */}
          <div className="space-y-10">
            {/* Main Image */}
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-primary rotate-3"></div>
              <div className="absolute -inset-8 border-2 border-secondary -rotate-3"></div>

              <img
                src="/main2.jpg"
                alt="Samson Ajayi"
                className="relative w-full border-8 border-background shadow-[20px_20px_0_0_var(--color-primary)]"
              />

              {/* Image badge */}
              <div className="absolute -bottom-4 -right-4 px-6 py-3 bg-background border-2 border-secondary">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-bold uppercase tracking-wide text-secondary">
                    Creator & Developer
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 border-2 border-primary text-center">
                <Book className="w-8 h-8 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-black text-secondary">MTU</div>
                <div className="text-sm font-bold uppercase tracking-wider mt-2">
                  Computer Science
                </div>
              </div>

              <div className="p-6 border-2 border-primary text-center">
                <div className="text-3xl font-black text-secondary mb-4">∞</div>
                <div className="text-sm font-bold uppercase tracking-wider">
                  Learning Mindset
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-10">
            {/* Tabs */}
            <div className="flex border-b-2 border-primary">
              {["story", "values", "approach"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    px-6 py-3 text-sm font-bold uppercase tracking-wider relative
                    transition-all duration-200
                    ${
                      activeTab === tab
                        ? "text-secondary"
                        : "text-primary hover:text-secondary"
                    }
                  `}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  <span
                    className={`
                    absolute bottom-0 left-0 w-full h-0.5 bg-secondary
                    transition-all duration-300
                    ${activeTab === tab ? "scale-x-100" : "scale-x-0"}
                  `}
                  ></span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-8">
              {activeTab === "story" && (
                <div className="space-y-6">
                  <p className="text-xl text-muted leading-relaxed">
                    I'm{" "}
                    <span className="text-secondary font-semibold">
                      Ajayi Samson
                    </span>
                    , a Computer Science student at Mountain Top University. My
                    journey in tech is built on a foundation of curiosity and a
                    passion for creating digital solutions that are both
                    beautiful and functional.
                  </p>

                  <div className="pl-6 border-l-2 border-secondary">
                    <p className="text-muted leading-relaxed">
                      I specialize in crafting web applications that blend{" "}
                      <span className="text-secondary font-semibold">
                        geometric precision
                      </span>{" "}
                      with{" "}
                      <span className="text-secondary font-semibold">
                        user-centered design
                      </span>
                      . Every project is approached with attention to detail and
                      a commitment to excellence.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "values" && (
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 border-2 border-primary">
                    <Target className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="text-xl font-black mb-2">Problem Solver</h3>
                    <p className="text-muted text-sm">
                      Transforming complex challenges into elegant, geometric
                      solutions
                    </p>
                  </div>

                  <div className="p-6 border-2 border-primary">
                    <Users className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="text-xl font-black mb-2">User Focused</h3>
                    <p className="text-muted text-sm">
                      Designing with the end-user in mind, always prioritizing
                      experience
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "approach" && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-secondary"></div>
                      <h3 className="text-xl font-black">
                        Geometric Design Principles
                      </h3>
                    </div>
                    <p className="text-muted">
                      Every element has purpose and placement. Clean lines,
                      precise spacing, and intentional composition.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-secondary"></div>
                      <h3 className="text-xl font-black">
                        Structured Development
                      </h3>
                    </div>
                    <p className="text-muted">
                      Clean architecture, modular components, and scalable
                      solutions built to last.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Current Focus */}
            <div className="p-6 border-2 border-primary bg-background">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-black mb-2">
                    Currently Exploring
                  </h3>
                  <p className="text-muted">
                    AI integration, 3D web experiences, and geometric design
                    systems
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="px-4 py-2 border border-primary text-sm font-bold uppercase tracking-wide">
                    Next.js 14
                  </span>
                  <span className="px-4 py-2 border border-secondary text-secondary text-sm font-bold uppercase tracking-wide">
                    Three.js
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-background font-bold uppercase tracking-wider border-2 border-secondary hover:bg-transparent hover:text-secondary transition-all w-full text-center"
            >
              Let's Work Together
              <Sparkles className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
