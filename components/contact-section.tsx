"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, MapPin, Github, Linkedin } from "lucide-react"
import Link from "next/link"

interface ContactSectionProps {
  onVisible: () => void
}

export function ContactSection({ onVisible }: ContactSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormState({ name: "", email: "", message: "" })
    alert("Message sent! I will get back to you soon.")
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 md:py-32 scroll-mt-20 relative"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <h2 className="flex items-center justify-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-4">
          <span className="text-accent font-mono text-lg md:text-xl">04.</span>
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground max-w-lg mx-auto mb-12 leading-relaxed">
          Have a project in mind or want to collaborate? I&apos;d love to hear from you. 
          Whether it&apos;s a website, an idea, or just a friendly hello - feel free to reach out!
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Let&apos;s Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you have a project in mind, want to collaborate, or just 
                want to say hello, I&apos;d love to hear from you. Fill out the form 
                or reach out through any of the channels below.
              </p>

              {/* Contact details */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20">
                    <Mail className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                    <a
                      href="mailto:hello@deepucodes.dev"
                      className="text-foreground hover:text-accent transition-colors font-medium"
                    >
                      hello@deepucodes.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                    <p className="text-foreground font-medium">India</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-3 mt-6 pt-6 border-t border-border/50">
                <Link
                  href="https://github.com/DeepuCodesss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-secondary/50 text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 border border-transparent hover:border-accent/30"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </Link>
                <Link
                  href="https://linkedin.com/in/deepucodes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-secondary/50 text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 border border-transparent hover:border-accent/30"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  required
                  className="bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent/20 rounded-xl h-12"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  required
                  className="bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent/20 rounded-xl h-12"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  required
                  className="bg-secondary/50 border-border/50 focus:border-accent focus:ring-accent/20 rounded-xl resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 rounded-xl font-semibold shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-300 hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send size={18} />
                  </span>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
