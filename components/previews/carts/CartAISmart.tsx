"use client"

import { useState, useEffect } from 'react'
import { Trash2, Plus, Minus, ArrowRight, Sparkles, Brain, Zap, Shield, TrendingUp, BarChart3 } from 'lucide-react'
import { cn } from '@/lib/utils'

const initialItems = [
  {
    id: 1,
    name: 'Smart Home Hub Pro',
    price: 199.00,
    aiNote: 'Optimizing your energy usage by 24%',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=400&h=400&auto=format&fit=crop'
  }
]

export default function CartAISmart() {
  const [items, setItems] = useState(initialItems)
  const [analyzing, setAnalyzing] = useState(false)
  const [discountApplied, setDiscountApplied] = useState(false)

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ))
  }

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  const discount = discountApplied ? subtotal * 0.1 : 0

  useEffect(() => {
    setAnalyzing(true)
    const timer = setTimeout(() => setAnalyzing(false), 2000)
    return () => clearTimeout(timer)
  }, [items])

  return (
    <div className="w-full min-h-screen bg-[#0a0a0f] text-slate-200 font-sans p-6 md:p-12 selection:bg-indigo-500 selection:text-white">
      
      {/* AI Glow Effect */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-indigo-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
           <div className="flex items-center gap-6">
              <div className="h-16 w-16 bg-indigo-500/10 border border-indigo-500/30 rounded-2xl flex items-center justify-center relative group">
                 <Brain className="h-8 w-8 text-indigo-400 group-hover:scale-110 transition-transform" />
                 <div className="absolute inset-0 bg-indigo-500/20 blur-xl animate-pulse rounded-full" />
              </div>
              <div>
                 <h1 className="text-3xl font-black text-white tracking-tight">Smart Cart <span className="text-indigo-400">v2.0</span></h1>
                 <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 italic">AI Assistant Active // Real-time Optimization</p>
                 </div>
              </div>
           </div>
           
           <div className="flex items-center gap-4 bg-slate-900/50 backdrop-blur-xl px-6 py-4 rounded-3xl border border-white/5">
              <BarChart3 className="h-5 w-5 text-indigo-400" />
              <div className="text-left">
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Savings Prediction</p>
                 <p className="text-sm font-black text-emerald-400">{discountApplied ? 'MAXIMIZED' : '+$24.50 Potential'}</p>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           {/* Items List */}
           <div className="lg:col-span-8 space-y-6">
              
              {/* AI Status Banner */}
              <div className={cn(
                "p-6 rounded-[2rem] border transition-all duration-500 flex items-center justify-between gap-6",
                analyzing ? "bg-indigo-500/10 border-indigo-500/30" : "bg-emerald-500/5 border-emerald-500/20"
              )}>
                 <div className="flex items-center gap-6">
                    <div className={cn("h-10 w-10 rounded-xl flex items-center justify-center", analyzing ? "bg-indigo-500/20 text-indigo-400" : "bg-emerald-500/20 text-emerald-400")}>
                       {analyzing ? <TrendingUp className="h-5 w-5 animate-bounce" /> : <Sparkles className="h-5 w-5" />}
                    </div>
                    <div>
                       <p className="text-sm font-black text-white">{analyzing ? 'AI is analyzing your selection...' : 'Optimization Complete'}</p>
                       <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{analyzing ? 'Calculating best bundles & discounts' : 'You are getting the best value for your items'}</p>
                    </div>
                 </div>
                 {!analyzing && !discountApplied && (
                   <button 
                     onClick={() => setDiscountApplied(true)}
                     className="px-6 py-2 bg-indigo-600 text-white text-[10px] font-black rounded-full uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20"
                   >
                      Apply AI Coupon
                   </button>
                 )}
              </div>

              <div className="bg-slate-900/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/5 overflow-hidden">
                 <div className="p-8 md:p-12 space-y-12">
                    {items.length > 0 ? (
                      items.map((item) => (
                        <div key={item.id} className="flex flex-col md:flex-row gap-10 group">
                           <div className="w-full md:w-48 h-48 bg-slate-950 rounded-[2rem] overflow-hidden border border-white/5 relative">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 group-hover:opacity-100" />
                              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent" />
                           </div>

                           <div className="flex-1 flex flex-col justify-between py-2">
                              <div className="flex justify-between items-start">
                                 <div>
                                    <h3 className="text-2xl font-black text-white mb-2">{item.name}</h3>
                                    <div className="flex items-center gap-3 p-3 bg-indigo-500/5 border border-indigo-500/10 rounded-2xl">
                                       <Sparkles className="h-4 w-4 text-indigo-400" />
                                       <p className="text-[10px] font-bold text-indigo-200/60 uppercase tracking-widest">{item.aiNote}</p>
                                    </div>
                                 </div>
                                 <p className="text-3xl font-black text-white tracking-tighter">${item.price.toFixed(2)}</p>
                              </div>

                              <div className="flex justify-between items-center mt-10">
                                 <div className="flex items-center gap-6 bg-slate-950/50 p-1 border border-white/5 rounded-2xl">
                                    <button 
                                      onClick={() => updateQuantity(item.id, -1)}
                                      className="h-10 w-10 flex items-center justify-center hover:bg-white/10 rounded-xl text-slate-500 hover:text-white transition-all"
                                    >
                                      <Minus className="h-4 w-4" />
                                    </button>
                                    <span className="w-6 text-center text-sm font-black">{item.quantity}</span>
                                    <button 
                                      onClick={() => updateQuantity(item.id, 1)}
                                      className="h-10 w-10 flex items-center justify-center hover:bg-white/10 rounded-xl text-slate-500 hover:text-white transition-all"
                                    >
                                      <Plus className="h-4 w-4" />
                                    </button>
                                 </div>
                                 <button 
                                   onClick={() => removeItem(item.id)}
                                   className="h-12 w-12 flex items-center justify-center bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white rounded-2xl transition-all border border-rose-500/20"
                                 >
                                    <Trash2 className="h-5 w-5" />
                                 </button>
                              </div>
                           </div>
                        </div>
                      ))
                    ) : (
                      <div className="py-20 text-center">
                         <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-10 italic">Cart Intelligence Offline.</p>
                         <button className="px-10 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px]">Start Exploration</button>
                      </div>
                    )}
                 </div>
              </div>

              {/* Recommendations */}
              <div className="bg-slate-900/20 rounded-[2.5rem] p-10 border border-white/5">
                 <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 mb-10">AI Recommendations For You</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { name: 'Smart Light Strip', price: '$49', img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=200&h=200&auto=format&fit=crop' },
                      { name: 'Wifi Extender Max', price: '$89', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=200&h=200&auto=format&fit=crop' }
                    ].map((rec, i) => (
                      <div key={i} className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 flex items-center gap-6 group cursor-pointer hover:border-indigo-500/50 transition-all">
                         <div className="h-20 w-20 bg-slate-950 rounded-2xl overflow-hidden shrink-0">
                            <img src={rec.img} alt={rec.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                         </div>
                         <div className="flex-1">
                            <h4 className="text-sm font-black text-white mb-1">{rec.name}</h4>
                            <p className="text-xs font-bold text-slate-500">{rec.price}</p>
                         </div>
                         <button className="h-10 w-10 bg-indigo-600/10 text-indigo-400 rounded-xl flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                            <Plus className="h-5 w-5" />
                         </button>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           {/* AI Summary Sidebar */}
           <div className="lg:col-span-4">
              <div className="bg-slate-900/80 backdrop-blur-3xl p-10 md:p-12 sticky top-12 rounded-[3rem] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
                 <h2 className="text-xs font-black uppercase tracking-[0.4em] text-indigo-400 mb-12">Value Extraction</h2>
                 
                 <div className="space-y-6 mb-12 pb-12 border-b border-white/5">
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Base Value</span>
                       <span className="font-black text-white">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">AI Applied Discount</span>
                       <span className="text-sm font-black text-emerald-400">-${discount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Optimized Shipping</span>
                       <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest italic">Smart Express FREE</span>
                    </div>
                 </div>

                 <div className="flex justify-between items-baseline mb-16">
                    <span className="text-sm font-black uppercase tracking-widest text-slate-400">Total Asset Value</span>
                    <div className="text-right">
                       <p className="text-5xl font-black italic tracking-tighter text-white drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                          ${(subtotal - discount).toFixed(2)}
                       </p>
                    </div>
                 </div>

                 <button className="w-full relative group overflow-hidden bg-indigo-600 text-white py-8 rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-500/20 flex items-center justify-center gap-4">
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                    <span className="relative z-10">Confirm Allocation</span>
                    <ArrowRight className="h-5 w-5 relative z-10 transition-transform group-hover:translate-x-2" />
                 </button>

                 <div className="mt-12 space-y-8">
                    <div className="flex items-center gap-6 text-slate-500">
                       <Shield className="h-5 w-5 text-indigo-400" />
                       <span className="text-[10px] uppercase tracking-[0.3em] font-black">Encrypted Neural Checkout</span>
                    </div>
                    <div className="flex items-center gap-6 text-slate-500">
                       <Zap className="h-5 w-5 text-indigo-400" />
                       <span className="text-[10px] uppercase tracking-[0.3em] font-black">Instant Order Processing</span>
                    </div>
                 </div>

                 {/* Smart Insight */}
                 <div className="mt-12 p-8 bg-indigo-500/10 rounded-[2.5rem] border border-indigo-500/20 text-center">
                    <p className="text-[10px] font-black text-indigo-200/60 uppercase tracking-[0.2em] leading-relaxed">
                      "Adding 'Smart Light strip' would unlock a bundle discount of 15% across your entire cart."
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
