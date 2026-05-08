"use client"

import { useState } from 'react'
import { Trash2, Plus, Minus, Zap, Cpu, Gamepad2, Swords, Shield, Trophy } from 'lucide-react'
import { cn } from '@/lib/utils'

const initialItems = [
  {
    id: 1,
    name: 'Mech-Keyboard X900',
    price: 189.00,
    type: 'Hardware',
    rarity: 'Legendary',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=400&h=400&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Photon Pro Mouse',
    price: 79.00,
    type: 'Peripheral',
    rarity: 'Rare',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1527814050087-379526382287?q=80&w=400&h=400&auto=format&fit=crop'
  }
]

export default function CartGamingStore() {
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
    <div className="w-full min-h-screen bg-[#050505] text-white p-6 md:p-12 font-mono selection:bg-cyan-500 selection:text-black">
      
      {/* Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-cyan-500/20 pb-10">
           <div className="flex items-center gap-6">
              <div className="h-16 w-16 bg-cyan-500/10 border border-cyan-500/30 rounded-sm flex items-center justify-center animate-pulse">
                 <Gamepad2 className="h-8 w-8 text-cyan-400" />
              </div>
              <h1 className="text-5xl font-black uppercase tracking-tighter italic drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Gear Vault.</h1>
           </div>
           <p className="text-cyan-400/60 text-[10px] font-black uppercase tracking-[0.5em] mt-4 md:mt-0">System: Connected // User: Elite_Gamer</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           {/* Loot Area */}
           <div className="lg:col-span-8 space-y-8">
              {items.length > 0 ? (
                items.map((item) => (
                  <div key={item.id} className="group relative">
                     <div className={cn(
                       "absolute -inset-0.5 rounded-sm opacity-20 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200",
                       item.rarity === 'Legendary' ? "bg-gradient-to-r from-orange-500 to-yellow-500" : "bg-gradient-to-r from-cyan-500 to-blue-500"
                     )} />
                     <div className="relative flex flex-col md:flex-row gap-8 bg-black/80 backdrop-blur-xl p-8 border border-white/5 rounded-sm">
                        <div className="w-full md:w-40 h-40 bg-zinc-900 rounded-sm overflow-hidden border border-white/5 relative group-hover:border-cyan-500/50 transition-colors">
                           <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3" />
                           <div className="absolute top-2 left-2 px-2 py-1 bg-black/80 backdrop-blur-md rounded-sm border border-white/10">
                              <p className={cn(
                                "text-[8px] font-black uppercase tracking-widest",
                                item.rarity === 'Legendary' ? "text-orange-500" : "text-cyan-400"
                              )}>{item.rarity}</p>
                           </div>
                        </div>

                        <div className="flex-1 flex flex-col justify-between">
                           <div className="flex justify-between items-start">
                              <div>
                                 <h3 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors mb-2">{item.name}</h3>
                                 <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                                    <span className="flex items-center gap-1"><Cpu className="h-3 w-3" /> {item.type}</span>
                                    <span className="h-1 w-1 bg-zinc-800 rounded-full" />
                                    <span>ID: #{1029 + item.id}</span>
                                 </div>
                              </div>
                              <p className="text-2xl font-black text-cyan-400">${item.price.toFixed(2)}</p>
                           </div>

                           <div className="flex justify-between items-center mt-10">
                              <div className="flex items-center gap-4 bg-zinc-900 p-1 border border-white/5 rounded-sm">
                                 <button 
                                   onClick={() => updateQuantity(item.id, -1)}
                                   className="h-10 w-10 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all"
                                 >
                                   <Minus className="h-4 w-4" />
                                 </button>
                                 <span className="w-8 text-center text-sm font-black">{item.quantity}</span>
                                 <button 
                                   onClick={() => updateQuantity(item.id, 1)}
                                   className="h-10 w-10 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all"
                                 >
                                   <Plus className="h-4 w-4" />
                                 </button>
                              </div>
                              <button 
                                onClick={() => removeItem(item.id)}
                                className="text-[10px] font-black uppercase tracking-widest text-zinc-600 hover:text-rose-500 transition-colors flex items-center gap-2"
                              >
                                 <Trash2 className="h-4 w-4" /> Drop Loot
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
                ))
              ) : (
                <div className="py-24 text-center border border-white/5 bg-zinc-900/30 rounded-sm">
                   <p className="text-zinc-600 uppercase tracking-[0.3em] font-black mb-8 italic">No active gear in inventory.</p>
                   <button className="px-10 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all uppercase tracking-widest font-black text-xs">Return to Shop</button>
                </div>
              )}
           </div>

           {/* Summary Area */}
           <div className="lg:col-span-4">
              <div className="bg-zinc-900/50 border border-white/10 p-10 sticky top-12 rounded-sm overflow-hidden group">
                 {/* Summary Glitch Background */}
                 <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                 
                 <h2 className="text-xs font-black uppercase tracking-[0.4em] text-cyan-400 mb-12 flex items-center gap-3">
                    <Zap className="h-4 w-4" /> Power Summary
                 </h2>

                 <div className="space-y-6 mb-12 pb-12 border-b border-white/5">
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Loot Subtotal</span>
                       <span className="text-lg font-black text-white">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Portal Delivery</span>
                       <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Complimentary</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Bonus Points</span>
                       <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest">+{Math.floor(subtotal / 10)} XP</span>
                    </div>
                 </div>

                 <div className="flex justify-between items-baseline mb-16">
                    <span className="text-sm font-black uppercase tracking-widest text-zinc-400">Final Cost</span>
                    <div className="text-right">
                       <p className="text-5xl font-black italic tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                          ${subtotal.toFixed(2)}
                       </p>
                       <p className="text-[8px] font-black text-cyan-400 uppercase tracking-widest mt-2 animate-pulse">Encrypted Transaction</p>
                    </div>
                 </div>

                 <button className="w-full bg-cyan-500 text-black py-6 font-black uppercase tracking-[0.4em] text-xs hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all flex items-center justify-center gap-4 group">
                    Enter Secure Gateway <Swords className="h-4 w-4 transition-transform group-hover:scale-125" />
                 </button>

                 <div className="mt-12 grid grid-cols-3 gap-4">
                    <div className="bg-black/40 p-4 border border-white/5 rounded-sm flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity group/stat">
                       <Shield className="h-4 w-4 text-zinc-400 group-hover/stat:text-cyan-400" />
                       <span className="text-[8px] font-black tracking-widest">Secure</span>
                    </div>
                    <div className="bg-black/40 p-4 border border-white/5 rounded-sm flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity group/stat">
                       <Trophy className="h-4 w-4 text-zinc-400 group-hover/stat:text-orange-500" />
                       <span className="text-[8px] font-black tracking-widest">Reward</span>
                    </div>
                    <div className="bg-black/40 p-4 border border-white/5 rounded-sm flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity group/stat">
                       <Zap className="h-4 w-4 text-zinc-400 group-hover/stat:text-yellow-400" />
                       <span className="text-[8px] font-black tracking-widest">Fast</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
