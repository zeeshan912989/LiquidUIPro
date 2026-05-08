"use client"

import { useState } from 'react'
import { Trash2, Plus, Minus, ArrowRight, Heart, MessageCircle, Share2, ShoppingBag, Zap, User, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

const initialItems = [
  {
    id: 1,
    name: 'Glow Up Serum v2',
    price: 32.00,
    creator: 'BeautyByAlex',
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=400&h=400&auto=format&fit=crop'
  }
]

export default function CartSocialCommerce() {
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
    <div className="w-full min-h-screen bg-white text-black font-sans selection:bg-[#ff0050] selection:text-white">
      
      {/* Social Feed Header */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-100 px-6 py-4 flex items-center justify-between">
         <div className="flex items-center gap-4">
            <div className="h-10 w-10 bg-gradient-to-tr from-[#ff0050] to-[#00f2ea] rounded-full p-[2px]">
               <div className="h-full w-full bg-white rounded-full flex items-center justify-center p-1">
                  <div className="h-full w-full bg-black rounded-full flex items-center justify-center text-white">
                     <ShoppingBag className="h-4 w-4" />
                  </div>
               </div>
            </div>
            <h1 className="text-lg font-black tracking-tighter uppercase italic">Social Cart.</h1>
         </div>
         <div className="flex items-center gap-6">
            <Share2 className="h-5 w-5 text-gray-400 hover:text-black cursor-pointer transition-colors" />
            <div className="relative">
               <ShoppingBag className="h-5 w-5" />
               <span className="absolute -top-2 -right-2 h-4 w-4 bg-[#ff0050] text-white text-[8px] font-black rounded-full flex items-center justify-center animate-bounce">{items.length}</span>
            </div>
         </div>
      </div>

      <div className="max-w-[600px] mx-auto px-4 md:px-0 py-8 space-y-8 pb-40">
         
         {/* Cart Items as "Posts" */}
         {items.length > 0 ? (
           items.map((item) => (
             <div key={item.id} className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm group">
                {/* Creator Header */}
                <div className="p-4 flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="h-8 w-8 bg-gray-100 rounded-full overflow-hidden border border-gray-100">
                         <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&h=100&auto=format&fit=crop" alt="Creator" />
                      </div>
                      <div>
                         <p className="text-[10px] font-black uppercase tracking-widest">{item.creator}</p>
                         <p className="text-[8px] font-bold text-[#ff0050] uppercase tracking-widest">Recommended this for you</p>
                      </div>
                   </div>
                   <button className="text-gray-300 hover:text-rose-500 transition-colors" onClick={() => removeItem(item.id)}>
                      <Trash2 className="h-4 w-4" />
                   </button>
                </div>

                {/* Main Media */}
                <div className="aspect-square bg-gray-50 relative overflow-hidden">
                   <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                   <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-black tracking-tight italic">
                      ${item.price.toFixed(2)}
                   </div>
                </div>

                {/* Interaction Bar */}
                <div className="p-6">
                   <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-6">
                         <Heart className="h-6 w-6 text-gray-400 hover:text-[#ff0050] cursor-pointer transition-colors" />
                         <MessageCircle className="h-6 w-6 text-gray-400 hover:text-[#00f2ea] cursor-pointer transition-colors" />
                         <Share2 className="h-6 w-6 text-gray-400 hover:text-indigo-500 cursor-pointer transition-colors" />
                      </div>
                      <div className="flex items-center gap-4 bg-gray-50 p-1 rounded-xl border border-gray-100">
                         <button onClick={() => updateQuantity(item.id, -1)} className="h-8 w-8 flex items-center justify-center hover:bg-white rounded-lg text-gray-400 transition-all shadow-sm"><Minus className="h-3 w-3" /></button>
                         <span className="text-xs font-black w-4 text-center">{item.quantity}</span>
                         <button onClick={() => updateQuantity(item.id, 1)} className="h-8 w-8 flex items-center justify-center hover:bg-white rounded-lg text-gray-400 transition-all shadow-sm"><Plus className="h-3 w-3" /></button>
                      </div>
                   </div>

                   <div className="space-y-2">
                      <p className="text-sm font-black italic tracking-tight">{item.name}</p>
                      <p className="text-xs text-gray-500 font-medium leading-relaxed">
                         <span className="font-black text-black mr-2">@{item.creator.toLowerCase()}</span>
                         This serum changed my life! Totally a game changer for my morning routine. Use code ALEX15 for extra savings. #skincare #glowup #beauty
                      </p>
                      <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest pt-2">View all 124 comments</p>
                   </div>
                </div>
             </div>
           ))
         ) : (
           <div className="py-20 text-center">
              <ShoppingBag className="h-12 w-12 text-gray-100 mx-auto mb-6" />
              <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Your social feed is empty.</p>
           </div>
         )}

         {/* Influencer Bundle Section */}
         <div className="bg-gradient-to-tr from-[#ff0050]/5 to-[#00f2ea]/5 rounded-[2.5rem] p-8 border border-gray-100 space-y-8">
            <div className="flex justify-between items-center">
               <h3 className="text-xl font-black italic tracking-tighter uppercase">Creator Bundles.</h3>
               <div className="flex items-center gap-2 px-3 py-1 bg-[#ff0050] text-white text-[8px] font-black rounded-full uppercase tracking-widest animate-pulse">Save 25%</div>
            </div>
            
            <div className="space-y-4">
               {[
                 { name: 'Glow Daily Routine', creator: 'StyleWithSam', price: '$85.00', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=200&h=200&auto=format&fit=crop' },
                 { name: 'Night Repair Kit', creator: 'BeautyByAlex', price: '$120.00', img: 'https://images.unsplash.com/photo-1596462502278-27bfad4575a6?q=80&w=200&h=200&auto=format&fit=crop' }
               ].map((bundle, i) => (
                 <div key={i} className="bg-white p-4 rounded-3xl border border-gray-50 flex items-center gap-6 group cursor-pointer hover:shadow-xl hover:shadow-[#ff0050]/5 transition-all duration-500">
                    <div className="h-20 w-20 bg-gray-50 rounded-2xl overflow-hidden shrink-0 border border-gray-100">
                       <img src={bundle.img} alt={bundle.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="flex-1">
                       <h4 className="text-sm font-black mb-1">{bundle.name}</h4>
                       <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">By @{bundle.creator.toLowerCase()}</p>
                    </div>
                    <div className="text-right">
                       <p className="text-sm font-black italic mb-2">{bundle.price}</p>
                       <button className="h-10 w-10 bg-black text-white rounded-xl flex items-center justify-center hover:bg-[#ff0050] transition-colors">
                          <Plus className="h-5 w-5" />
                       </button>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* Creator Shoutout */}
         <div className="p-8 bg-black text-white rounded-[2.5rem] flex items-center gap-8">
            <div className="h-16 w-16 bg-gray-800 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 relative overflow-hidden">
               <User className="h-8 w-8 text-white/40" />
               <div className="absolute inset-0 bg-gradient-to-tr from-[#ff0050]/20 to-[#00f2ea]/20" />
            </div>
            <div>
               <h4 className="text-sm font-black uppercase tracking-tight italic mb-2">Join the Creator Program</h4>
               <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed">Share your style and earn 15% commission on every sale you generate. #LiquidCreator</p>
            </div>
            <ArrowRight className="h-6 w-6 text-gray-600 ml-auto" />
         </div>
      </div>

      {/* Sticky Bottom Tab Bar - Instagram Style */}
      <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-2xl border-t border-gray-100 p-6 z-40 pb-12 flex flex-col items-center">
         <div className="w-full max-w-[600px] flex items-center justify-between mb-8 px-4">
            <div>
               <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Selection</p>
               <p className="text-3xl font-black italic tracking-tighter">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-4 text-emerald-500">
               <Zap className="h-5 w-5 fill-current" />
               <p className="text-[10px] font-black uppercase tracking-widest italic">Fast Delivery Locked</p>
            </div>
         </div>
         
         <button className="w-full max-w-[500px] h-16 bg-black text-white rounded-3xl font-black uppercase tracking-[0.4em] text-xs shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-4 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff0050] to-[#00f2ea] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Process Acquisition</span>
            <div className="relative z-10 h-6 w-6 bg-white/20 rounded-lg flex items-center justify-center group-hover:translate-x-2 transition-transform">
               <ArrowRight className="h-4 w-4" />
            </div>
         </button>
      </div>
    </div>
  )
}
