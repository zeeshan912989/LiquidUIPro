"use client"

import { useState } from 'react'
import { Trash2, Plus, Minus, ArrowRight, Zap, Flame, MoveRight, ShoppingBag } from 'lucide-react'
import { cn } from '@/lib/utils'

const initialItems = [
  {
    id: 1,
    name: 'Oversized Shadow Hoodie',
    price: 185.00,
    color: 'Void Black',
    size: 'XXL',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=400&h=600&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Cargo Tech-Pants v2',
    price: 240.00,
    color: 'Olive Drab',
    size: '34',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=400&h=600&auto=format&fit=crop'
  }
]

export default function CartStreetwear() {
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
    <div className="w-full min-h-screen bg-black text-white font-black uppercase tracking-tighter p-4 md:p-8">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <h1 className="text-8xl md:text-[12rem] leading-[0.8] tracking-[-0.05em] italic">MY BAG.</h1>
           <div className="flex items-center gap-6 pb-4">
              <div className="h-4 w-4 bg-lime-400 rounded-full animate-ping" />
              <p className="text-2xl italic">LOCKED & LOADED ({items.length})</p>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
           {/* Items */}
           <div className="lg:col-span-8 space-y-4">
              {items.length > 0 ? (
                items.map((item) => (
                  <div key={item.id} className="group relative bg-[#111] p-6 md:p-10 flex flex-col md:flex-row gap-10 hover:bg-[#1a1a1a] transition-all duration-300 overflow-hidden">
                     {/* Hover Glitch Effect */}
                     <div className="absolute inset-0 bg-lime-400 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />
                     
                     <div className="w-full md:w-52 h-72 bg-zinc-900 overflow-hidden relative skew-x-[-2deg] group-hover:skew-x-0 transition-transform duration-500">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                        <div className="absolute top-4 left-4 px-3 py-1 bg-lime-400 text-black text-[10px] font-black skew-x-[-12deg]">
                           HOT DROP
                        </div>
                     </div>

                     <div className="flex-1 flex flex-col justify-between py-2">
                        <div className="flex justify-between items-start">
                           <div>
                              <h3 className="text-4xl md:text-5xl mb-4 italic leading-none">{item.name}</h3>
                              <div className="flex flex-wrap gap-4">
                                 <span className="px-4 py-1 border border-zinc-800 text-zinc-500 text-xs tracking-widest">{item.color}</span>
                                 <span className="px-4 py-1 border border-zinc-800 text-zinc-500 text-xs tracking-widest">SIZE: {item.size}</span>
                              </div>
                           </div>
                           <p className="text-4xl text-lime-400 italic">${item.price.toFixed(2)}</p>
                        </div>

                        <div className="flex justify-between items-center mt-12">
                           <div className="flex items-center gap-8 bg-zinc-900 p-2 skew-x-[-12deg]">
                              <button 
                                onClick={() => updateQuantity(item.id, -1)}
                                className="h-12 w-12 flex items-center justify-center hover:text-lime-400 transition-colors skew-x-[12deg]"
                              >
                                <Minus className="h-6 w-6" />
                              </button>
                              <span className="text-2xl min-w-8 text-center skew-x-[12deg]">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, 1)}
                                className="h-12 w-12 flex items-center justify-center hover:text-lime-400 transition-colors skew-x-[12deg]"
                              >
                                <Plus className="h-6 w-6" />
                              </button>
                           </div>
                           <button 
                             onClick={() => removeItem(item.id)}
                             className="text-xs text-zinc-600 hover:text-white transition-colors border-b-2 border-transparent hover:border-white pb-1"
                           >
                              SCRAP ITEM
                           </button>
                        </div>
                     </div>
                  </div>
                ))
              ) : (
                <div className="py-40 text-center bg-[#111] skew-x-[-2deg]">
                   <p className="text-zinc-700 text-6xl italic mb-10">EMPTY CLIP.</p>
                   <button className="px-12 py-6 bg-white text-black text-xl hover:bg-lime-400 transition-colors">GO SHOPPING</button>
                </div>
              )}

              {/* Ticker */}
              <div className="bg-lime-400 text-black py-4 overflow-hidden whitespace-nowrap border-y-4 border-black">
                 <div className="flex gap-20 animate-marquee font-black italic tracking-widest text-2xl">
                    <span>FRESH DROPS EVERY FRIDAY // WORLDWIDE SHIPPING // JOIN THE UNDERGROUND // NO FAKES ALLOWED // FRESH DROPS EVERY FRIDAY // WORLDWIDE SHIPPING // JOIN THE UNDERGROUND // NO FAKES ALLOWED</span>
                 </div>
              </div>
           </div>

           {/* Summary Sidebar */}
           <div className="lg:col-span-4">
              <div className="bg-[#111] p-10 md:p-16 sticky top-4 space-y-12 border-t-8 border-lime-400">
                 <div>
                    <h2 className="text-4xl italic mb-10 text-white">ORDER INTEL.</h2>
                    <div className="space-y-8">
                       <div className="flex justify-between items-center group">
                          <span className="text-zinc-500 text-xl italic group-hover:text-white transition-colors">SUBTOTAL</span>
                          <span className="text-2xl italic">${subtotal.toFixed(2)}</span>
                       </div>
                       <div className="flex justify-between items-center group">
                          <span className="text-zinc-500 text-xl italic group-hover:text-white transition-colors">TAX / DUTY</span>
                          <span className="text-2xl italic">$0.00</span>
                       </div>
                       <div className="flex justify-between items-center group">
                          <span className="text-zinc-500 text-xl italic group-hover:text-white transition-colors">SHIPPING</span>
                          <span className="text-xl text-lime-400 italic">ON US.</span>
                       </div>
                    </div>
                 </div>

                 <div className="pt-12 border-t border-zinc-800">
                    <div className="flex justify-between items-baseline mb-16">
                       <span className="text-2xl italic text-zinc-500 tracking-widest">TOTAL.</span>
                       <div className="text-right">
                          <p className="text-7xl md:text-8xl italic leading-none tracking-tighter text-white">
                             ${subtotal.toFixed(2)}
                          </p>
                          <p className="text-[10px] text-lime-400 tracking-[0.5em] mt-4 animate-pulse">VERIFIED ACCESS GRANTED</p>
                       </div>
                    </div>

                    <button className="w-full bg-white text-black py-10 text-3xl font-black italic hover:bg-lime-400 transition-all duration-500 shadow-[20px_20px_0_rgba(255,255,255,0.05)] hover:shadow-none hover:translate-x-4 hover:translate-y-4 flex items-center justify-center gap-6 group">
                       CHECKOUT <MoveRight className="h-10 w-10 transition-transform group-hover:translate-x-4" />
                    </button>

                    <div className="mt-12 space-y-6">
                       <div className="flex items-center gap-6 p-4 border border-zinc-800 grayscale hover:grayscale-0 transition-all">
                          <Flame className="h-8 w-8 text-orange-500" />
                          <p className="text-xs text-zinc-500 leading-tight">ORDER PROCESSED IN THE UNDERGROUND LABS</p>
                       </div>
                       <div className="flex items-center gap-6 p-4 border border-zinc-800 grayscale hover:grayscale-0 transition-all">
                          <Zap className="h-8 w-8 text-yellow-400" />
                          <p className="text-xs text-zinc-500 leading-tight">FAST AS HELL DELIVERY WORLDWIDE</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
         </div>
       </div>
    </div>
  )
}
