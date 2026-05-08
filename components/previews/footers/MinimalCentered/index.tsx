"use client"

import { Globe, Heart } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function MinimalCentered() {
  return (
    <footer className="w-full bg-white py-24 border-t border-gray-100 flex flex-col items-center text-center">
      <div className="max-w-[1440px] mx-auto px-8 w-full">
        
        {/* Brand */}
        <div className="mb-12">
           <h2 className="text-3xl font-black uppercase tracking-tighter italic">Essence.</h2>
        </div>

        {/* Navigation */}
        <nav className="mb-12">
           <ul className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm font-black uppercase tracking-[0.2em] text-gray-900">
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">Journal</li>
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">About</li>
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">Sustainability</li>
              <li className="hover:text-indigo-600 cursor-pointer transition-colors">Contact</li>
           </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-16 text-gray-400">
           <svg className="h-5 w-5 hover:text-black cursor-pointer transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
           <svg className="h-5 w-5 hover:text-black cursor-pointer transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-label="Twitter / X"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
           <Globe className="h-5 w-5 hover:text-black cursor-pointer transition-colors" />
        </div>

        {/* Divider */}
        <div className="h-[2px] w-12 bg-gray-100 mx-auto mb-12" />

        {/* Bottom */}
        <div className="flex flex-col items-center gap-6">
           <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.5em]">
              Crafted with <Heart className="h-3 w-3 inline-block fill-current text-rose-500 mx-1" /> by Essence Team
           </p>
           <p className="text-[9px] font-medium text-gray-400 uppercase tracking-widest">
              © 2024 Essence Lifestyle. All Rights Reserved.
           </p>
        </div>
      </div>
    </footer>
  )
}
