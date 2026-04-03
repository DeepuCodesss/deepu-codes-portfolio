"use client"

import { useEffect, useRef } from "react"
import { Code2, Palette, Zap } from "lucide-react"

interface AboutSectionProps {
  onVisible: () => void
}

export function AboutSection({ onVisible }: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [onVisible])

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code",
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Creating visually stunning and intuitive interfaces",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Building fast, optimized web experiences",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 scroll-mt-20 relative"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
          <span className="text-accent font-mono text-lg md:text-xl">01.</span>
          About Me
          <span className="flex-1 h-px bg-gradient-to-r from-border to-transparent max-w-xs" />
        </h2>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* About text */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Hey there! I&apos;m <span className="text-accent font-semibold">Deepu</span>, a passionate and self-driven 
              web developer who enjoys building modern, user-friendly websites. I love taking ideas and turning 
              them into real, functional products that people actually want to use.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I work with <span className="text-foreground">HTML, CSS, JavaScript, React, Next.js,</span> and{" "}
              <span className="text-foreground">Tailwind CSS</span> to create responsive websites that look great 
              and perform even better. Clean code, smooth animations, and intuitive design are things I genuinely 
              care about in every project I build.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m always learning something new - whether it&apos;s a new framework, a better way to write code, or 
              a design trend that catches my eye. For me, web development isn&apos;t just work - it&apos;s something I 
              truly enjoy doing every single day.
            </p>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-card/50 border border-border/50 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 group"
                >
                  <item.icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Profile image placeholder */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="relative w-64 h-64 md:w-72 md:h-72">
                {/* Glassmorphism card */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-cyan-500/20 backdrop-blur-sm border border-accent/20 group-hover:border-accent/40 transition-all duration-500" />
                
                {/* Inner content */}
                <div className="absolute inset-2 rounded-xl bg-card/80 flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-cyan-400">
                      DC
                    </div>
                    <p className="text-muted-foreground text-sm mt-2 font-mono">Deepu Codes</p>
                  </div>
                </div>

                {/* Decorative border */}
                <div className="absolute -inset-3 rounded-2xl border-2 border-accent/30 translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
