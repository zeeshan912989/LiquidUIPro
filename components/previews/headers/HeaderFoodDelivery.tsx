"use client"

import { useState } from 'react'
import { 
  ShoppingBag, 
  Search, 
  MapPin, 
  ChevronDown,
  Clock,
  User,
  Menu,
  X,
  UtensilsCrossed,
  Pizza,
  Coffee,
  IceCream,
  Bike
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeaderFoodDelivery() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="w-full bg-white font-sans antialiased">
      {/* Top Banner (Desktop/Tablet) */}
      <div className="hidden sm:flex h-10 w-full items-center justify-center bg-gradient-to-r from-orange-500 to-red-600 px-4 text-xs font-bold text-white uppercase tracking-wider">
        <Clock className="mr-2 h-4 w-4" /> 30-Min Delivery Guaranteed or $5 Off Your Next Order!
      </div>

      <header className="border-b border-gray-100 py-3 lg:py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 gap-4">
          
          {/* Logo & Location */}
          <div className="flex items-center gap-2 lg:gap-8">
            <a href="#" className="flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg shadow-orange-100 group-hover:rotate-12 transition-transform">
                <UtensilsCrossed className="h-6 w-6" />
              </div>
              <span className="hidden lg:block text-2xl font-black tracking-tight text-slate-900">
                Quick<span className="text-orange-500">Bites</span>
              </span>
            </a>

            {/* Location Selector (Desktop/Tablet) */}
            <div className="hidden sm:flex items-center gap-3 rounded-full bg-gray-50 border border-gray-100 px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors group">
              <MapPin className="h-4 w-4 text-orange-500 group-hover:animate-bounce" />
              <div className="flex flex-col leading-none">
                <span className="text-[10px] font-bold text-gray-400 uppercase">Deliver to</span>
                <span className="text-xs font-bold text-slate-900 flex items-center">
                  San Francisco, CA <ChevronDown className="ml-1 h-3 w-3" />
                </span>
              </div>
            </div>
          </div>

          {/* Search Bar (Desktop Center) */}
          <div className="hidden lg:flex flex-1 max-w-md relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-orange-500" />
            <input 
              type="text" 
              placeholder="Search dishes, restaurants..." 
              className="w-full bg-gray-50 border border-transparent rounded-2xl py-3 pl-12 pr-4 text-sm outline-none focus:bg-white focus:border-orange-500 transition-all shadow-inner"
            />
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-900 text-white text-sm font-bold hover:bg-orange-500 transition-all active:scale-95 shadow-lg shadow-slate-100">
              <User className="h-4 w-4" /> Sign In
            </button>
            <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 border border-orange-100 text-orange-500 hover:bg-orange-500 hover:text-white transition-all shadow-sm">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-4 ring-white">
                2
              </span>
            </button>
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-gray-50 text-slate-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Category Icons (Horizontal scroll) */}
      <nav className="bg-white border-b border-gray-100 overflow-x-auto no-scrollbar py-3">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8 whitespace-nowrap">
          {[
            { name: 'Pizza', icon: Pizza, color: 'bg-red-50 text-red-500' },
            { name: 'Burgers', icon: UtensilsCrossed, color: 'bg-orange-50 text-orange-500' },
            { name: 'Coffee', icon: Coffee, color: 'bg-amber-50 text-amber-700' },
            { name: 'Desserts', icon: IceCream, color: 'bg-pink-50 text-pink-500' },
            { name: 'Offers', icon: Bike, color: 'bg-green-50 text-green-600' },
          ].map((cat) => (
            <button key={cat.name} className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all group">
              <div className={cn("flex h-8 w-8 items-center justify-center rounded-xl transition-transform group-hover:scale-110", cat.color)}>
                <cat.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-bold text-slate-700">{cat.name}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Sticky Quick Access (Mobile Only) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[400px] h-16 bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-white/10 flex items-center justify-between px-6 shadow-2xl lg:hidden">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-lg">
            <Bike className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-gray-400 uppercase leading-none">Your Order</span>
            <span className="text-xs font-bold text-white">2 Items · $34.50</span>
          </div>
        </div>
        <button className="bg-white text-slate-900 px-6 py-2.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
          Checkout
        </button>
      </div>

      {/* Slide Drawer (Mobile) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[200] lg:hidden">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[320px] bg-white p-8 flex flex-col">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="h-6 w-6 text-orange-500" />
                <span className="text-xl font-bold tracking-tight">QuickBites</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="rounded-full bg-slate-50 p-2 text-slate-400">
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Location Selector */}
            <div className="mb-8 p-4 rounded-2xl bg-orange-50 border border-orange-100 flex items-center gap-4">
              <MapPin className="h-6 w-6 text-orange-500" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-orange-400 uppercase">Delivery to</span>
                <span className="text-sm font-bold text-slate-900">Current Location</span>
              </div>
            </div>

            <nav className="flex flex-col gap-6 flex-1">
              {['My Orders', 'Favorite Stores', 'Promotions', 'Wallet', 'Support'].map((item) => (
                <a key={item} href="#" className="text-lg font-bold text-slate-700 hover:text-orange-500 transition-colors">
                  {item}
                </a>
              ))}
            </nav>

            <button className="mt-auto w-full py-4 bg-orange-500 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-orange-100">
              Order Now
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
