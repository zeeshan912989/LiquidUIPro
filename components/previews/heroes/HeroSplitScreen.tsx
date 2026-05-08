"use client"

import { useState, useEffect } from 'react'
import { ArrowRight, ChevronRight, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroSplitScreen() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen w-full flex flex-col lg:flex-row bg-white overflow-hidden">
      
      {/* Left: Content Area */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-24 py-24 bg-[#faf9f6]">
        <div className={cn(
          "max-w-xl transition-all duration-1000",
          mounted ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
        )}>
          <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-[0.3em] mb-8">
            <Star className="h-4 w-4 fill-current" /> 
            <span>Premium Home Decor</span>
          </div>

          <h1 className="text-5xl lg:text-8xl font-serif text-slate-900 leading-[1.1] mb-8">
            Elevate Your <br />
            <span className="italic font-light">Living Space.</span>
          </h1>

          <p className="text-lg text-slate-500 mb-12 leading-relaxed font-light">
            Crafted from sustainable materials, our new collection brings 
            tranquility and modern sophistication to every corner of your home. 
            Experience the harmony of form and function.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-amber-800 transition-colors flex items-center justify-center gap-3 group">
              Browse Collection <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
            </button>
            <a href="#" className="flex items-center gap-2 text-sm font-bold border-b-2 border-slate-200 pb-1 hover:border-amber-700 transition-colors">
              Our Sustainability Story
            </a>
          </div>

          {/* Featured Stats */}
          <div className="mt-20 grid grid-cols-2 gap-12 pt-12 border-t border-slate-200">
             <div>
               <p className="text-3xl font-serif mb-2">12k+</p>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Happy Homes</p>
             </div>
             <div>
               <p className="text-3xl font-serif mb-2">15+</p>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Awards</p>
             </div>
          </div>
        </div>
      </div>

      {/* Right: Media Area */}
      <div className="flex-1 relative h-[50vh] lg:h-auto overflow-hidden group">
        <div className="absolute inset-0 bg-slate-900/10 z-10" />
        <div 
          className="h-full w-full bg-[url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-[3000ms] group-hover:scale-105"
        />
        
        {/* Floating Interactive Badge */}
        <div className="absolute bottom-12 right-12 z-20 hidden lg:block animate-bounce-slow">
           <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white/50 shadow-2xl max-w-[280px]">
              <div className="h-12 w-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-700 mb-6">
                 <Star className="h-6 w-6" />
              </div>
              <p className="text-sm font-bold text-slate-900 mb-2 italic font-serif">"The best investment I've made for my apartment. The quality is unmatched."</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">— Julian R.</p>
           </div>
        </div>
      </div>

      <style jsx>{`
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
