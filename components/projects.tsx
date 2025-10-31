"use client"

import { useState } from "react"
import { GridPattern, DataNodePattern } from "./tech-graphics"

const projectsData = [
  {
    id: 1,
    title: "AI-Powered Health Assistant",
    description:
      "Fullstack build with frontend + Flask backend. Integrates HuggingFace APIs for language/diagnostic tasks and Supabase for secure data management.",
    role: "Frontend & Backend Developer",
    technologies: ["Flask", "React", "HuggingFace", "Supabase", "Python"],
    image: "/health-assistant-app-interface-ai.jpg",
    liveLink: "#",
    githubLink: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Project Placeholder 1",
    description: "Coming soon! Your next groundbreaking project will be featured here.",
    role: "To be determined",
    technologies: ["Tech Stack TBD"],
    image: "/coming-soon-tech-project.jpg",
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    id: 3,
    title: "Project Placeholder 2",
    description: "Coming soon! Your next groundbreaking project will be featured here.",
    role: "To be determined",
    technologies: ["Tech Stack TBD"],
    image: "/coming-soon-tech-project.jpg",
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Project Placeholder 3",
    description: "Coming soon! Your next groundbreaking project will be featured here.",
    role: "To be determined",
    technologies: ["Tech Stack TBD"],
    image: "/coming-soon-tech-project.jpg",
    liveLink: "#",
    githubLink: "#",
    featured: false,
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-primary/10 overflow-hidden">
      <GridPattern />
      <DataNodePattern />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Featured Projects</h2>

        {/* Featured Project */}
        <div className="mb-16">
          {projectsData
            .filter((p) => p.featured)
            .map((project) => (
              <div
                key={project.id}
                className="glassmorphism p-8 rounded-lg overflow-hidden border border-primary/20 glassmorphism-hover"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="w-full h-64 md:h-80 bg-card rounded-lg overflow-hidden mb-6">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-primary">{project.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{project.description}</p>

                    <div>
                      <p className="text-sm text-foreground/50 mb-2">Role</p>
                      <p className="font-semibold text-accent">{project.role}</p>
                    </div>

                    <div>
                      <p className="text-sm text-foreground/50 mb-3">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-semibold text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.liveLink}
                        className="px-6 py-2 bg-primary/20 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/30 transition-all duration-300 text-sm"
                      >
                        View Demo
                      </a>
                      <a
                        href={project.githubLink}
                        className="px-6 py-2 bg-secondary/20 border border-secondary/50 text-secondary rounded-lg font-semibold hover:bg-secondary/30 transition-all duration-300 text-sm"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-foreground/80">Other Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projectsData
              .filter((p) => !p.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className="glassmorphism p-6 rounded-lg border border-primary/10 glassmorphism-hover cursor-pointer group"
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="w-full h-48 bg-card rounded-lg overflow-hidden mb-4 group-hover:border-primary/30 transition-all">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-semibold mb-2 text-primary group-hover:text-secondary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-foreground/60 line-clamp-2 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary/10 rounded-full text-xs text-primary/70">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
