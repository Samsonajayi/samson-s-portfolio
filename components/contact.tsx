"use client";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background lines */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-border"></div>
      <div className="absolute top-2/3 left-0 right-0 h-px bg-border"></div>

      <div className="container mx-auto px-8 max-w-300">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-0.5 bg-secondary"></div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                Get in <span className="text-secondary">Touch</span>
              </h2>
            </div>
            <div className="hidden md:block w-32 h-0.5 bg-primary"></div>
          </div>
          <p className="text-xl text-muted max-w-2xl">
            Ready to build something amazing? Let's connect and create together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="border-2 border-primary p-8">
              <h3 className="text-2xl font-black mb-8 uppercase tracking-tight">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-primary bg-transparent font-semibold focus:border-secondary focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-primary bg-transparent font-semibold focus:border-secondary focus:outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-wider mb-3">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-primary bg-transparent font-semibold focus:border-secondary focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-secondary text-background font-bold uppercase tracking-wider border-2 border-secondary hover:bg-transparent hover:text-secondary transition-all flex items-center justify-center gap-3"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-10">
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 border-2 border-primary hover:border-secondary transition-colors">
                <div className="w-12 h-12 border-2 border-secondary flex items-center justify-center rotate-45">
                  <Mail className="w-6 h-6 text-secondary -rotate-45" />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-wider text-muted mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:hello@example.com"
                    className="text-xl font-black hover:text-secondary transition-colors"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 border-2 border-primary hover:border-secondary transition-colors">
                <div className="w-12 h-12 border-2 border-secondary flex items-center justify-center rotate-45">
                  <Phone className="w-6 h-6 text-secondary -rotate-45" />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-wider text-muted mb-1">
                    Phone
                  </div>
                  <a
                    href="tel:+2341234567890"
                    className="text-xl font-black hover:text-secondary transition-colors"
                  >
                    +234 123 456 7890
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 border-2 border-primary hover:border-secondary transition-colors">
                <div className="w-12 h-12 border-2 border-secondary flex items-center justify-center rotate-45">
                  <MapPin className="w-6 h-6 text-secondary -rotate-45" />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-wider text-muted mb-1">
                    Location
                  </div>
                  <div className="text-xl font-black">Lagos, Nigeria</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="border-2 border-primary p-8">
              <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">
                Connect Online
              </h3>
              <div className="flex gap-6">
                <a
                  href="https://linkedin.com"
                  className="group w-14 h-14 border-2 border-primary flex items-center justify-center hover:border-secondary transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 group-hover:text-secondary transition-colors" />
                </a>
                <a
                  href="https://github.com"
                  className="group w-14 h-14 border-2 border-primary flex items-center justify-center hover:border-secondary transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 group-hover:text-secondary transition-colors" />
                </a>
                <a
                  href="https://twitter.com"
                  className="group w-14 h-14 border-2 border-primary flex items-center justify-center hover:border-secondary transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6 group-hover:text-secondary transition-colors" />
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="p-6 border-2 border-secondary bg-background">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 bg-secondary animate-pulse"></div>
                <h3 className="text-xl font-black uppercase tracking-tight">
                  Current Availability
                </h3>
              </div>
              <p className="text-muted">
                I'm currently available for freelance projects and full-time
                opportunities. Let's discuss how we can work together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
