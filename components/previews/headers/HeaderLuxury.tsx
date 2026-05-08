"use client"

import { useState, useEffect } from 'react'
import { 
  ShoppingBag, 
  Search, 
  User, 
  Menu, 
  X, 
  ChevronDown,
  Globe,
  Share2,
  Send
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeaderLuxury() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="w-full bg-white">
      {/* Announcement Bar */}
      <div className="w-full bg-black py-2.5 px-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white">
        Free Worldwide Shipping on Orders Over $150
      </div>

      <header 
        className={cn(
          "w-full transition-all duration-500",
          scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-white py-6"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Mobile Menu Toggle */}
          <div className="flex flex-1 items-center lg:hidden">
            <button onClick={() => setIsOpen(true)} className="p-2 -ml-2 text-gray-900">
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop Nav (Left) */}
          <nav className="hidden lg:flex lg:flex-1 lg:items-center lg:gap-10">
            {['Shop All', 'New Arrivals', 'Collections'].map((item) => (
              <a
                key={item}
                href="#"
                className="group relative text-[11px] font-bold uppercase tracking-[0.15em] text-gray-900 transition-colors hover:text-accent"
              >
                {item}
                <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Center Logo */}
          <div className="flex shrink-0 items-center justify-center">
            <a href="#" className="flex flex-col items-center text-center">
              <span className="text-2xl font-black leading-tight tracking-[0.4em] text-black sm:text-3xl lg:text-4xl">
                AURUM
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-gray-400 sm:text-[10px] mt-1">
                Fine Jewelry
              </span>
            </a>
          </div>

          {/* Right Icons */}
          <div className="flex flex-1 items-center justify-end gap-2 lg:gap-6">
            <button className="hidden sm:block p-2 text-gray-900 hover:scale-110 transition-transform">
              <Search className="h-5 w-5 stroke-[1.5]" />
            </button>
            <button className="hidden lg:block p-2 text-gray-900 hover:scale-110 transition-transform">
              <User className="h-5 w-5 stroke-[1.5]" />
            </button>
            <button className="relative p-2 text-gray-900 hover:scale-110 transition-transform">
              <ShoppingBag className="h-5 w-5 stroke-[1.5]" />
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-white shadow-sm">
                0
              </span>
            </button>
            <button className="hidden xl:block bg-black text-white px-8 py-3.5 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gray-800 transition-all hover:translate-y-[-2px]">
              Book Appointment
            </button>
          </div>
        </div>
      </header>

      {/* Luxury Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-[200] lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[85%] max-w-[360px] bg-white p-8 shadow-2xl transition-transform duration-500">
            <div className="flex items-center justify-between mb-12 border-b border-gray-100 pb-6">
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-[0.2em]">AURUM</span>
                <span className="text-[8px] font-bold text-gray-400 tracking-[0.3em]">EST. 1992</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="rounded-full bg-gray-50 p-3"><X className="h-5 w-5" /></button>
            </div>
            <nav className="flex flex-col gap-8">
              {['Shop All', 'New Arrivals', 'Collections', 'Our Story', 'Sale'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className={cn(
                    "text-xl font-bold tracking-tight border-b border-gray-50 pb-4 flex justify-between items-center transition-colors hover:text-accent",
                    item === 'Sale' ? "text-red-600" : "text-gray-900"
                  )}
                >
                  {item}
                  <ChevronDown className="-rotate-90 h-5 w-5 text-gray-200" />
                </a>
              ))}
            </nav>
            <div className="mt-auto pt-10 border-t border-gray-100">
              <div className="flex gap-10 justify-center">
                <Globe className="h-6 w-6 text-gray-300 hover:text-accent transition-colors" />
                <Share2 className="h-6 w-6 text-gray-300 hover:text-accent transition-colors" />
                <Send className="h-6 w-6 text-gray-300 hover:text-accent transition-colors" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
