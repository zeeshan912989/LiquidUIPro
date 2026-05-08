"use client"

import { useState, useEffect } from 'react'
import { Sparkles, Shield, Zap, ArrowRight, Layers, Bell, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroFloatingGlass() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative h-screen w-full bg-[#f0f4f8] overflow-hidden flex items-center justify-center">
      
      {/* Background Animated Gradients */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/4 left-1/4 h-[600px] w-[600px] bg-blue-400/30 blur-[120px] rounded-full animate-float-slow" />
         <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] bg-purple-400/30 blur-[120px] rounded-full animate-float-medium" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] bg-pink-300/20 blur-[140px] rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-8 w-full">
         <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
            
            {/* Left: Content Card (Glass) */}
            <div className={cn(
              "flex-1 bg-white/40 backdrop-blur-3xl rounded-[64px] border border-white/60 p-12 lg:p-20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] transition-all duration-1000",
              mounted ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
            )}>
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 text-xs font-bold uppercase tracking-widest mb-10">
                  <Shield className="h-4 w-4" />
                  <span>Next-Gen Security Interface</span>
               </div>
               
               <h1 className="text-6xl lg:text-8xl font-black text-[#1a202c] tracking-tighter leading-none mb-10">
                  Clarity <br />
                  <span className="text-blue-500">Defined.</span>
               </h1>

               <p className="text-xl text-slate-600 font-medium mb-12 leading-relaxed max-w-lg">
                  A revolutionary glass-based interface designed for modern workflows. 
                  Beautifully transparent, incredibly powerful.
               </p>

               <div className="flex flex-wrap gap-6">
                  <button className="px-12 py-5 bg-blue-600 text-white font-bold rounded-full shadow-2xl shadow-blue-200 hover:scale-105 transition-all flex items-center gap-3">
                     Explore Dashboard <ArrowRight className="h-5 w-5" />
                  </button>
                  <button className="h-16 w-16 bg-white/60 backdrop-blur-xl border border-white flex items-center justify-center rounded-full text-slate-600 hover:bg-white transition-all shadow-xl">
                     <Settings className="h-6 w-6" />
                  </button>
               </div>
            </div>

            {/* Right: Floating Glass UI Elements */}
            <div className={cn(
              "flex-1 relative h-[600px] hidden lg:flex items-center justify-center transition-all duration-1000 delay-400",
              mounted ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            )}>
               {/* Main Card */}
               <div className="relative h-96 w-72 bg-white/60 backdrop-blur-2xl rounded-[48px] border border-white/80 shadow-2xl p-10 animate-float-slow">
                  <div className="h-12 w-12 bg-blue-500 rounded-2xl mb-8 flex items-center justify-center text-white">
                     <Zap className="h-6 w-6" />
                  </div>
                  <div className="space-y-4">
                     <div className="h-4 w-full bg-blue-500/10 rounded-full" />
                     <div className="h-4 w-2/3 bg-blue-500/10 rounded-full" />
                     <div className="h-24 w-full bg-blue-500/5 rounded-3xl mt-8" />
                  </div>
               </div>

               {/* Smaller Floating Glass Cards */}
               <div className="absolute -top-10 -right-10 h-48 w-48 bg-white/40 backdrop-blur-xl rounded-[40px] border border-white/60 shadow-2xl p-8 flex flex-col justify-between animate-float-medium">
                  <div className="h-10 w-10 bg-green-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                     <Bell className="h-5 w-5" />
                  </div>
                  <div>
                     <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Status</p>
                     <p className="text-lg font-black text-slate-900 italic">ACTIVE</p>
                  </div>
               </div>

               <div className="absolute bottom-10 -left-10 h-40 w-40 bg-white/50 backdrop-blur-3xl rounded-[32px] border border-white/80 shadow-2xl p-6 flex flex-col justify-center items-center animate-float-slow delay-700">
                  <Layers className="h-8 w-8 text-indigo-500 mb-4" />
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">3 LAYERS</p>
               </div>
            </div>
         </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
      `}</style>
    </section>
  )
}
