"use client"

import { useState } from 'react'
import { 
  ShoppingBag, 
  Search, 
  User, 
  Menu, 
  X, 
  ChevronDown,
  Globe,
  Share2,
  Send,
  Star
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeaderJewelryPremium() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="w-full bg-[#fdfbf7]">
      {/* Top Bar */}
      <div className="bg-[#1a1a1a] py-2 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A96E]">
          Free Luxury Packaging on all orders
        </p>
      </div>

      <header className="border-b border-[#C9A96E]/20 py-6 lg:py-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
          
          {/* LEFT: Search & Navigation Links (Desktop) */}
          <div className="hidden lg:flex flex-1 items-center gap-10">
            <button className="text-[#1a1a1a] hover:text-[#C9A96E] transition-colors">
              <Search className="h-5 w-5 stroke-[1px]" />
            </button>
            <nav className="flex items-center gap-8">
              {['Necklaces', 'Rings', 'Earrings'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="group relative text-[11px] font-bold uppercase tracking-[0.2em] text-[#1a1a1a]"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#C9A96E] transition-all duration-500 group-hover:w-full" />
                </a>
              ))}
            </nav>
          </div>

          {/* LEFT: Hamburger (Mobile/Tablet) */}
          <div className="flex flex-1 items-center lg:hidden">
            <button onClick={() => setIsMenuOpen(true)} className="text-[#1a1a1a]">
              <Menu className="h-7 w-7 stroke-[1px]" />
            </button>
          </div>

          {/* CENTER: Logo (Responsive Scaling) */}
          <div className="flex shrink-0 items-center justify-center flex-col px-4">
            <a href="#" className="flex flex-col items-center group">
              <span className="font-serif text-3xl font-light tracking-[0.15em] text-[#1a1a1a] sm:text-4xl lg:text-5xl transition-all duration-700 group-hover:tracking-[0.25em]">
                VÉRE
              </span>
              <div className="flex items-center gap-2 mt-1">
                <div className="h-[1px] w-4 bg-[#C9A96E]/40" />
                <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-[#C9A96E] sm:text-[10px]">
                  Atelier
                </span>
                <div className="h-[1px] w-4 bg-[#C9A96E]/40" />
              </div>
            </a>
          </div>

          {/* RIGHT: Icons (Desktop) */}
          <div className="flex flex-1 items-center justify-end gap-2 lg:gap-8">
            <button className="hidden sm:block text-[#1a1a1a] hover:text-[#C9A96E] transition-colors">
              <Star className="h-5 w-5 stroke-[1px]" />
            </button>
            <button className="hidden lg:block text-[#1a1a1a] hover:text-[#C9A96E] transition-colors">
              <User className="h-5 w-5 stroke-[1px]" />
            </button>
            <button className="relative text-[#1a1a1a] hover:text-[#C9A96E] transition-colors">
              <ShoppingBag className="h-5 w-5 stroke-[1px]" />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#C9A96E] text-[8px] font-bold text-white shadow-md">
                2
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu (Slide Up) */}
      <div 
        className={cn(
          "fixed inset-0 z-[100] bg-[#1a1a1a] text-white transition-all duration-700 ease-in-out",
          isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        )}
      >
        <div className="flex flex-col h-full p-10">
          <div className="flex items-center justify-between border-b border-white/10 pb-8">
            <span className="font-serif text-2xl tracking-[0.2em]">VÉRE</span>
            <button onClick={() => setIsMenuOpen(false)} className="rounded-full border border-white/20 p-3 hover:bg-white hover:text-black transition-all">
              <X className="h-6 w-6 stroke-[1px]" />
            </button>
          </div>
          
          <nav className="flex flex-col gap-8 py-16 items-center">
            {['The New Collection', 'Fine Jewelry', 'Engagement', 'Our Craft', 'Appointments'].map((item, index) => (
              <a 
                key={item} 
                href="#" 
                className={cn(
                  "text-2xl font-serif font-light tracking-widest transition-all hover:text-[#C9A96E] hover:tracking-[0.15em]",
                  index === 0 && "text-[#C9A96E]"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="mt-auto border-t border-white/10 pt-10 flex flex-col items-center gap-6">
            <div className="flex gap-10">
              <Globe className="h-6 w-6 text-white/40 hover:text-[#C9A96E] transition-colors" />
              <Share2 className="h-6 w-6 text-white/40 hover:text-[#C9A96E] transition-colors" />
              <Send className="h-6 w-6 text-white/40 hover:text-[#C9A96E] transition-colors" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 italic">
              Experience the Art of Jewelry
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
