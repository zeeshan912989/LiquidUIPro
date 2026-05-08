"use client"

import { useState } from 'react'
import { Trash2, Plus, Minus, ArrowRight, Sparkles, Cpu, Zap, ShieldCheck, CreditCard } from 'lucide-react'
import { cn } from '@/lib/utils'

const initialItems = [
  {
    id: 1,
    name: 'Neural Link VR Headset',
    price: 599.00,
    category: 'Hardware',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=400&h=400&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Tactile Feedback Gloves',
    price: 249.00,
    category: 'Peripheral',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1558444479-c84851218674?q=80&w=400&h=400&auto=format&fit=crop'
  }
]

export default function CartGlassmorphism() {
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
    <div className="w-full min-h-screen bg-[#020617] text-white p-4 md:p-8 relative overflow-hidden flex items-center justify-center font-sans">
      
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
         <div className="absolute top-[10%] left-[10%] h-96 w-96 bg-indigo-600/30 blur-[120px] rounded-full animate-pulse" />
         <div className="absolute bottom-[10%] right-[10%] h-96 w-96 bg-fuchsia-600/30 blur-[120px] rounded-full animate-pulse delay-700" />
         <div className="absolute top-1/2 left-1/2 h-64 w-64 bg-cyan-600/20 blur-[100px] rounded-full animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Cart Content */}
        <div className="lg:col-span-8 space-y-6">
           <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
              <div className="flex items-center gap-4 mb-12">
                 <div className="h-12 w-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                    <Sparkles className="h-6 w-6 text-cyan-400" />
                 </div>
                 <h1 className="text-3xl font-black uppercase tracking-tighter">Your Payload</h1>
              </div>

              <div className="space-y-8">
                 {items.length > 0 ? (
                   items.map((item) => (
                     <div key={item.id} className="flex flex-col md:flex-row gap-8 p-6 bg-white/5 border border-white/10 rounded-3xl group hover:bg-white/10 transition-all duration-500">
                        <div className="w-full md:w-32 h-32 bg-black/20 rounded-2xl overflow-hidden border border-white/10">
                           <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>

                        <div className="flex-1 flex flex-col justify-between">
                           <div className="flex justify-between items-start">
                              <div>
                                 <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                                    <Cpu className="h-3 w-3 text-cyan-400" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">{item.category}</span>
                                 </div>
                              </div>
                              <p className="text-xl font-black text-white">${item.price.toFixed(2)}</p>
                           </div>

                           <div className="flex justify-between items-center mt-6">
                              <div className="flex items-center gap-4 bg-black/20 rounded-xl p-1 border border-white/10">
                                 <button 
                                   onClick={() => updateQuantity(item.id, -1)}
                                   className="h-8 w-8 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors"
                                 >
                                   <Minus className="h-4 w-4" />
                                 </button>
                                 <span className="w-6 text-center text-sm font-black">{item.quantity}</span>
                                 <button 
                                   onClick={() => updateQuantity(item.id, 1)}
                                   className="h-8 w-8 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors"
                                 >
                                   <Plus className="h-4 w-4" />
                                 </button>
                              </div>
                              <button 
                                onClick={() => removeItem(item.id)}
                                className="h-10 w-10 flex items-center justify-center bg-fuchsia-500/10 text-fuchsia-400 hover:bg-fuchsia-500 hover:text-white rounded-xl border border-fuchsia-500/20 transition-all"
                              >
                                <Trash2 className="h-5 w-5" />
                              </button>
                           </div>
                        </div>
                     </div>
                   ))
                 ) : (
                   <div className="text-center py-16">
                      <p className="text-white/40 font-bold uppercase tracking-[0.2em] mb-8 italic">Cart is currently offline.</p>
                      <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all font-black uppercase tracking-widest text-xs">
                         Reboot Shopping
                      </button>
                   </div>
                 )}
              </div>
           </div>

           {/* Quick Upsell / Tech Stats */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 flex items-center justify-between group cursor-pointer hover:border-cyan-500/50 transition-all">
                 <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-cyan-500/20 rounded-2xl flex items-center justify-center">
                       <Zap className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                       <h4 className="font-bold text-sm">Turbo Shipping</h4>
                       <p className="text-xs text-white/40">Next day delivery</p>
                    </div>
                 </div>
                 <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <Plus className="h-4 w-4" />
                 </div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 flex items-center justify-between group cursor-pointer hover:border-fuchsia-500/50 transition-all">
                 <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-fuchsia-500/20 rounded-2xl flex items-center justify-center">
                       <ShieldCheck className="h-6 w-6 text-fuchsia-400" />
                    </div>
                    <div>
                       <h4 className="font-bold text-sm">Damage Guard</h4>
                       <p className="text-xs text-white/40">Full device protection</p>
                    </div>
                 </div>
                 <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-fuchsia-500 group-hover:text-black transition-all">
                    <Plus className="h-4 w-4" />
                 </div>
              </div>
           </div>
        </div>

        {/* Floating Summary */}
        <div className="lg:col-span-4">
           <div className="bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[2.5rem] p-10 md:p-12 sticky top-8 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
              <h2 className="text-xl font-black uppercase tracking-widest mb-10 text-cyan-400">Final Order</h2>
              
              <div className="space-y-6 mb-10 pb-10 border-b border-white/10">
                 <div className="flex justify-between">
                    <span className="text-white/40 font-bold uppercase text-[10px] tracking-widest">Subtotal</span>
                    <span className="font-black">${subtotal.toFixed(2)}</span>
                 </div>
                 <div className="flex justify-between">
                    <span className="text-white/40 font-bold uppercase text-[10px] tracking-widest">System Shipping</span>
                    <span className="font-black text-cyan-400">FREE</span>
                 </div>
                 <div className="flex justify-between">
                    <span className="text-white/40 font-bold uppercase text-[10px] tracking-widest">Protocol Tax</span>
                    <span className="font-black">$0.00</span>
                 </div>
              </div>

              <div className="flex justify-between items-baseline mb-12">
                 <span className="text-sm font-black uppercase tracking-[0.2em] text-white">Total Value</span>
                 <div className="text-right">
                    <p className="text-4xl font-black text-white">${subtotal.toFixed(2)}</p>
                    <p className="text-[10px] font-black text-cyan-400 uppercase tracking-widest animate-pulse mt-2">Verified Transaction</p>
                 </div>
              </div>

              <button className="w-full relative group overflow-hidden bg-white text-black py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                 <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-fuchsia-500 opacity-0 group-hover:opacity-10 transition-opacity" />
                 <span className="relative z-10 flex items-center justify-center gap-3">
                    Execute Checkout <ArrowRight className="h-4 w-4" />
                 </span>
              </button>

              <div className="mt-8 grid grid-cols-4 gap-4 opacity-30">
                 {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-8 bg-white/20 rounded-lg flex items-center justify-center">
                       <CreditCard className="h-4 w-4" />
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
