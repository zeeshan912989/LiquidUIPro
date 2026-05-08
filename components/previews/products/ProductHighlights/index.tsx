"use client"

import { CheckCircle2, ShieldCheck, Zap, Award, Gem, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ProductHighlights() {
  const highlights = [
    { 
      icon: Gem, 
      title: 'Handmade Craft', 
      desc: 'Each piece is meticulously crafted by master artisans with 20+ years of experience.',
      color: 'text-purple-500',
      bg: 'bg-purple-50'
    },
    { 
      icon: Award, 
      title: 'Premium Quality', 
      desc: 'We use only the finest ethically sourced materials and laboratory-tested metals.',
      color: 'text-indigo-500',
      bg: 'bg-indigo-50'
    },
    { 
      icon: ShieldCheck, 
      title: '1 Year Warranty', 
      desc: 'Total peace of mind with our comprehensive global protection and repair program.',
      color: 'text-green-500',
      bg: 'bg-green-50'
    },
    { 
      icon: Globe, 
      title: 'Ethical Sourcing', 
      desc: '100% conflict-free minerals and sustainable manufacturing processes.',
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    }
  ]

  return (
    <div className="max-w-4xl mx-auto p-12 bg-[#fcfcfd] rounded-[48px] shadow-2xl border border-gray-100">
      <div className="flex flex-col items-center text-center mb-16">
         <div className="px-4 py-1.5 bg-gray-900 text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-full mb-6">Our Promise</div>
         <h2 className="text-4xl font-black uppercase tracking-tighter italic text-gray-900">Why Choose Us?</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
         {highlights.map((h, i) => (
           <div key={i} className="bg-white p-8 rounded-[32px] border border-gray-50 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all group">
              <div className={cn("h-16 w-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform", h.bg, h.color)}>
                 <h.icon className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-black uppercase tracking-tighter mb-4 text-gray-900">{h.title}</h4>
              <p className="text-sm font-medium text-gray-500 leading-relaxed">
                 {h.desc}
              </p>
           </div>
         ))}
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-12 pt-12 border-t border-gray-50">
         <div className="flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 text-indigo-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Verified Quality</span>
         </div>
         <div className="flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 text-indigo-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Trusted Worldwide</span>
         </div>
         <div className="flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 text-indigo-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Expert Support</span>
         </div>
      </div>
    </div>
  )
}
