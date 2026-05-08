"use client"

import { useState, useEffect } from 'react'
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck, Truck, Zap, Clock, Star, Gift, CheckCircle2, ChevronRight, ShoppingBag, RefreshCcw, CreditCard } from 'lucide-react'
import { cn } from '@/lib/utils'

const initialItems = [
  {
    id: 1,
    name: 'Pro-Audio Wireless Headphones',
    price: 299.00,
    originalPrice: 399.00,
    stock: 3,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&h=300&auto=format&fit=crop'
  }
]

export default function CartAdvancedConversion() {
  const [items, setItems] = useState(initialItems)
  const [timeLeft, setTimeLeft] = useState(600) // 10 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ))
  }

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  const savings = items.reduce((acc, item) => acc + ((item.originalPrice - item.price) * item.quantity), 0)

  return (
    <div className="w-full min-h-screen bg-[#f8f9fa] text-slate-900 font-sans p-6 md:p-12 selection:bg-indigo-600 selection:text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Urgency Banner */}
        <div className="bg-indigo-600 text-white px-8 py-4 rounded-3xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-indigo-600/20">
           <div className="flex items-center gap-6">
              <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                 <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                 <p className="text-sm font-black uppercase tracking-widest italic">Inventory Locked.</p>
                 <p className="text-[10px] font-bold text-indigo-100 uppercase tracking-widest">We're holding your items for: <span className="text-white font-black">{formatTime(timeLeft)}</span></p>
              </div>
           </div>
           <div className="flex items-center gap-4 bg-white/10 px-6 py-2 rounded-2xl border border-white/10">
              <Zap className="h-4 w-4 text-yellow-400 fill-current" />
              <p className="text-[10px] font-black uppercase tracking-widest">High Demand Items</p>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           {/* Main Content */}
           <div className="lg:col-span-8 space-y-8">
              
              {/* Shipping Progress */}
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden relative">
                 <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-4">
                       <Truck className="h-5 w-5 text-indigo-600" />
                       <h3 className="text-sm font-black uppercase tracking-tight italic">Free Express Delivery</h3>
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-indigo-600">
                       {subtotal >= 500 ? "UNLOCKED" : `$${(500 - subtotal).toFixed(2)} to unlock`}
                    </p>
                 </div>
                 <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-indigo-600 transition-all duration-1000" style={{ width: `${Math.min(100, (subtotal / 500) * 100)}%` }} />
                 </div>
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 text-center italic">
                    Add $201.00 more to qualify for complimentary global express shipping.
                 </p>
              </div>

              {/* Items Area */}
              <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm p-10 space-y-12">
                 {items.length > 0 ? (
                   items.map((item) => (
                     <div key={item.id} className="flex flex-col md:flex-row gap-10 group relative">
                        <div className="w-full md:w-48 h-48 bg-slate-50 rounded-[2.5rem] overflow-hidden relative border border-slate-100 shrink-0">
                           <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                           <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center justify-center gap-2 border border-slate-200">
                              <div className="h-2 w-2 bg-rose-500 rounded-full animate-pulse" />
                              <p className="text-[8px] font-black uppercase tracking-widest text-rose-600">{item.stock} LEFT IN STOCK</p>
                           </div>
                        </div>

                        <div className="flex-1 flex flex-col justify-between py-2">
                           <div className="flex justify-between items-start">
                              <div>
                                 <h4 className="text-2xl font-black text-slate-900 tracking-tight uppercase italic mb-2">{item.name}</h4>
                                 <div className="flex gap-4">
                                    <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[8px] font-black uppercase tracking-widest rounded-full">New Arrival</span>
                                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[8px] font-black uppercase tracking-widest rounded-full">Verified Quality</span>
                                 </div>
                              </div>
                              <div className="text-right">
                                 <p className="text-sm font-bold text-slate-400 line-through tracking-widest">${item.originalPrice.toFixed(2)}</p>
                                 <p className="text-3xl font-black italic tracking-tighter text-indigo-600">${item.price.toFixed(2)}</p>
                              </div>
                           </div>

                           <div className="flex justify-between items-center mt-10">
                              <div className="flex items-center gap-6 bg-slate-50 p-1 border border-slate-200 rounded-2xl shadow-inner">
                                 <button 
                                   onClick={() => updateQuantity(item.id, -1)}
                                   className="h-10 w-10 flex items-center justify-center hover:bg-white rounded-xl text-slate-400 hover:text-indigo-600 transition-all shadow-sm active:scale-90"
                                 >
                                   <Minus className="h-4 w-4" />
                                 </button>
                                 <span className="w-6 text-center text-sm font-black">{item.quantity}</span>
                                 <button 
                                   onClick={() => updateQuantity(item.id, 1)}
                                   className="h-10 w-10 flex items-center justify-center hover:bg-white rounded-xl text-slate-400 hover:text-indigo-600 transition-all shadow-sm active:scale-90"
                                 >
                                   <Plus className="h-4 w-4" />
                                 </button>
                              </div>
                              <button 
                                onClick={() => removeItem(item.id)}
                                className="h-12 w-12 flex items-center justify-center text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-2xl transition-all border border-transparent hover:border-rose-100"
                              >
                                 <Trash2 className="h-5 w-5" />
                              </button>
                           </div>
                        </div>
                     </div>
                   ))
                 ) : (
                   <div className="py-20 text-center">
                      <ShoppingBag className="h-12 w-12 text-slate-100 mx-auto mb-8" />
                      <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Your collection is empty</p>
                   </div>
                 )}
              </div>

              {/* Trust Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {[
                   { icon: <ShieldCheck className="h-6 w-6 text-emerald-500" />, label: 'Buyer Protection', sub: 'Secure SSL checkout' },
                   { icon: <RefreshCcw className="h-6 w-6 text-indigo-500" />, label: 'Easy Returns', sub: '30-day money back' },
                   { icon: <CheckCircle2 className="h-6 w-6 text-indigo-500" />, label: 'Verified Store', sub: 'Over 10k+ reviews' }
                 ].map((t, i) => (
                   <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 flex items-center gap-6 group hover:border-indigo-200 transition-all cursor-default">
                      <div className="h-12 w-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">{t.icon}</div>
                      <div>
                         <p className="text-[10px] font-black uppercase tracking-widest">{t.label}</p>
                         <p className="text-[10px] font-medium text-slate-400">{t.sub}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           {/* Conversion Sidebar */}
           <div className="lg:col-span-4 space-y-6">
              <div className="bg-white rounded-[3.5rem] p-10 md:p-12 border border-slate-100 shadow-2xl shadow-indigo-600/5 sticky top-12">
                 <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-400 mb-10">Order Summary</h2>
                 
                 <div className="space-y-6 mb-10 pb-10 border-b border-slate-50">
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Items Subtotal</span>
                       <span className="text-lg font-black italic">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Your Total Savings</span>
                       <span className="text-sm font-black text-emerald-600 italic">-${savings.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Standard Shipping</span>
                       <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest italic">Complimentary</span>
                    </div>
                 </div>

                 <div className="flex justify-between items-baseline mb-12">
                    <span className="text-sm font-black uppercase tracking-widest text-slate-900">Final Amount</span>
                    <div className="text-right">
                       <p className="text-6xl font-black italic tracking-tighter text-slate-900 leading-none">
                          ${subtotal.toFixed(2)}
                       </p>
                    </div>
                 </div>

                 <button className="w-full bg-indigo-600 text-white py-8 rounded-[2.5rem] font-black uppercase tracking-[0.4em] text-xs hover:bg-black hover:shadow-2xl transition-all duration-700 flex items-center justify-center gap-4 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                    <span className="relative z-10">Secure Checkout</span>
                    <ArrowRight className="h-5 w-5 relative z-10 transition-transform group-hover:translate-x-2" />
                 </button>

                 <div className="mt-12 p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 flex items-center gap-6 group hover:scale-[1.02] transition-all">
                    <Gift className="h-8 w-8 text-emerald-600 animate-bounce" />
                    <p className="text-[10px] font-black text-emerald-800 uppercase tracking-widest leading-relaxed">
                       Add a complimentary gift message to your order at the next step.
                    </p>
                 </div>
                 
                 <div className="mt-10 pt-10 border-t border-slate-50">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] text-center mb-6">Accepted Assets</p>
                    <div className="flex justify-center gap-6 opacity-30 grayscale hover:grayscale-0 transition-all">
                       <ShieldCheck className="h-6 w-6" />
                       <CreditCard className="h-6 w-6" />
                       <LockIcon className="h-6 w-6" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}
