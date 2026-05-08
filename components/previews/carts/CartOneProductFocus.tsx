"use client"

import { useState } from 'react'
import { Trash2, Plus, Minus, ArrowRight, Star, ShoppingBag, ShieldCheck, Truck, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const initialItems = [
  {
    id: 1,
    name: 'The Ultimate Hybrid Pillow',
    price: 129.00,
    variant: 'Standard / Cloud White',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?q=80&w=800&h=800&auto=format&fit=crop'
  }
]

export default function CartOneProductFocus() {
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
    <div className="w-full min-h-screen bg-white text-black font-sans flex flex-col">
      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 py-12 md:py-24 flex-1">
        
        <div className="flex items-center justify-between mb-16 pb-8 border-b border-gray-100">
           <h1 className="text-4xl font-black uppercase tracking-tighter italic">Your Order.</h1>
           <div className="flex items-center gap-2 px-4 py-2 bg-black text-white text-[10px] font-black rounded-full uppercase tracking-widest">
              <ShoppingBag className="h-3 w-3" /> 1 Item
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Main Content */}
          <div className="lg:col-span-7">
            {items.length > 0 ? (
              items.map((item) => (
                <div key={item.id} className="group">
                   <div className="aspect-square bg-gray-50 rounded-[3rem] overflow-hidden mb-12 relative shadow-2xl shadow-gray-200">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
                      <div className="absolute top-8 right-8 flex flex-col gap-4">
                         <button className="h-14 w-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-black shadow-xl hover:bg-black hover:text-white transition-all">
                            <Plus className="h-6 w-6" />
                         </button>
                      </div>
                      <div className="absolute bottom-8 left-8 p-6 bg-white/90 backdrop-blur-md rounded-[2rem] border border-white/50">
                         <div className="flex gap-1 mb-2">
                            {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 text-orange-400 fill-current" />)}
                         </div>
                         <p className="text-[10px] font-black uppercase tracking-widest">Best-Selling Comfort Gear</p>
                      </div>
                   </div>

                   <div className="flex justify-between items-end mb-12">
                      <div>
                         <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">{item.name}</h2>
                         <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{item.variant}</p>
                      </div>
                      <p className="text-4xl font-black italic tracking-tight">${item.price.toFixed(2)}</p>
                   </div>

                   <div className="flex items-center justify-between py-8 border-y border-gray-100">
                      <div className="flex items-center gap-10">
                         <div className="flex items-center gap-6 bg-gray-50 p-2 rounded-2xl border border-gray-100">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="h-12 w-12 flex items-center justify-center hover:bg-white rounded-xl text-gray-400 hover:text-black transition-all shadow-sm"
                            >
                              <Minus className="h-5 w-5" />
                            </button>
                            <span className="text-lg font-black w-6 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="h-12 w-12 flex items-center justify-center hover:bg-white rounded-xl text-gray-400 hover:text-black transition-all shadow-sm"
                            >
                              <Plus className="h-5 w-5" />
                            </button>
                         </div>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 hover:text-rose-500 transition-colors"
                      >
                         Remove From Order
                      </button>
                   </div>
                </div>
              ))
            ) : (
              <div className="py-40 text-center">
                 <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Your order is empty</p>
              </div>
            )}
            
            {/* Upsell - Single Focus */}
            <div className="mt-20">
               <h3 className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-10">Essential Add-On</h3>
               <div className="p-8 bg-black text-white rounded-[3rem] flex flex-col md:flex-row items-center gap-10 group cursor-pointer hover:scale-[1.02] transition-all duration-500">
                  <div className="h-32 w-32 bg-gray-900 rounded-[2rem] overflow-hidden shrink-0">
                     <img src="https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?q=80&w=200&h=200&auto=format&fit=crop" alt="Upsell" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1">
                     <div className="flex items-center gap-2 text-orange-400 mb-2">
                        <Zap className="h-4 w-4 fill-current" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Often Bought Together</span>
                     </div>
                     <h4 className="text-xl font-black uppercase tracking-tight mb-2">Cooling Silk Case</h4>
                     <p className="text-sm text-gray-500 leading-relaxed font-medium">Add a cooling silk pillowcase for the ultimate sleep experience.</p>
                  </div>
                  <div className="text-right">
                     <p className="text-2xl font-black italic mb-4">$45.00</p>
                     <button className="px-8 py-3 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-110 transition-all">Add To Bag</button>
                  </div>
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5">
             <div className="bg-gray-50 rounded-[4rem] p-12 md:p-16 sticky top-12 border border-gray-100 shadow-2xl shadow-gray-200/50">
                <h2 className="text-xs font-black uppercase tracking-[0.5em] text-gray-400 mb-12">Summary</h2>
                
                <div className="space-y-8 mb-12 pb-12 border-b border-gray-200">
                   <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Subtotal</span>
                      <span className="text-xl font-black italic">${subtotal.toFixed(2)}</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Shipping</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Free Express</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Tax Estimate</span>
                      <span className="text-xl font-black italic">$0.00</span>
                   </div>
                </div>

                <div className="flex justify-between items-baseline mb-16">
                   <span className="text-lg font-black uppercase tracking-widest">Total Amount</span>
                   <div className="text-right">
                      <p className="text-6xl font-black italic tracking-tighter text-black">
                         ${subtotal.toFixed(2)}
                      </p>
                      <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mt-4 flex items-center justify-end gap-2">
                        <ShieldCheck className="h-4 w-4" /> Secure Payment Guaranteed
                      </p>
                   </div>
                </div>

                <button className="w-full bg-black text-white py-8 rounded-[2.5rem] font-black uppercase tracking-[0.4em] text-sm hover:invert transition-all duration-700 flex items-center justify-center gap-4 group">
                   Complete Acquisition <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </button>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="flex gap-4">
                      <Truck className="h-6 w-6 text-gray-300" />
                      <div>
                         <p className="text-[10px] font-black uppercase tracking-widest text-black mb-1">Free Shipping</p>
                         <p className="text-[10px] font-medium text-gray-400">On all orders over $100</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <ShieldCheck className="h-6 w-6 text-gray-300" />
                      <div>
                         <p className="text-[10px] font-black uppercase tracking-widest text-black mb-1">Secure Check</p>
                         <p className="text-[10px] font-medium text-gray-400">SSL Encrypted Payment</p>
                      </div>
                   </div>
                </div>

                {/* Urgency Badge */}
                <div className="mt-12 p-6 bg-orange-50 rounded-[2rem] border border-orange-100 flex items-center gap-4">
                   <div className="h-10 w-10 bg-orange-200 rounded-full flex items-center justify-center animate-pulse shrink-0">
                      <Zap className="h-5 w-5 text-orange-600 fill-current" />
                   </div>
                   <p className="text-[10px] font-black text-orange-800 uppercase tracking-widest leading-relaxed">
                      Only 4 items remaining in stock. Secure your order before it's gone.
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
