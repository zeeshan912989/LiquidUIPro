"use client"

import { Truck, MapPin, Calendar, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function DeliveryEstimator() {
  return (
    <div className="max-w-md mx-auto p-10 bg-white rounded-[40px] shadow-2xl border border-gray-100">
      <div className="flex items-center gap-4 mb-8">
         <div className="h-12 w-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
            <Truck className="h-6 w-6" />
         </div>
         <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Shipping Estimate</h4>
            <p className="text-sm font-black text-gray-900">Fast Regional Delivery</p>
         </div>
      </div>

      <div className="space-y-6">
         {/* Location Selector Mock */}
         <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between group cursor-pointer hover:bg-white transition-all">
            <div className="flex items-center gap-3">
               <MapPin className="h-5 w-5 text-gray-400 group-hover:text-indigo-600" />
               <span className="text-xs font-bold text-gray-900">Deliver to Dubai, UAE</span>
            </div>
            <button className="text-[10px] font-black uppercase text-indigo-600 border-b border-indigo-600 pb-0.5">Change</button>
         </div>

         {/* Date Prediction */}
         <div className="flex items-start gap-4">
            <Calendar className="h-5 w-5 text-indigo-500 mt-1" />
            <div>
               <p className="text-sm font-black text-gray-900 mb-1">Estimated: May 12 – May 14</p>
               <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">Free Express Shipping on orders over $100</p>
            </div>
         </div>

         {/* Trust Factor */}
         <div className="pt-6 border-t border-gray-50 flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-green-500" />
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Secure & Tracked Fulfillment</p>
         </div>
      </div>
    </div>
  )
}
