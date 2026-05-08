"use client"

import { useState, useEffect } from 'react'
import { Search, MapPin, Clock, Star, ArrowRight, Heart } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroFoodDelivery() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] w-full bg-[#fffcf7] py-24 flex items-center overflow-hidden">
      
      {/* Warm Background Blob */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ffedd5] rounded-full blur-[120px] -mr-40 -mt-40 opacity-60" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#fef3c7] rounded-full blur-[100px] -ml-40 -mb-40 opacity-40" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-8 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Content */}
        <div className="text-center lg:text-left">
           <div className={cn(
             "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-bold mb-8 transition-all duration-1000",
             mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
           )}>
             <Clock className="h-4 w-4" />
             <span>Fastest Delivery in 20 Mins</span>
           </div>

           <h1 className={cn(
             "text-6xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[1.1] mb-8 transition-all duration-1000 delay-200",
             mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
           )}>
             Craving? We <br />
             <span className="text-orange-500 underline decoration-8 underline-offset-8">Deliver.</span>
           </h1>

           <p className={cn(
             "text-xl text-slate-500 max-w-lg mx-auto lg:mx-0 mb-12 leading-relaxed transition-all duration-1000 delay-400",
             mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
           )}>
             Order from your favorite local restaurants and get fresh, 
             delicious meals delivered right to your doorstep.
           </p>

           {/* Search / Address Bar */}
           <div className={cn(
             "max-w-xl mx-auto lg:mx-0 p-2 bg-white rounded-3xl shadow-2xl shadow-orange-200 flex flex-col sm:flex-row items-center gap-2 transition-all duration-1000 delay-600",
             mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
           )}>
              <div className="flex-1 flex items-center gap-3 px-4 w-full">
                 <MapPin className="h-5 w-5 text-orange-500" />
                 <input 
                   type="text" 
                   placeholder="Enter your delivery address" 
                   className="w-full py-3 text-sm font-medium outline-none text-slate-900"
                 />
              </div>
              <button className="w-full sm:w-auto px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2">
                Order Now <ArrowRight className="h-5 w-5" />
              </button>
           </div>

           {/* Quick Trust Stats */}
           <div className={cn(
             "mt-12 flex flex-wrap justify-center lg:justify-start gap-10 transition-all duration-1000 delay-800",
             mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
           )}>
              <div className="flex items-center gap-2">
                 <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-900 font-bold">12k</div>
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Riders</span>
              </div>
              <div className="flex items-center gap-2">
                 <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center text-orange-500"><Star className="h-5 w-5 fill-current" /></div>
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">4.9 App Rating</span>
              </div>
           </div>
        </div>

        {/* Right: Floating Food Cards Scene */}
        <div className={cn(
          "relative h-[600px] flex items-center justify-center transition-all duration-1000 delay-1000",
          mounted ? "translate-x-0 opacity-100 scale-100" : "translate-x-20 opacity-0 scale-90"
        )}>
           {/* Center Image */}
           <div className="relative h-80 w-80 bg-orange-500 rounded-full flex items-center justify-center p-8 group">
              <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full animate-pulse" />
              <div className="h-full w-full bg-white rounded-full shadow-2xl overflow-hidden flex items-center justify-center p-4">
                 <div className="h-full w-full bg-slate-50 rounded-full flex items-center justify-center text-6xl">🍔</div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-10 -right-10 bg-white p-4 rounded-[32px] shadow-2xl border border-slate-50 flex items-center gap-4 animate-float-slow">
                 <div className="h-12 w-12 bg-green-50 rounded-2xl flex items-center justify-center text-2xl">🍕</div>
                 <div>
                    <p className="text-xs font-black text-slate-900">Italian Pizza</p>
                    <div className="flex items-center gap-1 text-orange-400">
                       <Star className="h-2 w-2 fill-current" />
                       <span className="text-[8px] font-bold">4.8 (2k+)</span>
                    </div>
                 </div>
                 <button className="h-8 w-8 bg-slate-100 rounded-full flex items-center justify-center"><Heart className="h-4 w-4" /></button>
              </div>

              <div className="absolute bottom-0 -left-20 bg-white p-4 rounded-[32px] shadow-2xl border border-slate-50 flex items-center gap-4 animate-float-medium">
                 <div className="h-12 w-12 bg-red-50 rounded-2xl flex items-center justify-center text-2xl">🍣</div>
                 <div>
                    <p className="text-xs font-black text-slate-900">Fresh Sushi</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Ready in 15m</p>
                 </div>
                 <div className="h-8 w-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-[10px]">$12</div>
              </div>
           </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -20px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-15px, 15px); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 7s ease-in-out infinite; }
      `}</style>
    </section>
  )
}
