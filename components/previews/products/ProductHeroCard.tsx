"use client"

import { ShoppingBag, Heart, Share2, Star } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function ProductHeroCard() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-2xl flex flex-col md:flex-row group transition-all duration-500 hover:shadow-indigo-100">
        
        {/* Image Section */}
        <div 
          className="md:w-1/2 relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img 
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop" 
            alt="Premium Sneaker"
            className={cn(
              "h-full w-full object-cover transition-transform duration-1000",
              isHovered ? "scale-110" : "scale-100"
            )}
          />
          <div className="absolute top-6 left-6 flex gap-2">
            <span className="px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full">New Arrival</span>
            <span className="px-3 py-1 bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full">-20%</span>
          </div>
          <button className="absolute top-6 right-6 h-10 w-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 hover:bg-rose-500 hover:text-white transition-all shadow-lg">
             <Heart className="h-5 w-5" />
          </button>
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
           <div className="flex items-center gap-2 mb-4 text-orange-400">
              <div className="flex">
                 {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <span className="text-xs font-bold text-gray-400">(128 Reviews)</span>
           </div>

           <h2 className="text-4xl font-black text-gray-900 mb-4 leading-tight tracking-tighter uppercase">
             Vanguard <br /> Elite Pro
           </h2>
           
           <p className="text-gray-500 text-sm mb-8 leading-relaxed">
             The pinnacle of athletic performance. Engineered with ultra-lightweight mesh and 
             responsive energy-return soles for ultimate comfort and speed.
           </p>

           <div className="flex items-end gap-4 mb-10">
              <span className="text-4xl font-black text-indigo-600">$189.00</span>
              <span className="text-lg text-gray-300 line-through mb-1">$240.00</span>
           </div>

           <div className="flex flex-col gap-4">
              <button className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-black uppercase tracking-widest text-sm rounded-2xl shadow-xl shadow-indigo-100 transition-all active:scale-95 flex items-center justify-center gap-3">
                 <ShoppingBag className="h-5 w-5" /> Add to Cart
              </button>
              <button className="w-full py-5 border border-gray-100 hover:bg-gray-50 text-gray-900 font-black uppercase tracking-widest text-sm rounded-2xl transition-all flex items-center justify-center gap-3">
                 Buy Now
              </button>
           </div>
        </div>
      </div>
    </div>
  )
}
