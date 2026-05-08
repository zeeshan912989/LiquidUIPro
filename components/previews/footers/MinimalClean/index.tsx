"use client"

import { Send, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function MinimalClean() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-20 pb-12">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Newsletter */}
          <div className="md:col-span-4 space-y-8">
            <h3 className="text-xl font-black tracking-tighter uppercase">Minimal.</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Refined aesthetics for the modern digital era. Join our newsletter for weekly design inspiration.
            </p>
            <div className="relative max-w-xs">
               <input 
                 type="email" 
                 placeholder="Email address" 
                 className="w-full bg-gray-50 border border-gray-100 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
               />
               <button className="absolute right-2 top-1.5 h-8 w-8 bg-black text-white rounded-full flex items-center justify-center hover:scale-105 transition-all">
                  <Send className="h-4 w-4" />
               </button>
            </div>
          </div>

          {/* Links 1 */}
          <div className="md:col-span-2 md:col-start-6 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Shop</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-900">
               <li className="hover:text-gray-400 cursor-pointer transition-colors">New Arrivals</li>
               <li className="hover:text-gray-400 cursor-pointer transition-colors">Best Sellers</li>
               <li className="hover:text-gray-400 cursor-pointer transition-colors">Sale</li>
               <li className="hover:text-gray-400 cursor-pointer transition-colors">Collections</li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Support</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-900">
               <li className="hover:text-gray-400 cursor-pointer transition-colors">Shipping</li>
               <li className="hover:text-gray-400 cursor-pointer transition-colors">Returns</li>
               <li className="hover:text-gray-400 cursor-pointer transition-colors">Contact</li>
               <li className="hover:text-gray-400 cursor-pointer transition-colors">FAQ</li>
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Follow</h4>
            <div className="flex gap-4">
               <div className="h-10 w-10 border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:border-black hover:text-black transition-all cursor-pointer">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
               </div>
               <div className="h-10 w-10 border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:border-black hover:text-black transition-all cursor-pointer">
                  <Globe className="h-4 w-4" />
               </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gray-50 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">
              © 2024 Minimal Studio. All Rights Reserved.
           </p>
           <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-900">
              <span className="hover:opacity-50 cursor-pointer transition-opacity">Privacy Policy</span>
              <span className="hover:opacity-50 cursor-pointer transition-opacity">Terms of Service</span>
           </div>
        </div>
      </div>
    </footer>
  )
}
