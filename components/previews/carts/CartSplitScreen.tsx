"use client"

import { useState } from 'react'
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Truck, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

const initialItems = [
  {
    id: 1,
    name: 'Artisanal Ceramic Vase',
    price: 85.00,
    color: 'Terracotta',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=400&h=500&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Hand-Woven Linen Throw',
    price: 145.00,
    color: 'Oatmeal',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=400&h=500&auto=format&fit=crop'
  }
]

export default function CartSplitScreen() {
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
    <div className="w-full flex flex-col lg:flex-row min-h-screen bg-white font-sans overflow-hidden">
      
      {/* Left Side: Product List */}
      <div className="w-full lg:w-3/5 p-8 md:p-16 xl:p-24 overflow-y-auto">
         <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-16">
               <h1 className="text-4xl font-black uppercase tracking-tighter italic">Bag.</h1>
               <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{items.length} Items Selected</span>
            </div>

            <div className="space-y-12">
               {items.length > 0 ? (
                 items.map((item) => (
                   <div key={item.id} className="flex gap-8 group animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <div className="w-32 h-40 bg-gray-50 overflow-hidden rounded-2xl flex-shrink-0">
                         <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-between py-2">
                         <div className="flex justify-between items-start">
                            <div>
                               <h3 className="text-xl font-black uppercase tracking-tight mb-1">{item.name}</h3>
                               <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.color}</p>
                            </div>
                            <p className="text-xl font-black italic">${item.price.toFixed(2)}</p>
                         </div>

                         <div className="flex justify-between items-end">
                            <div className="flex items-center gap-6 border-b-2 border-black/5 pb-2 group-hover:border-black transition-colors">
                               <button 
                                 onClick={() => updateQuantity(item.id, -1)}
                                 className="text-gray-400 hover:text-black"
                               >
                                 <Minus className="h-4 w-4" />
                               </button>
                               <span className="text-sm font-black w-4 text-center">{item.quantity}</span>
                               <button 
                                 onClick={() => updateQuantity(item.id, 1)}
                                 className="text-gray-400 hover:text-black"
                               >
                                 <Plus className="h-4 w-4" />
                               </button>
                            </div>
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-[10px] font-black uppercase tracking-widest text-gray-300 hover:text-red-500 transition-colors"
                            >
                              Remove
                            </button>
                         </div>
                      </div>
                   </div>
                 ))
               ) : (
                 <div className="py-20 text-center">
                    <ShoppingBag className="h-12 w-12 text-gray-100 mx-auto mb-6" />
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Your bag is empty</p>
                 </div>
               )}
            </div>

            {/* Recommendations */}
            <div className="mt-24 pt-16 border-t border-gray-100">
               <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8">You might also like</h4>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  {[
                    { name: 'Ceramic Plate', price: '$24', img: 'https://images.unsplash.com/photo-1594913785162-e6785b423cb1?q=80&w=200&h=200&auto=format&fit=crop' },
                    { name: 'Linen Napkins', price: '$18', img: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=200&h=200&auto=format&fit=crop' },
                    { name: 'Vase Small', price: '$45', img: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=200&h=200&auto=format&fit=crop' }
                  ].map((rec, i) => (
                    <div key={i} className="group cursor-pointer">
                       <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-4">
                          <img src={rec.img} alt={rec.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                       </div>
                       <h5 className="text-[10px] font-black uppercase tracking-widest mb-1">{rec.name}</h5>
                       <p className="text-[10px] font-bold text-gray-400">{rec.price}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>

      {/* Right Side: Animated Summary */}
      <div className="w-full lg:w-2/5 bg-gray-50 p-8 md:p-16 xl:p-24 relative flex items-center">
         <div className="w-full max-w-md mx-auto">
            <div className="space-y-12">
               <div>
                  <h2 className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-12">Checkout Flow</h2>
                  <div className="space-y-8">
                     <div className="flex justify-between items-center group">
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-3">
                           <div className="h-2 w-2 bg-black rounded-full" /> Subtotal
                        </span>
                        <span className="text-xl font-black italic tracking-tight">${subtotal.toFixed(2)}</span>
                     </div>
                     <div className="flex justify-between items-center group">
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-3">
                           <div className="h-2 w-2 bg-gray-200 rounded-full group-hover:bg-black transition-colors" /> Shipping
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500">Free</span>
                     </div>
                     <div className="flex justify-between items-center group">
                        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-3">
                           <div className="h-2 w-2 bg-gray-200 rounded-full group-hover:bg-black transition-colors" /> Est. Tax
                        </span>
                        <span className="text-sm font-black italic tracking-tight">$0.00</span>
                     </div>
                  </div>
               </div>

               <div className="pt-12 border-t-4 border-black">
                  <div className="flex justify-between items-baseline mb-16">
                     <span className="text-lg font-black uppercase tracking-widest">Total</span>
                     <div className="text-right">
                        <p className="text-6xl font-black italic tracking-tighter transition-all duration-500 transform scale-110 origin-right">
                           ${subtotal.toFixed(2)}
                        </p>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mt-4">Inclusive of all duties</p>
                     </div>
                  </div>

                  <button className="w-full bg-black text-white py-8 rounded-none font-black uppercase tracking-[0.4em] text-sm hover:invert transition-all duration-500 flex items-center justify-center gap-4 group overflow-hidden relative">
                     <span className="relative z-10">Proceed to Checkout</span>
                     <ArrowRight className="h-5 w-5 relative z-10 transition-transform group-hover:translate-x-2" />
                     <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </button>
               </div>

               {/* Trust Indicators */}
               <div className="grid grid-cols-2 gap-8 mt-12">
                  <div className="flex flex-col gap-3">
                     <ShieldCheck className="h-6 w-6 text-gray-400" />
                     <p className="text-[10px] font-black uppercase tracking-widest leading-relaxed">Secure SSL Checkout</p>
                  </div>
                  <div className="flex flex-col gap-3">
                     <Truck className="h-6 w-6 text-gray-400" />
                     <p className="text-[10px] font-black uppercase tracking-widest leading-relaxed">Global Express Delivery</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Floating Badge */}
         <div className="absolute bottom-12 right-12 h-32 w-32 bg-white rounded-full border border-gray-100 shadow-2xl flex flex-col items-center justify-center animate-bounce duration-[3000ms] hidden xl:flex">
            <Clock className="h-6 w-6 text-black mb-2" />
            <p className="text-[8px] font-black uppercase tracking-[0.2em] text-center px-4">Limited Edition Items</p>
         </div>
      </div>
    </div>
  )
}
