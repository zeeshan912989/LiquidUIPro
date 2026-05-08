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
  Send
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Header01() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Shop All', href: '#' },
    { name: 'New Arrivals', href: '#', badge: 'New' },
    { name: 'Collections', href: '#', hasDropdown: true },
    { name: 'Our Story', href: '#' },
    { name: 'Sale', href: '#', highlight: true },
  ]

  return (
    <div className="w-full bg-white">
      {/* Announcement Bar - Hidden on Mobile (< 640px) */}
      <div className="hidden w-full bg-black py-2.5 px-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:block">
        Free Worldwide Shipping on Orders Over $150
      </div>

      <header className="relative w-full border-b border-gray-100 py-4 lg:py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* LEFT: Mobile Menu Toggle */}
          <div className="flex flex-1 items-center lg:hidden">
            <button 
              onClick={() => setIsOpen(true)}
              className="p-2 -ml-2 text-gray-900"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-900 sm:ml-2">
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* LEFT: Desktop Nav */}
          <nav className="hidden lg:flex lg:flex-1 lg:items-center lg:gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-[12px] font-bold uppercase tracking-wider transition-colors hover:text-accent",
                  link.highlight ? "text-red-600" : "text-gray-900"
                )}
              >
                {link.name}
                {link.badge && (
                  <span className="absolute -right-5 -top-2 rounded-full bg-accent px-1.5 py-0.5 text-[7px] text-white">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* CENTER: Logo */}
          <div className="flex shrink-0 items-center justify-center">
            <a href="#" className="flex flex-col items-center text-center">
              <span className="text-xl font-black leading-tight tracking-[0.3em] text-black sm:text-2xl lg:text-3xl">
                AURUM
              </span>
              <span className="text-[7px] font-bold uppercase tracking-[0.4em] text-gray-400 sm:text-[9px]">
                Fine Jewelry
              </span>
            </a>
          </div>

          {/* RIGHT: Account & Cart */}
          <div className="flex flex-1 items-center justify-end gap-1 sm:gap-4">
            <button className="hidden p-2 text-gray-900 lg:block">
              <User className="h-5 w-5" />
            </button>
            <button className="relative p-2 text-gray-900">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] font-bold text-white shadow-sm">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {isOpen && (
        <div className="fixed inset-0 z-[200] lg:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[80%] max-w-[320px] bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-10 border-b border-gray-50 pb-6">
              <span className="text-xl font-black tracking-[0.2em]">AURUM</span>
              <button onClick={() => setIsOpen(false)} className="rounded-full bg-gray-50 p-2"><X className="h-5 w-5" /></button>
            </div>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={cn(
                    "text-lg font-bold border-b border-gray-50 pb-3 flex justify-between items-center",
                    link.highlight ? "text-red-600" : "text-gray-900"
                  )}
                >
                  {link.name}
                  <ChevronDown className="-rotate-90 h-4 w-4 text-gray-300" />
                </a>
              ))}
            </nav>
            <div className="mt-auto pt-10 border-t border-gray-100">
              <div className="flex gap-8 justify-center">
                <Globe className="h-5 w-5 text-gray-400 hover:text-black transition-colors" />
                <Share2 className="h-5 w-5 text-gray-400 hover:text-black transition-colors" />
                <Send className="h-5 w-5 text-gray-400 hover:text-black transition-colors" />
              </div>
              <p className="mt-8 text-center text-[10px] text-gray-300 font-bold tracking-widest uppercase">
                &copy; 2026 AURUM JEWELRY
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
