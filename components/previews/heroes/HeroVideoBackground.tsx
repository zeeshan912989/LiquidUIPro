"use client"

import { useState, useEffect } from 'react'
import { Play, Volume2, VolumeX, ArrowRight, MousePointer2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroVideoBackground() {
  const [mounted, setMounted] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      
      {/* Fullscreen Video Background (Mock with Image + Overlay for Preview) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 z-10" />
        <div 
          className="h-full w-full bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-[20s] linear"
          style={{ transform: mounted ? 'scale(1.2)' : 'scale(1)' }}
        />
        {/* Animated Particles / Noise Overlay */}
        <div className="absolute inset-0 z-20 opacity-30 pointer-events-none mix-blend-overlay bg-[url('https://media.giphy.com/media/oEI9uWU6t2OAM/giphy.gif')] bg-repeat" />
      </div>

      {/* Content Container */}
      <div className="relative z-30 mx-auto max-w-[1440px] px-6 text-center text-white">
         
         <div className={cn(
           "mb-8 flex items-center justify-center gap-4 transition-all duration-1000",
           mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
         )}>
           <div className="h-[2px] w-8 bg-blue-500" />
           <span className="text-sm font-black uppercase tracking-[0.4em]">Cinematic Experience</span>
           <div className="h-[2px] w-8 bg-blue-500" />
         </div>

         <h1 className={cn(
           "text-6xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mb-12 transition-all duration-1000 delay-200",
           mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
         )}>
           Feel the <br />
           <span className="text-transparent border border-white px-4">Motion.</span>
         </h1>

         <p className={cn(
           "text-lg md:text-2xl font-light text-white/70 max-w-2xl mx-auto mb-16 leading-relaxed transition-all duration-1000 delay-400",
           mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
         )}>
           Our new performance gear is engineered to move with you. 
           Uncompromising quality. Unlimited potential.
         </p>

         <div className={cn(
           "flex flex-col sm:flex-row items-center justify-center gap-8 transition-all duration-1000 delay-600",
           mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
         )}>
            <button className="px-12 py-5 bg-white text-black font-black uppercase italic tracking-widest text-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
              Shop Now <ArrowRight className="h-5 w-5" />
            </button>
            <button className="px-12 py-5 border border-white/30 backdrop-blur-md text-white font-black uppercase italic tracking-widest text-sm hover:bg-white hover:text-black transition-all flex items-center gap-3">
              Watch Film <Play className="h-4 w-4 fill-current" />
            </button>
         </div>
      </div>

      {/* Floating Controls */}
      <div className="absolute bottom-12 right-12 z-40 flex items-center gap-4">
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="h-12 w-12 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/10 transition-all"
        >
          {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
      </div>

      {/* Mouse Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-4 opacity-40">
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-10 w-6 border-2 border-white rounded-full relative flex justify-center">
           <div className="h-2 w-1 bg-white rounded-full mt-2 animate-bounce-mouse" />
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-mouse {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(15px); opacity: 0.2; }
        }
        .animate-bounce-mouse {
          animation: bounce-mouse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
