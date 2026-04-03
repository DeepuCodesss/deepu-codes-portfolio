"use client"

import { useEffect, useRef } from "react"
import { ExternalLink, Github, Folder } from "lucide-react"
import Link from "next/link"

interface ProjectsSectionProps {
  onVisible: () => void
}

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio showcasing skills and projects with clean UI and responsive design. Built with attention to detail, smooth animations, and optimized performance.",
    technologies: ["React", "Tailwind CSS"],
    github: "https://github.com/DeepuCodesss",
    external: "",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "E-commerce Frontend",
    description:
      "A responsive e-commerce interface with product listings and cart functionality. Features modern UI components, smooth interactions, and mobile-first design approach.",
    technologies: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/DeepuCodesss",
    external: "",
    gradient: "from-accent/20 to-teal-500/20",
  },
  {
    title: "Startup Landing Page",
    description:
      "A modern landing page with strong call-to-action, smooth design, and responsive layout. Built to capture attention and convert visitors into users.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/DeepuCodesss",
    external: "",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
]

export function ProjectsSection({ onVisible }: ProjectsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [onVisible])

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 md:py-32 scroll-mt-20 relative"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
          <span className="text-accent font-mono text-lg md:text-xl">02.</span>
          Projects
          <span className="flex-1 h-px bg-gradient-to-r from-border to-transparent max-w-xs" />
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glassmorphism card */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-6 md:p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-accent/30 transition-all duration-500 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <Folder className="w-12 h-12 text-accent" strokeWidth={1.5} />
                  <div className="flex gap-3">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors hover:scale-110 transform"
                        aria-label="GitHub Repository"
                      >
                        <Github size={22} />
                      </Link>
                    )}
                    {project.external && (
                      <Link
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors hover:scale-110 transform"
                        aria-label="External Link"
                      >
                        <ExternalLink size={22} />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="px-3 py-1 text-xs font-mono text-accent bg-accent/10 rounded-full border border-accent/20"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <Link
            href="https://github.com/DeepuCodesss"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-accent border border-accent/50 rounded-xl hover:bg-accent/10 transition-all duration-300 font-medium hover:scale-105"
          >
            View More on GitHub
            <ExternalLink size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
