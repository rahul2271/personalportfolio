import { Github, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react'
import { SectionMeshBg } from '@/components/section-mesh-bg'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/30 py-16 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-background to-background/95">
      <div className="absolute inset-0 -z-10">
        <SectionMeshBg />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 mb-12 pb-12 border-b border-border/30">
          <div>
            <a href="#" className="inline-block mb-6">
              <span className="text-lg font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent hover:via-foreground transition-all">
                Rahul Chauhan
              </span>
            </a>
            <p className="text-muted-foreground max-w-xs leading-relaxed">Frontend developer and UI/UX designer crafting beautiful, performant web experiences.</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Navigation</h4>
              <ul className="space-y-2 text-sm">
                {['About', 'Work', 'Designs', 'Contact'].map(item => (
                  <li key={item}><a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
              <ul className="space-y-2">
                {[
                  { icon: Github, label: 'GitHub', href: '#' },
                  { icon: Linkedin, label: 'LinkedIn', href: '#' },
                  { icon: Mail, label: 'Email', href: '#' },
                ].map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm">
                      <Icon size={16} /> {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-1">© {currentYear} Rahul Chauhan. Made with <Heart size={14} className="text-primary" /> and code.</p>
          <p>Designed & built with React, Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
