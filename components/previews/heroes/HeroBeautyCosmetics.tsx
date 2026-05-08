"use client"

import { useState, useEffect } from 'react'
import { Sparkles, Heart, Star, ArrowRight, Play, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroBeautyCosmetics() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] w-full bg-[#fff5f5] py-24 flex items-center overflow-hidden">
      
      {/* Soft Pastel Background Blobs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ffe4e6] rounded-full blur-[120px] -mr-40 -mt-40 opacity-60 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#fdf2f8] rounded-full blur-[100px] -ml-40 -mb-40 opacity-40 animate-pulse delay-1000" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-8 grid lg:grid-cols-2 gap-20 items-center w-full">
         
         {/* Left: Content */}
         <div className="text-center lg:text-left">
            <div className={cn(
              "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-rose-500 text-xs font-bold uppercase tracking-widest mb-8 transition-all duration-1000",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}>
              <Sparkles className="h-4 w-4" />
              <span>Clean • Vegan • Organic</span>
            </div>

            <h1 className={cn(
              "text-6xl lg:text-9xl font-serif text-slate-900 leading-[0.9] mb-8 transition-all duration-1000 delay-200",
              mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            )}>
              Glow From <br />
              <span className="italic font-light text-rose-400">Within.</span>
            </h1>

            <p className={cn(
              "text-lg text-slate-500 max-w-lg mx-auto lg:mx-0 mb-12 leading-relaxed transition-all duration-1000 delay-400",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}>
              Dermatologist tested formulas that enhance your natural beauty. 
              Experience the power of nature combined with scientific precision.
            </p>

            <div className={cn(
              "flex flex-wrap justify-center lg:justify-start gap-6 transition-all duration-1000 delay-600",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}>
               <button className="px-12 py-5 bg-rose-400 hover:bg-rose-500 text-white font-bold uppercase tracking-widest text-xs rounded-full shadow-2xl shadow-rose-200 transition-all active:scale-95 flex items-center gap-3">
                 Shop Skincare <ArrowRight className="h-4 w-4" />
               </button>
               <button className="px-12 py-5 bg-white border border-rose-100 text-rose-400 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-rose-50 transition-all">
                 Take Skin Quiz
               </button>
            </div>

            {/* Social Proof */}
            <div className={cn(
              "mt-12 flex flex-wrap justify-center lg:justify-start gap-10 transition-all duration-1000 delay-800",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}>
               <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                     {[1,2,3].map(i => <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-rose-100" />)}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">50k+ Happy Skins</span>
               </div>
               <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-green-50 flex items-center justify-center text-green-500"><Check className="h-4 w-4" /></div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Cruelty Free</span>
               </div>
            </div>
         </div>

         {/* Right: Soft Aesthetic Scene */}
         <div className={cn(
           "relative flex items-center justify-center transition-all duration-[2000ms] delay-1000",
           mounted ? "translate-x-0 opacity-100 scale-100" : "translate-x-20 opacity-0 scale-90"
         )}>
            <div className="relative h-[500px] w-full max-w-md mx-auto group">
               {/* Decorative Shapes */}
               <div className="absolute -top-10 -right-10 h-32 w-32 bg-white/40 backdrop-blur-xl rounded-full border border-white/20 animate-float-slow" />
               <div className="absolute bottom-10 -left-10 h-24 w-24 bg-rose-200/30 backdrop-blur-xl rounded-full border border-white/20 animate-float-medium" />
               
               {/* Main Product Container */}
               <div className="relative h-full w-full bg-white rounded-[60px] shadow-2xl border border-rose-50 overflow-hidden p-8">
                  <div className="h-full w-full bg-gradient-to-br from-rose-50 to-white rounded-[40px] flex items-center justify-center relative overflow-hidden group">
                     <div className="h-48 w-48 bg-rose-200/40 rounded-full blur-3xl animate-pulse" />
                     <div className="relative h-64 w-32 bg-white rounded-3xl shadow-2xl border border-rose-100 flex items-center justify-center p-4">
                        <div className="h-full w-full bg-rose-50 rounded-2xl animate-pulse" />
                        {/* Floating Rating Tag */}
                        <div className="absolute -top-4 -right-8 bg-white p-3 rounded-2xl shadow-xl border border-rose-50 flex items-center gap-2">
                           <Star className="h-3 w-3 text-yellow-400 fill-current" />
                           <span className="text-[10px] font-black">4.9</span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Interaction Label */}
               <div className="absolute top-1/2 -right-16 -translate-y-1/2 flex flex-col gap-4">
                  <button className="h-12 w-12 bg-white rounded-full shadow-xl flex items-center justify-center text-rose-400 hover:scale-110 transition-all"><Heart className="h-5 w-5" /></button>
                  <button className="h-12 w-12 bg-white rounded-full shadow-xl flex items-center justify-center text-rose-400 hover:scale-110 transition-all"><Play className="h-5 w-5 fill-current" /></button>
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
