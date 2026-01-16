'use client'

import { useEffect, useRef } from 'react'
import { Github, ArrowUpRight, Rocket } from 'lucide-react'
import { SectionMeshBg } from '@/components/section-mesh-bg'

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      title: 'Yukti Herbs',
      description:
        'Premium herbal products e-commerce platform with seamless shopping experience. Focus on conversion optimization and user delight.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      image: '/yuktiherbs.png',
      link: 'https://www.yuktiherbs.com',
      github: 'https://www.yuktiherbs.com',
      featured: true,
      duration: 'Nov 2023 - Present',
      color: 'from-green-500/20 to-emerald-500/10'
    },
    {
      title: 'Uniqaya',
      description:
        'Fashion marketplace connecting independent designers with customers globally. Built with focus on UX excellence and performance.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Firebase'],
      image: '/uniqaya.png',
      link: 'https://www.uniqaya.com',
      github: 'https://www.uniqaya.com',
      featured: true,
      duration: '2023',
      color: 'from-pink-500/20 to-rose-500/10'
    },
    {
      title: 'LeadsGenNav',
      description: 'B2B lead generation platform with advanced analytics dashboard for marketing teams.',
      technologies: ['React', 'Firebase', 'Analytics', 'Dashboard'],
      image: '/rctechsolutions.png',
      link: 'https://www.rctechsolutions.com',
      github: 'https://github.com/rahul2271/newweb',
      featured: true,
      duration: '2023',
      color: 'from-blue-500/20 to-cyan-500/10'
    },
    {
      title: 'RC Tech Solutions',
      description: 'Personal tech consulting portfolio showcasing development expertise and methodologies.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind', 'SEO'],
      image: '/rctechsolutions.png',
      link: 'https://www.rctechsolutions.com',
      github: 'https://github.com/rahul2271/newweb',
      featured: true,
      duration: '2024',
      color: 'from-purple-500/20 to-violet-500/10'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp')
          }
        })
      },
      { threshold: 0.1 }
    )

    containerRef.current
      ?.querySelectorAll('.animate-on-scroll')
      .forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={containerRef}
      id="projects"
      className="py-32 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-background to-background/95"
    >
      <div className="absolute inset-0 -z-10">
        <SectionMeshBg />
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-15 animate-blob"></div>
        <div
          className="absolute bottom-32 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-15 animate-blob"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="animate-on-scroll mb-24">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-balance">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Curated projects demonstrating expertise in frontend development and UX design.
          </p>
        </div>

        <div className="space-y-24 mb-32">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <div
                key={index}
                className="animate-on-scroll group relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'md:[direction:rtl]' : ''
                  }`}
                >
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div
                      className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${project.color} border border-border/50 aspect-video group-hover:border-primary/50 transition-all`}
                    >
                      <img
                        src={project.image || '/placeholder.svg'}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  <div
                    className={`${
                      index % 2 === 1 ? 'md:order-1' : ''
                    } space-y-6`}
                  >
                    <div>
                      <p className="text-primary/70 text-sm font-semibold tracking-wide uppercase">
                        {project.duration}
                      </p>
                      <h3 className="text-4xl md:text-5xl font-black mt-2">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/30 hover:border-primary/50 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-6">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 overflow-hidden relative"
                      >
                        <span className="relative z-10">View Project</span>
                        <ArrowUpRight
                          size={16}
                          className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                        />
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 glass-morphism border border-border/50 rounded-lg font-semibold hover:border-primary/50 transition-all flex items-center gap-2"
                      >
                        <Github size={16} /> Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="animate-on-scroll interactive-card bg-gradient-to-br from-card/50 to-card/20 border border-border/30 rounded-lg p-6 hover:border-primary/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="text-xl font-bold mb-2">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
