"use client"

import { ShoppingBag, X, Zap, ArrowRight, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function QuickBuyModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="max-w-md mx-auto p-12 bg-white rounded-[48px] shadow-2xl border border-gray-100 flex flex-col items-center">
      
      <button 
        onClick={() => setIsOpen(true)}
        className="w-full py-6 bg-black text-white rounded-3xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 shadow-xl hover:scale-105 transition-all group"
      >
         <Zap className="h-5 w-5 fill-current text-orange-500" />
         Instant Quick Buy
      </button>

      {/* Modal Overlay */}
      <div className={cn(
        "fixed inset-0 z-[100] bg-black/40 backdrop-blur-md flex items-center justify-center p-6 transition-all duration-500",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
         <div className={cn(
           "bg-white w-full max-w-lg rounded-[48px] overflow-hidden shadow-2xl transition-all duration-500 transform relative",
           isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-20"
         )}>
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 h-12 w-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-black transition-all z-10">
               <X className="h-6 w-6" />
            </button>

            <div className="p-10">
               <div className="flex gap-6 mb-10">
                  <div className="h-32 w-32 rounded-3xl bg-gray-50 overflow-hidden border border-gray-100">
                     <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200" className="h-full w-full object-cover" alt="" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                     <h4 className="text-xl font-black uppercase tracking-tighter mb-2">Vanguard Elite Pro</h4>
                     <p className="text-2xl font-black text-indigo-600">$189.00</p>
                  </div>
               </div>

               <div className="space-y-6">
                  <div className="grid grid-cols-4 gap-3">
                     {['S', 'M', 'L', 'XL'].map(size => (
                       <button key={size} className="h-14 border-2 border-gray-100 rounded-2xl font-black text-xs hover:border-black transition-all">
                          {size}
                       </button>
                     ))}
                  </div>

                  <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                     <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Total</span>
                        <span className="text-lg font-black text-gray-900">$189.00</span>
                     </div>
                     <button className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100">
                        Confirm & Buy Now <ArrowRight className="h-4 w-4" />
                     </button>
                  </div>

                  <div className="flex items-center justify-center gap-6 text-[8px] font-black text-gray-400 uppercase tracking-widest pt-4">
                     <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-green-500" /> Secure Checkout</div>
                     <div className="h-4 w-[1px] bg-gray-100" />
                     <div className="flex items-center gap-2">Free Delivery</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}
