"use client"

import { useState } from 'react'
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  ChevronDown,
  Monitor,
  Smartphone,
  Watch,
  Headphones,
  Speaker,
  Gamepad,
  Zap,
  ArrowRight,
  User
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeaderElectronicsMega() {
  const [activeTab, setActiveTab] = useState('Computing')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const categories = {
    'Computing': {
      items: ['Laptops', 'Desktops', 'Monitors', 'Tablets', 'PC Parts', 'Storage'],
      featured: { name: 'MacBook Pro M3', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=200&h=120' }
    },
    'Mobile': {
      items: ['Smartphones', 'Smartwatches', 'Cases', 'Chargers', 'Powerbanks'],
      featured: { name: 'iPhone 15 Pro', image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=200&h=120' }
    },
    'Gaming': {
      items: ['Consoles', 'Gaming Mice', 'Keyboards', 'Headsets', 'VR Gear'],
      featured: { name: 'PS5 Slim', image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=200&h=120' }
    }
  }

  return (
    <div className="w-full bg-[#f1f5f9]">
      {/* Top Utility Bar */}
      <div className="hidden lg:flex h-12 w-full items-center justify-between bg-[#0f172a] px-8 text-xs text-white">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 text-blue-400"><Zap className="h-4 w-4" /> Summer Tech Sale: Up to 40% OFF</span>
          <a href="#" className="hover:text-blue-400 transition-colors">Find a Store</a>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Trade-in</a>
        </div>
      </div>

      <header className="bg-white border-b border-gray-200">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 lg:px-8 py-5">
          
          {/* Logo & Category Button */}
          <div className="flex items-center gap-4 lg:gap-10">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-100">
                <Monitor className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900 uppercase">
                MEGA<span className="text-blue-600">TECH</span>
              </span>
            </a>

            {/* Desktop Browse Dropdown */}
            <div className="hidden lg:block group relative">
              <button className="flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-100 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-white hover:border-blue-600 transition-all">
                <Menu className="h-4 w-4" /> Browse Categories
              </button>
              
              {/* MEGA MENU */}
              <div className="absolute top-full left-0 mt-4 w-[800px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl flex overflow-hidden">
                  {/* Left Sidebar */}
                  <div className="w-1/3 bg-slate-50 p-6 border-r border-slate-100 flex flex-col gap-2">
                    {Object.keys(categories).map((cat) => (
                      <button 
                        key={cat}
                        onMouseEnter={() => setActiveTab(cat)}
                        className={cn(
                          "flex items-center justify-between w-full p-4 rounded-xl text-sm font-bold transition-all",
                          activeTab === cat ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:bg-white/50"
                        )}
                      >
                        {cat} <ChevronDown className="-rotate-90 h-4 w-4" />
                      </button>
                    ))}
                  </div>
                  {/* Right Content */}
                  <div className="flex-1 p-8 grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Popular in {activeTab}</h4>
                      <ul className="space-y-3">
                        {categories[activeTab as keyof typeof categories].items.map(item => (
                          <li key={item}><a href="#" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">{item}</a></li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Featured Product</h4>
                      <div className="group/item relative overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-2">
                        <img src={categories[activeTab as keyof typeof categories].featured.image} alt="Featured" className="w-full h-32 object-cover rounded-lg mb-3" />
                        <div className="p-2">
                          <p className="text-xs font-bold text-slate-900">{categories[activeTab as keyof typeof categories].featured.name}</p>
                          <a href="#" className="text-[10px] font-bold text-blue-600 uppercase flex items-center gap-1 mt-1">Shop Now <ArrowRight className="h-3 w-3" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search (Desktop) */}
          <div className="hidden xl:flex flex-1 max-w-lg mx-10 relative">
            <input 
              type="text" 
              placeholder="Search by brand, category, or model..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-5 pr-12 text-sm outline-none focus:border-blue-600 transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Search className="h-4 w-4" />
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2 sm:gap-6">
            <button className="hidden sm:block p-2 text-slate-600 hover:text-blue-600 transition-colors">
              <ShoppingBag className="h-6 w-6 stroke-[1.5px]" />
            </button>
            <button className="hidden sm:flex items-center gap-3 p-2 text-slate-600 hover:text-blue-600 transition-colors group">
              <div className="flex flex-col items-end leading-none">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Welcome</span>
                <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">Sign In</span>
              </div>
              <User className="h-6 w-6 stroke-[1.5px]" />
            </button>
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-slate-50 text-slate-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[320px] bg-white p-8 flex flex-col">
            <div className="flex items-center justify-between mb-10">
              <span className="text-xl font-black">MEGATECH</span>
              <button onClick={() => setIsMenuOpen(false)} className="rounded-full bg-slate-50 p-2"><X className="h-6 w-6" /></button>
            </div>
            
            <div className="space-y-6 flex-1 overflow-auto">
              <div className="relative">
                <input type="text" placeholder="Search..." className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-4 pr-10 text-sm outline-none" />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              </div>
              <nav className="flex flex-col gap-2">
                {Object.keys(categories).map((cat) => (
                  <div key={cat} className="group">
                    <button className="flex items-center justify-between w-full p-4 rounded-xl text-lg font-bold text-slate-700 hover:bg-slate-50">
                      {cat} <ChevronDown className="h-5 w-5 text-slate-300" />
                    </button>
                  </div>
                ))}
              </nav>
            </div>

            <div className="mt-auto pt-8 border-t border-slate-100">
              <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all">
                Track Your Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
