"use client"

import { UtensilsCrossed, MapPin, Clock, Phone, CalendarCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function FoodRestaurant() {
  return (
    <footer className="w-full bg-[#1c1917] text-stone-200 pt-24 pb-12">
      <div className="max-w-[1440px] mx-auto px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand & Social */}
          <div className="lg:col-span-4 space-y-10">
            <div className="flex items-center gap-4">
               <div className="h-14 w-14 bg-orange-600 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-orange-900/50">
                  <UtensilsCrossed className="h-8 w-8" />
               </div>
               <h3 className="text-3xl font-black uppercase tracking-tighter italic">Hearth & Soil.</h3>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
               Experience farm-to-table dining in the heart of the city. We believe in honest ingredients and the art of slow cooking.
            </p>
            <div className="flex gap-4">
               <div className="h-12 w-12 border border-stone-800 rounded-full flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition-all cursor-pointer">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
               </div>
               <div className="h-12 w-12 border border-stone-800 rounded-full flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition-all cursor-pointer">
                   <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-label="Facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
               </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600">The Menu</h4>
            <ul className="space-y-4 text-sm font-bold">
               <li className="hover:text-orange-500 cursor-pointer transition-colors">Lunch Service</li>
               <li className="hover:text-orange-500 cursor-pointer transition-colors">Dinner Menu</li>
               <li className="hover:text-orange-500 cursor-pointer transition-colors">Wine List</li>
               <li className="hover:text-orange-500 cursor-pointer transition-colors">Private Dining</li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600">Kitchen Hours</h4>
            <div className="space-y-4 text-sm font-medium text-stone-400">
               <div className="flex justify-between items-center pb-3 border-b border-stone-800/50">
                  <span>Mon – Fri</span>
                  <span className="text-white">12:00 – 22:00</span>
               </div>
               <div className="flex justify-between items-center pb-3 border-b border-stone-800/50">
                  <span>Sat – Sun</span>
                  <span className="text-white">10:00 – 23:00</span>
               </div>
               <p className="text-[10px] font-black text-orange-500/50 italic">Closed on Bank Holidays</p>
            </div>
          </div>

          {/* Contact & Reservation */}
          <div className="lg:col-span-3 lg:col-start-10 space-y-8">
             <div className="p-8 bg-stone-800/50 rounded-[40px] border border-stone-800 space-y-6">
                <div className="flex items-center gap-4 text-sm">
                   <MapPin className="h-4 w-4 text-orange-600" />
                   <span>128 Market St, San Francisco</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                   <Phone className="h-4 w-4 text-orange-600" />
                   <span>+1 (415) 555-0123</span>
                </div>
                <button className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 transition-all shadow-xl shadow-orange-900/20 active:scale-95">
                   <CalendarCheck className="h-4 w-4" /> Book a Table
                </button>
             </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-stone-800">
           <p className="text-[10px] font-medium text-stone-600 uppercase tracking-widest">
              © 2024 Hearth & Soil Dining.
           </p>
           <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-stone-500">
              <span className="hover:text-orange-500 cursor-pointer transition-colors">Privacy</span>
              <span className="hover:text-orange-500 cursor-pointer transition-colors">Terms</span>
           </div>
        </div>
      </div>
    </footer>
  )
}
