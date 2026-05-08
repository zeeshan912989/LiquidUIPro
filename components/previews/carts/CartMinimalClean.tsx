"use client"

import { useState } from 'react'
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck, Truck, RefreshCcw } from 'lucide-react'
import { cn } from '@/lib/utils'

const initialItems = [
  {
    id: 1,
    name: 'Essential Cotton Tee',
    price: 45.00,
    color: 'Bone White',
    size: 'M',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=200&h=250&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Raw Denim Jeans',
    price: 120.00,
    color: 'Indigo',
    size: '32',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=200&h=250&auto=format&fit=crop'
  }
]

export default function CartMinimalClean() {
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
  const shipping = subtotal > 150 ? 0 : 15.00

  return (
    <div className="w-full bg-white text-black font-sans min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 py-12 md:py-24">
        <h1 className="text-4xl font-light tracking-tight mb-16">Your Shopping Bag</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Cart Items */}
          <div className="lg:col-span-8">
            <div className="space-y-12">
              {items.length > 0 ? (
                items.map((item) => (
                  <div key={item.id} className="flex flex-col md:flex-row gap-8 pb-12 border-b border-gray-100 last:border-0 group">
                    <div className="w-full md:w-40 h-52 bg-gray-50 overflow-hidden rounded-sm">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-500">{item.color} / {item.size}</p>
                        </div>
                        <p className="text-lg font-medium">${item.price.toFixed(2)}</p>
                      </div>

                      <div className="flex justify-between items-end mt-8">
                        <div className="flex items-center border border-gray-200 rounded-sm">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 hover:bg-gray-50 transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-10 text-center text-sm font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 hover:bg-gray-50 transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="flex items-center gap-2 text-xs text-gray-400 hover:text-black transition-colors uppercase tracking-widest font-semibold"
                        >
                          <Trash2 className="h-3 w-3" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-20 bg-gray-50 rounded-sm">
                  <p className="text-gray-400 mb-8 font-medium italic">Your bag is currently empty.</p>
                  <button className="text-sm font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-300 transition-all">
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>

            {/* Features */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-gray-100">
               <div className="flex items-start gap-4">
                  <Truck className="h-5 w-5 text-gray-400" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-1">Free Shipping</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Complimentary delivery on orders over $150.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <RefreshCcw className="h-5 w-5 text-gray-400" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-1">Easy Returns</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">30-day no-questions-asked return policy.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <ShieldCheck className="h-5 w-5 text-gray-400" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-1">Secure Payment</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">SSL encrypted checkout and data protection.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-gray-50 p-8 md:p-12 sticky top-32 rounded-sm border border-gray-100">
              <h2 className="text-xl font-medium mb-8">Summary</h2>
              
              <div className="space-y-6 mb-8 pb-8 border-b border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">Shipping</span>
                  <span className="font-medium">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">Estimated Tax</span>
                  <span className="font-medium">$0.00</span>
                </div>
              </div>

              <div className="flex justify-between items-baseline mb-12">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-black italic">${(subtotal + shipping).toFixed(2)}</span>
              </div>

              <button className="w-full bg-black text-white py-6 text-sm font-black uppercase tracking-[0.2em] hover:bg-gray-800 transition-all flex items-center justify-center gap-3 group">
                Checkout <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="mt-8">
                 <div className="flex items-center gap-2 mb-4">
                    <div className="h-1.5 flex-1 bg-gray-200 rounded-full overflow-hidden">
                       <div 
                         className="h-full bg-black transition-all duration-1000" 
                         style={{ width: `${Math.min(100, (subtotal / 150) * 100)}%` }}
                       />
                    </div>
                 </div>
                 <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest text-center">
                    {subtotal >= 150 
                      ? "You've unlocked free shipping!" 
                      : `Add $${(150 - subtotal).toFixed(2)} more for free shipping`}
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
