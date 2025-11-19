'use client'

import { useEffect, useRef } from 'react'
import { Briefcase, CheckCircle } from 'lucide-react'
import { SectionMeshBg } from '@/components/section-mesh-bg'

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)

  const experiences = [
    {
      title: 'Frontend & Full-Stack Developer',
      company: 'Yukti Herbs',
      period: 'Nov 2023 - Present',
      duration: '~2 year',
      description:
        'Managing the complete digital ecosystem of Yukti Herbs. Developed custom Tailwind-styled Shopify storefronts for both India and Global stores, built dynamic pages in Next.js, and integrated backend using PostgreSQL + SheetDB. Implemented global payment gateways, optimized user experience, connected third-party APIs, and ensured fast, scalable performance across all platforms.',
      highlights: [
        'Shopify Development',
        'Next.js',
        'Tailwind CSS',
        'PostgreSQL',
        'SheetDB',
        'Global Payment Integration',
        'API Integration',
        'Performance Optimization'
      ],
      isCurrent: true
    },
    {
      title: 'UI/UX Designer & Developer',
      company: 'iNeuron, Bangalore',
      period: '2022 - 2023',
      duration: '~1 year',
      description:
        'Designed and implemented 40+ modern UI/UX screens. Worked on design systems, prototyping, user flows, wireframes, and collaborative design-to-development workflows.',
      highlights: [
        'Figma',
        'UI/UX Design',
        'Prototyping',
        'Design Systems',
        'Wireframing'
      ],
      isCurrent: false
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp')
          }
        })
      },
      { threshold: 0.1 }
    )

    containerRef.current?.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={containerRef}
      id="experience"
      className="py-32 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-background/95 to-background"
    >
      <div className="absolute inset-0 -z-10">
        <SectionMeshBg />
        <div
          className="absolute bottom-20 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20 animate-blob"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="animate-on-scroll mb-24">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-balance">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Timeline of my professional journey and growth.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="animate-on-scroll interactive-card relative bg-gradient-to-r from-card/50 to-card/20 border border-border/30 rounded-lg p-8 hover:border-primary/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-lg ${
                  exp.isCurrent
                    ? 'bg-gradient-to-b from-primary via-accent to-transparent animate-pulse-glow'
                    : 'bg-border/50'
                }`}
              ></div>

              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase size={20} className="text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-primary/80 font-semibold">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                  <p className="text-xs text-primary/60 font-medium">
                    {exp.duration}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {exp.highlights.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/30 hover:border-primary/50 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {exp.isCurrent && (
                <div className="pt-4 border-t border-border/30 flex items-center gap-2">
                  <CheckCircle
                    size={16}
                    className="text-primary animate-pulse"
                  />
                  <span className="text-sm text-primary font-semibold">
                    Currently working
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
