import { DataNodePattern, HexPattern } from "./tech-graphics"

export function About() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-primary/10 overflow-hidden">
      <DataNodePattern />
      <HexPattern />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-foreground/70 leading-relaxed">
              I'm Akshara E, a 1st-year CSE (Cyber Physical Systems) student at VIT Chennai (2025–2029). I'm passionate
              about building AI-integrated web apps, experimenting with prompt engineering, and learning full-stack
              design using AI tools. Outside code, I'm a book enthusiast and an active volunteer at VITeach.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="glassmorphism p-6 rounded-lg">
                <h3 className="font-semibold text-primary mb-2">Education</h3>
                <p className="text-sm text-foreground/70">B.Tech CSE (CPS)</p>
                <p className="text-xs text-foreground/50">VIT Chennai, 2025–2029</p>
              </div>
              <div className="glassmorphism p-6 rounded-lg">
                <h3 className="font-semibold text-secondary mb-2">Achievement</h3>
                <p className="text-sm text-foreground/70">97% in CBSE Class 12</p>
                <p className="text-xs text-foreground/50">Velammal Vidhyashram</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glassmorphism p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-accent mb-4">Current Roles</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary/30 pl-4">
                  <p className="font-semibold text-primary">Technical Department Member</p>
                  <p className="text-sm text-foreground/50">Cloud OPS</p>
                </div>
                <div className="border-l-2 border-secondary/30 pl-4">
                  <p className="font-semibold text-secondary">Volunteer</p>
                  <p className="text-sm text-foreground/50">VITeach</p>
                </div>
              </div>
            </div>

            <p className="text-foreground/60 italic">
              "I believe in continuous learning and making a positive impact through technology and community
              engagement."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
