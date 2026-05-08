"use client"

import { useState, useEffect } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroScandinavianMinimal() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[85vh] w-full bg-[#fdfdfc] py-24 flex items-center overflow-hidden">
      
      {/* Decorative Minimalist Shapes */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#f4f4f1] mix-blend-multiply blur-3xl opacity-60" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#ecebe4] mix-blend-multiply blur-3xl opacity-60" />

      <div className="mx-auto max-w-[1440px] px-8 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Content */}
        <div className="text-center lg:text-left">
           <div className={cn(
             "mb-8 inline-block px-4 py-1 rounded-full bg-[#f0f0ed] text-[#8e8d82] text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-1000",
             mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
           )}>
             Hygge Collection 2024
           </div>

           <h1 className={cn(
             "text-5xl md:text-7xl font-serif font-light text-[#2a2a2a] leading-tight mb-10 transition-all duration-1000 delay-200",
             mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
           )}>
             Harmony in <br />
             <span className="italic">Simplicity.</span>
           </h1>

           <p className={cn(
             "text-lg text-[#6b6a61] max-w-lg mx-auto lg:mx-0 mb-12 leading-relaxed transition-all duration-1000 delay-400",
             mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
           )}>
             Thoughtfully designed objects for your everyday rituals. 
             Natural materials meets Nordic craftsmanship in our most sustainable collection yet.
           </p>

           <div className={cn(
             "flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 transition-all duration-1000 delay-600",
             mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
           )}>
              <button className="px-10 py-5 bg-[#2a2a2a] hover:bg-[#404040] text-white font-medium text-xs uppercase tracking-[0.2em] transition-all flex items-center gap-3">
                Explore Studio <ArrowRight className="h-4 w-4" />
              </button>
              <a href="#" className="text-xs font-bold uppercase tracking-[0.2em] text-[#2a2a2a] border-b border-[#2a2a2a] pb-1 hover:opacity-50 transition-opacity">
                View Lookbook
              </a>
           </div>
        </div>

        {/* Right: Minimalist Image Grid */}
        <div className={cn(
          "relative grid grid-cols-2 gap-4 transition-all duration-1000 delay-800",
          mounted ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
        )}>
           <div className="space-y-4">
              <div className="aspect-[4/5] bg-[#f0f0ed] rounded-[2px] shadow-sm relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[url('/assets/images/hero1.jpeg')] bg-cover bg-center transition-transform duration-[3s] group-hover:scale-105" />
              </div>
              <div className="aspect-square bg-[#f4f4f1] rounded-[2px] shadow-sm relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[url('/assets/images/hero-penthouse.jpg')] bg-cover bg-center transition-transform duration-[3s] group-hover:scale-105" />
              </div>
           </div>
           <div className="pt-12 space-y-4">
              <div className="aspect-square bg-[#ecebe4] rounded-[2px] shadow-sm relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[url('/assets/images/hero-liquid-gold.jpg')] bg-cover bg-center transition-transform duration-[3s] group-hover:scale-105" />
              </div>
              <div className="aspect-[4/5] bg-[#fdfdfc] rounded-[2px] shadow-sm relative overflow-hidden group border border-[#f0f0ed]">
                 <div className="absolute inset-0 bg-[url('/assets/images/hero1.jpeg')] bg-cover bg-center transition-transform duration-[3s] group-hover:scale-105" />
              </div>
           </div>
        </div>
      </div>

      {/* Subtle Scroll Down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
         <span className="text-[9px] font-bold uppercase tracking-[0.4em]">Rituals</span>
         <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  )
}
