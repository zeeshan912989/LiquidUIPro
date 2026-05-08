"use client"

import { useState } from 'react'
import { ArrowRight, Star, ShoppingBag, Heart, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function BeautyHeroTemplate() {
  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-pink-50 px-6 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="text-xl font-bold tracking-[0.2em] text-gray-900 font-outfit uppercase">GLOWCARE</div>
          <div className="hidden md:flex items-center gap-8">
            {['Skincare', 'Makeup', 'Sets', 'About'].map(item => (
              <a key={item} href="#" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-pink-500 transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Heart className="h-5 w-5 text-gray-400 cursor-pointer hover:text-pink-500 transition-colors" />
            <div className="relative cursor-pointer">
              <ShoppingBag className="h-5 w-5 text-gray-900" />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-50/50 to-transparent" />
          <img src="/assets/images/hero-liquid-gold.jpg" className="w-full h-full object-cover" alt="Hero" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">New Collection</span>
            <h1 className="text-6xl md:text-8xl font-bold font-outfit leading-[0.9] text-gray-900 mb-8 uppercase tracking-tighter">
              Reveal Your <br />
              <span className="italic font-serif text-pink-400 lowercase">Radiance</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-medium">
              Advanced clinical skincare meet natural botanicals. Discover the secret to a perfect morning glow.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button className="w-full sm:w-auto px-10 py-5 bg-pink-500 text-white rounded-2xl text-[13px] font-black uppercase tracking-widest hover:bg-pink-600 transition-all shadow-xl shadow-pink-500/20">
                Shop The Set
              </button>
              <button className="flex items-center gap-3 text-gray-900 text-[13px] font-black uppercase tracking-widest group">
                <div className="h-12 w-12 rounded-full border border-pink-200 flex items-center justify-center group-hover:bg-pink-50 transition-all">
                  <Play className="h-4 w-4 fill-pink-500 text-pink-500" />
                </div>
                How It Works
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold font-outfit uppercase tracking-tighter text-gray-900">Bestselling Rituals</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: 'Radiance Serum', price: '$85', rating: 5, image: '/assets/images/hero-penthouse.jpg' },
              { name: 'Night Repair Oil', price: '$92', rating: 4, image: '/assets/images/hero-liquid-gold.jpg' },
              { name: 'Moisture Lock Cream', price: '$64', rating: 5, image: '/assets/images/hero1.jpeg' },
            ].map((p, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-square rounded-[2rem] overflow-hidden bg-pink-50 mb-6 relative">
                  <img src={p.image} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt={p.name} />
                  <button className="absolute bottom-6 left-6 right-6 py-4 bg-white/90 backdrop-blur-md text-gray-900 text-xs font-black uppercase tracking-widest rounded-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all shadow-xl">
                    Add to Cart +
                  </button>
                </div>
                <div className="flex justify-between items-center px-2">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{p.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(p.rating)].map((_, i) => <Star key={i} className="h-3 w-3 fill-pink-400 text-pink-400" />)}
                    </div>
                  </div>
                  <span className="text-lg font-bold text-pink-500">{p.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
