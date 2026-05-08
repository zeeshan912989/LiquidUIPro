"use client"

import { useState, useEffect } from 'react'
import { 
  ShoppingBag, 
  Search, 
  Heart,
  User,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Flower2,
  Wind
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeaderBeautyCosmetics() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="w-full relative">
      {/* 
          Note: This header is designed to be overlayed on a hero. 
          In this preview, we use a gradient background to simulate a hero.
      */}
      <div className="absolute inset-0 -z-10 h-[600px] bg-gradient-to-br from-rose-50 via-white to-pink-100 opacity-50" />

      <header 
        className={cn(
          "fixed top-0 left-0 z-50 w-full transition-all duration-700 ease-in-out px-4 py-4 lg:px-12",
          scrolled ? "py-4" : "py-8"
        )}
      >
        <div 
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-8 py-3 rounded-full border transition-all duration-500",
            scrolled 
              ? "bg-white/80 backdrop-blur-xl border-white/50 shadow-[0_10px_40px_rgba(255,182,193,0.15)]" 
              : "bg-white/10 backdrop-blur-sm border-white/20"
          )}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-400/20 text-pink-500">
              <Flower2 className="h-6 w-6 group-hover:rotate-45 transition-transform duration-500" />
            </div>
            <span className="text-2xl font-serif italic tracking-wide text-pink-950">
              Lumi<span className="font-light">ère</span>
            </span>
          </div>

          {/* Nav (Desktop) */}
          <nav className="hidden lg:flex items-center gap-10">
            {['Skincare', 'Makeup', 'Fragrance', 'Self-Care'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="relative group text-sm font-medium text-pink-900/70 hover:text-pink-600 transition-colors"
              >
                {item}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-pink-300 rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Icons (Desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="text-pink-900/60 hover:text-pink-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-pink-900/60 hover:text-pink-600 transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="relative p-2 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-600 hover:text-white transition-all shadow-sm">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-pink-500 text-[10px] font-bold text-white ring-2 ring-white">
                3
              </span>
            </button>
          </div>

          {/* Mobile Hamburguer (Only shown if drawer not open) */}
          {!isOpen && (
            <button 
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 rounded-full bg-pink-100 text-pink-600 shadow-lg shadow-pink-100"
            >
              <Menu className="h-6 w-6" />
            </button>
          )}
        </div>
      </header>

      {/* Floating Mobile Menu (Soft Minimal) */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden p-4">
          <div className="absolute inset-0 bg-rose-950/20 backdrop-blur-md" onClick={() => setIsOpen(false)} />
          <div className="relative h-full w-full bg-white/90 backdrop-blur-2xl rounded-[40px] shadow-2xl border border-white p-10 flex flex-col items-center">
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-8 right-8 p-3 rounded-full bg-rose-50 text-rose-300 hover:text-rose-600 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>

            <div className="mt-12 mb-16 flex flex-col items-center gap-2">
              <Flower2 className="h-12 w-12 text-pink-400" />
              <span className="text-4xl font-serif italic text-pink-950">Lumière</span>
            </div>

            <nav className="flex flex-col gap-8 items-center">
              {['New Arrivals', 'Best Sellers', 'Skin Quiz', 'Our Ritual', 'Gift Sets'].map((item) => (
                <a key={item} href="#" className="text-2xl font-medium text-pink-900/80 hover:text-pink-500 transition-colors tracking-tight">
                  {item}
                </a>
              ))}
            </nav>

            <div className="mt-auto w-full grid grid-cols-2 gap-4">
              <button className="py-4 rounded-3xl bg-rose-50 text-pink-600 font-bold text-sm uppercase tracking-widest">
                Search
              </button>
              <button className="py-4 rounded-3xl bg-pink-500 text-white font-bold text-sm uppercase tracking-widest shadow-lg shadow-pink-100">
                Cart (3)
              </button>
            </div>
            <div className="mt-6 flex gap-8">
              <Wind className="h-6 w-6 text-pink-200" />
              <Sparkles className="h-6 w-6 text-pink-300" />
              <Flower2 className="h-6 w-6 text-pink-200" />
            </div>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="h-24" />
    </div>
  )
}
