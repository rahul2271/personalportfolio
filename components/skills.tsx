'use client'

import { useEffect, useRef } from 'react'
import { Code2, Palette, Zap, TrendingUp } from 'lucide-react'
import { SectionMeshBg } from '@/components/section-mesh-bg'

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)

  const skillCategories = [
    {
      category: 'Frontend',
      icon: Code2,
      skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS', 'Redux', 'API Integration']
    },
    {
      category: 'Design',
      icon: Palette,
      skills: ['Figma', 'UI/UX Design', 'Responsive Design', 'Design Systems', 'Prototyping', 'Wireframing', 'Component Design']
    },
    {
      category: 'Tools & DevOps',
      icon: Zap,
      skills: ['Git/GitHub', 'VS Code', 'DevTools', 'Jest Testing', 'Performance', 'SEO', 'Vercel', 'npm/yarn']
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-scaleIn')
        }
      })
    }, { threshold: 0.1 })

    containerRef.current?.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={containerRef} id="skills" className="py-32 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-background/95 to-background">
      <div className="absolute inset-0 -z-10">
        <SectionMeshBg />
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-15 animate-blob" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="animate-on-scroll mb-24">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-balance">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">Tools and technologies I use to build modern web experiences.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div 
                key={index} 
                className="animate-on-scroll interactive-card bg-gradient-to-br from-card/50 to-card/20 border border-border/30 rounded-lg p-8 hover:border-primary/50"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-accent/10 rounded-lg flex items-center justify-center hover:from-primary/50 hover:to-accent/20 transition-colors">
                    <IconComponent size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={skill} className="flex items-center gap-3 group/skill" style={{ animationDelay: `${i * 0.05}s` }}>
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full group-hover/skill:scale-200 transition-transform"></div>
                      <span className="text-muted-foreground group-hover/skill:text-primary transition-colors text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
