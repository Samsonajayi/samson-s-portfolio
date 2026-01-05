"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section
      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
      fixed top-0 left-0 right-0 z-50 
      bg-background transition-all duration-300
      ${
        scrolled
          ? "border-b-2 border-primary py-3"
          : "border-b border-transparent py-5"
      }
    `}
    >
      <div className="container mx-auto px-8 max-w-300">
        <div className="flex justify-between items-center h-15">
          {/* Logo - Geometric Style */}
          <a href="#home" className="group">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 border-2 border-secondary flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-300">
                <div className="w-4 h-4 bg-secondary"></div>
              </div>
              <span className="text-xl font-black tracking-tight">
                S<span className="text-secondary">A</span>
              </span>
            </div>
            <div className="h-0.5 w-0 group-hover:w-full bg-secondary transition-all duration-300 mt-1"></div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`
                  px-4 py-2 text-sm font-semibold uppercase tracking-wider
                  transition-all duration-200 relative
                  ${
                    activeSection === item.href.substring(1)
                      ? "text-secondary"
                      : "text-primary hover:text-secondary"
                  }
                `}
              >
                {item.name}
                <span
                  className={`
                  absolute bottom-0 left-0 w-0 h-0.5 bg-secondary
                  transition-all duration-300
                  ${activeSection === item.href.substring(1) ? "w-full" : ""}
                `}
                ></span>
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="#contact"
              className="ml-4 px-5 py-2.5 bg-primary text-background text-sm font-bold uppercase tracking-wider border-2 border-primary hover:bg-transparent hover:text-primary transition-all"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 border-2 border-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-primary" />
            ) : (
              <Menu className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 border-2 border-primary bg-background">
            <div className="py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-lg font-bold uppercase border-b border-border last:border-b-0 hover:text-secondary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 py-4">
                <a
                  href="#contact"
                  className="block w-full px-4 py-3 bg-primary text-background text-center font-bold uppercase tracking-wider border-2 border-primary hover:bg-transparent hover:text-primary transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
