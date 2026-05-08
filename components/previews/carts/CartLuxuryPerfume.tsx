"use client"

import { useState } from 'react'
import { Trash2, Plus, Minus, ArrowRight, Star, Heart, ShieldCheck, Sparkles, Wind } from 'lucide-react'
import { cn } from '@/lib/utils'

const initialItems = [
  {
    id: 1,
    name: 'Oud Nuit de Minuit',
    price: 340.00,
    size: '100ml',
    note: 'Saffron, Rose, Sandalwood',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=400&h=600&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Bergamote Sauvage',
    price: 210.00,
    size: '50ml',
    note: 'Citrus, Amber, Musk',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=400&h=600&auto=format&fit=crop'
  }
]

export default function CartLuxuryPerfume() {
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
    <div className="w-full min-h-screen bg-[#faf8f6] text-[#2d2d2d] font-serif selection:bg-[#c5a35d] selection:text-white">
      <div className="max-w-7xl mx-auto px-8 md:px-12 py-12 md:py-24">
        
        <div className="text-center mb-24 space-y-8 animate-in fade-in slide-in-from-top-10 duration-1000">
           <div className="inline-flex items-center gap-4 text-[#c5a35d] mb-4">
              <div className="h-px w-12 bg-current opacity-30" />
              <Sparkles className="h-5 w-5" />
              <div className="h-px w-12 bg-current opacity-30" />
           </div>
           <h1 className="text-5xl md:text-8xl font-light tracking-tighter italic text-[#1a1a1a]">The Scent Journal</h1>
           <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#c5a35d]/60">Refining your olfactory signature</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-24">
           {/* Perfume List */}
           <div className="xl:col-span-8 space-y-24">
              {items.length > 0 ? (
                items.map((item) => (
                  <div key={item.id} className="flex flex-col lg:flex-row gap-16 group relative items-center">
                     <div className="w-full lg:w-[350px] aspect-[2/3] bg-[#f3f1ec] overflow-hidden relative shadow-2xl group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)] transition-all duration-1000">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f6]/40 via-transparent to-transparent opacity-60" />
                        <div className="absolute top-6 right-6 h-12 w-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-[#c5a35d] shadow-sm hover:scale-110 transition-transform cursor-pointer">
                           <Heart className="h-5 w-5" />
                        </div>
                     </div>

                     <div className="flex-1 flex flex-col justify-between self-stretch py-8 text-center lg:text-left">
                        <div className="space-y-8">
                           <div className="space-y-4">
                              <h3 className="text-4xl md:text-6xl font-light text-[#1a1a1a] leading-none tracking-tight italic">{item.name}</h3>
                              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#c5a35d]">
                                 <span>Eau de Parfum</span>
                                 <span className="h-1 w-1 bg-current rounded-full self-center" />
                                 <span>{item.size} / 3.4 FL.OZ</span>
                              </div>
                           </div>
                           
                           <div className="flex items-center justify-center lg:justify-start gap-4 p-6 bg-white/50 backdrop-blur-sm border border-white rounded-[2rem]">
                              <Wind className="h-5 w-5 text-[#c5a35d]" />
                              <p className="text-xs font-medium text-[#8c8c8c] italic tracking-wide">Olfactory Notes: {item.note}</p>
                           </div>

                           <div className="flex gap-2 justify-center lg:justify-start text-[#c5a35d]">
                              {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                              <span className="text-[10px] font-bold text-[#8c8c8c] uppercase tracking-widest ml-2">4.9 / 5.0</span>
                           </div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-[#e5e1d8] gap-8">
                           <div className="flex items-center gap-12">
                              <button 
                                onClick={() => updateQuantity(item.id, -1)}
                                className="text-[#8c8c8c] hover:text-[#c5a35d] transition-colors"
                              >
                                <Minus className="h-5 w-5" />
                              </button>
                              <span className="text-2xl font-light min-w-8 text-center text-[#1a1a1a] italic">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, 1)}
                                className="text-[#8c8c8c] hover:text-[#c5a35d] transition-colors"
                              >
                                <Plus className="h-5 w-5" />
                              </button>
                           </div>
                           
                           <div className="flex items-center gap-12">
                              <p className="text-3xl font-light text-[#1a1a1a] tracking-tight">${item.price.toFixed(2)}</p>
                              <button 
                                onClick={() => removeItem(item.id)}
                                className="text-[10px] font-black uppercase tracking-[0.4em] text-[#8c8c8c] hover:text-rose-500 transition-colors"
                              >
                                Release Scent
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
                ))
              ) : (
                <div className="py-40 text-center border border-[#e5e1d8] bg-white rounded-3xl">
                   <Wind className="h-12 w-12 text-[#c5a35d]/20 mx-auto mb-8" />
                   <p className="text-[#8c8c8c] italic mb-8 tracking-widest">Your scent journal is currently empty.</p>
                   <button className="text-[#c5a35d] text-xs font-black uppercase tracking-[0.6em] hover:text-[#1a1a1a] transition-colors">
                      Discover The Collection
                   </button>
                </div>
              )}

              {/* Unboxing Experience Section */}
              <div className="mt-32 p-12 md:p-20 bg-white rounded-[4rem] border border-[#e5e1d8] relative overflow-hidden group shadow-2xl shadow-[#c5a35d]/5">
                 <div className="absolute top-0 right-0 h-96 w-96 bg-[#fbf7f0] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform duration-1000" />
                 <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
                    <div className="h-40 w-40 bg-[#fbf7f0] rounded-full flex items-center justify-center shrink-0 border border-[#e5e1d8]">
                       <Sparkles className="h-16 w-16 text-[#c5a35d] animate-pulse" />
                    </div>
                    <div>
                       <h4 className="text-3xl font-light italic mb-6 text-[#1a1a1a]">The Art of Unboxing</h4>
                       <p className="text-sm text-[#8c8c8c] leading-relaxed font-medium italic max-w-lg mb-8">
                          Each flacon is nestled in a bespoke velvet-lined coffret, accompanied by a personalized scent card and three complimentary discovery vials to expand your collection.
                       </p>
                       <div className="flex gap-4">
                          <span className="px-6 py-2 border border-[#e5e1d8] rounded-full text-[10px] font-black uppercase tracking-widest text-[#8c8c8c]">Premium Wrapping Included</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Summary Sidebar */}
           <div className="xl:col-span-4">
              <div className="bg-white p-12 md:p-16 sticky top-12 space-y-16 shadow-[0_50px_100px_rgba(0,0,0,0.02)] border border-[#e5e1d8] rounded-[3rem]">
                 <div>
                    <h2 className="text-xs font-black uppercase tracking-[0.5em] text-[#c5a35d] mb-12 flex items-center gap-4">
                       Final Selection
                    </h2>
                    <div className="space-y-8">
                       <div className="flex justify-between text-sm">
                          <span className="text-[#8c8c8c] italic font-medium">Subtotal</span>
                          <span className="text-[#1a1a1a] font-light">${subtotal.toLocaleString()}</span>
                       </div>
                       <div className="flex justify-between text-sm">
                          <span className="text-[#8c8c8c] italic font-medium">Concierge Delivery</span>
                          <span className="text-[#c5a35d] font-bold uppercase tracking-widest text-[10px]">Complimentary</span>
                       </div>
                       <div className="flex justify-between text-sm">
                          <span className="text-[#8c8c8c] italic font-medium">Scent Discovery Set</span>
                          <span className="text-emerald-500 font-bold uppercase tracking-widest text-[10px]">Included</span>
                       </div>
                    </div>
                 </div>

                 <div className="pt-12 border-t border-[#f3f1ec]">
                    <div className="flex justify-between items-baseline mb-16">
                       <span className="text-sm font-black uppercase tracking-[0.3em] text-[#1a1a1a]">Value</span>
                       <div className="text-right">
                          <span className="text-5xl font-light text-[#1a1a1a] tracking-tighter italic">${subtotal.toLocaleString()}</span>
                       </div>
                    </div>

                    <button className="w-full bg-[#1a1a1a] text-white py-8 text-[10px] font-black uppercase tracking-[0.6em] hover:bg-[#c5a35d] transition-all duration-700 mb-10 shadow-2xl shadow-[#1a1a1a]/10 flex items-center justify-center gap-4 group">
                       Finalize Acquisition <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                    </button>

                    <div className="space-y-8">
                       <div className="flex items-center gap-6 text-[#8c8c8c]">
                          <ShieldCheck className="h-5 w-5 text-[#c5a35d]" />
                          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">White-Glove Insured Delivery</span>
                       </div>
                       <div className="flex items-center gap-6 text-[#8c8c8c]">
                          <Sparkles className="h-5 w-5 text-[#c5a35d]" />
                          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Authenticity Guaranteed</span>
                       </div>
                    </div>
                 </div>

                 <div className="p-8 bg-[#fbf7f0] rounded-[2rem] border border-[#e5e1d8]">
                    <p className="text-[10px] text-[#c5a35d] leading-relaxed italic text-center uppercase tracking-widest font-bold">
                      "Perfumery is the most intense form of memory. Every note is a fragment of a dream."
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
