'use client'

import { ArrowRight, Github, Linkedin, Mail, Zap } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import NetworkMesh from './network-mesh'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [displayText, setDisplayText] = useState('')
  const [roleText, setRoleText] = useState('')
  const [animationComplete, setAnimationComplete] = useState(false)
  const roleFullText = '& UI/UX Designer'
  const fullName = 'Rahul Chauhan'
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (animationComplete) {
      if (isTyping && displayText.length < fullName.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullName.slice(0, displayText.length + 1))
        }, 80)
      } else if (isTyping && displayText.length === fullName.length) {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 3000)
      } else if (!isTyping && displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
      } else if (!isTyping && displayText.length === 0) {
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isTyping, animationComplete])

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (animationComplete && roleText.length < roleFullText.length) {
      interval = setTimeout(() => {
        setRoleText(roleFullText.slice(0, roleText.length + 1))
      }, 60)
    }
    return () => clearTimeout(interval)
  }, [roleText, animationComplete])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      
      containerRef.current.style.setProperty('--mouse-x', `${x * 100}%`)
      containerRef.current.style.setProperty('--mouse-y', `${y * 100}%`)
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      ref={containerRef} 
      className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background"
    >
      <div className="absolute inset-0 -z-10">
        <NetworkMesh />
        <div className="absolute top-10 right-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-32 left-10 w-80 h-80 bg-accent/15 rounded-full blur-3xl opacity-25 animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-5xl w-full relative z-10 space-y-16">
        <div className="space-y-12">
          <div className="animate-fadeInUp" style={{ animationDelay: '0s' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism border border-border/40 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <p className="text-xs md:text-sm tracking-widest text-foreground/70 font-semibold uppercase">Welcome</p>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight space-y-6">
            <div className={`animate-shutter-open ${animationComplete ? '' : 'opacity-0'}`}>
              <div className="min-h-[1.2em] inline-block">
                <span className="text-primary font-black tracking-tight">
                  {animationComplete ? displayText : fullName}
                  <span className="inline-block w-1 h-[1.2em] bg-primary ml-1 animate-pulse"></span>
                </span>
              </div>
            </div>
            
            <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <span className="text-white font-black">Frontend Developer</span>
            </div>

            <div 
              className="animate-fadeInUp inline-block"
              style={{ animationDelay: '0.3s' }}
            >
              <span className="animated-gradient-text text-glow">
                {animationComplete ? roleText : roleFullText}
                {animationComplete && roleText.length < roleFullText.length && (
                  <span className="inline-block w-1 h-[1em] bg-gradient-to-b from-primary to-accent ml-1 animate-pulse"></span>
                )}
              </span>
            </div>
          </h1>

          <p 
            className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed animate-fadeInUp"
            style={{ animationDelay: '0.4s' }}
          >
            Crafting beautiful, performant, and accessible web experiences. 2+ years of professional expertise in frontend development and UI/UX design, transforming ideas into pixel-perfect digital products. <span className="text-primary font-semibold">Currently at Yukti Herbs</span>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 glass-morphism text-foreground rounded-lg font-semibold transition-all duration-300 border border-primary/30 hover:border-primary/80 hover:bg-primary/10 flex items-center justify-center gap-2 group"
          >
            Get in Touch <Zap size={18} className="group-hover:rotate-12 transition-transform" />
          </a>
        </div>

        <div className="flex gap-3 pt-4 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: '#', label: 'Email' },
          ].map(({ icon: Icon, href, label }, i) => (
            <a
              key={label}
              href={href}
              title={label}
              className="p-3 rounded-lg glass-morphism border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 group hover:scale-110 hover:shadow-lg"
            >
              <Icon size={20} className="group-hover:rotate-12 group-hover:scale-125 transition-transform duration-300" />
            </a>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-4 mt-20 pt-12 border-t border-border/20 animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
          {[
            { value: '2+', label: 'Years Experience', delay: 0 },
            { value: '40+', label: 'UI/UX Designs', delay: 1 },
            { value: '4', label: 'Major Projects', delay: 2 },
          ].map((stat, i) => (
            <div 
              key={i} 
              className="interactive-card bg-gradient-to-br from-card/60 to-card/30 border border-primary/20 rounded-lg p-4 md:p-6 text-center hover:border-primary/60 group"
              style={{ animationDelay: `${0.8 + stat.delay * 0.1}s` }}
            >
              <p className="text-2xl md:text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground mt-2 group-hover:text-foreground transition-colors">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
