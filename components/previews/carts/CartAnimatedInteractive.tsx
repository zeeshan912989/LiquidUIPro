"use client"

import { useState, useEffect } from 'react'
import { Trash2, Plus, Minus, ArrowRight, Zap, Sparkles, ShoppingBag, Truck, Gift, RefreshCcw, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

const initialItems = [
  {
    id: 1,
    name: 'Glitch Tech T-Shirt',
    price: 45.00,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=300&h=300&auto=format&fit=crop'
  }
]

export default function CartAnimatedInteractive() {
  const [items, setItems] = useState(initialItems)
  const [isUpdating, setIsUpdating] = useState<number | null>(null)
  const [showCelebration, setShowCelebration] = useState(false)

  const updateQuantity = (id: number, delta: number) => {
    setIsUpdating(id)
    setTimeout(() => {
      setItems(items.map(item => 
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      ))
      setIsUpdating(null)
    }, 200)
  }

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  useEffect(() => {
    if (subtotal > 150) {
      setShowCelebration(true)
      const timer = setTimeout(() => setShowCelebration(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [subtotal])

  return (
    <div className="w-full min-h-screen bg-[#f0f0f5] text-indigo-950 font-sans p-6 md:p-12 overflow-hidden selection:bg-indigo-600 selection:text-white">
      
      {/* Interactive Particles Background */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
         {[...Array(20)].map((_, i) => (
           <div 
             key={i}
             className="absolute h-2 w-2 bg-indigo-500 rounded-full animate-pulse"
             style={{ 
               top: `${Math.random() * 100}%`, 
               left: `${Math.random() * 100}%`,
               animationDelay: `${Math.random() * 5}s`,
               animationDuration: `${3 + Math.random() * 4}s`
             }}
           />
         ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
           <div className="flex items-center gap-6">
              <div className="h-16 w-16 bg-white rounded-3xl flex items-center justify-center text-indigo-600 shadow-xl shadow-indigo-600/10 animate-bounce duration-[3000ms]">
                 <ShoppingBag className="h-8 w-8" />
              </div>
              <div>
                 <h1 className="text-4xl font-black text-indigo-950 tracking-tight">Interactive Bag</h1>
                 <p className="text-indigo-400 font-bold uppercase tracking-widest text-[10px] italic">Reacting to your every move</p>
              </div>
        </div>
           
           <div className="bg-white px-8 py-4 rounded-[2rem] shadow-xl shadow-indigo-600/5 flex items-center gap-6 group hover:scale-110 transition-all cursor-default overflow-hidden relative">
              <div className="absolute inset-0 bg-indigo-600/5 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              <Zap className={cn("h-6 w-6 text-yellow-400 fill-current group-hover:scale-125 transition-transform", subtotal > 150 && "animate-pulse")} />
              <p className="text-sm font-black text-indigo-950 relative z-10">Level 2 Rewards Locked</p>
           </div>
        </div>

        <div className="space-y-8">
           {items.length > 0 ? (
             items.map((item) => (
               <div key={item.id} className={cn(
                 "bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-indigo-600/5 flex flex-col md:flex-row gap-10 items-center transition-all duration-500 relative overflow-hidden group",
                 isUpdating === item.id && "scale-95 opacity-50"
               )}>
                  {/* Subtle Background Animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  
                  <div className="w-full md:w-48 h-48 bg-indigo-50 rounded-[2.5rem] overflow-hidden shrink-0 relative group-hover:rotate-3 transition-transform duration-500">
                     <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                     {showCelebration && (
                       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <Sparkles className="h-20 w-20 text-yellow-400 animate-spin-slow opacity-80" />
                       </div>
                     )}
                  </div>

                  <div className="flex-1 flex flex-col justify-between self-stretch py-2 relative z-10">
                     <div className="flex justify-between items-start">
                        <div className="space-y-2">
                           <h3 className="text-3xl font-black text-indigo-950 uppercase tracking-tighter leading-none">{item.name}</h3>
                           <div className="flex gap-4">
                              <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[8px] font-black uppercase tracking-widest rounded-full">Limited Edition</span>
                              <span className="px-3 py-1 bg-yellow-50 text-yellow-700 text-[8px] font-black uppercase tracking-widest rounded-full">In Demand</span>
                           </div>
                        </div>
                        <div className="text-right">
                           <p className="text-4xl font-black italic tracking-tighter text-indigo-950">${item.price.toFixed(2)}</p>
                           <p className="text-[10px] font-black text-indigo-300 uppercase tracking-widest mt-1">Free Shipping</p>
                        </div>
                     </div>

                     <div className="flex justify-between items-center mt-12">
                        <div className="flex items-center gap-8 bg-indigo-50 p-2 rounded-[1.5rem] border border-indigo-100 shadow-inner group-hover:shadow-md transition-all">
                           <button 
                             onClick={() => updateQuantity(item.id, -1)}
                             className="h-12 w-12 flex items-center justify-center hover:bg-white rounded-2xl text-indigo-300 hover:text-indigo-600 transition-all shadow-sm active:scale-75"
                           >
                             <Minus className="h-6 w-6" />
                           </button>
                           <span className={cn(
                             "text-2xl font-black w-8 text-center transition-all duration-300",
                             isUpdating === item.id && "scale-150 text-indigo-600"
                           )}>{item.quantity}</span>
                           <button 
                             onClick={() => updateQuantity(item.id, 1)}
                             className="h-12 w-12 flex items-center justify-center hover:bg-white rounded-2xl text-indigo-300 hover:text-indigo-600 transition-all shadow-sm active:scale-75"
                           >
                             <Plus className="h-6 w-6" />
                           </button>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="h-16 w-16 flex items-center justify-center bg-indigo-50 text-indigo-200 hover:bg-rose-500 hover:text-white rounded-[1.5rem] transition-all hover:rotate-12 group-hover:shadow-lg"
                        >
                           <Trash2 className="h-6 w-6" />
                        </button>
                     </div>
                  </div>
               </div>
             ))
           ) : (
             <div className="py-32 text-center bg-white rounded-[4rem] border-2 border-dashed border-indigo-100 shadow-inner group cursor-pointer hover:border-indigo-400 transition-all">
                <RefreshCcw className="h-16 w-16 text-indigo-100 mx-auto mb-8 group-hover:rotate-180 transition-transform duration-700 group-hover:text-indigo-400" />
                <p className="text-indigo-200 font-black uppercase tracking-[0.5em] text-xs italic group-hover:text-indigo-400 transition-colors">Bag Reset. Ready for items.</p>
             </div>
           )}

           {/* Animated Summary Bar */}
           <div className="bg-indigo-950 text-white rounded-[4rem] p-12 md:p-16 shadow-2xl relative overflow-hidden group">
              {/* Floating Background Rings */}
              <div className="absolute top-0 right-0 h-96 w-96 bg-indigo-500/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-[3s]" />
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                 <div className="space-y-8">
                    <h2 className="text-xs font-black uppercase tracking-[0.4em] text-indigo-400">Real-time Calculation</h2>
                    <div className="space-y-4">
                       <div className="flex justify-between items-baseline group/row">
                          <span className="text-sm font-bold text-indigo-500 uppercase tracking-widest group-hover/row:text-white transition-colors">Subtotal</span>
                          <span className="text-2xl font-black italic tracking-tighter">${subtotal.toFixed(2)}</span>
                       </div>
                       <div className="flex justify-between items-baseline group/row">
                          <span className="text-sm font-bold text-indigo-500 uppercase tracking-widest group-hover/row:text-white transition-colors">Shipping</span>
                          <span className="text-sm font-black text-emerald-400 uppercase italic">Free of Charge</span>
                       </div>
                    </div>
                    
                    {/* Progress Bar for Celebration */}
                    <div className="space-y-4 pt-4">
                       <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                          <span className="text-indigo-400">Reward Progress</span>
                          <span className="text-white">{Math.min(100, Math.floor((subtotal / 300) * 100))}%</span>
                       </div>
                       <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                          <div 
                            className="h-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-1000" 
                            style={{ width: `${Math.min(100, (subtotal / 300) * 100)}%` }} 
                          />
                       </div>
                       <p className="text-[8px] font-bold text-indigo-500 uppercase tracking-widest">
                          {subtotal < 300 ? `Add $${(300 - subtotal).toFixed(2)} to unlock legendary badge` : "Legendary Badge Earned"}
                       </p>
                    </div>
                 </div>

                 <div className="flex flex-col items-end gap-10">
                    <div className="text-right">
                       <p className="text-lg font-black uppercase tracking-widest text-indigo-400 mb-2">Total Value</p>
                       <p className="text-7xl md:text-8xl font-black italic tracking-tighter leading-none transition-all duration-500 transform group-hover:scale-105 origin-right">
                          ${subtotal.toFixed(2)}
                       </p>
                    </div>
                    <button className="w-full md:w-auto px-12 py-8 bg-white text-indigo-950 rounded-[2rem] font-black uppercase tracking-[0.4em] text-xs hover:bg-indigo-500 hover:text-white transition-all duration-500 shadow-2xl active:scale-95 flex items-center justify-center gap-6 group/btn overflow-hidden relative">
                       <span className="relative z-10">Finalize Bag</span>
                       <ArrowRight className="h-6 w-6 relative z-10 transition-transform group-hover/btn:translate-x-4" />
                       <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                    </button>
                 </div>
              </div>

              {/* Trust Micro-Animations */}
              <div className="mt-16 pt-12 border-t border-white/5 flex flex-wrap justify-between gap-8 opacity-40 group-hover:opacity-100 transition-opacity">
                 <div className="flex items-center gap-4 hover:scale-110 transition-transform">
                    <Truck className="h-5 w-5 text-indigo-400 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest italic">Instant Transit</span>
                 </div>
                 <div className="flex items-center gap-4 hover:scale-110 transition-transform">
                    <Gift className="h-5 w-5 text-indigo-400 animate-pulse" style={{ animationDelay: '1s' }} />
                    <span className="text-[10px] font-black uppercase tracking-widest italic">Gift Ready Packing</span>
                 </div>
                 <div className="flex items-center gap-4 hover:scale-110 transition-transform">
                    <ShieldCheck className="h-5 w-5 text-indigo-400 animate-pulse" style={{ animationDelay: '2s' }} />
                    <span className="text-[10px] font-black uppercase tracking-widest italic">Secured Acquisition</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
