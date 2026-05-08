"use client"

import { useState, useEffect } from 'react'
import { 
  ShoppingBag, 
  Search, 
  User, 
  Menu, 
  X, 
  ChevronDown,
  Zap,
  Flame,
  Truck,
  Timer,
  ArrowRight,
  Star,
  Moon,
  Sun
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeaderConversionEngine() {
  const [timeLeft, setTimeLeft] = useState(3600)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeMega, setActiveMega] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  return (
    <div className={cn("w-full transition-colors duration-500", isDarkMode ? "bg-[#0a0a0a] text-white" : "bg-white text-slate-900")}>
      
      {/* 1. Countdown Timer Banner & Flash Sale Ticker */}
      <div className="bg-red-600 text-white h-12 flex items-center justify-between px-8 overflow-hidden">
        <div className="flex items-center gap-4 animate-pulse">
          <Flame className="h-5 w-5 fill-white" />
          <span className="text-xs font-black uppercase tracking-widest">FLASH SALE ENDING SOON</span>
        </div>
        
        <div className="hidden md:flex items-center gap-3">
          <Timer className="h-5 w-5" />
          <span className="font-mono text-lg font-black tracking-widest">{formatTime(timeLeft)}</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden sm:block text-[10px] font-bold border border-white/30 rounded px-2 py-0.5">CODE: RUSH50</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>

      {/* 2. Free Shipping Progress Header */}
      <div className={cn(
        "h-10 flex items-center justify-center border-b text-[10px] font-black uppercase tracking-widest",
        isDarkMode ? "border-white/10 bg-white/5" : "border-slate-100 bg-slate-50"
      )}>
        <Truck className="h-3.5 w-3.5 mr-2 text-blue-600" />
        Almost there! Add <span className="mx-1 text-blue-600">$12.50</span> for free worldwide shipping
        <div className="ml-4 w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden hidden sm:block">
           <div className="h-full bg-blue-600 w-[85%]" />
        </div>
      </div>

      <header className={cn(
        "py-6 px-4 lg:px-8 border-b transition-all",
        isDarkMode ? "border-white/10" : "border-slate-100"
      )}>
        <div className="mx-auto max-w-[1440px] flex items-center justify-between">
          
          {/* Menu & Dark Mode Toggle */}
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={cn(
                "p-2 rounded-xl transition-all",
                isDarkMode ? "bg-white/10 text-yellow-400 hover:bg-white/20" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              )}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <nav className="hidden lg:flex items-center gap-2">
              <div 
                className="relative group"
                onMouseEnter={() => setActiveMega(true)}
                onMouseLeave={() => setActiveMega(false)}
              >
                <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-600 hover:text-white transition-all">
                  Shop All <ChevronDown className="h-4 w-4" />
                </button>
                
                {/* 3. Multi-column Mega Menu with Product Cards */}
                {activeMega && (
                  <div className="absolute top-full left-0 mt-4 w-[1000px] bg-white text-slate-900 rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.15)] border border-slate-100 p-10 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="grid grid-cols-4 gap-12">
                      <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase text-blue-600">Electronics</h4>
                        {['Laptops', 'Smartphones', 'Audio', 'Gaming', 'Cameras'].map(i => (
                          <a key={i} href="#" className="block text-sm font-bold text-slate-500 hover:text-black transition-colors">{i}</a>
                        ))}
                      </div>
                      <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase text-blue-600">Accessories</h4>
                        {['Chargers', 'Cases', 'Mounts', 'Powerbanks', 'Cables'].map(i => (
                          <a key={i} href="#" className="block text-sm font-bold text-slate-500 hover:text-black transition-colors">{i}</a>
                        ))}
                      </div>
                      <div className="col-span-2 space-y-8">
                        <h4 className="text-xs font-black uppercase text-blue-600">Featured Deal</h4>
                        <div className="flex gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100 group/card">
                          <div className="h-32 w-32 bg-white rounded-2xl shrink-0 group-hover/card:rotate-6 transition-transform" />
                          <div>
                            <div className="flex items-center gap-1 text-orange-400 mb-2">
                              {[1,2,3,4,5].map(s => <Star key={s} className="h-3 w-3 fill-current" />)}
                            </div>
                            <h5 className="text-lg font-black leading-tight mb-2">NextGen Pro Headphones</h5>
                            <p className="text-sm text-slate-400 mb-4">ANC, 60h Battery Life</p>
                            <div className="flex items-center gap-4">
                               <span className="text-2xl font-black">$249</span>
                               <span className="text-sm font-bold text-slate-300 line-through">$399</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {['Deals', 'New Arrival', 'Sustainability'].map(i => (
                <a key={i} href="#" className="px-4 py-2 font-bold text-sm hover:text-blue-600 transition-colors">{i}</a>
              ))}
            </nav>
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <h2 className="text-3xl font-black italic tracking-tighter uppercase">
              DEAL<span className="text-blue-600 underline decoration-4 underline-offset-4">DASH</span>
            </h2>
          </div>

          {/* User Icons */}
          <div className="flex items-center gap-2 sm:gap-6">
            <button className={cn("p-2 rounded-xl transition-all", isDarkMode ? "hover:bg-white/10" : "hover:bg-slate-100")}>
              <Search className="h-6 w-6" />
            </button>
            <button className={cn("hidden sm:block p-2 rounded-xl transition-all", isDarkMode ? "hover:bg-white/10" : "hover:bg-slate-100")}>
              <User className="h-6 w-6" />
            </button>
            <button className="relative p-3 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-200 hover:scale-105 transition-all">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-black text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-blue-600">
                12
              </span>
            </button>
            <button className="lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer & Page Demo */}
      <div className="p-12 space-y-12">
        <div className="h-96 w-full bg-slate-200 rounded-[40px] flex items-center justify-center text-slate-400 font-black text-4xl italic uppercase animate-pulse">
          HERO BANNER
        </div>
        <div className="grid grid-cols-4 gap-8">
          {[1,2,3,4].map(i => (
            <div key={i} className="space-y-4">
              <div className="aspect-square bg-slate-200 rounded-3xl" />
              <div className="h-4 w-3/4 bg-slate-200 rounded-full" />
              <div className="h-4 w-1/4 bg-slate-200 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
