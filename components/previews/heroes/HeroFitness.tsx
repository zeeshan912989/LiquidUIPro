"use client"

import { useState, useEffect } from 'react'
import { Zap, Flame, Trophy, ArrowRight, Play, Activity } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroFitness() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative h-screen w-full bg-[#050505] overflow-hidden flex items-center">
      
      {/* Dynamic Energy Background (Mocked with Blur + Motion) */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.15)_0%,transparent_70%)] animate-pulse" />
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-[10s] ease-linear scale-105 opacity-60" 
              style={{ transform: mounted ? 'scale(1)' : 'scale(1.1)' }}
         />
         {/* Speed Lines Overlay */}
         <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,transparent_0%,white_50%,transparent_100%)] bg-[length:200%_100%] animate-speed-lines" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-8 w-full grid lg:grid-cols-2 gap-16 items-center">
         
         {/* Left: Aggressive Content */}
         <div className="text-center lg:text-left">
            <div className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-black uppercase tracking-[0.4em] mb-8 transition-all duration-1000",
              mounted ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            )}>
              <Activity className="h-4 w-4" />
              <span>Unleash Your Potential</span>
            </div>

            <h1 className={cn(
              "text-7xl md:text-[10rem] font-black italic text-white uppercase tracking-tighter leading-[0.8] mb-12 transition-all duration-1000 delay-200",
              mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            )}>
              Push <br />
              <span className="text-transparent border-4 border-yellow-500 px-6">Harder.</span>
            </h1>

            <p className={cn(
              "text-xl text-white/50 max-w-lg mx-auto lg:mx-0 mb-12 leading-relaxed transition-all duration-1000 delay-400",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}>
              Engineered for those who refuse to settle. 
              Our new performance line provides the support and agility you need to break your records.
            </p>

            <div className={cn(
              "flex flex-wrap justify-center lg:justify-start gap-6 transition-all duration-1000 delay-600",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}>
               <button className="px-12 py-5 bg-yellow-500 hover:bg-yellow-600 text-black font-black uppercase italic tracking-widest text-sm rounded-sm transition-all active:scale-95 flex items-center gap-3">
                 Join the Squad <ArrowRight className="h-5 w-5" />
               </button>
               <button className="px-12 py-5 border border-white/20 text-white font-black uppercase italic tracking-widest text-sm rounded-sm hover:bg-white hover:text-black transition-all flex items-center gap-3">
                 Watch Training <Play className="h-4 w-4 fill-current" />
               </button>
            </div>
         </div>

         {/* Right: Performance Metrics UI */}
         <div className={cn(
           "relative hidden lg:block transition-all duration-1000 delay-800",
           mounted ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
         )}>
            <div className="grid grid-cols-2 gap-6">
               {[
                 { icon: Flame, label: 'Calories', val: '850', color: 'text-orange-500' },
                 { icon: Trophy, label: 'Achievements', val: '12', color: 'text-yellow-500' },
                 { icon: Zap, label: 'Energy', val: '98%', color: 'text-blue-500' },
                 { icon: Activity, label: 'BPM', val: '165', color: 'text-red-500' }
               ].map((stat, i) => (
                 <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all group">
                    <stat.icon className={cn("h-8 w-8 mb-6 transition-transform group-hover:scale-110", stat.color)} />
                    <p className="text-4xl font-black text-white mb-1">{stat.val}</p>
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">{stat.label}</p>
                 </div>
               ))}
            </div>
            
            {/* Absolute Progress Indicator */}
            <div className="absolute -bottom-10 -right-10 bg-yellow-500 p-8 rounded-[40px] shadow-2xl animate-bounce-slow">
               <p className="text-[10px] font-black text-black uppercase tracking-widest mb-1">Weekly Goal</p>
               <p className="text-2xl font-black text-black">92% DONE</p>
            </div>
         </div>
      </div>

      <style jsx>{`
        @keyframes speed-lines {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-speed-lines {
          animation: speed-lines 4s linear infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
