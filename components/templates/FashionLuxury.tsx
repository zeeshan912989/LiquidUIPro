"use client"

import { useState, useEffect } from 'react'
import { ShoppingBag, Search, Menu, X, ArrowRight, Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function FashionLuxuryTemplate() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const products = [
    { id: 1, name: 'Silk Evening Gown', price: '$890', image: '/assets/images/hero1.jpeg', category: 'Evening' },
    { id: 2, name: 'Cashmere Overcoat', price: '$1,250', image: '/assets/images/hero2.jpeg', category: 'Outerwear' },
    { id: 3, name: 'Leather Stiletto', price: '$640', image: '/assets/images/hero-penthouse.jpg', category: 'Footwear' },
    { id: 4, name: 'Velvet Clutch', price: '$420', image: '/assets/images/hero-luxury-living.jpg', category: 'Accessories' },
  ]

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A] font-inter">
      {/* Header */}
      <header 
        className={cn(
          "fixed top-0 left-0 w-full z-[200] transition-all duration-500 px-6 py-6 md:px-12",
          isScrolled ? "bg-white/90 backdrop-blur-xl py-4 shadow-sm border-b border-gray-100" : "bg-transparent"
        )}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Menu className="h-6 w-6" />
            </button>
            <nav className="hidden lg:flex items-center gap-10">
              {['New Arrivals', 'Collections', 'About', 'Journal'].map((item) => (
                <a key={item} href="#" className="text-[13px] font-bold uppercase tracking-widest hover:text-[#C9A96E] transition-colors">{item}</a>
              ))}
            </nav>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <span className="text-2xl font-black tracking-[0.3em] uppercase font-outfit">ELYSÉ</span>
          </div>

          <div className="flex items-center gap-6">
            <Search className="h-5 w-5 cursor-pointer hover:text-[#C9A96E] transition-colors hidden md:block" />
            <div className="relative cursor-pointer group">
              <ShoppingBag className="h-5 w-5 group-hover:text-[#C9A96E] transition-colors" />
              <span className="absolute -top-2 -right-2 bg-[#C9A96E] text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">2</span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 z-[300] bg-white p-8"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="h-8 w-8" />
              </button>
            </div>
            <nav className="flex flex-col gap-8">
              {['New Arrivals', 'Collections', 'About', 'Journal'].map((item) => (
                <a key={item} href="#" className="text-4xl font-bold font-outfit uppercase tracking-tighter hover:text-[#C9A96E] transition-colors">{item}</a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img src="/assets/images/hero-liquid-gold.jpg" className="w-full h-full object-cover opacity-60 scale-105" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-2xl text-white"
          >
            <span className="text-[12px] font-black uppercase tracking-[0.4em] mb-6 block text-[#C9A96E]">L'Automne 2026</span>
            <h1 className="text-7xl md:text-8xl font-bold font-outfit leading-[0.9] uppercase tracking-tighter mb-8">
              Define Your <br />
              <span className="italic font-serif text-[#C9A96E] lowercase">Essence</span>
            </h1>
            <p className="text-lg opacity-80 mb-12 max-w-lg leading-relaxed font-medium">
              A curated collection of timeless elegance and modern sophistication, crafted for those who move with intention.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button className="w-full sm:w-auto px-10 py-5 bg-[#C9A96E] text-white rounded-full text-[13px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 shadow-xl shadow-[#C9A96E]/20">
                Explore Collection
              </button>
              <button className="flex items-center gap-3 text-white text-[13px] font-black uppercase tracking-widest group">
                Watch Film
                <div className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/50">
          <span className="text-[10px] font-black uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-[11px] font-black text-[#C9A96E] uppercase tracking-[0.3em] mb-4 block">Seasonal Picks</span>
              <h2 className="text-4xl md:text-5xl font-bold font-outfit uppercase tracking-tighter leading-tight">The Art of Dressing Well</h2>
            </div>
            <button className="text-[13px] font-black uppercase tracking-widest border-b-2 border-black pb-2 hover:text-[#C9A96E] hover:border-[#C9A96E] transition-all">
              View All Arrivals
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {products.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#F5F2EE] mb-6 rounded-2xl">
                  <img 
                    src={product.image} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    alt={product.name} 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest rounded-full">New</span>
                  </div>
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                    <button className="w-full py-4 bg-white text-black text-[11px] font-black uppercase tracking-widest rounded-xl shadow-2xl hover:bg-black hover:text-white transition-all">
                      Quick Add +
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-[14px] font-black uppercase tracking-tight mb-1 group-hover:text-[#C9A96E] transition-colors">{product.name}</h3>
                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">{product.category}</p>
                  </div>
                  <span className="text-[15px] font-bold font-outfit">{product.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 bg-[#FBF9F7] border-y border-gray-100 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
             <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="/assets/images/hero-penthouse.jpg" className="w-full h-full object-cover" alt="Narrative" />
             </div>
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white rounded-3xl p-4 shadow-2xl hidden md:block">
                <img src="/assets/images/hero2.jpeg" className="w-full h-full object-cover rounded-2xl" alt="Mini" />
             </div>
          </div>
          <div className="lg:w-1/2">
            <span className="text-[11px] font-black text-[#C9A96E] uppercase tracking-[0.3em] mb-8 block">Our Philosophy</span>
            <h2 className="text-5xl md:text-6xl font-bold font-outfit uppercase tracking-tighter leading-[0.9] mb-10">
              Elegance is <br />
              <span className="text-[#C9A96E]">Simplicity</span> Perfected.
            </h2>
            <p className="text-lg text-gray-500 mb-12 leading-relaxed font-medium max-w-lg">
              We believe that true luxury lies in the details. Each piece is meticulously designed and sustainably sourced to offer you a wardrobe that lasts generations.
            </p>
            <div className="grid grid-cols-2 gap-12 mb-12">
               <div>
                  <h4 className="text-3xl font-bold font-outfit mb-2">98%</h4>
                  <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Sustainably Sourced</p>
               </div>
               <div>
                  <h4 className="text-3xl font-bold font-outfit mb-2">12k+</h4>
                  <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Satisfied Clients</p>
               </div>
            </div>
            <button className="px-10 py-5 border-2 border-black text-black rounded-full text-[12px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">
              Discover Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 md:col-span-1 lg:col-span-1">
              <span className="text-3xl font-black tracking-[0.3em] uppercase font-outfit mb-8 block">ELYSÉ</span>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">
                Elevating the everyday through timeless design and unparalleled craftsmanship.
              </p>
              <div className="flex gap-4">
                {/* Instagram */}
                <svg className="h-5 w-5 cursor-pointer hover:text-[#C9A96E] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                {/* Twitter / X */}
                <svg className="h-5 w-5 cursor-pointer hover:text-[#C9A96E] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                {/* Facebook */}
                <svg className="h-5 w-5 cursor-pointer hover:text-[#C9A96E] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
            </div>
            
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-widest mb-8">Shop</h4>
              <ul className="space-y-4">
                {['All Products', 'Collections', 'Accessories', 'Limited Editions'].map(item => (
                  <li key={item}><a href="#" className="text-sm text-gray-500 hover:text-black font-medium transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-black uppercase tracking-widest mb-8">Support</h4>
              <ul className="space-y-4">
                {['Shipping Policy', 'Returns', 'Size Guide', 'Contact Us'].map(item => (
                  <li key={item}><a href="#" className="text-sm text-gray-500 hover:text-black font-medium transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-black uppercase tracking-widest mb-8">Newsletter</h4>
              <p className="text-sm text-gray-500 mb-6 font-medium">Join our world for early access to collections.</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-[#FBF9F7] border border-gray-100 rounded-xl px-6 py-4 outline-none focus:border-[#C9A96E] text-sm transition-colors" 
                />
                <button className="absolute right-2 top-2 bottom-2 px-4 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-[#C9A96E] transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-16 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest">© 2026 ELYSÉ LUXURY. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <a href="#" className="text-[11px] font-black text-gray-400 uppercase tracking-widest hover:text-black">Privacy</a>
              <a href="#" className="text-[11px] font-black text-gray-400 uppercase tracking-widest hover:text-black">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
