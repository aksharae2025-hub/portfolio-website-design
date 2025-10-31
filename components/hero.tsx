"use client"

import { useEffect, useState } from "react"
import { CircuitPattern, GridPattern } from "./tech-graphics"

const phrases = ["Python", "Prompt Engineering", "Web Design", "AI Integration"]

export function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      <CircuitPattern />
      <GridPattern />

      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
              Hi — I'm Akshara E
            </h1>
            <div className="h-12 mt-4">
              <p className="text-xl text-primary font-semibold transition-opacity duration-500">
                {phrases[currentPhrase]}
              </p>
            </div>
          </div>

          <p className="text-lg text-foreground/70 leading-relaxed">
            CSE (Cyber Physical Systems) student at VIT Chennai. Building AI-powered web tools and exploring full-stack
            design with a love for books and clean code.
          </p>

          <p className="text-sm text-foreground/50">1st year • 2025–2029</p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-primary/50 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            <div className="glassmorphism p-4 rounded-lg text-center">
              <p className="text-sm text-foreground/50">CBSE Score</p>
              <p className="text-2xl font-bold text-primary">97%</p>
            </div>
            <div className="glassmorphism p-4 rounded-lg text-center">
              <p className="text-sm text-foreground/50">Cloud OPS</p>
              <p className="text-2xl font-bold text-secondary">Tech Dept</p>
            </div>
            <div className="glassmorphism p-4 rounded-lg text-center">
              <p className="text-sm text-foreground/50">VITeach</p>
              <p className="text-2xl font-bold text-accent">Volunteer</p>
            </div>
          </div>
        </div>

        {/* Right side - Profile image placeholder */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Neon ring animation */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 neon-glow"></div>
            <div className="absolute inset-2 rounded-full border-2 border-secondary/20 neon-glow-magenta"></div>

            {/* Profile image */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center overflow-hidden">
              <img
                src="/professional-portrait-woman-tech-student-neon-styl.jpg"
                alt="Akshara E"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating icon */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-card border border-accent/30 rounded-lg flex items-center justify-center float glassmorphism">
              <span className="text-3xl">💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
