"use client"

import { useState, useEffect } from 'react'
import { ArrowRight, MoveRight, Globe, Send, ShoppingBag } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroMagazineEditorial() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen w-full bg-white text-black overflow-hidden py-12 lg:py-24">
      
      {/* Top Header Mock (Editorial Style) */}
      <div className="mx-auto max-w-[1800px] px-8 flex justify-between items-end border-b border-black pb-8 mb-16">
         <div className="text-[10px] font-black uppercase tracking-[0.4em]">ISSUE NO. 12 // AUTUMN 24</div>
         <div className="text-4xl font-black uppercase tracking-tighter italic">L'ELÉGANCE</div>
         <div className="text-[10px] font-black uppercase tracking-[0.4em] hidden md:block">PARIS / MILAN / NYC</div>
      </div>

      <div className="mx-auto max-w-[1800px] px-8 grid lg:grid-cols-12 gap-8 items-start">
         
         {/* Left: Content Block */}
         <div className="lg:col-span-4 order-2 lg:order-1">
            <h1 className={cn(
              "text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-12 transition-all duration-1000",
              mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            )}>
              The <br />
              New <br />
              <span className="italic font-light">Wave.</span>
            </h1>

            <p className={cn(
              "text-lg font-medium leading-tight mb-12 max-w-sm transition-all duration-1000 delay-200",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}>
              Exploring the intersection of modern minimalism and historical silhouettes. 
              A journey through the archives of high-fashion and street culture.
            </p>

            <div className={cn(
              "flex flex-col gap-6 transition-all duration-1000 delay-400",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}>
               <button className="flex items-center justify-between group px-8 py-6 bg-black text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black ring-1 ring-black transition-all">
                  Purchase Issue <ShoppingBag className="h-4 w-4 transition-transform group-hover:scale-125" />
               </button>
               <a href="#" className="flex items-center gap-4 text-xs font-black uppercase tracking-widest border-b border-black pb-2 hover:opacity-50 transition-all">
                  Read Editorial <MoveRight className="h-4 w-4" />
               </a>
            </div>
         </div>

         {/* Center: Main Image (Editorial Grid) */}
         <div className={cn(
           "lg:col-span-5 order-1 lg:order-2 transition-all duration-[1500ms] delay-600",
           mounted ? "opacity-100 scale-100" : "opacity-0 scale-110"
         )}>
            <div className="relative aspect-[3/4] w-full bg-gray-100 overflow-hidden group">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-[4s] group-hover:scale-110" />
               {/* Vertical Text Overlay */}
               <div className="absolute top-12 left-12 text-[10px] font-black text-white uppercase tracking-[0.8em] vertical-text">
                  SEASONAL ARCHIVE
               </div>
            </div>
         </div>

         {/* Right: Small Details / Secondary Image */}
         <div className="lg:col-span-3 order-3 space-y-12 pt-12 lg:pt-48">
            <div className={cn(
              "transition-all duration-1000 delay-800",
              mounted ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            )}>
               <h4 className="text-xs font-black uppercase tracking-widest mb-4">Photography By</h4>
               <p className="text-sm font-medium border-l-2 border-black pl-4">Arthur Gosse <br /> <span className="text-gray-400">@arthur_studio</span></p>
            </div>
            
            <div className={cn(
              "aspect-square bg-gray-50 overflow-hidden transition-all duration-1000 delay-1000",
              mounted ? "opacity-100" : "opacity-0"
            )}>
               <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer" />
            </div>

            <div className="flex gap-6">
               <Globe className="h-5 w-5" />
               <Send className="h-5 w-5" />
            </div>
         </div>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  )
}
