"use client"

import { useState, useEffect } from 'react'
import { 
  ShoppingBag, 
  Search, 
  User, 
  Menu, 
  X, 
  Home,
  Grid,
  Heart,
  Mic,
  ArrowRight,
  Plus,
  Minus
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeaderMobileNative() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('home')
  const [showPurchasePopup, setShowPurchasePopup] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading/shimmer
    setTimeout(() => setIsLoading(false), 2000)
    
    // Recently purchased popup simulation
    const popupTimer = setTimeout(() => setShowPurchasePopup(true), 5000)
    return () => clearTimeout(popupTimer)
  }, [])

  return (
    <div className="w-full bg-[#f8f9fa] min-h-[100vh]">
      {/* 1. Top Bar with Voice Search */}
      <header className="sticky top-0 z-[100] bg-white px-4 py-4 border-b border-gray-100 flex items-center gap-3">
        <div className="relative flex-1 group">
          <input 
            type="text" 
            placeholder="Search for items..." 
            className="w-full bg-gray-100 rounded-full py-2.5 pl-10 pr-12 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-black transition-all"
            onClick={() => setIsSearchOpen(true)}
          />
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-white rounded-full shadow-sm text-black">
            <Mic className="h-4 w-4" />
          </button>
        </div>
        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative h-10 w-10 flex items-center justify-center bg-black text-white rounded-full shadow-lg"
        >
          <ShoppingBag className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-[8px] font-bold flex items-center justify-center ring-2 ring-white">2</span>
        </button>
      </header>

      {/* 2. Featured Categories (Shimmer Loading Demo) */}
      <div className="p-4 overflow-x-auto no-scrollbar flex gap-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex flex-col items-center gap-2 shrink-0">
            {isLoading ? (
              <div className="h-16 w-16 rounded-2xl bg-gray-200 animate-pulse" />
            ) : (
              <div className="h-16 w-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-xl font-bold transition-transform active:scale-90">
                📦
              </div>
            )}
            <div className={cn("h-2 w-10 rounded bg-gray-200", !isLoading && "bg-transparent")} />
            {!isLoading && <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Category</span>}
          </div>
        ))}
      </div>

      {/* 3. Mobile Bottom Navigation (Sticky) */}
      <nav className="fixed bottom-0 left-0 z-[110] w-full h-20 bg-white/80 backdrop-blur-xl border-t border-gray-100 flex items-center justify-around px-4 pb-4">
        {[
          { id: 'home', icon: Home, label: 'Home' },
          { id: 'categories', icon: Grid, label: 'Shop' },
          { id: 'wishlist', icon: Heart, label: 'Likes' },
          { id: 'profile', icon: User, label: 'Profile' }
        ].map((tab) => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex flex-col items-center gap-1 transition-all duration-300",
              activeTab === tab.id ? "text-black scale-110" : "text-gray-400"
            )}
          >
            <tab.icon className={cn("h-6 w-6", activeTab === tab.id ? "fill-black" : "")} />
            <span className="text-[9px] font-bold uppercase tracking-widest">{tab.label}</span>
            {activeTab === tab.id && <div className="h-1 w-1 bg-black rounded-full mt-0.5" />}
          </button>
        ))}
      </nav>

      {/* 4. Recently Purchased Popup (Dynamic Notification) */}
      {showPurchasePopup && (
        <div className="fixed bottom-24 left-4 z-[120] animate-in slide-in-from-left duration-700">
           <div className="bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-4 border border-gray-100 pr-8 relative">
              <button 
                onClick={() => setShowPurchasePopup(false)}
                className="absolute top-2 right-2 text-gray-300"
              >
                <X className="h-3 w-3" />
              </button>
              <div className="h-12 w-12 bg-gray-100 rounded-xl overflow-hidden shrink-0" />
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">Recently Purchased</p>
                <p className="text-xs font-bold text-black leading-tight">Sarah from London <br/> <span className="text-gray-400 font-medium">just bought </span>Cargo Pants</p>
                <p className="text-[9px] text-gray-300 mt-1">2 minutes ago</p>
              </div>
           </div>
        </div>
      )}

      {/* 5. Quick Cart Preview Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[200]">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
          <div className="absolute bottom-0 left-0 w-full bg-white rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)] p-8 animate-in slide-in-from-bottom duration-500">
            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-8" />
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold">Quick Cart</h3>
              <span className="text-gray-400 font-bold">2 Items</span>
            </div>
            
            <div className="space-y-6 mb-10 max-h-[40vh] overflow-auto">
              {[1, 2].map(i => (
                <div key={i} className="flex gap-4">
                  <div className="h-20 w-20 bg-gray-50 rounded-2xl shrink-0" />
                  <div className="flex-1">
                    <h4 className="text-sm font-bold">Essential Tech Jacket</h4>
                    <p className="text-xs text-gray-400 mb-4">$189.00</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-4 bg-gray-50 rounded-full px-4 py-1.5">
                        <Minus className="h-3 w-3 text-gray-400" />
                        <span className="text-xs font-bold">1</span>
                        <Plus className="h-3 w-3 text-black" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400 font-bold uppercase">Estimated Total</span>
                <span className="text-xl font-bold">$378.00</span>
              </div>
              <button className="w-full py-5 bg-black text-white rounded-2xl font-bold flex items-center justify-center gap-3 active:scale-95 transition-transform">
                Checkout Now <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Mock */}
      <div className="p-4 pb-32">
        <div className="aspect-[4/5] w-full bg-gray-200 rounded-[32px] mb-8 animate-pulse" />
        <div className="h-6 w-1/2 bg-gray-200 rounded-full mb-4" />
        <div className="h-4 w-3/4 bg-gray-200 rounded-full" />
      </div>
    </div>
  )
}
