"use client"

import { useState, useEffect } from 'react'
import { Zap, Shield, Swords, Gamepad2, Trophy, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroGaming() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] w-full bg-[#050505] overflow-hidden flex items-center">
      {/* Neon Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] bg-purple-600/20 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Branding & Content */}
        <div className="text-center lg:text-left">
           <div className={cn(
             "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-600/10 border border-purple-500/20 text-purple-400 text-xs font-black uppercase tracking-[0.2em] mb-8 transition-all duration-1000",
             mounted ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
           )}>
             <Gamepad2 className="h-4 w-4" />
             <span>Join the Meta-Squad</span>
           </div>

           <h1 className={cn(
             "text-6xl md:text-9xl font-black italic tracking-tighter text-white uppercase leading-[0.9] mb-8 transition-all duration-1000 delay-200",
             mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
           )}>
             Next Gen <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 drop-shadow-[0_0_30px_rgba(236,72,153,0.3)]">
               Gaming.
             </span>
           </h1>

           <p className={cn(
             "text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed transition-all duration-1000 delay-400",
             mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
           )}>
             Dive into ultra-realistic worlds with zero latency. 
             Join millions of players in the most immersive cloud gaming experience ever built.
           </p>

           <div className={cn(
             "flex flex-wrap justify-center lg:justify-start gap-4 transition-all duration-1000 delay-600",
             mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
           )}>
             <button className="px-10 py-5 bg-purple-600 hover:bg-purple-700 text-white font-black italic uppercase tracking-widest rounded-xl shadow-[0_0_40px_rgba(147,51,234,0.4)] transition-all active:scale-95 flex items-center gap-3 group">
               Play Now <Swords className="h-5 w-5 group-hover:rotate-12 transition-transform" />
             </button>
             <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black italic uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all flex items-center gap-3">
               Leaderboards <Trophy className="h-5 w-5 text-yellow-400" />
             </button>
           </div>
        </div>

        {/* Right: Abstract Gaming Visual */}
        <div className={cn(
          "relative hidden lg:block transition-all duration-[2000ms] delay-800",
          mounted ? "scale-100 opacity-100 rotate-0" : "scale-50 opacity-0 rotate-12"
        )}>
           <div className="relative aspect-square w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-[40px] rotate-6 opacity-20 blur-2xl animate-pulse" />
              <div className="relative h-full w-full bg-[#111] border border-white/10 rounded-[40px] overflow-hidden group">
                 {/* Mock UI Overlay */}
                 <div className="absolute top-8 left-8 right-8 flex justify-between">
                    <div className="h-2 w-24 bg-white/20 rounded-full" />
                    <div className="flex gap-2">
                       <div className="h-4 w-4 rounded-full bg-red-500 animate-ping" />
                       <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Live Now</span>
                    </div>
                 </div>
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-48 w-48">
                       <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-30 animate-pulse" />
                       <Gamepad2 className="relative h-full w-full text-white/10" strokeWidth={0.5} />
                    </div>
                 </div>
                 <div className="absolute bottom-8 left-8 right-8">
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-[75%] animate-shimmer" />
                    </div>
                    <div className="flex justify-between mt-3 text-[10px] font-black text-white/40 uppercase tracking-widest">
                       <span>Loading Assets</span>
                       <span>75%</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </section>
  )
}
