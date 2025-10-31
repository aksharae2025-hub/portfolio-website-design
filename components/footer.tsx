import { HexPattern, WavePattern } from "./tech-graphics"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-primary/10 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <HexPattern />
      <WavePattern />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
              Akshara E
            </h3>
            <p className="text-sm text-foreground/60">CSE student building AI-powered web solutions.</p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-primary">Navigation</h4>
            <ul className="space-y-2">
              {["About", "Skills", "Projects", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-foreground/60 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-secondary">External</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/aksharae2025-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/60 hover:text-secondary transition-colors duration-300"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:akshara2008.eduworld@gmail.com"
                  className="text-sm text-foreground/60 hover:text-secondary transition-colors duration-300"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-accent">Social</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/aksharae2025-hub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary/30 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:scale-110"
              >
                <span>G</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 text-center">
          <p className="text-sm text-foreground/50">
            © {currentYear} Akshara E. All rights reserved. | Designed with <span className="text-primary">✨</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
