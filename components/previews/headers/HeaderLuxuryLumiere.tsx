"use client"

import { useState, useEffect } from 'react'
import { 
  ShoppingBag, 
  Search, 
  User, 
  Menu, 
  X, 
  ChevronRight,
  ArrowRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeaderLuxuryLumiere() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      
      setScrollProgress(scrolled)
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Collections', items: ['Autumn 24', 'Essential Line', 'Archive', 'Runway'] },
    { name: 'Maison', items: ['Our Story', 'Craftsmanship', 'Sustainability', 'Atelier'] },
    { name: 'Shop', items: ['New Arrivals', 'Ready-to-Wear', 'Accessories', 'Leather Goods'] }
  ]

  return (
    <div className="w-full">
      {/* 1. Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 z-[110] h-[2px] bg-black transition-all duration-300 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 2. Transparent-to-Solid Transition Header */}
      <header 
        className={cn(
          "fixed top-0 left-0 z-[100] w-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
          scrolled 
            ? "bg-white/80 backdrop-blur-xl py-4 shadow-[0_1px_0_rgba(0,0,0,0.05)]" 
            : "bg-transparent py-8"
        )}
      >
        <div className="mx-auto max-w-[1800px] px-8 flex items-center justify-between">
          
          {/* Navigation with Animated Hover Underlines */}
          <nav className="hidden lg:flex items-center gap-12">
            {menuItems.map((item) => (
              <div 
                key={item.name}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveMenu(item.name)}
              >
                <span className={cn(
                  "text-[11px] font-bold uppercase tracking-[0.25em] transition-colors duration-500",
                  scrolled ? "text-black" : "text-white"
                )}>
                  {item.name}
                </span>
                <div className="absolute -bottom-2 left-0 h-[1px] w-0 bg-current transition-all duration-500 ease-out group-hover:w-full" />
              </div>
            ))}
          </nav>

          {/* Centered Luxury Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className={cn(
              "text-3xl font-light tracking-[0.4em] uppercase transition-all duration-700",
              scrolled ? "text-black scale-90" : "text-white"
            )}>
              Lumière
            </h1>
          </div>

          {/* Action Icons with Shimmer/Motion Blur Effect (CSS) */}
          <div className={cn(
            "flex items-center gap-8 transition-colors duration-500",
            scrolled ? "text-black" : "text-white"
          )}>
            <button className="group relative">
              <Search className="h-5 w-5 stroke-[1px] transition-transform group-hover:scale-110" />
            </button>
            <button className="group relative hidden sm:block">
              <User className="h-5 w-5 stroke-[1px] transition-transform group-hover:scale-110" />
            </button>
            <button className="group relative flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 stroke-[1px] transition-transform group-hover:scale-110" />
              <span className="text-[10px] font-bold">(0)</span>
            </button>
            <button className="lg:hidden">
              <Menu className="h-6 w-6 stroke-[1px]" />
            </button>
          </div>
        </div>

        {/* 3. Mega Menu with Featured Collection Preview */}
        <div 
          className={cn(
            "absolute top-full left-0 w-full bg-white border-b border-gray-100 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden",
            activeMenu ? "h-[500px] opacity-100" : "h-0 opacity-0 pointer-events-none"
          )}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="mx-auto max-w-[1800px] h-full px-12 py-16 grid grid-cols-12 gap-12">
            <div className="col-span-3 space-y-4">
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-8">Category</h4>
              {menuItems.find(m => m.name === activeMenu)?.items.map(sub => (
                <a key={sub} href="#" className="group flex items-center justify-between py-2 border-b border-gray-50 text-sm font-medium hover:text-gray-400 transition-colors">
                  {sub}
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </a>
              ))}
            </div>

            {/* 4. Collection Image Preview on Hover */}
            <div className="col-span-9 grid grid-cols-3 gap-8">
              {[
                { title: 'The Modern Nomad', tag: 'Winter 2024' },
                { title: 'Architectural Silhouettes', tag: 'Limited Edition' },
                { title: 'Raw Textures', tag: 'Atelier Collection' }
              ].map((card, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="aspect-[3/4] bg-gray-50 rounded-[4px] mb-6 overflow-hidden relative">
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
                     {/* Shimmer Effect */}
                     <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{card.tag}</p>
                  <h5 className="text-sm font-medium tracking-wide flex items-center justify-between group-hover:translate-x-2 transition-transform duration-500">
                    {card.title}
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Mock for Transparency Demo */}
      <div className="relative h-[120vh] w-full bg-slate-200">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent z-10" />
        <div className="h-full w-full bg-gray-900 flex items-center justify-center">
          <div className="text-center text-white z-20 space-y-8">
            <p className="text-xs font-bold uppercase tracking-[0.5em] animate-pulse">Lumière Atelier</p>
            <h2 className="text-6xl md:text-8xl font-light tracking-tighter">ESSENCE OF FORM</h2>
            <button className="px-12 py-4 border border-white/30 backdrop-blur-md text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-700">
              Explore Collection
            </button>
          </div>
        </div>
      </div>
      
      {/* Scrollable Content for Transition Demo */}
      <div className="h-screen bg-white p-24">
        <div className="max-w-2xl mx-auto space-y-12">
           <h3 className="text-3xl font-light tracking-tight text-gray-900">The transition from transparent to blurred solid is handled via a scroll listener.</h3>
           <p className="text-gray-500 leading-relaxed">
             This header is designed for ultra-luxury brands where every pixel matters. 
             It features a custom scroll progress indicator, animated hover underlines, 
             and a mega-menu that utilizes cubic-bezier easing for that high-end Apple-style feel.
           </p>
        </div>
      </div>
    </div>
  )
}
