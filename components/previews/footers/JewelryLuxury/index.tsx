"use client"

import { Send, MapPin, Globe, Mail, ShieldCheck, Gem } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function JewelryLuxury() {
  return (
    <footer className="w-full bg-[#fdfaf7] pt-32 pb-16">
      <div className="max-w-[1440px] mx-auto px-12">
        
        {/* Brand Focus */}
        <div className="flex flex-col items-center text-center mb-24">
           <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center text-[#c49a6c] shadow-2xl shadow-[#c49a6c]/10 border border-[#c49a6c]/20 mb-8">
              <Gem className="h-10 w-10" />
           </div>
           <h2 className="text-5xl font-serif italic tracking-tighter text-gray-900 mb-6">Aurelia Jewels</h2>
           <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#c49a6c] to-transparent mb-8" />
           <p className="text-gray-400 text-sm tracking-[0.2em] uppercase font-light max-w-lg">
              Crafting stories in gold and diamonds. Our timeless pieces are designed to be passed down through generations.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Support */}
          <div className="space-y-8">
             <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#c49a6c]">Customer Care</h4>
             <ul className="space-y-5 text-sm font-medium text-gray-900 italic">
                <li className="hover:text-[#c49a6c] cursor-pointer transition-colors">Bespoke Services</li>
                <li className="hover:text-[#c49a6c] cursor-pointer transition-colors">Jewelry Care</li>
                <li className="hover:text-[#c49a6c] cursor-pointer transition-colors">Shipping & Returns</li>
                <li className="hover:text-[#c49a6c] cursor-pointer transition-colors">Book an Appointment</li>
             </ul>
          </div>

          {/* About */}
          <div className="space-y-8">
             <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#c49a6c]">The Maison</h4>
             <ul className="space-y-5 text-sm font-medium text-gray-900 italic">
                <li className="hover:text-[#c49a6c] cursor-pointer transition-colors">Our Story</li>
                <li className="hover:text-[#c49a6c] cursor-pointer transition-colors">Ethical Sourcing</li>
                <li className="hover:text-[#c49a6c] cursor-pointer transition-colors">Store Locator</li>
                <li className="hover:text-[#c49a6c] cursor-pointer transition-colors">Press</li>
             </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
             <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#c49a6c]">Contact Us</h4>
             <div className="space-y-6 text-sm font-medium text-gray-500">
                <div className="flex items-center gap-4">
                   <MapPin className="h-4 w-4 text-[#c49a6c]" />
                   <span>Mayfair, London, UK</span>
                </div>
                <div className="flex items-center gap-4">
                   <Mail className="h-4 w-4 text-[#c49a6c]" />
                   <span>contact@aurelia.com</span>
                </div>
             </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-8 bg-white p-10 rounded-[40px] shadow-xl border border-gray-100">
             <h4 className="text-lg font-serif italic text-gray-900">Be Enchanted</h4>
             <p className="text-xs text-gray-400 leading-relaxed">Join our mailing list to receive exclusive previews of our new collections.</p>
             <div className="relative">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-[#fdfaf7] rounded-2xl px-6 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#c49a6c] transition-all"
                />
                <button className="absolute right-2 top-1 h-8 w-8 bg-[#c49a6c] text-white rounded-xl flex items-center justify-center hover:scale-105 transition-all">
                   <Send className="h-3 w-3" />
                </button>
             </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-[#c49a6c]/10">
           <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-300">
              <ShieldCheck className="h-4 w-4 text-[#c49a6c]" />
              <span>Certified Conflict-Free Diamonds</span>
           </div>
           <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">
              © 2024 Aurelia Fine Jewelry.
           </p>
        </div>
      </div>
    </footer>
  )
}
