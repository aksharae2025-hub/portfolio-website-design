import { HexPattern, CircuitPattern } from "./tech-graphics"

export function Services() {
  const services = [
    {
      title: "Beginner Web Design (AI-augmented)",
      description: "I build responsive frontends with AI-assisted prototyping and modern design principles.",
      icon: "🎨",
    },
    {
      title: "Prompt Engineering",
      description: "Crafting effective prompts and prototypes for ML/LLMs to solve real-world problems.",
      icon: "✨",
    },
    {
      title: "Full-Stack Development",
      description: "Learning to build complete applications from frontend to backend with modern tools and frameworks.",
      icon: "⚙️",
    },
  ]

  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-primary/10 overflow-hidden">
      <HexPattern />
      <CircuitPattern />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Services & Offerings</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="glassmorphism p-8 rounded-lg border border-primary/10 glassmorphism-hover group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-secondary transition-colors">
                {service.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-4">{service.description}</p>
              <p className="text-xs text-accent font-semibold">Status: Learning & Growing</p>
            </div>
          ))}
        </div>

        <div className="mt-12 glassmorphism p-8 rounded-lg border border-accent/20">
          <p className="text-center text-foreground/70">
            <span className="text-accent font-semibold">Open to collaboration</span> — Let's build something amazing
            together! Whether it's a freelance project, internship, or just exploring ideas.
          </p>
        </div>
      </div>
    </section>
  )
}
