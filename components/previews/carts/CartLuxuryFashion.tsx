"use client"

import { useState } from 'react'
import { Trash2, Plus, Minus, ArrowRight, Star, ShieldCheck, CreditCard } from 'lucide-react'
import { cn } from '@/lib/utils'

const initialItems = [
  {
    id: 1,
    name: 'Atelier Gold Chronograph',
    price: 1250.00,
    sku: 'WCH-772-GLD',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&h=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Veau Velours Evening Clutch',
    price: 890.00,
    sku: 'BAG-901-BLK',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1584917033904-493bb3c3cc08?q=80&w=600&h=800&auto=format&fit=crop'
  }
]

export default function CartLuxuryFashion() {
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
    <div className="w-full bg-[#080808] text-[#e5e5e5] font-serif min-h-screen selection:bg-[#c5a35d] selection:text-black">
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 py-12 md:py-24">
        
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 border-b border-white/10 pb-12">
          <h1 className="text-5xl md:text-7xl font-light italic tracking-tighter text-white">Your Selection</h1>
          <p className="text-[#c5a35d] text-xs font-black uppercase tracking-[0.4em] mt-4 md:mt-0">Refined Collection / Paris — Milan</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-24">
          {/* Items */}
          <div className="xl:col-span-8 space-y-16">
            {items.length > 0 ? (
              items.map((item) => (
                <div key={item.id} className="flex flex-col lg:flex-row gap-12 group relative">
                   <div className="w-full lg:w-[350px] aspect-[3/4] bg-neutral-900 overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                   </div>

                   <div className="flex-1 flex flex-col justify-between py-4">
                      <div>
                         <div className="flex justify-between items-start mb-6">
                            <div>
                               <h3 className="text-3xl font-light text-white mb-2 leading-tight">{item.name}</h3>
                               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#c5a35d]">SKU: {item.sku}</p>
                            </div>
                            <p className="text-2xl font-light text-white">${item.price.toLocaleString()}</p>
                         </div>
                         
                         <div className="flex gap-1 mb-8 text-[#c5a35d]">
                            {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                         </div>

                         <p className="text-sm text-neutral-500 max-w-md leading-relaxed">
                            Exquisitely crafted using traditional techniques. A testament to timeless elegance and superior material quality.
                         </p>
                      </div>

                      <div className="flex justify-between items-center mt-12">
                         <div className="flex items-center gap-8 border-b border-white/10 pb-4">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="text-white hover:text-[#c5a35d] transition-colors"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="text-lg font-light min-w-8 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="text-white hover:text-[#c5a35d] transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                         </div>

                         <button 
                           onClick={() => removeItem(item.id)}
                           className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-600 hover:text-white transition-colors"
                         >
                           Remove Selection
                         </button>
                      </div>
                   </div>
                </div>
              ))
            ) : (
              <div className="py-32 text-center border border-white/5 bg-white/2 backdrop-blur-sm">
                 <p className="text-neutral-500 italic mb-8">Your selection is currently empty.</p>
                 <button className="text-[#c5a35d] text-xs font-black uppercase tracking-[0.4em] hover:text-white transition-colors">
                    Explore Collections
                 </button>
              </div>
            )}
          </div>

          {/* Checkout Sidebar */}
          <div className="xl:col-span-4">
            <div className="bg-neutral-900/50 backdrop-blur-xl border border-white/5 p-10 md:p-16 sticky top-32 space-y-12">
               <div>
                  <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#c5a35d] mb-12">Checkout Summary</h2>
                  <div className="space-y-6">
                     <div className="flex justify-between text-sm">
                        <span className="text-neutral-500 italic">Subtotal</span>
                        <span className="text-white font-light">${subtotal.toLocaleString()}</span>
                     </div>
                     <div className="flex justify-between text-sm">
                        <span className="text-neutral-500 italic">Shipping</span>
                        <span className="text-[#c5a35d] font-bold uppercase tracking-widest text-[10px]">Complimentary</span>
                     </div>
                     <div className="flex justify-between text-sm">
                        <span className="text-neutral-500 italic">Vault Insurance</span>
                        <span className="text-white font-light">$45.00</span>
                     </div>
                  </div>
               </div>

               <div className="pt-12 border-t border-white/10">
                  <div className="flex justify-between items-baseline mb-12">
                     <span className="text-sm font-black uppercase tracking-[0.2em] text-white">Total</span>
                     <span className="text-4xl font-light text-white">${(subtotal + 45).toLocaleString()}</span>
                  </div>

                  <button className="w-full bg-[#c5a35d] text-black py-6 text-xs font-black uppercase tracking-[0.4em] hover:bg-white transition-all duration-500 mb-8">
                     Proceed to Checkout
                  </button>

                  <div className="space-y-6">
                     <div className="flex items-center gap-4 text-neutral-500">
                        <ShieldCheck className="h-4 w-4" />
                        <span className="text-[10px] uppercase tracking-widest">Insured Worldwide Delivery</span>
                     </div>
                     <div className="flex items-center gap-4 text-neutral-500">
                        <CreditCard className="h-4 w-4" />
                        <span className="text-[10px] uppercase tracking-widest">Secure Concierge Payment</span>
                     </div>
                  </div>
               </div>

               <div className="bg-white/5 p-8 border border-white/5">
                  <p className="text-[10px] text-neutral-400 leading-relaxed italic text-center">
                    "Luxury is in each detail. Our concierge team is available 24/7 for your acquisition assistance."
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
