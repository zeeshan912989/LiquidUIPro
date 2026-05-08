"use client"

import { Heart, Share2, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function WishlistButton() {
  const [isLiked, setIsLiked] = useState(false)
  const [showSparkles, setShowSparkles] = useState(false)

  const handleToggle = () => {
    setIsLiked(!isLiked)
    if (!isLiked) {
      setShowSparkles(true)
      setTimeout(() => setShowSparkles(false), 1000)
    }
  }

  return (
    <div className="p-12 flex flex-col items-center gap-12 bg-white rounded-[40px] shadow-2xl border border-gray-100">
      
      {/* Large Creative Toggle */}
      <div className="relative">
         <button 
           onClick={handleToggle}
           className={cn(
             "h-32 w-32 rounded-full flex items-center justify-center transition-all duration-500 relative z-10",
             isLiked ? "bg-rose-50 text-rose-500 scale-110 shadow-xl shadow-rose-100" : "bg-gray-50 text-gray-300 hover:text-gray-400"
           )}
         >
            <Heart className={cn("h-12 w-12 transition-all", isLiked ? "fill-current scale-110" : "scale-100")} />
         </button>

         {/* Sparkling Animation Layer */}
         {showSparkles && (
           <div className="absolute inset-0 pointer-events-none">
              <Sparkles className="absolute -top-4 left-1/2 -translate-x-1/2 h-8 w-8 text-rose-400 animate-bounce" />
              <div className="absolute inset-0 rounded-full border-4 border-rose-500 animate-ping" />
           </div>
         )}
      </div>

      <div className="text-center">
         <h4 className="text-xl font-black uppercase tracking-tighter mb-2">
            {isLiked ? 'Saved to Favorites' : 'Add to Wishlist'}
         </h4>
         <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            {isLiked ? '12.4k people also love this' : 'Save for later to get price alerts'}
         </p>
      </div>

      {/* Variation Row */}
      <div className="flex gap-4">
         <button className="h-14 w-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:text-rose-500 transition-all border border-transparent hover:border-rose-100">
            <Heart className="h-6 w-6" />
         </button>
         <button className="h-14 w-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 hover:text-blue-500 transition-all border border-transparent hover:border-blue-100">
            <Share2 className="h-6 w-6" />
         </button>
      </div>
    </div>
  )
}
