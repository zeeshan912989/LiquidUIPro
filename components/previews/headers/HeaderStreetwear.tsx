"use client"

import { useState } from 'react'
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  ArrowRight,
  Send,
  Share2,
  Globe
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeaderStreetwear() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="w-full bg-white font-black antialiased">
      <header className="border-b-[3px] border-black py-4 lg:py-0">
        <div className="mx-auto flex max-w-[1920px] items-center justify-between px-6 lg:px-10">
          
          {/* Logo (Oversized Typography) */}
          <div className="flex shrink-0 items-center">
            <a href="#" className="text-4xl lg:text-6xl tracking-tighter leading-none hover:skew-x-12 transition-transform duration-300">
              RAW<span className="text-outline-black">X</span>CORE
            </a>
          </div>

          {/* Navigation (Desktop - Large Text) */}
          <nav className="hidden lg:flex h-24 items-center">
            {['Drop', 'Apparel', 'Archives', 'Labs'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="group relative flex h-full items-center px-8 text-xl uppercase tracking-tighter border-l-[3px] border-black last:border-r-[3px] overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">{item}</span>
                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4 lg:gap-0 h-full">
            <button className="lg:h-24 lg:w-24 lg:border-l-[3px] lg:border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
              <Search className="h-7 w-7" />
            </button>
            <button className="relative lg:h-24 lg:w-24 lg:border-l-[3px] lg:border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors">
              <ShoppingBag className="h-7 w-7" />
              <span className="absolute right-2 top-2 lg:right-6 lg:top-6 flex h-5 w-5 items-center justify-center bg-black text-white lg:bg-white lg:text-black text-[10px] font-black">
                08
              </span>
            </button>
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2"
            >
              <Menu className="h-8 w-8" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu (Brutalism Style) */}
      <div 
        className={cn(
          "fixed inset-0 z-[100] bg-black text-white transition-all duration-500 ease-[cubic-bezier(0.9,0,0.1,1)]",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-8 lg:p-12">
          <div className="flex items-center justify-between">
            <span className="text-4xl tracking-tighter">RAWXCORE</span>
            <button onClick={() => setIsMenuOpen(false)} className="p-4 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all">
              <X className="h-8 w-8" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 mt-16">
            {['New Drop', 'Outerwear', 'Footwear', 'Accessories', 'About', 'Contact'].map((item, index) => (
              <a 
                key={item} 
                href="#" 
                className="group flex items-center justify-between text-5xl sm:text-7xl uppercase tracking-tighter italic hover:pl-8 transition-all duration-500"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className={cn(index % 2 !== 0 && "text-outline-white")}>{item}</span>
                <ArrowRight className="h-10 w-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </nav>

          <div className="mt-auto flex flex-col sm:flex-row justify-between items-end gap-8 pt-10 border-t border-white/20">
            <div className="flex gap-8">
              <Globe className="h-8 w-8" />
              <Send className="h-8 w-8" />
              <Share2 className="h-8 w-8" />
            </div>
            <div className="text-right">
              <p className="text-xs font-black uppercase tracking-widest text-white/40 mb-2">Join the Underground</p>
              <div className="flex border-2 border-white">
                <input type="text" placeholder="EMAIL" className="bg-transparent px-4 py-2 outline-none w-48 text-sm" />
                <button className="bg-white text-black px-4 py-2 text-xs font-black">SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
