'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronRight, ChevronLeft, Sparkles } from 'lucide-react'
import { SectionMeshBg } from '@/components/section-mesh-bg'

export default function Designs() {
  const [currentPage, setCurrentPage] = useState(0)
  const designsPerPage = 6
  const containerRef = useRef<HTMLDivElement>(null)

  const designs = [
    {
      id: 1,
      title: 'Analytics Dashboard',
      category: 'Dashboard',
      image: '/analytics.png'
    },
    {
      id: 2,
      title: 'E-commerce Product Page',
      category: 'E-commerce',
      image: '/product.png'
    },
    {
      id: 3,
      title: 'SaaS Landing Page',
      category: 'Landing Page',
      image: '/saas.webp'
    },
    {
      id: 4,
      title: 'Fintech Mobile App',
      category: 'Mobile App',
      image: '/fintech.webp'
    },
    {
      id: 5,
      title: 'Admin Panel UI',
      category: 'Dashboard',
      image: '/adminpanel.webp'
    },
    {
      id: 6,
      title: 'Social Media App',
      category: 'Social',
      image: '/socialmedia.webp'
    },
    {
      id: 7,
      title: 'Startup Website UI',
      category: 'Landing Page',
      image: '/startup.webp'
    },
    {
      id: 8,
      title: 'Crypto Dashboard',
      category: 'SaaS',
      image: '/crypto.webp'
    },
    {
      id: 9,
      title: 'Food Delivery App',
      category: 'Mobile App',
      image: '/food.webp'
    },
    {
      id: 10,
      title: 'Shopify Store UI',
      category: 'E-commerce',
      image: '/shopify.webp'
    }
  ]

  const totalPages = Math.ceil(designs.length / designsPerPage)
  const startIndex = currentPage * designsPerPage
  const currentDesigns = designs.slice(startIndex, startIndex + designsPerPage)

  useEffect(() => {
    containerRef.current?.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.classList.add('animate-scaleIn')
    })
  }, [currentPage])

  return (
    <section
      ref={containerRef}
      id="designs"
      className="py-32 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-background to-background/95"
    >
      <div className="absolute inset-0 -z-10">
        <SectionMeshBg />
        <div
          className="absolute bottom-40 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-15 animate-blob"
          style={{ animationDelay: '3s' }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="animate-on-scroll mb-24">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-balance flex items-center gap-3">
            <Sparkles size={40} className="text-primary" />
            Design Portfolio
          </h2>
          <p className="text-lg text-muted-foreground">
            40+ UI/UX designs created during my internship at iNeuron, Bangalore
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentDesigns.map((design, i) => (
            <div
              key={design.id}
              className="animate-on-scroll interactive-card bg-card/50 border border-border/30 rounded-lg overflow-hidden hover:border-primary/50"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-muted/50 to-muted/20 aspect-video group-hover:from-primary/10 group-hover:to-accent/10 transition-colors">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <span className="text-white font-semibold text-sm">View Design</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-foreground mb-3">
                  {design.title}
                </h3>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-semibold border border-primary/30 hover:border-primary/50 transition-all">
                  {design.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="p-3 border border-border/50 rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                  currentPage === i
                    ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg'
                    : 'border border-border/50 hover:border-primary/50 hover:bg-card'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages - 1, currentPage + 1))
            }
            disabled={currentPage === totalPages - 1}
            className="p-3 border border-border/50 rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
