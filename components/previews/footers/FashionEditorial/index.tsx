"use client"

import { Send, Globe, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function FashionEditorial() {
  const feed = [
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=200',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=200',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=200',
    'https://images.unsplash.com/photo-1539109132272-349995904d61?q=80&w=200'
  ]

  return (
    <footer className="w-full bg-white pt-32 pb-16">
      <div className="max-w-[1440px] mx-auto px-12">
        
        {/* Instagram Feed Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
           {feed.map((img, i) => (
             <div key={i} className="group relative aspect-square overflow-hidden bg-gray-50 grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer">
                <img src={img} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                   <svg className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </div>
             </div>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
           {/* Brand Section */}
           <div className="lg:col-span-5">
              <h2 className="text-6xl font-serif tracking-tighter mb-12">Vogue.</h2>
              <div className="space-y-8">
                 <p className="text-xl font-light text-gray-400 leading-relaxed max-w-md">
                    Redefining the dialogue between high fashion and everyday elegance since 1994.
                 </p>
                 <div className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] group cursor-pointer">
                    <span>Contact the Atelier</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                 </div>
              </div>
           </div>

           {/* Navigation */}
           <div className="lg:col-span-3 lg:col-start-7 space-y-10">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">The Archive</h4>
              <ul className="space-y-6 text-sm font-light uppercase tracking-[0.2em] text-gray-900">
                 <li className="hover:text-gray-400 cursor-pointer transition-colors">Spring 2024</li>
                 <li className="hover:text-gray-400 cursor-pointer transition-colors">Resort Wear</li>
                 <li className="hover:text-gray-400 cursor-pointer transition-colors">Editorial</li>
                 <li className="hover:text-gray-400 cursor-pointer transition-colors">The Brand</li>
              </ul>
           </div>

           {/* Newsletter */}
           <div className="lg:col-span-3 space-y-10">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">Correspondence</h4>
              <div className="relative">
                 <input 
                   type="email" 
                   placeholder="JOIN THE LIST" 
                   className="w-full border-b border-gray-100 py-4 text-xs tracking-widest focus:outline-none focus:border-black transition-all uppercase font-light"
                 />
                 <button className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-all">
                    <Send className="h-4 w-4" />
                 </button>
              </div>
           </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-gray-100">
           <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">
              © 2024 Vogue Maison. Paris, France.
           </p>
           <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest text-gray-300">
              <span className="hover:text-black cursor-pointer transition-colors">Privacy</span>
              <span className="hover:text-black cursor-pointer transition-colors">Terms</span>
           </div>
        </div>
      </div>
    </footer>
  )
}
