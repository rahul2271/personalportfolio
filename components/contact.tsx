'use client'

import { useState, useRef, useEffect } from 'react'
import { Mail, Linkedin, Github, Send, ArrowUpRight, Phone, MapPin } from 'lucide-react'
import { SectionMeshBg } from '@/components/section-mesh-bg'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

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
    <section ref={containerRef} id="contact" className="py-32 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-background/95 to-background">
      <div className="absolute inset-0 -z-10">
        <SectionMeshBg />
        <div className="absolute top-40 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20 animate-blob"></div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-24 animate-on-scroll">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-balance">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Have a project in mind? Let's discuss how I can help bring your ideas to life.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2 space-y-4">
            {[
              { icon: Mail, label: 'Email me', value: 'rraahhuullch@gmail.com', href: 'mailto:rraahhuullch@gmail.com' },
              { icon: Linkedin, label: 'Connect on', value: 'LinkedIn', href: 'https://www.linkedin.com/in/er-rahul-chauhan/' },
              { icon: Github, label: 'Check my code', value: 'GitHub', href: 'https://github.com/rahul2271' },
            ].map((contact, i) => {
              const Icon = contact.icon
              return (
                <a
                  key={i}
                  href={contact.href}
                  className="animate-on-scroll group interactive-card bg-gradient-to-r from-card/50 to-card/20 border border-border/30 rounded-lg p-6 hover:border-primary/50"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-primary/50 group-hover:to-accent/20 transition-colors">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{contact.value}</p>
                    </div>
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                  </div>
                </a>
              )
            })}
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-5">
            <div className="animate-on-scroll">
              <label className="block text-sm font-semibold text-foreground mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Rahul"
                className="w-full px-4 py-3 bg-card border border-border/50 rounded-lg focus:border-primary focus:shadow-lg focus:outline-none transition-all text-foreground placeholder-muted-foreground"
                required
              />
            </div>

            <div className="animate-on-scroll">
              <label className="block text-sm font-semibold text-foreground mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-card border border-border/50 rounded-lg focus:border-primary focus:shadow-lg focus:outline-none transition-all text-foreground placeholder-muted-foreground"
                required
              />
            </div>

            <div className="animate-on-scroll">
              <label className="block text-sm font-semibold text-foreground mb-2">Project Details</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full px-4 py-3 bg-card border border-border/50 rounded-lg focus:border-primary focus:shadow-lg focus:outline-none transition-all text-foreground placeholder-muted-foreground resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2 group overflow-hidden relative"
            >
              <Send size={20} className="group-hover:translate-x-1 transition-transform" /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
