"use client"

import { Sparkles, Zap, Flame } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function DiscountBadge() {
  return (
    <div className="p-12 flex flex-wrap gap-12 justify-center items-center bg-gray-50 rounded-[40px]">
      
      {/* Pulse Badge */}
      <div className="relative group">
         <div className="absolute inset-0 bg-red-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse" />
         <div className="relative h-24 w-24 bg-red-500 rounded-full flex flex-col items-center justify-center text-white border-4 border-white shadow-2xl rotate-12 hover:rotate-0 transition-transform">
            <span className="text-2xl font-black">-50%</span>
            <span className="text-[10px] font-black uppercase tracking-tighter">OFF</span>
         </div>
      </div>

      {/* Floating Animated Badge */}
      <div className="relative px-8 py-3 bg-indigo-600 rounded-full shadow-2xl overflow-hidden group">
         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
         <div className="flex items-center gap-3 text-white">
            <Sparkles className="h-4 w-4 animate-spin-slow" />
            <span className="text-xs font-black uppercase tracking-[0.2em]">Limited Edition</span>
         </div>
      </div>

      {/* Flash Sale Badge */}
      <div className="flex items-center gap-2 bg-orange-100 border border-orange-200 px-6 py-4 rounded-2xl shadow-lg animate-bounce-slow">
         <div className="h-10 w-10 bg-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg">
            <Flame className="h-6 w-6 fill-current" />
         </div>
         <div>
            <p className="text-[10px] font-black text-orange-900 uppercase tracking-widest leading-none mb-1">Flash Sale</p>
            <p className="text-lg font-black text-orange-600 leading-none">ENDING SOON</p>
         </div>
      </div>

      {/* Corner Sash Ribbon */}
      <div className="relative w-48 h-48 bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-xl">
         <div className="absolute top-6 -right-12 bg-green-500 text-white px-12 py-2 font-black uppercase text-[10px] tracking-widest rotate-45 shadow-lg">
            Bestseller
         </div>
         <div className="p-6">
            <div className="h-24 w-full bg-gray-50 rounded-2xl mb-4 animate-pulse" />
            <div className="h-4 w-2/3 bg-gray-100 rounded-full" />
         </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
      `}</style>
    </div>
  )
}
