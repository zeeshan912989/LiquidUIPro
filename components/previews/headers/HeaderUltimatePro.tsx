"use client"

import { useState, useEffect, useRef } from 'react'
import { 
  ShoppingBag, 
  Search, 
  User, 
  Menu, 
  X, 
  ChevronDown,
  Heart,
  Repeat,
  Globe,
  Zap,
  Clock,
  ArrowRight,
  TrendingUp,
  History,
  Mic,
  Moon,
  Sun,
  LayoutGrid,
  Bell,
  MessageCircle
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeaderUltimatePro() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [shippingProgress, setShippingProgress] = useState(65)
  const [activeAnnouncement, setActiveAnnouncement] = useState(0)

  const announcements = [
    "🔥 FLASH SALE: 20% OFF WITH CODE 'PRO20'",
    "🚚 FREE SHIPPING ON ORDERS OVER $100",
    "🌍 NOW SHIPPING TO 50+ COUNTRIES"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAnnouncement((prev) => (prev + 1) % announcements.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 100) {
        setScrolled(true)
        if (currentScrollY > lastScrollY) {
          setIsVisible(false) // Hide on scroll down
        } else {
          setIsVisible(true) // Show on scroll up
        }
      } else {
        setScrolled(false)
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div className="w-full font-sans antialiased">
      {/* 1. Dynamic Announcement Slider */}
      <div className="h-10 w-full bg-slate-900 text-white flex items-center justify-center overflow-hidden">
        <div 
          className="transition-transform duration-700 ease-in-out text-[10px] font-bold uppercase tracking-[0.2em]"
          style={{ transform: `translateY(-${activeAnnouncement * 100}%)` }}
        >
          {announcements.map((text, i) => (
            <div key={i} className="h-10 flex items-center justify-center">
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* 2. Top Utility Bar (Currency/Lang/Country) */}
      <div className="hidden lg:flex h-12 w-full items-center justify-between px-8 border-b border-slate-100 bg-white text-[11px] font-medium text-slate-500">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
            <Globe className="h-3.5 w-3.5" /> USD ($) <ChevronDown className="h-3 w-3" />
          </button>
          <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
            English <ChevronDown className="h-3 w-3" />
          </button>
          <a href="#" className="hover:text-blue-600 transition-colors">Find Store</a>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-blue-600 transition-colors">Help Center</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Track Order</a>
          <div className="flex items-center gap-2 text-blue-600 font-bold">
            <Clock className="h-3.5 w-3.5" /> Sale ends in: 12h : 44m : 02s
          </div>
        </div>
      </div>

      {/* 3. Main Header (Sticky Hide/Show) */}
      <header 
        className={cn(
          "z-[100] w-full bg-white transition-all duration-500 border-b border-slate-100",
          scrolled ? "fixed top-0 shadow-xl py-3" : "relative py-6",
          !isVisible && scrolled ? "-translate-y-full" : "translate-y-0"
        )}
      >
        <div className="mx-auto max-w-[1440px] px-4 lg:px-8 flex items-center justify-between gap-8">
          
          {/* Logo & Category Tabs */}
          <div className="flex items-center gap-12">
            <a href="#" className="flex items-center gap-2 group">
              <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-100 group-hover:rotate-12 transition-transform">
                <Zap className="h-6 w-6 text-white fill-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900">LIQUID<span className="text-blue-600">PRO</span></span>
            </a>

            <nav className="hidden xl:flex items-center gap-1">
              {['New', 'Shop', 'Collections', 'Sale'].map((item) => (
                <a key={item} href="#" className="px-5 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-xl transition-all relative group/nav">
                  {item}
                  {item === 'Sale' && <span className="absolute -top-1 -right-1 h-2 w-2 bg-orange-500 rounded-full animate-ping" />}
                </a>
              ))}
            </nav>
          </div>

          {/* 4. AI-Powered Search UI (Simplified) */}
          <div className="hidden lg:flex flex-1 max-w-xl relative group">
            <div className="flex w-full items-center bg-slate-50 border border-slate-200 rounded-2xl px-4 py-2.5 focus-within:bg-white focus-within:border-blue-600 transition-all group-focus-within:shadow-2xl group-focus-within:shadow-blue-100">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-blue-600" />
              <input 
                type="text" 
                placeholder="Search products, brands, or trends..." 
                className="w-full bg-transparent border-none outline-none px-4 text-sm font-medium text-slate-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchOpen(true)}
              />
              <button className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-400"><Mic className="h-4 w-4" /></button>
            </div>

            {/* AI Predictive Results (Mock) */}
            {isSearchOpen && (
              <div className="absolute top-full left-0 mt-4 w-full bg-white rounded-3xl border border-slate-100 shadow-[0_30px_60px_rgba(0,0,0,0.1)] p-8 z-50">
                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                      <TrendingUp className="h-3 w-3" /> Trending Searches
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Luxury Sneakers', 'Linen Shirts', 'Limited Drops', 'Tech Jackets'].map(tag => (
                        <button key={tag} className="px-4 py-2 bg-slate-50 hover:bg-blue-50 hover:text-blue-600 rounded-xl text-xs font-bold transition-all">{tag}</button>
                      ))}
                    </div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-8 mb-6 flex items-center gap-2">
                      <History className="h-3 w-3" /> Recently Viewed
                    </h4>
                    <div className="space-y-4">
                      {[1, 2].map(i => (
                        <div key={i} className="flex gap-4 group/item cursor-pointer">
                          <div className="h-12 w-12 bg-slate-100 rounded-lg overflow-hidden shrink-0" />
                          <div>
                            <p className="text-sm font-bold group-hover/item:text-blue-600">Premium Cotton Tee</p>
                            <p className="text-xs text-slate-400">$45.00</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-l border-slate-50 pl-10">
                     <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">AI Suggestions</h4>
                     <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-2xl">
                          <p className="text-xs font-bold text-blue-600 mb-1">PRO TIP:</p>
                          <p className="text-xs text-blue-900 leading-relaxed">Based on your style, we recommend checking out the <strong>Midnight Collection</strong>.</p>
                        </div>
                        <button onClick={() => setIsSearchOpen(false)} className="w-full py-3 text-xs font-bold text-slate-400 hover:text-slate-900 transition-colors">Close Search</button>
                     </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 5. Icons & Actions */}
          <div className="flex items-center gap-1 sm:gap-4">
            <button className="hidden sm:flex h-12 w-12 items-center justify-center hover:bg-slate-50 rounded-2xl transition-all text-slate-600 hover:text-blue-600">
              <Repeat className="h-6 w-6 stroke-[1.5px]" />
            </button>
            <button className="hidden sm:flex h-12 w-12 items-center justify-center hover:bg-slate-50 rounded-2xl transition-all text-slate-600 hover:text-blue-600">
              <Heart className="h-6 w-6 stroke-[1.5px]" />
            </button>
            <button className="hidden sm:flex items-center gap-3 h-12 px-3 hover:bg-slate-50 rounded-2xl transition-all group">
              <div className="text-right hidden xl:block">
                <p className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">Account</p>
                <p className="text-xs font-bold text-slate-900 leading-none group-hover:text-blue-600">Guest</p>
              </div>
              <User className="h-6 w-6 stroke-[1.5px] text-slate-600 group-hover:text-blue-600" />
            </button>
            
            {/* 6. Quick Cart Button & Progress */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-3 h-12 px-4 bg-slate-900 text-white rounded-2xl hover:bg-blue-600 transition-all shadow-lg shadow-slate-200"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="text-sm font-black">$452.00</span>
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-blue-500 rounded-full text-[10px] font-black flex items-center justify-center ring-2 ring-white">3</span>
            </button>

            <button 
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden h-12 w-12 flex items-center justify-center bg-slate-50 rounded-2xl text-slate-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* 7. Mini Cart Drawer (AJAX Preview) */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[200]">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-full max-w-[450px] bg-white shadow-2xl p-10 flex flex-col">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-black italic uppercase">Your Cart</h3>
                <span className="px-2 py-0.5 bg-slate-100 rounded-md text-[10px] font-black text-slate-500">03 ITEMS</span>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="p-2 rounded-full bg-slate-50 hover:bg-slate-100"><X className="h-6 w-6" /></button>
            </div>

            {/* 8. Free Shipping Progress Bar */}
            <div className="mb-10 p-6 bg-blue-50 rounded-3xl">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-bold text-blue-900">Add <strong>$48.00</strong> for FREE Shipping!</p>
                <TruckIcon className="h-5 w-5 text-blue-600" />
              </div>
              <div className="h-2 w-full bg-blue-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 transition-all duration-1000" style={{ width: `${shippingProgress}%` }} />
              </div>
            </div>

            {/* Items List (Simplified) */}
            <div className="flex-1 overflow-auto space-y-6 pr-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex gap-6 group">
                  <div className="h-24 w-24 bg-slate-100 rounded-2xl overflow-hidden shrink-0 group-hover:scale-105 transition-transform" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-sm font-black uppercase tracking-tight">Technical Overshirt</h4>
                      <p className="text-sm font-black">$145.00</p>
                    </div>
                    <p className="text-xs text-slate-400 mb-4">Size: L | Color: Phantom Black</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-3 border border-slate-100 rounded-lg p-1 px-3">
                        <button className="text-slate-400 font-black">-</button>
                        <span className="text-xs font-black">1</span>
                        <button className="text-slate-400 font-black">+</button>
                      </div>
                      <button className="text-xs font-bold text-slate-400 hover:text-red-500 underline underline-offset-4">Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 9. Product Recommendation Popup in Cart */}
            <div className="mt-8 pt-8 border-t border-slate-100">
               <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Complete Your Look</h4>
               <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl cursor-pointer hover:bg-slate-100 transition-colors">
                  <div className="h-12 w-12 bg-white rounded-lg border border-slate-100 shrink-0" />
                  <div className="flex-1">
                    <p className="text-xs font-bold">Matching Joggers</p>
                    <p className="text-[10px] text-slate-400">Add for $89.00</p>
                  </div>
                  <button className="px-4 bg-slate-900 text-white text-[10px] font-black rounded-lg">ADD</button>
               </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-bold text-slate-400">Subtotal</span>
                <span className="text-2xl font-black tracking-tight">$452.00</span>
              </div>
              <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 shadow-xl shadow-blue-100 transition-all flex items-center justify-center gap-3 group">
                Go to Checkout <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 10. WhatsApp Support Button */}
      <button className="fixed bottom-8 right-8 z-[150] h-16 w-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all animate-bounce">
        <MessageCircle className="h-8 w-8 fill-white" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
        </span>
      </button>

      {/* Spacer */}
      <div className="h-[200vh] bg-slate-50/30 p-12 text-slate-300 font-mono text-xs uppercase tracking-widest text-center">
        Scroll Down to see Sticky Animation & Hide/Show effect
      </div>
    </div>
  )
}

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M10 17h4" />
      <path d="M14 17h1" />
      <path d="M10 17H9" />
      <path d="M5 17h1" />
      <path d="M14 7h-5v10h5V7Z" />
      <path d="M14 12h5l3 3v2h-8" />
      <path d="M5 17h0" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  )
}
