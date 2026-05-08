"use client"

import { MessageCircle, Phone, ArrowRight, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function WhatsAppBuy() {
  return (
    <div className="max-w-md mx-auto p-12 bg-white rounded-[48px] shadow-2xl border border-gray-100 flex flex-col items-center text-center">
      
      {/* Icon Group */}
      <div className="relative mb-10">
         <div className="absolute inset-0 bg-green-500 blur-[40px] opacity-20 animate-pulse" />
         <div className="relative h-24 w-24 bg-green-500 rounded-[32px] flex items-center justify-center text-white shadow-2xl rotate-6 hover:rotate-0 transition-transform cursor-pointer group">
            <MessageCircle className="h-12 w-12 fill-current group-hover:scale-110 transition-transform" />
            <div className="absolute -top-2 -right-2 h-6 w-6 bg-red-500 rounded-full border-4 border-white animate-bounce" />
         </div>
      </div>

      <h4 className="text-2xl font-black uppercase tracking-tighter italic mb-4">Order on WhatsApp</h4>
      <p className="text-sm font-medium text-gray-500 mb-10 leading-relaxed max-w-[280px]">
        Prefer to chat? Order directly via WhatsApp and get instant support from our experts.
      </p>

      {/* Action Buttons */}
      <div className="w-full space-y-4">
         <button className="w-full py-6 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-3xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 shadow-xl shadow-green-100 transition-all active:scale-95 group">
            <MessageCircle className="h-5 w-5 fill-current" />
            Start Order Chat
            <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
         </button>
         
         <div className="flex items-center justify-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
            <Zap className="h-4 w-4 text-orange-500 fill-current" />
            Average response time: 2 mins
         </div>
      </div>

      {/* Floating Support Info */}
      <div className="mt-10 pt-10 border-t border-gray-50 w-full">
         <div className="flex items-center justify-center gap-6">
            <div className="flex flex-col items-center">
               <span className="text-lg font-black text-gray-900">24/7</span>
               <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Support</span>
            </div>
            <div className="h-8 w-[1px] bg-gray-100" />
            <div className="flex flex-col items-center">
               <span className="text-lg font-black text-gray-900">Secure</span>
               <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Payments</span>
            </div>
         </div>
      </div>
    </div>
  )
}
