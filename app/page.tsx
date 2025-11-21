'use client'

import React, { useState } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Designs from '@/components/designs'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import NetworkBackground from '@/components/network-background'

export default function Home() {
  return (
    <main className="min-h-screen ">
      <NetworkBackground />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Designs />
      <Contact />
      <Footer />
    </main>
  )
}
