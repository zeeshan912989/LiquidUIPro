"use client"

import { useState, useEffect } from 'react'
import { Mountain, Wind, ChevronDown, ArrowRight, Map } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroParallaxScroll() {
  const [mounted, setMounted] = useState(false)
  const [scrollPos, setScrollPos] = useState(0)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrollPos(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-[120vh] w-full bg-[#0c141d] overflow-hidden flex flex-col justify-center">
      
      {/* Layered Parallax Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         {/* Deep Background (Stars/Sky) */}
         <div 
           className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-100 ease-out opacity-40"
           style={{ transform: `translateY(${scrollPos * 0.1}px) scale(1.1)` }}
         />
         
         {/* Mid Layer (Mountains) */}
         <div 
           className="absolute inset-0 bg-gradient-to-t from-[#0c141d] via-transparent to-transparent z-10"
           style={{ transform: `translateY(${scrollPos * 0.3}px)` }}
         />

         {/* Overlay Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-20 mx-auto max-w-[1440px] px-8 text-center text-white">
         <div className={cn(
           "mb-8 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-black uppercase tracking-[0.4em] transition-all duration-1000",
           mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
         )}>
           <Mountain className="h-4 w-4" />
           <span>The Great Outdoors</span>
         </div>

         <h1 
           className={cn(
             "text-7xl md:text-[12rem] font-black tracking-tighter uppercase leading-[0.8] mb-12 transition-all duration-1000 delay-200",
             mounted ? "translate-y-0 opacity-100 scale-100" : "translate-y-20 opacity-0 scale-95"
           )}
           style={{ transform: `translateY(${scrollPos * -0.2}px)` }}
         >
           Higher <br />
           <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20">Ground.</span>
         </h1>

         <p 
           className={cn(
             "text-xl text-white/50 max-w-2xl mx-auto mb-16 leading-relaxed transition-all duration-1000 delay-400",
             mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
           )}
           style={{ transform: `translateY(${scrollPos * -0.1}px)` }}
         >
           Adventure is calling. Our premium expedition gear is designed for the 
           harshest environments and the highest peaks.
         </p>

         <div 
           className={cn(
             "flex flex-wrap justify-center gap-8 transition-all duration-1000 delay-600",
             mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
           )}
           style={{ transform: `translateY(${scrollPos * -0.05}px)` }}
         >
            <button className="px-12 py-6 bg-white text-black font-black uppercase tracking-widest text-sm rounded-sm hover:scale-110 transition-all flex items-center gap-4 group shadow-2xl">
               Start Expedition <ArrowRight className="h-5 w-5" />
            </button>
            <button className="px-12 py-6 border border-white/20 text-white font-black uppercase tracking-widest text-sm rounded-sm hover:bg-white/10 transition-all flex items-center gap-4">
               Map Routes <Map className="h-5 w-5" />
            </button>
         </div>
      </div>

      {/* Floating Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/20 opacity-60 animate-bounce">
         <span className="text-[10px] font-black uppercase tracking-[0.6em]">Scroll</span>
         <ChevronDown className="h-5 w-5" />
      </div>

      {/* Stats Sidebar */}
      <div 
        className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-12 text-[10px] font-black text-white/20 uppercase tracking-[1em] vertical-text hidden lg:flex"
        style={{ transform: `translateY(${scrollPos * -0.4}px)` }}
      >
         <span className="flex items-center gap-4"><Wind className="h-4 w-4" /> 12KM/H</span>
         <span>ELEV: 2.4k M</span>
         <span>TEMP: -12°C</span>
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
