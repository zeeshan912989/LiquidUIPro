"use client"

import { useState } from 'react'
import { Trash2, Plus, Minus, ArrowRight, Leaf, Recycle, Wind, Droplets, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

const initialItems = [
  {
    id: 1,
    name: 'Organic Hemp Backpack',
    price: 125.00,
    impact: '1.2kg Carbon Saved',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=400&h=400&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Bamboo Water Bottle',
    price: 35.00,
    impact: 'Zero Plastic',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1602143399827-bd9596a7c2a7?q=80&w=400&h=400&auto=format&fit=crop'
  }
]

export default function CartEcoOrganic() {
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
    <div className="w-full min-h-screen bg-[#fcfdfa] text-stone-800 font-sans p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
           <div className="flex items-center gap-4">
              <div className="h-14 w-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700">
                 <Leaf className="h-7 w-7" />
              </div>
              <div>
                 <h1 className="text-3xl font-black text-stone-900 tracking-tight">Your Green Basket</h1>
                 <p className="text-stone-500 font-medium">Thank you for shopping consciously.</p>
              </div>
           </div>
           
           <div className="bg-emerald-50 px-6 py-3 rounded-full border border-emerald-100 flex items-center gap-4">
              <Recycle className="h-5 w-5 text-emerald-600 animate-spin-slow" />
              <p className="text-xs font-black uppercase tracking-widest text-emerald-800">100% Recycled Packaging</p>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           {/* Items */}
           <div className="lg:col-span-8 space-y-8">
              {items.length > 0 ? (
                items.map((item) => (
                  <div key={item.id} className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-stone-100 flex flex-col md:flex-row gap-8 items-center group hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500">
                     <div className="w-full md:w-40 h-40 bg-stone-50 rounded-[2rem] overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                     </div>

                     <div className="flex-1 flex flex-col justify-between self-stretch py-2">
                        <div className="flex justify-between items-start">
                           <div>
                              <h3 className="text-xl font-black text-stone-900 mb-2">{item.name}</h3>
                              <div className="flex items-center gap-2 text-emerald-600">
                                 <Wind className="h-3 w-3" />
                                 <span className="text-[10px] font-black uppercase tracking-widest">{item.impact}</span>
                              </div>
                           </div>
                           <p className="text-2xl font-black text-stone-900">${item.price.toFixed(2)}</p>
                        </div>

                        <div className="flex justify-between items-center mt-8">
                           <div className="flex items-center gap-4 bg-stone-50 p-1 rounded-2xl border border-stone-100">
                              <button 
                                onClick={() => updateQuantity(item.id, -1)}
                                className="h-10 w-10 flex items-center justify-center hover:bg-white rounded-xl text-stone-400 hover:text-emerald-600 transition-all shadow-sm"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="w-6 text-center text-sm font-black">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, 1)}
                                className="h-10 w-10 flex items-center justify-center hover:bg-white rounded-xl text-stone-400 hover:text-emerald-600 transition-all shadow-sm"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                           </div>
                           <button 
                             onClick={() => removeItem(item.id)}
                             className="h-12 w-12 flex items-center justify-center text-stone-300 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-all"
                           >
                              <Trash2 className="h-5 w-5" />
                           </button>
                        </div>
                     </div>
                  </div>
                ))
              ) : (
                <div className="py-24 text-center bg-stone-50 rounded-[3rem] border-2 border-dashed border-stone-200">
                   <Droplets className="h-12 w-12 text-stone-200 mx-auto mb-6" />
                   <p className="text-stone-400 font-bold uppercase tracking-widest text-xs">Your basket is empty</p>
                </div>
              )}

              {/* Eco Mission */}
              <div className="bg-emerald-900 text-emerald-50 rounded-[3rem] p-10 flex flex-col md:flex-row items-center gap-10">
                 <div className="h-32 w-32 bg-emerald-800 rounded-full flex items-center justify-center shrink-0 border-4 border-emerald-700/50">
                    <Sun className="h-16 w-16 text-yellow-400 animate-pulse" />
                 </div>
                 <div>
                    <h4 className="text-xl font-black mb-4 uppercase tracking-tight italic">Our Sustainability Promise</h4>
                    <p className="text-sm text-emerald-200/80 leading-relaxed font-medium">
                       Every purchase helps us plant trees and remove plastic from the ocean. This order alone will offset 2.5kg of CO2. Together, we're making a difference.
                    </p>
                 </div>
              </div>
           </div>

           {/* Summary Area */}
           <div className="lg:col-span-4">
              <div className="bg-white rounded-[3rem] p-10 md:p-12 border border-stone-100 shadow-xl shadow-stone-900/5 sticky top-12">
                 <h2 className="text-xs font-black uppercase tracking-[0.4em] text-stone-400 mb-12">Order Ecology</h2>
                 
                 <div className="space-y-6 mb-12 pb-12 border-b border-stone-50">
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Products</span>
                       <span className="font-black text-stone-900">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Neutral Shipping</span>
                       <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Carbon Neutral</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Eco Donation</span>
                       <span className="font-black text-stone-900">$1.50</span>
                    </div>
                 </div>

                 <div className="flex justify-between items-baseline mb-16">
                    <span className="text-sm font-black uppercase tracking-widest text-stone-900">Final Total</span>
                    <div className="text-right">
                       <p className="text-4xl font-black italic tracking-tighter text-stone-900">
                          ${(subtotal + 1.5).toFixed(2)}
                       </p>
                    </div>
                 </div>

                 <button className="w-full bg-emerald-600 text-white py-6 rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs hover:bg-emerald-700 hover:shadow-2xl hover:shadow-emerald-900/20 transition-all flex items-center justify-center gap-4 group">
                    Confirm Purchase <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                 </button>

                 <div className="mt-12 space-y-6">
                    <div className="flex items-center gap-4">
                       <div className="h-8 w-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                          <Recycle className="h-4 w-4 text-emerald-600" />
                       </div>
                       <p className="text-[8px] font-black uppercase tracking-widest text-stone-500">Shipped in 100% biodegradable cornstarch mailers</p>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="h-8 w-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                          <Leaf className="h-4 w-4 text-emerald-600" />
                       </div>
                       <p className="text-[8px] font-black uppercase tracking-widest text-stone-500">Supporting renewable energy projects worldwide</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
