"use client"

import { type FormEvent, useState } from "react"
import { CircuitPattern, GridPattern } from "./tech-graphics"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const mailtoLink = `mailto:akshara2008.eduworld@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    )}`
    window.location.href = mailtoLink
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-primary/10 overflow-hidden">
      <CircuitPattern />
      <GridPattern />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Contact Info</h3>
              <div className="space-y-4">
                <a
                  href="mailto:akshara2008.eduworld@gmail.com"
                  className="flex items-center gap-4 p-4 glassmorphism rounded-lg hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all group"
                >
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="text-sm text-foreground/50">Email</p>
                    <p className="font-semibold group-hover:text-primary transition-colors">
                      akshara2008.eduworld@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/aksharae2025-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glassmorphism rounded-lg hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/20 transition-all group"
                >
                  <span className="text-2xl">🔗</span>
                  <div>
                    <p className="text-sm text-foreground/50">GitHub</p>
                    <p className="font-semibold group-hover:text-secondary transition-colors">aksharae2025-hub</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 glassmorphism rounded-lg">
                  <span className="text-2xl">🔗</span>
                  <div>
                    <p className="text-sm text-foreground/50">LinkedIn</p>
                    <p className="font-semibold text-foreground/50">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glassmorphism p-6 rounded-lg border border-accent/20 hover:border-accent/40 transition-all duration-300">
              <p className="text-sm text-foreground/70">
                <span className="text-accent font-semibold">Open to opportunities:</span> Collaborations, internships,
                and exciting projects!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glassmorphism p-8 rounded-lg border border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-2 bg-card border border-primary/20 rounded-lg focus:outline-none focus:border-primary/50 focus:shadow-lg focus:shadow-primary/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-2 bg-card border border-primary/20 rounded-lg focus:outline-none focus:border-primary/50 focus:shadow-lg focus:shadow-primary/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 bg-card border border-primary/20 rounded-lg focus:outline-none focus:border-primary/50 focus:shadow-lg focus:shadow-primary/20 transition-all"
                >
                  <option value="general">General Inquiry</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="internship">Internship</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-card border border-primary/20 rounded-lg focus:outline-none focus:border-primary/50 focus:shadow-lg focus:shadow-primary/20 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitted ? "✓ Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
