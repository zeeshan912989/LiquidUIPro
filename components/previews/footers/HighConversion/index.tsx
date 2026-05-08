"use client"

import { Zap, ShieldCheck, Truck, Star, Send, ArrowRight, Bell } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HighConversion() {
  return (
    <footer className="w-full bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-8">
        
        {/* High Conversion Offer Box */}
        <div className="relative p-12 md:p-20 bg-indigo-600 rounded-[64px] overflow-hidden mb-24 group">
           {/* Abstract Shapes */}
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform duration-700" />
           <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-indigo-400 rounded-full -translate-x-1/4 translate-y-1/4" />
           
           <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center lg:text-left">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black text-white uppercase tracking-widest mb-6">
                    <Bell className="h-4 w-4 animate-bounce" /> Early Access Only
                 </div>
                 <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic leading-none mb-6">
                    Unlock <span className="text-indigo-200 underline decoration-indigo-200/30">15% OFF</span> <br /> Your First Drop.
                 </h2>
                 <p className="text-white/60 text-lg font-medium">Join 50k+ fashion enthusiasts. No spam, just pure heat.</p>
              </div>

              <div className="w-full max-w-md space-y-4">
                 <div className="relative">
                    <input 
                      type="email" 
                      placeholder="Enter your best email" 
                      className="w-full bg-white rounded-3xl px-8 py-6 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-white/20 transition-all shadow-2xl"
                    />
                    <button className="absolute right-3 top-3 h-14 px-8 bg-black text-white rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center gap-3 hover:scale-105 transition-all shadow-xl">
                       Get Discount <ArrowRight className="h-4 w-4" />
                    </button>
                 </div>
                 <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest text-center">
                    By subscribing you agree to our Terms of Service.
                 </p>
              </div>
           </div>
        </div>

        {/* Trust & Links Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
           {/* Trust Badges */}
           <div className="col-span-2 lg:col-span-4 space-y-10">
              <div className="flex items-center gap-3">
                 <div className="h-12 w-12 bg-black rounded-2xl flex items-center justify-center text-white">
                    <Zap className="h-6 w-6 fill-current" />
                 </div>
                 <span className="text-2xl font-black tracking-tighter uppercase italic">Vanguard.</span>
              </div>
              <div className="space-y-6">
                 <div className="flex items-center gap-4 group cursor-default">
                    <div className="h-12 w-12 bg-gray-50 rounded-2xl flex items-center justify-center text-indigo-600 border border-gray-100 group-hover:bg-indigo-50 transition-colors">
                       <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                       <h4 className="text-sm font-black uppercase">Secure Checkout</h4>
                       <p className="text-xs text-gray-400 font-medium">Industry standard encryption</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 group cursor-default">
                    <div className="h-12 w-12 bg-gray-50 rounded-2xl flex items-center justify-center text-indigo-600 border border-gray-100 group-hover:bg-indigo-50 transition-colors">
                       <Truck className="h-6 w-6" />
                    </div>
                    <div>
                       <h4 className="text-sm font-black uppercase">Global Delivery</h4>
                       <p className="text-xs text-gray-400 font-medium">Tracked international shipping</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* Links */}
           <div className="lg:col-span-2 lg:col-start-6 space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">The Label</h4>
              <ul className="space-y-4 text-sm font-black uppercase tracking-widest text-gray-900">
                 <li className="hover:text-indigo-600 cursor-pointer transition-colors">Archive</li>
                 <li className="hover:text-indigo-600 cursor-pointer transition-colors">Drops</li>
                 <li className="hover:text-indigo-600 cursor-pointer transition-colors">Sustainability</li>
              </ul>
           </div>

           {/* Support */}
           <div className="lg:col-span-2 space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Help</h4>
              <ul className="space-y-4 text-sm font-black uppercase tracking-widest text-gray-900">
                 <li className="hover:text-indigo-600 cursor-pointer transition-colors">Fulfillment</li>
                 <li className="hover:text-indigo-600 cursor-pointer transition-colors">Returns</li>
                 <li className="hover:text-indigo-600 cursor-pointer transition-colors">Contact</li>
              </ul>
           </div>

           {/* Rating */}
           <div className="col-span-2 lg:col-span-3 lg:col-start-10 p-8 bg-gray-50 rounded-[40px] border border-gray-100 flex flex-col items-center text-center">
              <div className="flex gap-1 text-yellow-400 mb-4">
                 {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-2xl font-black mb-1">4.9/5</p>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Based on 12k+ Reviews</p>
           </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-gray-100">
           <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">
              © 2024 Vanguard Collective. High-conversion excellence.
           </p>
           <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-900">
              <span className="hover:opacity-50 cursor-pointer transition-opacity">Privacy</span>
              <span className="hover:opacity-50 cursor-pointer transition-opacity">Terms</span>
           </div>
        </div>
      </div>
    </footer>
  )
}
