"use client"

import { Gift, Heart, Send, Check } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function GiftBoxOption() {
  const [isSelected, setIsSelected] = useState(false)
  const [giftMessage, setGiftMessage] = useState('')

  return (
    <div className="max-w-md mx-auto p-10 bg-white rounded-[40px] shadow-2xl border border-gray-100">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
         <div className="flex items-center gap-4">
            <div className={cn(
              "h-14 w-14 rounded-2xl flex items-center justify-center transition-all",
              isSelected ? "bg-rose-500 text-white rotate-6 scale-110 shadow-xl shadow-rose-100" : "bg-gray-50 text-gray-400"
            )}>
               <Gift className="h-8 w-8" />
            </div>
            <div>
               <h4 className="text-sm font-black uppercase tracking-tighter italic">Gift Wrapping</h4>
               <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Only $2.99 Extra</p>
            </div>
         </div>
         <button 
           onClick={() => setIsSelected(!isSelected)}
           className={cn(
             "h-12 px-6 rounded-full font-black uppercase text-[10px] tracking-widest transition-all",
             isSelected ? "bg-black text-white" : "bg-gray-100 text-gray-400 hover:bg-gray-200"
           )}
         >
            {isSelected ? 'Added' : 'Add'}
         </button>
      </div>

      {/* Gift Message Input (Animated Reveal) */}
      <div className={cn(
        "overflow-hidden transition-all duration-700 space-y-4",
        isSelected ? "max-h-[300px] opacity-100 mt-8" : "max-h-0 opacity-0"
      )}>
         <div className="h-[2px] w-full bg-gray-50 mb-6" />
         
         <label className="block">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block mb-3 pl-2">Personal Message</span>
            <textarea 
              value={giftMessage}
              onChange={(e) => setGiftMessage(e.target.value)}
              placeholder="Write something sweet..."
              className="w-full bg-gray-50 border border-gray-100 rounded-3xl p-6 text-sm focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all h-32 resize-none"
            />
         </label>

         <div className="flex items-center gap-3 p-4 bg-rose-50/50 rounded-2xl text-[10px] font-bold text-rose-600/60 uppercase tracking-widest">
            <Heart className="h-4 w-4" />
            <span>Hand-wrapped with a handwritten card</span>
         </div>
      </div>

      {!isSelected && (
        <p className="mt-6 text-center text-[10px] font-medium text-gray-300 uppercase tracking-[0.3em] italic">Make it special for someone you love</p>
      )}
    </div>
  )
}
