"use client"

import { useState } from 'react'
import { Trash2, Plus, Minus, ArrowRight, Calendar, RefreshCcw, Gift, Star, ShieldCheck, CreditCard } from 'lucide-react'
import { cn } from '@/lib/utils'

const initialItems = [
  {
    id: 1,
    name: 'Morning Ritual Coffee Beans',
    price: 24.00,
    subPrice: 19.20,
    isSubscription: true,
    frequency: '4 weeks',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400&h=400&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Organic Earl Grey Tea',
    price: 18.00,
    subPrice: 14.40,
    isSubscription: false,
    frequency: '4 weeks',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b2163f58b?q=80&w=400&h=400&auto=format&fit=crop'
  }
]

export default function CartSubscription() {
  const [items, setItems] = useState(initialItems)

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ))
  }

  const toggleSubscription = (id: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, isSubscription: !item.isSubscription } : item
    ))
  }

  const updateFrequency = (id: number, freq: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, frequency: freq } : item
    ))
  }

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  const subtotal = items.reduce((acc, item) => {
    const price = item.isSubscription ? item.subPrice : item.price
    return acc + (price * item.quantity)
  }, 0)

  return (
    <div className="w-full min-h-screen bg-[#faf9f6] text-[#2c2c2c] font-sans p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-6">
           <div>
              <h1 className="text-4xl font-black text-[#1a1a1a] tracking-tight mb-2">Replenishment Bag</h1>
              <p className="text-[#8c8c8c] font-medium">Manage your one-time and subscription items.</p>
           </div>
           <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-full border border-[#e5e1d8] shadow-sm">
              <RefreshCcw className="h-4 w-4 text-[#8b6e4e]" />
              <p className="text-xs font-black uppercase tracking-widest text-[#5c5c5c]">Save 20% with subscriptions</p>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           {/* Items */}
           <div className="lg:col-span-8 space-y-8">
              {items.length > 0 ? (
                items.map((item) => (
                  <div key={item.id} className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#e5e1d8] space-y-8">
                     <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-full md:w-32 h-32 bg-[#f3f1ec] rounded-2xl overflow-hidden shrink-0">
                           <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>

                        <div className="flex-1 flex flex-col justify-between self-stretch py-1">
                           <div className="flex justify-between items-start">
                              <div>
                                 <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">{item.name}</h3>
                                 <div className="flex items-center gap-2">
                                    <Star className="h-3 w-3 text-[#d4af37] fill-current" />
                                    <p className="text-[10px] font-black uppercase tracking-widest text-[#8c8c8c]">Premium Sourced</p>
                                 </div>
                              </div>
                              <p className="text-2xl font-black text-[#1a1a1a]">${(item.isSubscription ? item.subPrice : item.price).toFixed(2)}</p>
                           </div>

                           <div className="flex justify-between items-center mt-6">
                              <div className="flex items-center gap-4 bg-[#f3f1ec] p-1 rounded-xl">
                                 <button 
                                   onClick={() => updateQuantity(item.id, -1)}
                                   className="h-8 w-8 flex items-center justify-center hover:bg-white rounded-lg text-[#8c8c8c] hover:text-[#1a1a1a] transition-all shadow-sm"
                                 >
                                   <Minus className="h-3 w-3" />
                                 </button>
                                 <span className="w-4 text-center text-sm font-black">{item.quantity}</span>
                                 <button 
                                   onClick={() => updateQuantity(item.id, 1)}
                                   className="h-8 w-8 flex items-center justify-center hover:bg-white rounded-lg text-[#8c8c8c] hover:text-[#1a1a1a] transition-all shadow-sm"
                                 >
                                   <Plus className="h-3 w-3" />
                                 </button>
                              </div>
                              <button 
                                onClick={() => removeItem(item.id)}
                                className="text-[10px] font-black uppercase tracking-widest text-[#8c8c8c] hover:text-rose-500 transition-colors"
                              >
                                 Remove Item
                              </button>
                           </div>
                        </div>
                     </div>

                     {/* Subscription Toggle */}
                     <div className="pt-8 border-t border-[#f3f1ec] grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div 
                          onClick={() => toggleSubscription(item.id)}
                          className={cn(
                            "p-6 rounded-2xl border-2 transition-all cursor-pointer flex flex-col gap-2",
                            !item.isSubscription ? "bg-white border-[#1a1a1a]" : "bg-[#f3f1ec] border-transparent"
                          )}
                        >
                           <p className="text-xs font-black uppercase tracking-widest">One-time purchase</p>
                           <p className="text-xl font-black">${item.price.toFixed(2)}</p>
                        </div>
                        <div 
                          onClick={() => toggleSubscription(item.id)}
                          className={cn(
                            "p-6 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden",
                            item.isSubscription ? "bg-[#fbf7f0] border-[#8b6e4e]" : "bg-[#f3f1ec] border-transparent grayscale opacity-60"
                          )}
                        >
                           {item.isSubscription && <div className="absolute top-0 right-0 bg-[#8b6e4e] text-white px-4 py-1 text-[8px] font-black uppercase tracking-[0.2em] rounded-bl-xl">Best Value</div>}
                           <div className="flex flex-col gap-2">
                              <p className="text-xs font-black uppercase tracking-widest text-[#8b6e4e]">Subscribe & Save 20%</p>
                              <p className="text-xl font-black text-[#1a1a1a]">${item.subPrice.toFixed(2)}</p>
                           </div>
                        </div>
                     </div>

                     {/* Frequency Selector (Only visible if subscription) */}
                     {item.isSubscription && (
                        <div className="bg-[#fbf7f0] p-6 rounded-2xl flex flex-wrap items-center justify-between gap-6 animate-in fade-in slide-in-from-top-2">
                           <div className="flex items-center gap-4">
                              <Calendar className="h-5 w-5 text-[#8b6e4e]" />
                              <p className="text-sm font-bold text-[#1a1a1a]">Deliver every:</p>
                           </div>
                           <div className="flex gap-4">
                              {['2 weeks', '4 weeks', '6 weeks'].map((freq) => (
                                <button 
                                  key={freq}
                                  onClick={() => updateFrequency(item.id, freq)}
                                  className={cn(
                                    "px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all",
                                    item.frequency === freq ? "bg-[#8b6e4e] text-white" : "bg-white border border-[#e5e1d8] text-[#8c8c8c]"
                                  )}
                                >
                                  {freq}
                                </button>
                              ))}
                           </div>
                        </div>
                     )}
                  </div>
                ))
              ) : (
                <div className="py-24 text-center bg-white rounded-[2rem] border-2 border-dashed border-[#e5e1d8]">
                   <RefreshCcw className="h-12 w-12 text-[#e5e1d8] mx-auto mb-6" />
                   <p className="text-[#8c8c8c] font-bold uppercase tracking-widest text-xs">No items in replenishment bag</p>
                </div>
              )}
           </div>

           {/* Sidebar */}
           <div className="lg:col-span-4">
              <div className="bg-white rounded-[3rem] p-10 md:p-12 border border-[#e5e1d8] shadow-xl shadow-[#8b6e4e]/5 sticky top-12">
                 <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#8c8c8c] mb-12">Total Balance</h2>
                 
                 <div className="space-y-6 mb-12 pb-12 border-b border-[#f3f1ec]">
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-black text-[#8c8c8c] uppercase tracking-widest">Subtotal</span>
                       <span className="font-black text-[#1a1a1a]">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Savings Applied</span>
                       <span className="font-black text-emerald-600">-${(initialItems.reduce((a,b)=>a+b.price,0) - subtotal).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-black text-[#8c8c8c] uppercase tracking-widest">Recurring Shipping</span>
                       <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest italic">Free</span>
                    </div>
                 </div>

                 <div className="flex justify-between items-baseline mb-16">
                    <span className="text-sm font-black uppercase tracking-widest text-[#1a1a1a]">Today's Total</span>
                    <div className="text-right">
                       <p className="text-4xl font-black italic tracking-tighter text-[#1a1a1a]">
                          ${subtotal.toFixed(2)}
                       </p>
                    </div>
                 </div>

                 <button className="w-full bg-[#1a1a1a] text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-[#8b6e4e] transition-all flex items-center justify-center gap-4 group">
                    Begin Ritual <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                 </button>

                 <div className="mt-12 space-y-6">
                    <div className="flex items-center gap-4">
                       <ShieldCheck className="h-5 w-5 text-[#8b6e4e]" />
                       <p className="text-[10px] font-black uppercase tracking-widest text-[#8c8c8c]">Flexible subscription. Cancel anytime.</p>
                    </div>
                    <div className="flex items-center gap-4">
                       <CreditCard className="h-5 w-5 text-[#8b6e4e]" />
                       <p className="text-[10px] font-black uppercase tracking-widest text-[#8c8c8c]">Secure encrypted billing cycles.</p>
                    </div>
                 </div>

                 <div className="mt-10 p-6 bg-[#fbf7f0] rounded-2xl flex items-center gap-4">
                    <Gift className="h-5 w-5 text-[#8b6e4e]" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#8b6e4e] leading-relaxed">
                       Subscribe to 3 items or more to unlock a 10% loyalty bonus.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
