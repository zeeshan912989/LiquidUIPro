"use client"

import { useState } from 'react'
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, Truck, Gift, Star, ShieldCheck, CreditCard, Ticket, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const initialItems = [
  {
    id: 1,
    name: 'Wireless Charge Pad',
    price: 45.00,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1586816829391-9988a2a7f51a?q=80&w=400&h=400&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Noise Cancelling Buds',
    price: 159.00,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&h=400&auto=format&fit=crop'
  }
]

export default function CartBentoGrid() {
  const [items, setItems] = useState(initialItems)

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ))
  }

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  return (
    <div className="w-full min-h-screen bg-[#f1f3f6] text-[#1c1c1e] font-sans p-6 md:p-12 selection:bg-black selection:text-white">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-auto">
        
        {/* Header - Span 12 */}
        <div className="lg:col-span-12 flex items-center justify-between bg-white p-10 rounded-[2.5rem] shadow-sm border border-white/50">
           <div className="flex items-center gap-6">
              <div className="h-16 w-16 bg-black text-white rounded-[1.5rem] flex items-center justify-center shadow-2xl">
                 <ShoppingBag className="h-8 w-8" />
              </div>
              <div>
                 <h1 className="text-3xl font-black tracking-tight uppercase italic">Bento Bag.</h1>
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Review your collection // Total: {items.length} Units</p>
              </div>
           </div>
           <div className="hidden md:flex gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-12 w-12 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center opacity-40">
                   <CreditCard className="h-5 w-5" />
                </div>
              ))}
           </div>
        </div>

        {/* Cart Items - Span 8, Row Span 2 */}
        <div className="lg:col-span-8 bg-white rounded-[3rem] p-10 shadow-sm border border-white/50 flex flex-col">
           <h2 className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-10 flex items-center gap-3">
              <Sparkles className="h-4 w-4 text-black" /> Selected Artifacts
           </h2>
           <div className="space-y-8 flex-1">
              {items.length > 0 ? (
                items.map((item) => (
                  <div key={item.id} className="flex gap-8 group p-6 hover:bg-gray-50 rounded-[2rem] transition-all duration-500 border border-transparent hover:border-gray-100">
                     <div className="w-24 h-24 bg-gray-100 rounded-[1.5rem] overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                     </div>
                     <div className="flex-1 flex flex-col justify-between py-1">
                        <div className="flex justify-between items-start">
                           <h3 className="text-lg font-black uppercase tracking-tight">{item.name}</h3>
                           <p className="text-xl font-black italic">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between items-center mt-6">
                           <div className="flex items-center gap-4 bg-white border border-gray-200 p-1 rounded-xl shadow-sm">
                              <button onClick={() => updateQuantity(item.id, -1)} className="h-8 w-8 flex items-center justify-center hover:bg-gray-100 rounded-lg text-gray-400 transition-colors"><Minus className="h-3 w-3" /></button>
                              <span className="text-xs font-black">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, 1)} className="h-8 w-8 flex items-center justify-center hover:bg-gray-100 rounded-lg text-gray-400 transition-colors"><Plus className="h-3 w-3" /></button>
                           </div>
                           <button onClick={() => removeItem(item.id)} className="text-rose-500 hover:scale-110 transition-transform"><Trash2 className="h-5 w-5" /></button>
                        </div>
                     </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-20">
                   <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Your bag is currently empty.</p>
                </div>
              )}
           </div>
        </div>

        {/* Shipping Status - Span 4 */}
        <div className="lg:col-span-4 bg-black text-white rounded-[3rem] p-10 flex flex-col justify-between shadow-2xl">
           <div>
              <div className="flex justify-between items-center mb-10">
                 <h2 className="text-xs font-black uppercase tracking-[0.4em] text-white/40">Logistics</h2>
                 <Truck className="h-5 w-5 text-lime-400 animate-bounce" />
              </div>
              <p className="text-2xl font-black tracking-tight leading-tight mb-4 italic">
                 {subtotal >= 200 ? "Free Express Unlocked" : `$${(200 - subtotal).toFixed(2)} From Free Shipping`}
              </p>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mb-8">
                 <div className="h-full bg-lime-400 transition-all duration-1000" style={{ width: `${Math.min(100, (subtotal / 200) * 100)}%` }} />
              </div>
           </div>
           <div className="flex items-center gap-4 p-6 bg-white/5 rounded-[2rem] border border-white/10">
              <ShieldCheck className="h-6 w-6 text-lime-400" />
              <p className="text-[10px] font-black uppercase tracking-widest leading-relaxed">Secured with 256-bit AES Encryption</p>
           </div>
        </div>

        {/* Coupon Section - Span 4 */}
        <div className="lg:col-span-4 bg-emerald-500 text-white rounded-[3rem] p-10 flex flex-col justify-between shadow-xl shadow-emerald-500/20 group cursor-pointer active:scale-95 transition-all overflow-hidden relative">
           <div className="absolute top-0 right-0 h-32 w-32 bg-white/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
           <div className="relative z-10">
              <div className="flex justify-between items-center mb-8">
                 <Ticket className="h-6 w-6 text-white" />
                 <span className="text-[8px] font-black uppercase tracking-widest px-3 py-1 bg-white/20 rounded-full">Active</span>
              </div>
              <h3 className="text-3xl font-black italic tracking-tighter mb-2">BENTO15</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-100">Unlock 15% Bonus Discount</p>
           </div>
           <div className="relative z-10 pt-8 flex items-center justify-between">
              <p className="text-[10px] font-black uppercase tracking-widest">Auto-Applied</p>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
           </div>
        </div>

        {/* Summary Card - Span 4 */}
        <div className="lg:col-span-4 bg-white rounded-[3rem] p-10 shadow-sm border border-white/50 flex flex-col justify-between">
           <div>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-8">Ledger</h2>
              <div className="space-y-4">
                 <div className="flex justify-between items-baseline">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Subtotal</span>
                    <span className="text-lg font-black italic tracking-tight">${subtotal.toFixed(2)}</span>
                 </div>
                 <div className="flex justify-between items-baseline">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Coupons</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 italic">-$0.00</span>
                 </div>
                 <div className="flex justify-between items-baseline">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Total</span>
                    <span className="text-3xl font-black italic tracking-tighter text-black">${subtotal.toFixed(2)}</span>
                 </div>
              </div>
           </div>
           <button className="w-full bg-black text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs shadow-xl shadow-black/20 hover:scale-105 active:scale-95 transition-all mt-10">
              Checkout Bag
           </button>
        </div>

        {/* Points Reward - Span 4 */}
        <div className="lg:col-span-4 bg-indigo-600 text-white rounded-[3rem] p-10 flex flex-col justify-between shadow-xl shadow-indigo-600/20 group cursor-pointer hover:bg-indigo-700 transition-all">
           <div className="flex justify-between items-center mb-8">
              <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center">
                 <Star className="h-5 w-5 fill-current text-white" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/20 rounded-full">Rewards</span>
           </div>
           <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-indigo-200 mb-2">Member Earnings</p>
              <h3 className="text-4xl font-black italic tracking-tighter">{Math.floor(subtotal / 10)} PTS</h3>
              <p className="text-xs font-medium text-indigo-100 mt-4 leading-relaxed italic">You're earning points with every purchase. Use them for your next artifact acquisition.</p>
           </div>
        </div>

      </div>
    </div>
  )
}
