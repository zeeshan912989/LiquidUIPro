"use client"

import { useState, useEffect } from 'react'
import { ArrowRight, ShoppingBag, Globe, Send, MoveRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroStreetwear() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] w-full bg-[#0a0a0a] overflow-hidden flex flex-col">
      
      {/* Massive Background Text (Marquee Style Mock) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none z-0">
         <h2 className="text-[20vw] font-black text-white/[0.03] uppercase tracking-tighter leading-none whitespace-nowrap animate-marquee">
            URBAN ESSENTIALS • UNTAMED SPIRIT • 2024 DROP • 
         </h2>
      </div>

      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-end lg:items-center px-8 lg:px-24 py-24">
         
         {/* Left: Product Image with Offset Frame */}
         <div className={cn(
           "flex-1 relative mb-20 lg:mb-0 transition-all duration-[2000ms]",
           mounted ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
         )}>
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto lg:mx-0">
               {/* Decorative Frames */}
               <div className="absolute inset-0 border border-white/20 translate-x-4 translate-y-4" />
               <div className="absolute inset-0 border border-white/10 -translate-x-4 -translate-y-4" />
               
               <div className="relative h-full w-full bg-[#151515] overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-[4s] group-hover:scale-110" />
                  
                  {/* Floating Labels */}
                  <div className="absolute top-6 left-6 px-4 py-1.5 bg-white text-black text-[10px] font-black uppercase tracking-widest">
                     In Stock
                  </div>
                  <div className="absolute bottom-6 right-6 px-4 py-1.5 bg-black text-white border border-white/20 text-[10px] font-black uppercase tracking-widest">
                     NYC / TOKYO
                  </div>
               </div>
            </div>
         </div>

         {/* Right: Aggressive Content */}
         <div className="flex-1 text-right">
            <div className={cn(
              "flex items-center justify-end gap-3 text-white/40 text-xs font-black uppercase tracking-[0.4em] mb-12 transition-all duration-1000 delay-200",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}>
              <span className="h-[2px] w-12 bg-white/10" />
              <span>Available Globally</span>
            </div>

            <h1 className={cn(
              "text-7xl md:text-[9rem] font-black italic text-white uppercase tracking-tighter leading-[0.8] mb-12 transition-all duration-1000 delay-400",
              mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            )}>
              RAW <br />
              POWER.
            </h1>

            <p className={cn(
              "text-lg text-white/50 max-w-md ml-auto mb-16 leading-tight transition-all duration-1000 delay-600",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}>
              Designed for the streets. Engineered for the soul. 
              The new collection features oversized silhouettes and premium heavy-duty fabrics.
            </p>

            <div className={cn(
              "flex justify-end gap-6 transition-all duration-1000 delay-800",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}>
               <button className="px-12 py-5 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-transparent hover:text-white ring-1 ring-white transition-all flex items-center gap-3">
                 Shop the Drop <ShoppingBag className="h-5 w-5" />
               </button>
            </div>

            {/* Bottom Footer Info */}
            <div className="mt-24 flex justify-end items-center gap-12 pt-12 border-t border-white/5">
               <div className="flex gap-6">
                 <Send className="h-5 w-5 text-white/20 hover:text-white transition-colors" />
                 <Globe className="h-5 w-5 text-white/20 hover:text-white transition-colors" />
               </div>
               <div className="flex items-center gap-4 text-[10px] font-black text-white/40 uppercase tracking-widest">
                  <span className="flex items-center gap-2">SCROLL <MoveRight className="h-4 w-4" /></span>
               </div>
            </div>
         </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translate(-50%, -50%) translateX(10%); }
          100% { transform: translate(-50%, -50%) translateX(-10%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite alternate;
        }
      `}</style>
    </section>
  )
}
