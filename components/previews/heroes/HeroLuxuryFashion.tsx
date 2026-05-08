"use client"

import { useState, useEffect } from 'react'
import { ArrowRight, Play } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroLuxuryFashion() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-black text-white">
      {/* Background Media (Mocked with CSS gradient/pattern for preview) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/60 z-10" />
        <div 
          className="h-full w-full bg-[url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-[10s] ease-linear scale-110"
          style={{ transform: mounted ? 'scale(1)' : 'scale(1.1)' }}
        />
      </div>

      {/* Floating Elements (Abstract) */}
      <div className="absolute top-1/4 left-10 h-32 w-[1px] bg-white/20 hidden lg:block" />
      <div className="absolute bottom-1/4 right-10 h-32 w-[1px] bg-white/20 hidden lg:block" />

      {/* Content Container */}
      <div className="relative z-20 mx-auto flex h-full max-w-[1440px] flex-col items-center justify-center px-6 text-center">
        
        {/* Top Tagline */}
        <div className={cn(
          "mb-6 overflow-hidden transition-all duration-1000",
          mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          <span className="text-xs font-bold uppercase tracking-[0.6em] text-white/60">
            Autumn / Winter Collection 2024
          </span>
        </div>

        {/* Main Title */}
        <h1 className={cn(
          "mb-8 max-w-4xl text-5xl font-extralight uppercase tracking-[0.2em] leading-tight md:text-8xl transition-all duration-1000 delay-300",
          mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        )}>
          Essence of <br />
          <span className="font-serif italic font-normal tracking-normal text-white">Modern Form</span>
        </h1>

        {/* Description */}
        <p className={cn(
          "mb-12 max-w-xl text-sm font-light leading-relaxed text-white/70 tracking-wide transition-all duration-1000 delay-500",
          mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          Discover a curated selection of architectural silhouettes and premium textures designed for the discerning individual. Handcrafted in our Paris atelier.
        </p>

        {/* Call to Actions */}
        <div className={cn(
          "flex flex-col sm:flex-row items-center gap-6 transition-all duration-1000 delay-700",
          mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          <button className="group relative overflow-hidden bg-white px-10 py-4 text-[10px] font-bold uppercase tracking-[0.3em] text-black transition-all hover:bg-transparent hover:text-white ring-1 ring-white">
            <span className="relative z-10 flex items-center gap-2">
              Shop Collection <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          <button className="group flex items-center gap-3 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:opacity-70 transition-opacity">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 group-hover:bg-white group-hover:text-black transition-colors">
              <Play className="h-3 w-3 fill-current" />
            </div>
            Watch Film
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
           <div className="h-16 w-[1px] bg-gradient-to-b from-white/40 to-transparent relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-slide-down" />
           </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slide-down {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-slide-down {
          animation: slide-down 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  )
}
