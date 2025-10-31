import { WavePattern, DataNodePattern } from "./tech-graphics"

export function Resume() {
  return (
    <section id="resume" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-primary/10 overflow-hidden">
      <WavePattern />
      <DataNodePattern />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Resume & Education</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-8">Education</h3>
            <div className="space-y-6">
              <div className="glassmorphism p-6 rounded-lg border-l-4 border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-lg">B.Tech CSE (CPS)</h4>
                  <span className="text-xs text-foreground/50">2025–2029</span>
                </div>
                <p className="text-sm text-primary mb-2">VIT Chennai</p>
                <p className="text-xs text-foreground/60">
                  Currently pursuing specialization in Cyber Physical Systems
                </p>
              </div>

              <div className="glassmorphism p-6 rounded-lg border-l-4 border-secondary hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-lg">Higher Secondary (CBSE Class 12)</h4>
                  <span className="text-xs text-foreground/50">Completed</span>
                </div>
                <p className="text-sm text-secondary mb-2">Velammal Vidhyashram, Ambattur</p>
                <p className="text-xs text-foreground/60">Scored 97% - Consistent Academic Excellence</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-8">Experience</h3>
            <div className="space-y-6">
              <div className="glassmorphism p-6 rounded-lg border-l-4 border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-lg">Technical Department Member</h4>
                  <span className="text-xs text-foreground/50">Present</span>
                </div>
                <p className="text-sm text-accent mb-2">Cloud OPS</p>
                <p className="text-xs text-foreground/60">
                  Contributing to technical initiatives and supporting department activities
                </p>
              </div>

              <div className="glassmorphism p-6 rounded-lg border-l-4 border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-lg">Volunteer</h4>
                  <span className="text-xs text-foreground/50">Present</span>
                </div>
                <p className="text-sm text-primary mb-2">VITeach</p>
                <p className="text-xs text-foreground/60">
                  Actively contributing to community education and mentorship programs
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Download Resume */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}
