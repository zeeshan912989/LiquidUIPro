"use client"

import { Send, MapPin, Phone, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function LuxuryBrand() {
  return (
    <footer className="w-full bg-[#0a0a0a] text-white pt-24 pb-12">
      <div className="max-w-[1440px] mx-auto px-8">
        
        {/* Newsletter Section (High Impact) */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-24 pb-24 border-b border-white/10">
           <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-serif italic mb-4">Join the Inner Circle</h2>
              <p className="text-white/40 text-sm tracking-widest uppercase font-light">Exclusive access to rare collections and private events.</p>
           </div>
           <div className="w-full max-w-md relative group">
              <input 
                type="email" 
                placeholder="YOUR EMAIL ADDRESS" 
                className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-sm font-light tracking-[0.2em] focus:outline-none focus:border-white transition-all uppercase"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-all">
                 <Send className="h-5 w-5" />
              </button>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-10">
            <h1 className="text-4xl font-serif tracking-tighter italic">Lumière.</h1>
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Crafting timeless elegance for the modern connoisseur. Our legacy of craftsmanship 
              spans three generations of luxury excellence.
            </p>
            <div className="flex gap-6">
               <div className="h-12 w-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
               </div>
               <div className="h-12 w-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                   <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-label="Facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
               </div>
            </div>
          </div>

          {/* Links 1 */}
          <div className="lg:col-span-2 lg:col-start-6 space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-white/20">The House</h4>
            <ul className="space-y-4 text-xs font-medium uppercase tracking-widest">
               <li className="hover:text-white/40 cursor-pointer transition-colors">Our Heritage</li>
               <li className="hover:text-white/40 cursor-pointer transition-colors">Ateliers</li>
               <li className="hover:text-white/40 cursor-pointer transition-colors">Sustainability</li>
               <li className="hover:text-white/40 cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>

          {/* Contact Block */}
          <div className="lg:col-span-4 lg:col-start-9 space-y-8 bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-xl">
            <h4 className="text-xs font-bold uppercase tracking-[0.4em] text-white/20">Concierge</h4>
            <div className="space-y-6">
               <div className="flex items-center gap-4 text-sm text-white/60">
                  <MapPin className="h-4 w-4 text-amber-400" />
                  <span>24 Place Vendôme, Paris</span>
               </div>
               <div className="flex items-center gap-4 text-sm text-white/60">
                  <Phone className="h-4 w-4 text-amber-400" />
                  <span>+33 (0) 1 23 45 67 89</span>
               </div>
               <div className="flex items-center gap-4 text-sm text-white/60">
                  <Mail className="h-4 w-4 text-amber-400" />
                  <span>concierge@lumiere.com</span>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/10">
           <p className="text-[10px] font-medium text-white/20 uppercase tracking-[0.5em]">
              © 2024 Lumière Maison. All Rights Reserved.
           </p>
           <div className="flex gap-12 text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">
              <span className="hover:text-white cursor-pointer transition-colors">Legal Mentions</span>
              <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
              <span className="hover:text-white cursor-pointer transition-colors">Accessibility</span>
           </div>
        </div>
      </div>
    </footer>
  )
}
