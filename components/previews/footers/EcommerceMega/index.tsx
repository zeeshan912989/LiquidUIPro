"use client"

import { ShoppingBag, Mail, Phone, CreditCard, ShieldCheck, Truck } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function EcommerceMega() {
  return (
    <footer className="w-full bg-gray-50 pt-24 pb-12">
      <div className="max-w-[1440px] mx-auto px-8">
        
        {/* Top Feature Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 pb-20 border-b border-gray-200">
           <div className="flex items-center gap-6">
              <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm border border-gray-100">
                 <Truck className="h-6 w-6" />
              </div>
              <div>
                 <h4 className="text-sm font-black uppercase tracking-tight">Free Shipping</h4>
                 <p className="text-xs text-gray-500 font-medium">On all orders over $150</p>
              </div>
           </div>
           <div className="flex items-center gap-6">
              <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm border border-gray-100">
                 <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                 <h4 className="text-sm font-black uppercase tracking-tight">Secure Payment</h4>
                 <p className="text-xs text-gray-500 font-medium">100% secure payment processing</p>
              </div>
           </div>
           <div className="flex items-center gap-6">
              <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm border border-gray-100">
                 <CreditCard className="h-6 w-6" />
              </div>
              <div>
                 <h4 className="text-sm font-black uppercase tracking-tight">30 Day Returns</h4>
                 <p className="text-xs text-gray-500 font-medium">Easy hassle-free returns</p>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand & Socials */}
          <div className="col-span-2 lg:col-span-3 space-y-8">
            <div className="flex items-center gap-2">
               <ShoppingBag className="h-8 w-8 text-indigo-600" />
               <span className="text-2xl font-black uppercase tracking-tighter italic">Swift.</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
               Elevate your lifestyle with our curated collection of premium essentials. 
               Quality driven, community inspired.
            </p>
            <div className="flex gap-4">
               <div className="h-10 w-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 hover:text-indigo-600 transition-all cursor-pointer shadow-sm">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
               </div>
               <div className="h-10 w-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 hover:text-indigo-600 transition-all cursor-pointer shadow-sm">
                   <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-label="Facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
               </div>
               <div className="h-10 w-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 hover:text-indigo-600 transition-all cursor-pointer shadow-sm">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-label="Twitter / X"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
               </div>
            </div>
          </div>

          {/* Categories */}
          <div className="lg:col-span-2 lg:col-start-5 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Categories</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-900">
               <li className="hover:text-indigo-600 cursor-pointer transition-colors">Menswear</li>
               <li className="hover:text-indigo-600 cursor-pointer transition-colors">Womens</li>
               <li className="hover:text-indigo-600 cursor-pointer transition-colors">Accessories</li>
               <li className="hover:text-indigo-600 cursor-pointer transition-colors">New Season</li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Support</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-900">
               <li className="hover:text-indigo-600 cursor-pointer transition-colors">Help Center</li>
               <li className="hover:text-indigo-600 cursor-pointer transition-colors">Track Order</li>
               <li className="hover:text-indigo-600 cursor-pointer transition-colors">Shipping Info</li>
               <li className="hover:text-indigo-600 cursor-pointer transition-colors">Size Guide</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Newsletter</h4>
            <div className="space-y-4">
               <p className="text-xs text-gray-500 font-medium leading-relaxed">
                  Join 10,000+ subscribers for weekly drops and early access.
               </p>
               <div className="flex flex-col gap-3">
                  <input 
                    type="email" 
                    placeholder="ENTER YOUR EMAIL" 
                    className="w-full bg-white border border-gray-200 px-4 py-3 text-xs tracking-widest focus:outline-none focus:border-indigo-600 transition-all font-bold"
                  />
                  <button className="w-full bg-indigo-600 text-white py-3 text-xs font-black uppercase tracking-widest hover:bg-indigo-700 transition-all">
                     Subscribe
                  </button>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-gray-200">
          <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">
            © 2024 Swift Ecommerce. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-400">
            <span className="hover:text-indigo-600 cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-indigo-600 cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-indigo-600 cursor-pointer transition-colors">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
