"use client"

import { useState, useEffect } from 'react'
import { ArrowRight, Star, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroJewelryPremium() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative h-[90vh] min-h-[700px] w-full bg-[#0a0a0a] overflow-hidden flex items-center">
      {/* Cinematic Background Image (Mock) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/40 to-[#0a0a0a] z-10" />
        <div 
          className="h-full w-full bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-[20000ms] scale-110"
          style={{ transform: mounted ? 'scale(1)' : 'scale(1.2)' }}
        />
        {/* Soft Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-20 mx-auto max-w-[1440px] px-8 flex flex-col md:flex-row items-center justify-between w-full">
        
        {/* Left: Content */}
        <div className="max-w-2xl text-center md:text-left mb-12 md:mb-0">
          <div className={cn(
            "flex items-center justify-center md:justify-start gap-2 text-[#d4af37] mb-8 transition-all duration-1000",
            mounted ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          )}>
            <div className="h-[1px] w-12 bg-[#d4af37]/30" />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em]">The Eternal Collection</span>
            <div className="h-[1px] w-12 bg-[#d4af37]/30" />
          </div>

          <h1 className={cn(
            "text-6xl md:text-8xl font-serif text-white leading-tight mb-8 transition-all duration-1000 delay-200",
            mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          )}>
            Timeless <br />
            <span className="italic font-light text-[#d4af37]">Brilliance.</span>
          </h1>

          <p className={cn(
            "text-lg text-white/60 font-light max-w-lg mb-12 leading-relaxed tracking-wide transition-all duration-1000 delay-400",
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            Hand-crafted masterpieces that celebrate your unique story. 
            Discover the artistry of 18K gold and ethically sourced diamonds.
          </p>

          <div className={cn(
            "flex flex-wrap justify-center md:justify-start gap-6 transition-all duration-1000 delay-600",
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <button className="px-12 py-5 bg-[#d4af37] hover:bg-[#c5a02e] text-black font-bold uppercase tracking-[0.2em] text-[10px] transition-all group flex items-center gap-3">
              Explore Masterpieces <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
            </button>
            <button className="px-12 py-5 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-black transition-all">
              Our Craftsmanship
            </button>
          </div>
        </div>

        {/* Right: Gold Glassmorphism Product Card */}
        <div className={cn(
          "relative transition-all duration-[1500ms] delay-800",
          mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        )}>
          <div className="relative w-80 p-8 rounded-3xl border border-[#d4af37]/20 bg-white/5 backdrop-blur-2xl shadow-[0_40px_80px_rgba(0,0,0,0.5)] group overflow-hidden">
             {/* Inner Glow */}
             <div className="absolute -top-1/2 -right-1/2 h-full w-full bg-[#d4af37]/10 blur-[60px] rounded-full" />
             
             <div className="relative z-10 text-center">
                <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-white/10 to-transparent mb-8 flex items-center justify-center p-4">
                    <div className="h-32 w-32 relative group-hover:scale-110 transition-transform duration-700">
                        <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-[#d4af37] animate-pulse" />
                        <div className="h-full w-full border-[2px] border-[#d4af37]/40 rounded-full flex items-center justify-center p-4">
                           <div className="h-full w-full bg-[#d4af37] rounded-full shadow-[0_0_30px_rgba(212,175,55,0.4)]" />
                        </div>
                    </div>
                </div>
                <h4 className="text-white font-serif text-xl mb-2">Solaris Necklace</h4>
                <p className="text-[#d4af37] font-bold text-sm tracking-widest uppercase mb-6">$4,950</p>
                <div className="flex items-center justify-center gap-1 text-[#d4af37] mb-8">
                   {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-current" />)}
                </div>
                <button className="w-full py-4 rounded-xl border border-white/10 text-white text-[9px] font-bold uppercase tracking-widest hover:bg-[#d4af37] hover:text-black transition-all">
                  Quick View
                </button>
             </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -left-6 h-24 w-24 border-b border-l border-[#d4af37]/30" />
          <div className="absolute -top-6 -right-6 h-24 w-24 border-t border-r border-[#d4af37]/30" />
        </div>
      </div>
    </section>
  )
}
