"use client"

import { useState } from 'react'
import { Trash2, Plus, Minus, ChevronLeft, CreditCard, ShieldCheck, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const initialItems = [
  {
    id: 1,
    name: 'Essential Oversized Hoodie',
    price: 68.00,
    color: 'Sand',
    size: 'XL',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Graphic Print Tee',
    price: 35.00,
    color: 'Black',
    size: 'L',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=200&h=200&auto=format&fit=crop'
  }
]

export default function CartMobileFirst() {
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
    <div className="max-w-[430px] mx-auto min-h-[844px] bg-[#fbfbfb] text-black shadow-2xl relative flex flex-col font-sans overflow-hidden border-[12px] border-black rounded-[3rem]">
      
      {/* App Header */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md px-6 pt-14 pb-6 flex items-center justify-between border-b border-gray-100">
         <button className="h-10 w-10 bg-gray-50 rounded-full flex items-center justify-center">
            <ChevronLeft className="h-6 w-6" />
         </button>
         <h1 className="text-sm font-black uppercase tracking-widest">My Cart ({items.length})</h1>
         <button className="h-10 w-10 bg-gray-50 rounded-full flex items-center justify-center">
            <HelpCircle className="h-5 w-5 text-gray-400" />
         </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-8 pb-40 space-y-8">
         
         {/* Cart Items */}
         <div className="space-y-6">
            {items.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-3xl shadow-sm border border-gray-50 flex gap-4 relative group">
                 <div className="w-24 h-24 bg-gray-50 rounded-2xl overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                 </div>
                 
                 <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                       <div className="flex justify-between items-start">
                          <h3 className="text-xs font-black uppercase tracking-tight leading-tight max-w-[120px]">{item.name}</h3>
                          <p className="text-sm font-black">${item.price.toFixed(2)}</p>
                       </div>
                       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{item.color} / {item.size}</p>
                    </div>

                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-3 bg-gray-100 p-1 rounded-xl">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="h-8 w-8 bg-white rounded-lg flex items-center justify-center shadow-sm active:scale-90 transition-transform"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-xs font-black w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="h-8 w-8 bg-white rounded-lg flex items-center justify-center shadow-sm active:scale-90 transition-transform"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                       </div>
                       <button 
                         onClick={() => removeItem(item.id)}
                         className="h-8 w-8 text-gray-300 hover:text-rose-500 transition-colors"
                       >
                          <Trash2 className="h-4 w-4" />
                       </button>
                    </div>
                 </div>
              </div>
            ))}
         </div>

         {/* Promo Code */}
         <div className="bg-white p-4 rounded-3xl border border-gray-100 flex items-center gap-4">
            <div className="h-10 w-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
               <CreditCard className="h-5 w-5" />
            </div>
            <input 
              type="text" 
              placeholder="ENTER PROMO CODE" 
              className="flex-1 text-[10px] font-black uppercase tracking-widest focus:outline-none placeholder:text-gray-300"
            />
            <button className="text-[10px] font-black uppercase tracking-widest text-indigo-600">Apply</button>
         </div>

         {/* Trust */}
         <div className="grid grid-cols-2 gap-4 py-4">
            <div className="bg-emerald-50 p-4 rounded-2xl flex flex-col items-center gap-2 text-center">
               <ShieldCheck className="h-5 w-5 text-emerald-600" />
               <p className="text-[8px] font-black uppercase tracking-widest text-emerald-800 leading-tight">Secure Payment Verified</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-2xl flex flex-col items-center gap-2 text-center">
               <div className="h-5 w-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-[10px] font-black italic">!</div>
               <p className="text-[8px] font-black uppercase tracking-widest text-blue-800 leading-tight">30-Day Easy Returns</p>
            </div>
         </div>
      </div>

      {/* Sticky Bottom Checkout */}
      <div className="absolute bottom-0 left-0 w-full p-6 pb-12 bg-white rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.05)] z-40 border-t border-gray-50">
         <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center px-2">
               <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Total Amount</span>
               <span className="text-2xl font-black italic tracking-tight">${subtotal.toFixed(2)}</span>
            </div>
         </div>
         
         <button className="w-full h-16 bg-black text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl active:scale-95 transition-all flex items-center justify-center gap-4 group">
            Checkout Now
            <div className="h-6 w-6 bg-white/20 rounded-lg flex items-center justify-center group-hover:translate-x-2 transition-transform">
               <ChevronLeft className="h-4 w-4 rotate-180" />
            </div>
         </button>
      </div>

      {/* Safe Area Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-50" />
    </div>
  )
}
