"use client"

import { useState, useEffect } from 'react'
import { Sparkles, Zap, Shield, Layers, ArrowRight, Grid, Smartphone, Watch, Laptop } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroBentoGrid() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] w-full bg-[#fbfbfd] py-24 flex items-center">
      <div className="mx-auto max-w-[1440px] px-8 w-full">
         <div className="grid lg:grid-cols-12 gap-6">
            
            {/* Main Center Card (Span 6) */}
            <div className={cn(
              "lg:col-span-6 row-span-2 bg-white rounded-[48px] border border-gray-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] p-12 flex flex-col justify-center transition-all duration-1000",
              mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            )}>
               <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-widest mb-8">
                  <Grid className="h-4 w-4" />
                  <span>Next Generation Ecosystem</span>
               </div>
               <h1 className="text-5xl lg:text-8xl font-bold tracking-tight text-[#1d1d1f] leading-none mb-8">
                  Unified. <br />
                  <span className="text-gray-300">Intelligent.</span>
               </h1>
               <p className="text-xl text-[#86868b] font-medium max-w-lg mb-12 leading-relaxed">
                  Every device, every app, perfectly synced. 
                  Experience a seamless transition between your digital and physical worlds.
               </p>
               <div className="flex gap-4">
                  <button className="px-10 py-4 bg-black text-white font-bold rounded-full hover:scale-105 transition-all">Get Started</button>
                  <button className="px-10 py-4 border border-gray-200 text-black font-bold rounded-full hover:bg-gray-50 transition-all">Learn more</button>
               </div>
            </div>

            {/* Feature Card 1 (Span 3) */}
            <div className={cn(
              "lg:col-span-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[40px] p-8 text-white flex flex-col justify-between transition-all duration-1000 delay-200",
              mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            )}>
               <Smartphone className="h-10 w-10 mb-8" />
               <div>
                  <h3 className="text-2xl font-bold mb-2">Mobile First</h3>
                  <p className="text-white/70 text-sm font-medium">Native performance on every screen size.</p>
               </div>
            </div>

            {/* Feature Card 2 (Span 3) */}
            <div className={cn(
              "lg:col-span-3 bg-white rounded-[40px] border border-gray-100 shadow-xl p-8 flex flex-col justify-between transition-all duration-1000 delay-400",
              mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            )}>
               <Watch className="h-10 w-10 text-orange-500 mb-8" />
               <div>
                  <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">Real-time</h3>
                  <p className="text-[#86868b] text-sm font-medium">Zero-latency sync across all devices.</p>
               </div>
            </div>

            {/* Wide Feature Card (Span 6) */}
            <div className={cn(
              "lg:col-span-6 bg-[#111] rounded-[48px] p-10 text-white flex flex-col lg:flex-row items-center gap-10 transition-all duration-1000 delay-600",
              mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            )}>
               <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4">Desktop Power</h3>
                  <p className="text-white/50 text-sm font-medium mb-8">Unleash full potential with our workstation-grade optimization.</p>
                  <a href="#" className="inline-flex items-center gap-2 text-indigo-400 font-bold hover:underline">Download Beta <ArrowRight className="h-4 w-4" /></a>
               </div>
               <div className="flex-1 h-32 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
                  <Laptop className="h-12 w-12 text-white/20" />
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}
