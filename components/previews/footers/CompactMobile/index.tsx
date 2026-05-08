"use client"

import { Home, Search, ShoppingBag, User, ChevronDown, Plus, Minus } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function CompactMobile() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggle = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  const sections = [
    { id: 'shop', name: 'Shop All', links: ['Best Sellers', 'New Arrivals', 'Collections', 'Accessories'] },
    { id: 'support', name: 'Support', links: ['Track Order', 'Shipping Policy', 'Returns', 'FAQ'] },
    { id: 'company', name: 'Company', links: ['About Us', 'Careers', 'Privacy', 'Terms'] }
  ]

  return (
    <footer className="w-full bg-white border-t border-gray-100 pb-20 md:pb-12">
      
      {/* Newsletter */}
      <div className="p-8 bg-gray-50 border-b border-gray-100 flex flex-col items-center text-center">
         <h4 className="text-xl font-black uppercase tracking-tighter italic mb-4">Stay Connected</h4>
         <div className="flex w-full max-w-sm gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none shadow-sm"
            />
            <button className="bg-black text-white rounded-xl px-6 py-3 font-black uppercase text-[10px] tracking-widest">Join</button>
         </div>
      </div>

      <div className="max-w-md mx-auto px-6">
        {/* Accordions */}
        <div className="py-8 space-y-4">
           {sections.map(s => (
             <div key={s.id} className="border-b border-gray-50 last:border-0">
                <button 
                  onClick={() => toggle(s.id)}
                  className="w-full py-5 flex justify-between items-center text-sm font-black uppercase tracking-widest text-gray-900"
                >
                   {s.name}
                   {openSection === s.id ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4 text-gray-300" />}
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-300 space-y-4",
                  openSection === s.id ? "max-h-64 pb-8" : "max-h-0"
                )}>
                   {s.links.map(l => (
                     <div key={l} className="text-sm font-medium text-gray-500 hover:text-black cursor-pointer">{l}</div>
                   ))}
                </div>
             </div>
           ))}
        </div>

        {/* Brand & Bottom */}
        <div className="pt-12 pb-24 flex flex-col items-center gap-6">
           <h2 className="text-3xl font-black tracking-tighter italic text-black">SWIFT.</h2>
           <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">© 2024 Swift Mobile Shop.</p>
        </div>
      </div>

      {/* Sticky Bottom Nav (Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-xl border-t border-gray-100 px-8 flex items-center justify-between z-50 lg:hidden shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
         <button className="flex flex-col items-center gap-1 text-black">
            <Home className="h-6 w-6" />
            <span className="text-[8px] font-black uppercase tracking-widest">Home</span>
         </button>
         <button className="flex flex-col items-center gap-1 text-gray-400">
            <Search className="h-6 w-6" />
            <span className="text-[8px] font-black uppercase tracking-widest">Search</span>
         </button>
         <button className="flex flex-col items-center gap-1 text-gray-400 relative">
            <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-[8px] flex items-center justify-center rounded-full border-2 border-white">2</div>
            <ShoppingBag className="h-6 w-6" />
            <span className="text-[8px] font-black uppercase tracking-widest">Cart</span>
         </button>
         <button className="flex flex-col items-center gap-1 text-gray-400">
            <User className="h-6 w-6" />
            <span className="text-[8px] font-black uppercase tracking-widest">Profile</span>
         </button>
      </div>
    </footer>
  )
}
