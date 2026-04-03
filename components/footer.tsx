import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social links */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/DeepuCodesss"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-accent transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://linkedin.com/in/deepucodes"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://twitter.com/deepucodes"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-accent transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-mono">
            © 2026 <span className="text-accent">Deepu Codes</span>. Built with modern web technologies.
          </p>
        </div>

        {/* Back to top (optional) */}
        <div className="text-center mt-6">
          <Link
            href="#home"
            className="text-xs text-muted-foreground hover:text-accent transition-colors font-mono tracking-wider uppercase"
          >
            Back to Top
          </Link>
        </div>
      </div>
    </footer>
  )
}
