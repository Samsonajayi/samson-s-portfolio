"use client";

import { ExternalLink, ChevronRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "UI/UX Designs",
    description:
      "Modern interfaces with geometric precision and user-centered design",
    images: ["/Ui img2.png", "/Ui img3.png"],
    link: "https://www.behance.net/samsonajayi",
    tags: ["Figma", "Prototyping", "Design Systems"],
    featured: true,
  },
  {
    title: "Web Development",
    description:
      "Fullstack applications built with clean architecture and modern tools",
    images: ["/addmain.png", "/addmain.png"],
    link: "https://github.com/samsonajayi",
    tags: ["Next.js", "React", "Node.js"],
    featured: true,
  },
  {
    title: "Brand Identity",
    description: "Creating memorable brands with geometric design principles",
    images: ["/brand img.png", "/addmain.png"],
    link: "https://www.behance.net/samsonajayi",
    tags: ["Logo Design", "Brand Guidelines"],
    featured: false,
  },
  {
    title: "Mobile Apps",
    description: "Native mobile applications with sleek, geometric interfaces",
    images: ["/addmain.png", "/addmain.png"],
    link: "#",
    tags: ["React Native", "iOS", "Android"],
    featured: false,
  },
];

export function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="work" className="py-20 relative">
      {/* Background lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-border"></div>
        <div className="absolute top-1/2 left-0 right-0 h-px bg-border"></div>
        <div className="absolute top-3/4 left-0 right-0 h-px bg-border"></div>
      </div>

      <div className="container mx-auto px-8 max-w-300 relative">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-0.5 bg-secondary"></div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
              Selected <span className="text-secondary">Work</span>
            </h2>
          </div>
          <p className="text-xl text-muted max-w-2xl">
            A curated selection of projects that showcase my geometric design
            approach and technical expertise.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative ${
                project.featured ? "md:col-span-2" : ""
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project number */}
              <div className="absolute -top-6 -left-6 w-12 h-12 border-2 border-primary bg-background flex items-center justify-center z-10">
                <span className="font-black text-lg">0{index + 1}</span>
              </div>

              {/* Project card */}
              <div
                className={`
                bg-background border-2 border-primary p-6
                transition-all duration-300 relative
                ${
                  hoveredProject === index
                    ? "border-secondary translate-x-2 translate-y-2"
                    : ""
                }
              `}
              >
                {/* Card shadow effect */}
                <div
                  className={`
                  absolute inset-0 border-2 border-secondary
                  transition-all duration-300
                  ${
                    hoveredProject === index
                      ? "translate-x-4 translate-y-4"
                      : "translate-x-0 translate-y-0"
                  }
                  -z-10
                `}
                ></div>

                {/* Images grid */}
                <div
                  className={`grid gap-4 mb-6 ${
                    project.featured ? "grid-cols-2" : "grid-cols-1"
                  }`}
                >
                  {project.images.map((img, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="relative aspect-video overflow-hidden border-2 border-primary"
                    >
                      {/* Placeholder image */}
                      <div className="absolute inset-0 bg-linear-to-br from-background to-primary/10 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-secondary text-lg font-black mb-2">
                            {project.title}
                          </div>
                          <div className="text-muted text-sm">
                            Project Preview
                          </div>
                        </div>
                      </div>

                      {/* Hover overlay */}
                      <div
                        className={`
                        absolute inset-0 bg-secondary/0 flex items-center justify-center
                        transition-all duration-300
                        ${hoveredProject === index ? "bg-secondary/10" : ""}
                      `}
                      >
                        <div
                          className={`
                          opacity-0 transform translate-y-4
                          transition-all duration-300
                          ${
                            hoveredProject === index
                              ? "opacity-100 translate-y-0"
                              : ""
                          }
                        `}
                        >
                          <div className="w-12 h-12 border-2 border-secondary bg-background flex items-center justify-center">
                            <ExternalLink className="w-5 h-5 text-secondary" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-black text-secondary mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted">{project.description}</p>
                    </div>
                    <ChevronRight
                      className={`
                      w-5 h-5 text-primary transition-transform duration-300
                      ${
                        hoveredProject === index
                          ? "translate-x-2 text-secondary"
                          : ""
                      }
                    `}
                    />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 border border-primary text-xs font-bold uppercase tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-wider text-sm hover:underline"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/samsonajayi"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-secondary text-secondary font-bold uppercase tracking-wider hover:bg-secondary hover:text-background transition-all"
          >
            View All Projects
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
