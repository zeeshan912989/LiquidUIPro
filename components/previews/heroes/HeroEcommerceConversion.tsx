"use client"

import { useState, useEffect } from 'react'
import { ShoppingCart, Star, Zap, Clock, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroEcommerceConversion() {
  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(7200)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    return { h, m, s }
  }

  const time = formatTime(timeLeft)

  return (
    <section className="relative min-h-[90vh] w-full bg-[#f4f7f6] py-24 flex items-center">
      
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 h-[600px] w-[600px] bg-indigo-100/50 rounded-full blur-[120px] -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 h-[600px] w-[600px] bg-orange-100/50 rounded-full blur-[120px] -ml-40 -mb-40" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Product Showcase */}
        <div className={cn(
          "relative order-2 lg:order-1 transition-all duration-1000",
          mounted ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
        )}>
          {/* Main Product Container */}
          <div className="relative aspect-square w-full max-w-lg mx-auto bg-white rounded-[40px] shadow-2xl border border-white p-8 group">
             <div className="h-full w-full bg-slate-50 rounded-[32px] overflow-hidden flex items-center justify-center p-12 transition-transform duration-700 group-hover:scale-105">
                <div className="h-full w-full bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-3xl shadow-2xl shadow-indigo-200" />
             </div>
             
             {/* Floating Discount Badge */}
             <div className="absolute -top-6 -right-6 h-32 w-32 bg-orange-500 text-white rounded-full shadow-2xl flex flex-col items-center justify-center rotate-12 animate-pulse">
                <span className="text-3xl font-black italic uppercase leading-none">50%</span>
                <span className="text-[10px] font-bold uppercase tracking-widest">OFF NOW</span>
             </div>

             {/* Live Review Card */}
             <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 max-w-[200px] hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-1 text-orange-400 mb-2">
                   {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 fill-current" />)}
                </div>
                <p className="text-xs font-bold text-slate-900 italic">"Literally life-changing. 10/10 recommend."</p>
             </div>
          </div>
        </div>

        {/* Right: Conversion Content */}
        <div className="order-1 lg:order-2 text-center lg:text-left">
           <div className={cn(
             "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-600 text-xs font-black uppercase tracking-widest mb-8 transition-all duration-1000",
             mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
           )}>
             <Zap className="h-4 w-4 fill-current" />
             <span>Limited Time Offer</span>
           </div>

           <h1 className={cn(
             "text-5xl md:text-8xl font-black tracking-tighter text-slate-900 uppercase leading-[0.9] mb-8 transition-all duration-1000 delay-200",
             mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
           )}>
             Upgrade <br />
             <span className="text-indigo-600">Your Daily</span> <br />
             Performance.
           </h1>

           {/* Countdown Timer */}
           <div className={cn(
             "mb-10 flex flex-col items-center lg:items-start gap-4 transition-all duration-1000 delay-400",
             mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
           )}>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Clock className="h-4 w-4" /> Deal Ends In:
              </p>
              <div className="flex gap-4">
                 {[
                   { label: 'Hrs', val: time.h },
                   { label: 'Min', val: time.m },
                   { label: 'Sec', val: time.s }
                 ].map((t, i) => (
                   <div key={i} className="flex flex-col items-center">
                      <div className="h-16 w-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-2xl font-black text-slate-900 border border-slate-100">
                         {t.val.toString().padStart(2, '0')}
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase mt-2 tracking-widest">{t.label}</span>
                   </div>
                 ))}
              </div>
           </div>

           <div className={cn(
             "flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 transition-all duration-1000 delay-600",
             mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
           )}>
              <button className="w-full sm:w-auto px-12 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-black uppercase tracking-widest text-sm rounded-2xl shadow-2xl shadow-indigo-200 transition-all active:scale-95 flex items-center justify-center gap-3 group">
                Add to Cart <ShoppingCart className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-12 py-5 bg-white border border-slate-200 text-slate-900 font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
                View Bundle <ArrowRight className="h-5 w-5" />
              </button>
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
