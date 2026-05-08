"use client"

import { useState, useEffect } from 'react'
import { Clock, Zap, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ h: 2, m: 59, s: 59 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 }
        if (prev.m > 0) return { h: prev.h, m: prev.m - 1, s: 59 }
        if (prev.h > 0) return { h: prev.h - 1, m: 59, s: 59 }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="max-w-2xl mx-auto p-12">
      
      {/* High Urgency Timer Card */}
      <div className="bg-slate-900 rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden group">
         
         {/* Background Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-orange-500/10 blur-[100px] pointer-events-none" />

         <div className="relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
               <Zap className="h-4 w-4 fill-current" />
               <span>Limited Offer Ends In</span>
            </div>

            <div className="flex gap-4 md:gap-8 mb-10">
               {[
                 { label: 'Hours', val: timeLeft.h },
                 { label: 'Minutes', val: timeLeft.m },
                 { label: 'Seconds', val: timeLeft.s }
               ].map((unit, i) => (
                 <div key={i} className="flex flex-col items-center">
                    <div className="h-20 w-20 md:h-28 md:w-28 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] flex items-center justify-center text-4xl md:text-6xl font-black mb-4 tabular-nums shadow-xl group-hover:border-orange-500/30 transition-colors">
                       {unit.val.toString().padStart(2, '0')}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40">{unit.label}</span>
                 </div>
               ))}
            </div>

            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5 text-xs font-medium text-orange-200/60 max-w-sm">
               <AlertCircle className="h-5 w-5 text-orange-500" />
               <p>Over 84 people have this in their cart right now. Demand is high!</p>
            </div>
         </div>
      </div>
    </div>
  )
}
