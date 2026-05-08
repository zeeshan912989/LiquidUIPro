"use client"

import { useState, useEffect } from 'react'
import { Zap, Shield, Swords, Gamepad2, Cpu, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroCyberpunk() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden flex items-center">
      
      {/* Neon Scanning Lines Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-[200%] bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent animate-scan" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 h-96 w-96 bg-cyan-500/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 bg-fuchsia-600/20 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-8 w-full">
         <div className="max-w-4xl">
            <div className={cn(
              "inline-flex items-center gap-3 px-4 py-1 rounded-sm bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8 transition-all duration-1000",
              mounted ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            )}>
              <Cpu className="h-4 w-4" />
              <span>System Status: Optimal // Neo-Tokyo v4.0</span>
            </div>

            <h1 className={cn(
              "text-7xl md:text-[10rem] font-black italic tracking-tighter text-white uppercase leading-[0.8] mb-12 transition-all duration-1000 delay-200",
              mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            )}>
              No <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-cyan-400 bg-[length:200%_auto] animate-gradient-flow drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                Limits.
              </span>
            </h1>

            <div className={cn(
              "flex flex-col md:flex-row items-start gap-12 transition-all duration-1000 delay-400",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}>
               <div className="max-w-md">
                  <p className="text-xl text-cyan-100/60 font-medium leading-relaxed mb-10 border-l-2 border-fuchsia-500 pl-6">
                    Enter the neon wasteland. Upgrade your consciousness. 
                    The future is not just arriving—it's being rewritten by you.
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <button className="relative group px-10 py-5 bg-cyan-500 text-black font-black uppercase tracking-widest text-xs skew-x-[-12deg] hover:bg-fuchsia-500 transition-colors">
                       <span className="inline-block skew-x-[12deg] flex items-center gap-3">
                         Enter Matrix <ArrowRight className="h-5 w-5" />
                       </span>
                       {/* Button Glitch Effect */}
                       <div className="absolute inset-0 border border-cyan-400 translate-x-2 translate-y-2 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform opacity-50" />
                    </button>
                    <button className="px-10 py-5 border border-cyan-500/30 text-cyan-400 font-black uppercase tracking-widest text-xs skew-x-[-12deg] hover:bg-cyan-500/10 transition-all">
                       <span className="inline-block skew-x-[12deg]">Hardware Log</span>
                    </button>
                  </div>
               </div>

               {/* Stats / Data Feed */}
               <div className="hidden lg:block space-y-6 flex-1">
                  {[
                    { label: 'Neural Bandwidth', val: '1.2 PB/s' },
                    { label: 'Uptime Integrity', val: '99.999%' },
                    { label: 'Signal Strength', val: 'MAX' }
                  ].map((s, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-white/5 border border-white/5 backdrop-blur-md rounded-sm group hover:border-cyan-500/30 transition-colors">
                       <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{s.label}</span>
                       <span className="text-xs font-black text-cyan-400">{s.val}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      {/* Decorative Glitch Text Side Bar */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-12 text-[10px] font-black text-white/10 uppercase tracking-[1em] vertical-text hidden xl:flex">
         <span>PROTOCOL: DELTA</span>
         <span>SECURE_NODE_904</span>
         <span>ACCESS: GRANTED</span>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(0%); }
        }
        @keyframes gradient-flow {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .animate-scan {
          animation: scan 10s linear infinite;
        }
        .animate-gradient-flow {
          animation: gradient-flow 4s linear infinite;
        }
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  )
}
