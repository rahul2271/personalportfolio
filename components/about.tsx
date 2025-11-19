'use client'

import { useEffect, useRef } from 'react'
import { Zap, Palette, Code2, ArrowRight } from 'lucide-react'
import { SectionMeshBg } from '@/components/section-mesh-bg'

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp')
        }
      })
    }, { threshold: 0.1 })

    containerRef.current?.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={containerRef} id="about" className="py-32 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-background to-background/95">
      <div className="absolute inset-0 -z-10">
        <SectionMeshBg />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20 animate-blob"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="animate-on-scroll mb-24">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-balance">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">Passionate about crafting beautiful, performant web experiences since 2018.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="animate-on-scroll text-muted-foreground">
              I started my coding journey in <span className="text-primary font-semibold">Class 12th (2018)</span>, fascinated by the intersection of design and development. Since then, I've been obsessed with creating interfaces that are not only beautiful but also performant and accessible.
            </p>
            <p className="animate-on-scroll text-muted-foreground">
              Currently, I'm a <span className="text-primary font-semibold">Frontend Developer at Yukti Herbs</span> (Nov 2023 - Present), building responsive web applications using modern technologies. My focus is on writing clean, maintainable code and collaborating closely with designers and product teams.
            </p>
            <p className="animate-on-scroll text-muted-foreground">
              I specialize in React, TypeScript, and the entire frontend ecosystem. Every pixel matters, and every interaction should feel natural and purposeful.
            </p>
            <a href="#contact" className="animate-on-scroll inline-flex items-center gap-2 text-primary hover:gap-4 transition-all font-semibold group">
              Let's discuss your project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="space-y-4">
            {[
              { icon: Zap, title: '2+', subtitle: 'Years Experience', desc: 'Professional frontend development' },
              { icon: Palette, title: '40+', subtitle: 'UI/UX Designs', desc: 'Created at iNeuron Bangalore' },
              { icon: Code2, title: '4', subtitle: 'Major Projects', desc: 'Full-stack & frontend focused' },
            ].map((stat, i) => {
              const Icon = stat.icon
              return (
                <div 
                  key={i} 
                  className="animate-on-scroll interactive-card bg-gradient-to-br from-card to-card/50 border border-border/30 rounded-lg p-6 hover:border-primary/50"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-primary/40 group-hover:to-accent/20 transition-colors">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-3xl font-black text-primary">{stat.title}</p>
                      <p className="text-sm text-muted-foreground">{stat.subtitle}</p>
                      <p className="text-xs text-muted-foreground mt-2">{stat.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
