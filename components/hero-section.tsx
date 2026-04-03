"use client"

import { useEffect, useRef } from "react"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      container.style.setProperty("--mouse-x", `${x}px`)
      container.style.setProperty("--mouse-y", `${y}px`)
    }

    container.addEventListener("mousemove", handleMouseMove)
    return () => container.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
          rgba(56, 189, 248, 0.12), transparent 40%)
        `,
      }}
    >
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[150px]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-accent font-mono text-sm md:text-base mb-6 animate-fade-in tracking-widest">
          Hello, I am
        </p>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in-up">
          <span className="text-foreground">Deepu </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-accent">Codes</span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground mb-8 animate-fade-in-up text-balance" style={{ animationDelay: "100ms" }}>
          Building modern, fast, and scalable web experiences
        </h2>
        
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up text-pretty" style={{ animationDelay: "200ms" }}>
          A passionate developer who builds responsive and high-performance websites 
          using React, Next.js, and Tailwind CSS. Turning ideas into pixel-perfect reality.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-semibold rounded-xl shadow-lg shadow-accent/25 transition-all duration-300 hover:shadow-accent/40 hover:scale-105 hover:-translate-y-1"
          >
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-accent/50 text-foreground hover:bg-accent/10 hover:border-accent px-8 py-6 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <Link
            href="https://github.com/DeepuCodesss"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-secondary/50 text-muted-foreground hover:text-accent hover:bg-accent/10 hover:scale-110 transition-all duration-300 border border-transparent hover:border-accent/30"
            aria-label="GitHub"
          >
            <Github size={22} />
          </Link>
          <Link
            href="https://linkedin.com/in/deepucodes"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-secondary/50 text-muted-foreground hover:text-accent hover:bg-accent/10 hover:scale-110 transition-all duration-300 border border-transparent hover:border-accent/30"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </Link>
          <Link
            href="mailto:deepucodes@gmail.com"
            className="p-3 rounded-xl bg-secondary/50 text-muted-foreground hover:text-accent hover:bg-accent/10 hover:scale-110 transition-all duration-300 border border-transparent hover:border-accent/30"
            aria-label="Email"
          >
            <Mail size={22} />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} />
        </Link>
      </div>
    </section>
  )
}
