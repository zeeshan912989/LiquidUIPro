"use client"

import { useState, useEffect } from 'react'
import { Zap, Shield, Layers, ArrowRight, Play, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroAISaaS() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[85vh] w-full bg-[#030712] overflow-hidden py-24">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-indigo-600/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[800px] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className={cn(
            "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-blue-400 mb-8 transition-all duration-1000",
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Marketing v2.0</span>
          </div>

          <h1 className={cn(
            "text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 transition-all duration-1000 delay-200",
            mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          )}>
            Scale your brand <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              at the speed of AI.
            </span>
          </h1>

          <p className={cn(
            "text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-all duration-1000 delay-400",
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            Automate your entire social media workflow with our neural engine. 
            From content generation to viral trend analysis, we've got you covered.
          </p>

          <div className={cn(
            "flex flex-wrap justify-center lg:justify-start gap-6 transition-all duration-1000 delay-600",
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <button className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all active:scale-95 flex items-center gap-2 group">
              Start Free Trial <ArrowRight className="h-5 w-5 group-hover:translate-x-1" />
            </button>
            <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-md hover:bg-white/10 transition-all flex items-center gap-2">
              <Play className="h-5 w-5 fill-current" /> Watch Demo
            </button>
          </div>

          {/* Social Proof Stats */}
          <div className={cn(
            "mt-12 flex items-center justify-center lg:justify-start gap-12 border-t border-white/5 pt-12 transition-all duration-1000 delay-800",
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
             <div>
               <p className="text-2xl font-bold text-white">10M+</p>
               <p className="text-sm text-gray-500">Videos Generated</p>
             </div>
             <div>
               <p className="text-2xl font-bold text-white">50k</p>
               <p className="text-sm text-gray-500">Active Brands</p>
             </div>
          </div>
        </div>

        {/* Right: Dashboard Mockup */}
        <div className={cn(
          "flex-1 relative transition-all duration-1000 delay-1000",
          mounted ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
        )}>
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-2xl">
             <div className="aspect-[4/3] rounded-2xl bg-[#0a0f1d] border border-white/5 overflow-hidden">
                {/* Dashboard UI Mock */}
                <div className="p-8 space-y-6">
                   <div className="flex justify-between items-center">
                      <div className="h-4 w-32 bg-white/10 rounded-full" />
                      <div className="flex gap-2">
                         <div className="h-8 w-8 rounded-full bg-blue-500/20" />
                         <div className="h-8 w-8 rounded-full bg-white/10" />
                      </div>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="h-32 rounded-2xl bg-gradient-to-br from-blue-500/20 to-transparent border border-white/5 p-6">
                         <Zap className="h-6 w-6 text-blue-400 mb-4" />
                         <div className="h-2 w-full bg-white/10 rounded-full" />
                      </div>
                      <div className="h-32 rounded-2xl bg-white/5 border border-white/5 p-6">
                         <Layers className="h-6 w-6 text-purple-400 mb-4" />
                         <div className="h-2 w-full bg-white/10 rounded-full" />
                      </div>
                   </div>
                   <div className="h-48 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center">
                      <div className="h-32 w-full px-8 flex items-end gap-2">
                         {[40, 70, 45, 90, 60, 30, 80].map((h, i) => (
                           <div key={i} className="flex-1 bg-blue-500/30 rounded-t-lg" style={{ height: `${h}%` }} />
                         ))}
                      </div>
                   </div>
                </div>
             </div>

             {/* Floating Cards */}
             <div className="absolute -left-12 top-1/2 bg-white rounded-2xl p-4 shadow-2xl animate-bounce-slow flex items-center gap-4">
                <div className="h-10 w-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                   <Sparkles className="h-5 w-5" />
                </div>
                <div>
                   <p className="text-xs font-bold text-gray-900">AI Boost Active</p>
                   <p className="text-[10px] text-gray-500">Viral potential: 98%</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
