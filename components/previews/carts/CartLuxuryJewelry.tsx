"use client"

import { useState } from 'react'
import { Trash2, Plus, Minus, ArrowRight, Star, ShieldCheck, Diamond, Sparkles, Gem } from 'lucide-react'
import { cn } from '@/lib/utils'

const initialItems = [
  {
    id: 1,
    name: 'Celestial Diamond Collier',
    price: 45000.00,
    metal: '18K White Gold',
    stone: 'GIA Certified 2.5ct Diamond',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&h=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Royal Sapphire Earring Set',
    price: 18500.00,
    metal: 'Platinum',
    stone: 'Deep Velvet Blue Sapphire',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=600&h=800&auto=format&fit=crop'
  }
]

export default function CartLuxuryJewelry() {
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
    <div className="w-full min-h-screen bg-[#0a0a0a] text-[#d4af37] font-serif selection:bg-[#d4af37] selection:text-black">
      
      {/* Marble Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 md:px-16 py-12 md:py-32">
        
        <div className="text-center mb-24 space-y-6">
           <div className="inline-flex items-center gap-4 text-[#d4af37]/40 mb-4">
              <div className="h-px w-12 bg-current" />
              <Diamond className="h-5 w-5" />
              <div className="h-px w-12 bg-current" />
           </div>
           <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-white italic">Your Collection</h1>
           <p className="text-[10px] font-black uppercase tracking-[0.6em] text-[#d4af37]">Private Acquisition / Boutique No. 04</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-24">
           {/* Jewel List */}
           <div className="xl:col-span-8 space-y-24">
              {items.length > 0 ? (
                items.map((item) => (
                  <div key={item.id} className="flex flex-col lg:flex-row gap-16 group relative">
                     <div className="w-full lg:w-[450px] aspect-[4/5] bg-neutral-900 overflow-hidden relative shadow-[0_0_100px_rgba(0,0,0,1)] ring-1 ring-white/5">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover transition-transform duration-[4s] ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-8 left-8 flex items-center gap-4">
                           <div className="h-12 w-12 bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center border border-[#d4af37]/20">
                              <Gem className="h-5 w-5 text-[#d4af37]" />
                           </div>
                           <p className="text-[10px] font-black uppercase tracking-widest text-white">Hand-Crafted Rarity</p>
                        </div>
                     </div>

                     <div className="flex-1 flex flex-col justify-between py-8">
                        <div>
                           <div className="flex justify-between items-start mb-8">
                              <div className="space-y-4">
                                 <h3 className="text-4xl md:text-5xl font-light text-white leading-tight">{item.name}</h3>
                                 <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#d4af37]/60">
                                    <span>{item.metal}</span>
                                    <span className="h-1 w-1 bg-current rounded-full" />
                                    <span>{item.stone}</span>
                                 </div>
                              </div>
                              <p className="text-3xl font-light text-white">${item.price.toLocaleString()}</p>
                           </div>
                           
                           <div className="flex gap-2 mb-12 text-[#d4af37]">
                              {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                           </div>

                           <p className="text-sm text-neutral-500 max-w-md leading-relaxed italic">
                              A masterpiece of horological excellence and artisanal craftsmanship. This acquisition is accompanied by a full GIA certification and luxury presentation case.
                           </p>
                        </div>

                        <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/5">
                           <div className="flex items-center gap-12">
                              <button 
                                onClick={() => updateQuantity(item.id, -1)}
                                className="text-white/40 hover:text-[#d4af37] transition-colors"
                              >
                                <Minus className="h-5 w-5" />
                              </button>
                              <span className="text-2xl font-light min-w-8 text-center text-white">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, 1)}
                                className="text-white/40 hover:text-[#d4af37] transition-colors"
                              >
                                <Plus className="h-5 w-5" />
                              </button>
                           </div>

                           <button 
                             onClick={() => removeItem(item.id)}
                             className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-600 hover:text-rose-500 transition-colors"
                           >
                             Release Acquisition
                           </button>
                        </div>
                     </div>
                  </div>
                ))
              ) : (
                <div className="py-40 text-center border border-white/5 bg-white/2 backdrop-blur-sm rounded-sm">
                   <Diamond className="h-12 w-12 text-[#d4af37]/20 mx-auto mb-8" />
                   <p className="text-neutral-500 italic mb-8 tracking-widest">The collection is currently empty.</p>
                   <button className="text-[#d4af37] text-xs font-black uppercase tracking-[0.6em] hover:text-white transition-colors">
                      Discover Haute Joaillerie
                   </button>
                </div>
              )}
           </div>

           {/* Concierge Sidebar */}
           <div className="xl:col-span-4">
              <div className="bg-neutral-900/40 backdrop-blur-2xl border border-white/5 p-12 md:p-16 sticky top-12 space-y-16 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
                 <div>
                    <h2 className="text-xs font-black uppercase tracking-[0.5em] text-[#d4af37] mb-12 flex items-center gap-4">
                       <Sparkles className="h-4 w-4" /> Acquisition Details
                    </h2>
                    <div className="space-y-8">
                       <div className="flex justify-between text-sm">
                          <span className="text-neutral-500 italic">Subtotal</span>
                          <span className="text-white font-light">${subtotal.toLocaleString()}</span>
                       </div>
                       <div className="flex justify-between text-sm">
                          <span className="text-neutral-500 italic">Security Escrow</span>
                          <span className="text-[#d4af37] font-bold uppercase tracking-widest text-[10px]">Complimentary</span>
                       </div>
                       <div className="flex justify-between text-sm">
                          <span className="text-neutral-500 italic">Vault Preparation</span>
                          <span className="text-white font-light">$250.00</span>
                       </div>
                    </div>
                 </div>

                 <div className="pt-12 border-t border-white/5">
                    <div className="flex justify-between items-baseline mb-16">
                       <span className="text-sm font-black uppercase tracking-[0.3em] text-white">Investment Total</span>
                       <div className="text-right">
                          <span className="text-5xl font-light text-white tracking-tighter">${(subtotal + 250).toLocaleString()}</span>
                       </div>
                    </div>

                    <button className="w-full bg-[#d4af37] text-black py-8 text-[10px] font-black uppercase tracking-[0.6em] hover:bg-white transition-all duration-700 mb-10 shadow-[0_10px_40px_rgba(212,175,55,0.2)]">
                       Proceed to Secure Transfer
                    </button>

                    <div className="space-y-8">
                       <div className="flex items-center gap-6 text-neutral-500">
                          <ShieldCheck className="h-5 w-5 text-[#d4af37]" />
                          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Fully Insured White-Glove Delivery</span>
                       </div>
                       <div className="flex items-center gap-6 text-neutral-500">
                          <Diamond className="h-5 w-5 text-[#d4af37]" />
                          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">GIA Certified Authentication</span>
                       </div>
                    </div>
                 </div>

                 <div className="p-8 border border-[#d4af37]/10 bg-[#d4af37]/5">
                    <p className="text-[10px] text-[#d4af37] leading-relaxed italic text-center uppercase tracking-widest">
                      "Our master jewelers have dedicated 1,200 hours to the creation of your selected pieces. Experience the pinnacle of luxury."
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
