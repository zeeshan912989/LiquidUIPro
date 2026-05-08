"use client"

import { useState } from 'react'
import { 
  ShoppingBag, 
  Search, 
  User, 
  Menu, 
  X, 
  Cpu,
  Smartphone,
  Laptop,
  Headphones,
  Zap,
  Home,
  Grid,
  Heart
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeaderTechStore() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="w-full font-sans antialiased">
      {/* Top Search Bar (Mobile Sticky Top) */}
      <div className="sticky top-0 z-[60] bg-[#0a0a0a] border-b border-gray-800 p-3 lg:hidden">
        <div className="relative flex items-center bg-[#1a1a1a] rounded-full px-4 py-2 border border-gray-700 focus-within:border-cyan-500 transition-colors">
          <Search className="h-4 w-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search tech, gaming, accessories..." 
            className="bg-transparent text-xs text-white outline-none ml-3 w-full"
          />
          <button className="text-[10px] font-bold text-cyan-400 uppercase tracking-tighter">Search</button>
        </div>
      </div>

      <header className="bg-[#0a0a0a] text-white border-b border-gray-800 py-4 lg:py-5">
        <div className="mx-auto max-w-[1440px] px-4 lg:px-8 flex items-center justify-between gap-8">
          
          {/* LOGO (Left) */}
          <div className="flex shrink-0 items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              <Zap className="h-6 w-6 text-white fill-white" />
            </div>
            <span className="hidden sm:block text-2xl font-black italic tracking-tighter uppercase">
              TECH<span className="text-cyan-400">FLUX</span>
            </span>
          </div>

          {/* SEARCH (Desktop Center-Left) */}
          <div className="hidden lg:flex flex-1 max-w-2xl relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Search latest gadgets, GPUs, or laptops..." 
              className="w-full bg-[#111] border border-gray-800 rounded-xl py-3 pl-12 pr-4 text-sm outline-none focus:border-cyan-500 transition-all shadow-inner"
            />
            <div className="absolute inset-y-0 right-2 flex items-center">
              <kbd className="hidden xl:inline-flex h-6 items-center gap-1 rounded border border-gray-700 bg-gray-800 px-1.5 font-mono text-[10px] font-medium text-gray-400">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </div>

          {/* ACTIONS (Right) */}
          <div className="flex items-center gap-2 sm:gap-6">
            <button className="hidden lg:flex flex-col items-center gap-1 text-gray-400 hover:text-cyan-400 transition-colors group">
              <div className="relative">
                <User className="h-6 w-6" />
                <div className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-cyan-500 scale-0 group-hover:scale-100 transition-transform" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest">Sign In</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-cyan-400 transition-colors group">
              <div className="relative">
                <ShoppingBag className="h-6 w-6" />
                <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-[10px] font-bold text-white shadow-lg">
                  3
                </span>
              </div>
              <span className="hidden lg:block text-[10px] font-bold uppercase tracking-widest">Cart</span>
            </button>
            <button className="lg:hidden p-2 text-gray-400" onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* CATEGORY BAR (Desktop Only) */}
      <nav className="hidden lg:block bg-[#050505] border-b border-gray-900 py-3 overflow-x-auto">
        <div className="mx-auto max-w-[1440px] px-8 flex items-center justify-center gap-10 whitespace-nowrap">
          {[
            { name: 'PC Components', icon: Cpu },
            { name: 'Mobile', icon: Smartphone },
            { name: 'Laptops', icon: Laptop },
            { name: 'Audio', icon: Headphones },
            { name: 'Gaming Gear', icon: Zap },
          ].map((item) => (
            <a 
              key={item.name}
              href="#" 
              className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-cyan-400 transition-all group"
            >
              <item.icon className="h-4 w-4 group-hover:rotate-12 transition-transform" />
              {item.name}
            </a>
          ))}
        </div>
      </nav>

      {/* BOTTOM NAV (Mobile Only) */}
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-[#0a0a0a]/90 backdrop-blur-lg border-t border-gray-800 flex items-center justify-around px-4 lg:hidden">
        <button className="flex flex-col items-center gap-1 text-cyan-400">
          <Home className="h-6 w-6" />
          <span className="text-[10px] font-bold uppercase">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-cyan-400">
          <Grid className="h-6 w-6" />
          <span className="text-[10px] font-bold uppercase">Browse</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-cyan-400">
          <Heart className="h-6 w-6" />
          <span className="text-[10px] font-bold uppercase">Wishlist</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-cyan-400">
          <User className="h-6 w-6" />
          <span className="text-[10px] font-bold uppercase">Profile</span>
        </button>
      </div>

      {/* Slide Menu (Mobile Drawer) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[300px] bg-[#111] border-l border-gray-800 p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-12">
              <span className="text-xl font-black italic tracking-tighter">TECH<span className="text-cyan-400">FLUX</span></span>
              <button onClick={() => setIsMenuOpen(false)} className="rounded-full bg-gray-900 p-2"><X className="h-5 w-5" /></button>
            </div>
            <nav className="flex flex-col gap-6">
              {['Smartphones', 'Graphic Cards', 'Mechanical Keyboards', 'Monitors', 'Laptops', 'VR Headsets'].map((item) => (
                <a key={item} href="#" className="text-lg font-bold text-gray-300 hover:text-cyan-400 flex justify-between items-center group">
                  {item}
                  <Zap className="h-4 w-4 opacity-0 group-hover:opacity-100 text-cyan-400 transition-all" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Spacer for bottom nav */}
      <div className="h-16 lg:hidden" />
    </div>
  )
}
