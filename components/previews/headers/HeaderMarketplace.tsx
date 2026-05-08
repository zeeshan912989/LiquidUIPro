"use client"

import { useState } from 'react'
import { 
  ShoppingBag, 
  Search, 
  User, 
  Menu, 
  X, 
  ChevronDown,
  Tag,
  Truck,
  RotateCcw,
  Home,
  Grid,
  Heart,
  Store,
  Camera
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeaderMarketplace() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="w-full bg-[#f4f7f6]">
      {/* Top Offers Bar (Desktop only) */}
      <div className="hidden lg:flex h-10 w-full items-center justify-between bg-white border-b border-gray-100 px-8 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 text-indigo-600"><Tag className="h-3 w-3" /> Daily Deals</span>
          <span className="flex items-center gap-2"><Truck className="h-3 w-3" /> Free Shipping over $50</span>
          <span className="flex items-center gap-2"><RotateCcw className="h-3 w-3" /> 30-Day Returns</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-indigo-600">Sell on Market</a>
          <a href="#" className="hover:text-indigo-600">Track Order</a>
        </div>
      </div>

      <header className="bg-white border-b border-gray-100 py-4">
        <div className="mx-auto max-w-[1440px] px-4 lg:px-8 flex items-center gap-4 lg:gap-12">
          
          {/* Logo */}
          <div className="flex shrink-0 items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
              <Store className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">
              OPEN<span className="text-indigo-600">CART</span>
            </span>
          </div>

          {/* Search Box (Desktop/Tablet) */}
          <div className="hidden sm:flex flex-1 relative group">
            <div className="flex w-full items-center">
              <div className="relative flex-1">
                <input 
                  type="text" 
                  placeholder="Search 1M+ products..." 
                  className="w-full bg-gray-50 border-2 border-transparent rounded-l-xl py-3 pl-12 pr-4 text-sm outline-none group-focus-within:bg-white group-focus-within:border-indigo-600 transition-all"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-indigo-600" />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 transition-colors">
                  <Camera className="h-5 w-5" />
                </button>
              </div>
              <button className="bg-indigo-600 text-white px-8 py-[14px] rounded-r-xl font-bold text-sm hover:bg-indigo-700 transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-1 sm:gap-6 ml-auto">
            <button className="sm:hidden p-2 text-gray-500" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-6 w-6" />
            </button>
            <button className="hidden lg:flex flex-col items-center gap-0.5 text-gray-500 hover:text-indigo-600 transition-colors">
              <User className="h-6 w-6" />
              <span className="text-[10px] font-bold uppercase">Account</span>
            </button>
            <button className="flex flex-col items-center gap-0.5 text-gray-500 hover:text-indigo-600 transition-colors">
              <Heart className="h-6 w-6" />
              <span className="hidden lg:block text-[10px] font-bold uppercase">Wishlist</span>
            </button>
            <button className="relative flex flex-col items-center gap-0.5 text-gray-500 hover:text-indigo-600 transition-colors">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[9px] font-bold text-white shadow-sm">
                12
              </span>
              <span className="hidden lg:block text-[10px] font-bold uppercase">Cart</span>
            </button>
          </div>
        </div>
      </header>

      {/* Categories Bar (Desktop horizontal) / Tablet horizontal scroll */}
      <nav className="bg-white border-b border-gray-100 overflow-x-auto no-scrollbar">
        <div className="mx-auto max-w-[1440px] px-4 lg:px-8 flex items-center gap-8 py-3 whitespace-nowrap">
          <button className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg text-sm font-bold">
            <Menu className="h-4 w-4" /> All Categories
          </button>
          {['Electronics', 'Home & Garden', 'Fashion', 'Beauty', 'Toys & Games', 'Automotive', 'Health', 'Sports'].map((cat) => (
            <a key={cat} href="#" className="text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors">
              {cat}
            </a>
          ))}
        </div>
      </nav>

      {/* Sticky Bottom Navigation (Mobile) */}
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-100 flex items-center justify-around px-4 lg:hidden">
        <button className="flex flex-col items-center gap-1 text-indigo-600">
          <Home className="h-6 w-6" />
          <span className="text-[10px] font-bold uppercase">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400">
          <Grid className="h-6 w-6" />
          <span className="text-[10px] font-bold uppercase">Categories</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400 relative">
          <ShoppingBag className="h-6 w-6" />
          <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-orange-500 text-[8px] font-bold text-white flex items-center justify-center">12</span>
          <span className="text-[10px] font-bold uppercase">Cart</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400">
          <User className="h-6 w-6" />
          <span className="text-[10px] font-bold uppercase">Profile</span>
        </button>
      </div>

      {/* Mobile Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-white p-6 flex flex-col gap-6 lg:hidden">
          <div className="flex items-center justify-between">
            <span className="text-xl font-black">Search</span>
            <button onClick={() => setIsSearchOpen(false)} className="p-2 bg-gray-50 rounded-full"><X className="h-6 w-6" /></button>
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search products..." 
              autoFocus
              className="w-full bg-gray-50 border-2 border-indigo-600 rounded-xl py-4 pl-12 pr-4 text-base outline-none shadow-lg shadow-indigo-100"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-indigo-600" />
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Popular Searches</h4>
            <div className="flex flex-wrap gap-2">
              {['iPhone 15', 'Gaming Chair', 'Sneakers', 'Skincare', 'Kitchen Set'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-600">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="h-16 lg:hidden" />
    </div>
  )
}
