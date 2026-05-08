"use client"

import { Send, ArrowRight, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function SplitColumn() {
  return (
    <footer className="w-full bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-24 mb-24">
          
          {/* Left Side: Brand Story */}
          <div className="lg:w-1/2 space-y-10 pr-12 lg:border-r border-gray-50">
            <div className="flex items-center gap-3">
               <div className="h-12 w-12 bg-black rounded-full flex items-center justify-center text-white">
                  <Sparkles className="h-6 w-6 fill-current" />
               </div>
               <span className="text-3xl font-black tracking-tighter">Radiance.</span>
            </div>
            <h2 className="text-5xl font-black uppercase tracking-tighter italic text-gray-900 leading-[0.9]">
               Revolutionizing digital aesthetics for global brands.
            </h2>
            <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-md">
               Our studio focuses on the intersection of human psychology and visual excellence, 
               creating digital experiences that leave a lasting imprint.
            </p>
            <div className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] group cursor-pointer hover:text-indigo-600 transition-all">
               View our manifesto <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>

          {/* Right Side: Links & Newsletter */}
          <div className="lg:w-1/2 flex flex-col justify-between py-2">
             <div className="grid grid-cols-2 gap-12 mb-16 lg:mb-0">
                <div className="space-y-8">
                   <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Navigation</h4>
                   <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-gray-900">
                      <li className="hover:text-indigo-600 cursor-pointer transition-colors">Portfolios</li>
                      <li className="hover:text-indigo-600 cursor-pointer transition-colors">Case Studies</li>
                      <li className="hover:text-indigo-600 cursor-pointer transition-colors">The Studio</li>
                      <li className="hover:text-indigo-600 cursor-pointer transition-colors">Contact</li>
                   </ul>
                </div>
                <div className="space-y-8">
                   <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Social</h4>
                   <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-gray-900">
                      <li className="hover:text-indigo-600 cursor-pointer transition-colors flex items-center gap-2">Instagram</li>
                      <li className="hover:text-indigo-600 cursor-pointer transition-colors flex items-center gap-2">Behance</li>
                      <li className="hover:text-indigo-600 cursor-pointer transition-colors flex items-center gap-2">Dribbble</li>
                      <li className="hover:text-indigo-600 cursor-pointer transition-colors flex items-center gap-2">LinkedIn</li>
                   </ul>
                </div>
             </div>

             <div className="space-y-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Newsletter</h4>
                <div className="relative max-w-md">
                   <input 
                     type="email" 
                     placeholder="Your email address" 
                     className="w-full border-b-2 border-gray-100 py-4 text-lg font-black tracking-tighter focus:outline-none focus:border-black transition-all"
                   />
                   <button className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-12 bg-black text-white rounded-full flex items-center justify-center hover:scale-105 transition-all">
                      <Send className="h-5 w-5" />
                   </button>
                </div>
                <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">Join 50k+ designers getting our weekly brief.</p>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-gray-100">
           <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              © 2024 Radiance Creative Studio.
           </p>
           <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest text-gray-900">
              <span className="hover:opacity-50 cursor-pointer transition-opacity">Privacy Policy</span>
              <span className="hover:opacity-50 cursor-pointer transition-opacity">Imprint</span>
           </div>
        </div>
      </div>
    </footer>
  )
}
