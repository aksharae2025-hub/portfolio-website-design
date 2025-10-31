import { CircuitPattern, WavePattern } from "./tech-graphics"

export function Skills() {
  const technicalSkills = [
    { name: "Python", level: 85 },
    { name: "Prompt Engineering", level: 80 },
    { name: "Web Design (AI-assisted)", level: 75 },
    { name: "Flask", level: 70 },
    { name: "HTML/CSS/JS", level: 75 },
    { name: "HuggingFace APIs", level: 65 },
    { name: "Supabase", level: 70 },
    { name: "React Basics", level: 70 },
  ]

  const otherSkills = [
    "Problem Solving",
    "Collaboration",
    "Volunteer Experience",
    "Book Enthusiast",
    "UI/UX Thinking",
    "Technical Communication",
  ]

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-primary/10 overflow-hidden">
      <CircuitPattern />
      <WavePattern />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold">{skill.name}</span>
                    <span className="text-xs text-foreground/50">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-card rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-8">Other Skills & Interests</h3>
            <div className="grid grid-cols-2 gap-4">
              {otherSkills.map((skill) => (
                <div
                  key={skill}
                  className="glassmorphism p-4 rounded-lg hover:border-secondary/50 transition-all duration-300"
                >
                  <p className="text-sm font-semibold text-center">{skill}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 glassmorphism p-6 rounded-lg">
              <p className="text-sm text-foreground/70">
                <span className="text-accent font-semibold">Currently Learning:</span> Full-stack development, Advanced
                AI integration, and cloud deployment strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
