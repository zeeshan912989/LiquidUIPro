"use client"

import { ShoppingBag, ChevronUp, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export default function StickyAddToCart() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show after 500ms for demo, usually on scroll
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="p-12 bg-gray-50 rounded-[40px] flex flex-col items-center justify-center min-h-[400px]">
      <p className="text-gray-400 font-medium italic animate-pulse">Scroll down to see the sticky bar...</p>
      
      <div className={cn(
        "fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 transition-all duration-1000 transform",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}>
         <div className="mx-auto max-w-5xl bg-white/80 backdrop-blur-3xl border border-white/50 rounded-full shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] p-3 md:p-4 flex items-center justify-between gap-6">
            
            {/* Product Mini Info */}
            <div className="hidden sm:flex items-center gap-4 pl-4">
               <div className="h-12 w-12 rounded-full bg-gray-100 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200" alt="" className="h-full w-full object-cover" />
               </div>
               <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 leading-none mb-1">Vanguard Elite</span>
                  <span className="text-sm font-black text-gray-900">$189.00</span>
               </div>
            </div>

            {/* Quick Select & Add */}
            <div className="flex-1 flex items-center justify-end gap-3 pr-2">
               <div className="hidden lg:flex items-center gap-2 mr-4">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Only 3 left</span>
               </div>
               
               <div className="flex gap-2">
                  <button className="h-14 px-6 border border-gray-100 hover:bg-white rounded-full font-black text-xs uppercase tracking-widest transition-all hidden md:block">
                     Select Size
                  </button>
                  <button className="h-14 px-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-indigo-100 transition-all flex items-center gap-3 active:scale-95">
                     <ShoppingBag className="h-5 w-5" /> Add to Cart
                  </button>
               </div>

               <button className="h-14 w-14 bg-black text-white rounded-full flex items-center justify-center hover:scale-105 transition-all md:hidden">
                  <ChevronUp className="h-6 w-6" />
               </button>
            </div>
         </div>
      </div>
    </div>
  )
}
