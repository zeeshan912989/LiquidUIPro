"use client"

import { AlertTriangle, CheckCircle2, Package, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function StockIndicator() {
  const stockCount = 3
  const progress = (stockCount / 20) * 100

  return (
    <div className="max-w-md mx-auto p-12 bg-white rounded-[40px] shadow-2xl border border-gray-100 space-y-12">
      
      {/* High Urgency Variant */}
      <div className="space-y-4">
         <div className="flex justify-between items-end mb-2">
            <div className="flex items-center gap-3 text-orange-600">
               <div className="h-10 w-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 animate-pulse" />
               </div>
               <span className="text-xl font-black uppercase tracking-tighter italic">Low Stock Alert</span>
            </div>
            <span className="text-sm font-black text-orange-600">Only {stockCount} left</span>
         </div>
         
         {/* Progress Bar */}
         <div className="h-3 w-full bg-gray-50 rounded-full overflow-hidden border border-gray-100 relative">
            <div 
              className="absolute top-0 left-0 h-full bg-orange-500 rounded-full transition-all duration-1000 animate-pulse" 
              style={{ width: `${progress}%` }} 
            />
         </div>
         <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">
            8 people are viewing this product right now
         </p>
      </div>

      <div className="h-[2px] w-full bg-gray-50" />

      {/* In Stock Variant */}
      <div className="flex items-center gap-6 p-6 bg-green-50 rounded-3xl border border-green-100">
         <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center text-green-500 shadow-xl shadow-green-100">
            <CheckCircle2 className="h-8 w-8" />
         </div>
         <div>
            <p className="text-xs font-black text-green-900 uppercase tracking-widest leading-none mb-2">Ready to Ship</p>
            <p className="text-sm font-medium text-green-700/60 leading-tight">In stock at our Dubai warehouse. Usually ships within 24 hours.</p>
         </div>
      </div>

      {/* Out of Stock Mock */}
      <div className="flex items-center justify-between opacity-40 grayscale pointer-events-none">
         <div className="flex items-center gap-4">
            <Package className="h-6 w-6" />
            <span className="text-xs font-black uppercase tracking-widest">Out of Stock</span>
         </div>
         <button className="text-[10px] font-black uppercase tracking-widest border-b border-black pb-1">Notify Me</button>
      </div>
    </div>
  )
}
