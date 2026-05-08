"use client"

import { useState } from 'react'
import { Trash2, Plus, Minus, X, ShoppingCart, ArrowRight, Truck, Gift, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

const initialItems = [
  {
    id: 1,
    name: 'Silk Blend Shirt',
    price: 89.00,
    size: 'Large',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c7176c8?q=80&w=300&h=400&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Wool Blend Trousers',
    price: 155.00,
    size: '34',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1624373663920-9363b497332b?q=80&w=300&h=400&auto=format&fit=crop'
  }
]

export default function CartDrawerSlide() {
  const [isOpen, setIsOpen] = useState(true)
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
  const freeShippingThreshold = 300
  const progress = Math.min(100, (subtotal / freeShippingThreshold) * 100)

  return (
    <div className="w-full h-[800px] bg-gray-200 relative overflow-hidden flex items-center justify-center font-sans">
      <button 
        onClick={() => setIsOpen(true)}
        className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-full shadow-2xl hover:scale-110 transition-all flex items-center gap-3"
      >
        <ShoppingCart className="h-4 w-4" /> Open Side Cart
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="absolute inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-500"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={cn(
        "absolute top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-[-20px_0_50px_rgba(0,0,0,0.1)] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="h-full flex flex-col">
          
          {/* Header */}
          <div className="p-8 flex items-center justify-between border-b border-gray-100">
             <div className="flex items-center gap-4">
                <h2 className="text-xl font-black uppercase tracking-tighter italic">Bag.</h2>
                <span className="h-6 w-6 bg-black text-white text-[10px] font-black rounded-full flex items-center justify-center">{items.length}</span>
             </div>
             <button 
               onClick={() => setIsOpen(false)}
               className="h-10 w-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:text-black hover:bg-gray-100 transition-all"
             >
               <X className="h-5 w-5" />
             </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="p-8 bg-gray-50/50">
             <div className="flex justify-between items-center mb-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                   {subtotal >= freeShippingThreshold 
                     ? "You've unlocked free shipping!" 
                     : `Add $${(freeShippingThreshold - subtotal).toFixed(2)} more for free shipping`}
                </p>
                <Truck className={cn("h-4 w-4 transition-colors", subtotal >= freeShippingThreshold ? "text-emerald-500" : "text-gray-300")} />
             </div>
             <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-black transition-all duration-1000 ease-out"
                  style={{ width: `${progress}%` }}
                />
             </div>
          </div>

          {/* Items Area */}
          <div className="flex-1 overflow-y-auto px-8 py-8 space-y-10 custom-scrollbar">
             {items.length > 0 ? (
               items.map((item) => (
                 <div key={item.id} className="flex gap-6 group animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="w-24 h-32 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0 relative">
                       <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                       <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="h-6 w-6 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-rose-500 shadow-sm"
                          >
                             <Trash2 className="h-3 w-3" />
                          </button>
                       </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-between py-1">
                       <div>
                          <div className="flex justify-between items-start mb-1">
                             <h3 className="text-sm font-black uppercase tracking-tight leading-tight">{item.name}</h3>
                             <p className="text-sm font-black italic">${item.price.toFixed(2)}</p>
                          </div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Size: {item.size}</p>
                       </div>

                       <div className="flex items-center gap-4 bg-gray-50 self-start p-1 rounded-lg border border-gray-100">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="h-7 w-7 flex items-center justify-center hover:bg-white rounded-md text-gray-400 hover:text-black transition-all"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-4 text-center text-xs font-black">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="h-7 w-7 flex items-center justify-center hover:bg-white rounded-md text-gray-400 hover:text-black transition-all"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                       </div>
                    </div>
                 </div>
               ))
             ) : (
               <div className="h-full flex flex-col items-center justify-center text-center pb-20">
                  <div className="h-20 w-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                     <ShoppingCart className="h-8 w-8 text-gray-200" />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Empty bag</p>
               </div>
             )}

             {/* Upsell */}
             <div className="pt-8 border-t border-gray-100">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6">Complete the look</h4>
                <div className="p-4 bg-gray-50 rounded-2xl flex items-center gap-4 group cursor-pointer hover:bg-gray-100 transition-all border border-transparent hover:border-gray-200">
                   <div className="h-16 w-16 bg-white rounded-xl overflow-hidden flex-shrink-0">
                      <img src="https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=200&h=200&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt="Upsell" />
                   </div>
                   <div className="flex-1">
                      <h5 className="text-[10px] font-black uppercase tracking-widest mb-1">Leather Belt</h5>
                      <p className="text-[10px] font-bold text-gray-400">$45.00</p>
                   </div>
                   <button className="h-8 w-8 bg-black text-white rounded-lg flex items-center justify-center hover:scale-110 transition-all">
                      <Plus className="h-4 w-4" />
                   </button>
                </div>
             </div>
          </div>

          {/* Footer Summary */}
          <div className="p-8 border-t border-gray-100 bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
             <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                   <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Subtotal</span>
                   <span className="text-lg font-black italic tracking-tight">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded-xl">
                   <Gift className="h-4 w-4 text-emerald-600" />
                   <p className="text-[10px] font-black uppercase tracking-widest text-emerald-700">Add a gift note for free</p>
                </div>
             </div>

             <button className="w-full bg-black text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-black/10 hover:shadow-2xl transition-all flex items-center justify-center gap-3 group overflow-hidden relative">
                <span className="relative z-10">Secure Checkout</span>
                <ArrowRight className="h-4 w-4 relative z-10 transition-transform group-hover:translate-x-2" />
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
             </button>
             
             <div className="mt-6 flex justify-center gap-6 opacity-30">
                <ShieldCheck className="h-4 w-4" />
                <p className="text-[8px] font-black uppercase tracking-[0.2em]">SSL Encrypted Acquisition</p>
             </div>
          </div>
        </div>
      </div>

    </div>
  )
}
