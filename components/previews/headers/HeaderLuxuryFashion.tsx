"use client"

import { useState, useEffect } from 'react'
import { 
  ShoppingBag, 
  Search, 
  User, 
  Menu, 
  X, 
  ChevronDown,
  Globe
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeaderLuxuryFashion() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="w-full">
      <header 
        className={cn(
          "fixed top-0 left-0 z-50 w-full transition-all duration-500",
          scrolled 
            ? "bg-white/70 backdrop-blur-xl border-b border-gray-100 py-3 shadow-sm" 
            : "bg-white py-6 border-b border-transparent"
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-12">
          
          {/* LEFT: Mega Menu Trigger (Desktop) / Hamburger (Mobile) */}
          <div className="flex flex-1 items-center">
            {/* Mobile/Tablet Hamburger */}
            <button 
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 -ml-2 text-black"
            >
              <Menu className="h-6 w-6 stroke-[1px]" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              <a href="#" className="group relative text-[11px] font-medium uppercase tracking-[0.2em] text-black">
                Collections
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-black transition-all group-hover:w-full" />
              </a>
              <a href="#" className="group relative text-[11px] font-medium uppercase tracking-[0.2em] text-black">
                New Arrivals
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-black transition-all group-hover:w-full" />
              </a>
              <a href="#" className="group relative text-[11px] font-medium uppercase tracking-[0.2em] text-black">
                Editorial
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-black transition-all group-hover:w-full" />
              </a>
            </nav>
          </div>

          {/* CENTER: Logo */}
          <div className="flex shrink-0 items-center justify-center">
            <a href="#" className="text-2xl font-light tracking-[0.5em] text-black sm:text-3xl">
              LA<span className="font-bold">MODE</span>
            </a>
          </div>

          {/* RIGHT: Search, Account, Cart */}
          <div className="flex flex-1 items-center justify-end gap-1 sm:gap-6">
            {/* Search Bar (Tablet/Desktop) */}
            <div className="hidden sm:flex items-center border-b border-gray-200 py-1 px-2 focus-within:border-black transition-colors">
              <Search className="h-4 w-4 text-gray-400 stroke-[1px]" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent text-[10px] uppercase tracking-widest outline-none ml-2 w-24 focus:w-32 transition-all"
              />
            </div>
            
            <button className="hidden lg:block p-2 text-black hover:scale-110 transition-transform">
              <User className="h-5 w-5 stroke-[1px]" />
            </button>
            <button className="relative p-2 text-black hover:scale-110 transition-transform">
              <ShoppingBag className="h-5 w-5 stroke-[1px]" />
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Slide Drawer (Mobile/Tablet) */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[320px] bg-white transition-transform duration-500 ease-in-out">
            <div className="flex flex-col h-full p-10">
              <div className="flex items-center justify-between mb-12">
                <span className="text-xl font-light tracking-[0.3em]">LA<span className="font-bold">MODE</span></span>
                <button onClick={() => setIsOpen(false)}><X className="h-6 w-6 stroke-[1px]" /></button>
              </div>
              <nav className="flex flex-col gap-8">
                {['Collections', 'New Arrivals', 'Editorial', 'Our Story', 'Shop All'].map((item) => (
                  <a key={item} href="#" className="text-lg font-light tracking-[0.2em] uppercase border-b border-gray-50 pb-4">
                    {item}
                  </a>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-6">
                <div className="flex items-center gap-4 text-xs tracking-widest text-gray-400">
                  <Globe className="h-4 w-4" /> <span>EN / USD</span>
                </div>
                <button className="w-full bg-black text-white py-4 text-xs font-bold uppercase tracking-[0.2em]">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer to prevent content jump */}
    </div>
  )
}
