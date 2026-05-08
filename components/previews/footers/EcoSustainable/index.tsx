"use client"

import { Leaf, Globe, Mail, ShieldCheck, Heart } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function EcoSustainable() {
  return (
    <footer className="w-full bg-[#f4f7f4] text-[#2d3a2d] pt-24 pb-12">
      <div className="max-w-[1440px] mx-auto px-8">
        
        {/* Top Section: Natural Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 pb-24 border-b border-[#2d3a2d]/10">
           <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-3">
                 <div className="h-12 w-12 bg-[#3a4d3a] rounded-2xl flex items-center justify-center text-[#f4f7f4]">
                    <Leaf className="h-6 w-6" />
                 </div>
                 <span className="text-2xl font-black tracking-tighter">Evergreen.</span>
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tighter italic leading-none">
                 Sustainably sourced. <br /> Consciously crafted.
              </h2>
              <p className="text-[#3a4d3a]/60 text-sm leading-relaxed max-w-sm">
                 We are on a mission to restore the planet through sustainable fashion. 
                 Every purchase plants a tree in reforestation hotspots.
              </p>
           </div>
           
           <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-12 pt-4">
              <div className="space-y-6">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3a4d3a]/40">Shop</h4>
                 <ul className="space-y-4 text-sm font-bold">
                    <li className="hover:text-[#3a4d3a] cursor-pointer transition-colors">Men</li>
                    <li className="hover:text-[#3a4d3a] cursor-pointer transition-colors">Women</li>
                    <li className="hover:text-[#3a4d3a] cursor-pointer transition-colors">Accessories</li>
                    <li className="hover:text-[#3a4d3a] cursor-pointer transition-colors">Ethical Edits</li>
                 </ul>
              </div>
              <div className="space-y-6">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3a4d3a]/40">Mission</h4>
                 <ul className="space-y-4 text-sm font-bold">
                    <li className="hover:text-[#3a4d3a] cursor-pointer transition-colors">Transparency</li>
                    <li className="hover:text-[#3a4d3a] cursor-pointer transition-colors">Materials</li>
                    <li className="hover:text-[#3a4d3a] cursor-pointer transition-colors">Impact Report</li>
                    <li className="hover:text-[#3a4d3a] cursor-pointer transition-colors">Circular Care</li>
                 </ul>
              </div>
              <div className="col-span-2 space-y-8">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#3a4d3a]/40">Our Community</h4>
                 <div className="flex gap-2">
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="flex-1 bg-white border border-[#3a4d3a]/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#3a4d3a]/10 transition-all"
                    />
                    <button className="bg-[#3a4d3a] text-white rounded-xl px-6 py-3 font-black uppercase text-[10px] tracking-widest shadow-lg active:scale-95 transition-all">Join</button>
                 </div>
                 <p className="text-[10px] font-medium text-[#3a4d3a]/40 italic">Receive bi-weekly updates on our reforestation progress.</p>
              </div>
           </div>
        </div>

        {/* Certifications Bar */}
        <div className="flex flex-wrap justify-center gap-12 mb-16 opacity-30 grayscale contrast-125">
           <div className="flex items-center gap-2 font-black uppercase tracking-tighter text-sm italic">B-Corp Certified</div>
           <div className="flex items-center gap-2 font-black uppercase tracking-tighter text-sm italic">GOTS Organic</div>
           <div className="flex items-center gap-2 font-black uppercase tracking-tighter text-sm italic">PETA Approved</div>
           <div className="flex items-center gap-2 font-black uppercase tracking-tighter text-sm italic">Climate Neutral</div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-[#3a4d3a]/10">
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-[10px] font-bold text-[#3a4d3a]/40 uppercase tracking-widest">
                 <ShieldCheck className="h-4 w-4" /> 100% Biodegradable Packaging
              </div>
           </div>
           <div className="flex gap-12">
              <svg className="h-5 w-5 text-[#3a4d3a]/40 hover:text-[#3a4d3a] cursor-pointer transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              <Globe className="h-5 w-5 text-[#3a4d3a]/40 hover:text-[#3a4d3a] cursor-pointer transition-all" />
           </div>
        </div>
      </div>
    </footer>
  )
}
