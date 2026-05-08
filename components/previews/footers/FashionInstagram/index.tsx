"use client"

import { Send, Heart, ArrowRight, Camera } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function FashionInstagram() {
  const feed = [
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=300',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=300',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=300',
    'https://images.unsplash.com/photo-1539109132272-349995904d61?q=80&w=300',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=300',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=300',
  ]

  return (
    <footer className="w-full bg-[#0e0e0e] text-white pt-24 pb-12">
      <div className="max-w-[1440px] mx-auto px-8">

        {/* Instagram Grid Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <svg className="h-6 w-6 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-label="Instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            <span className="text-sm font-black uppercase tracking-widest">@maison.editorial</span>
          </div>
          <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors">
            Follow Us <ArrowRight className="h-3 w-3" />
          </button>
        </div>

        {/* Feed Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-20">
          {feed.map((img, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden cursor-pointer">
              <img src={img} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" alt="" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center gap-3">
                <Heart className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100" />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-8">
            <h3 className="text-3xl font-serif italic">Maison Editorial.</h3>
            <p className="text-sm text-white/40 leading-relaxed">
              Where fashion meets art. Curated collections for the discerning eye.
            </p>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="hover:text-rose-500 cursor-pointer transition-colors">Shop Instagram</li>
              <li className="hover:text-rose-500 cursor-pointer transition-colors">New Arrivals</li>
              <li className="hover:text-rose-500 cursor-pointer transition-colors">Collections</li>
              <li className="hover:text-rose-500 cursor-pointer transition-colors">About the House</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 lg:col-start-9 space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Join the Circle</h4>
            <div className="relative">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="w-full bg-white/5 border-b border-white/10 py-4 text-sm tracking-widest focus:outline-none focus:border-rose-500 transition-all font-light"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-white/40 hover:text-rose-500 transition-all">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/5">
          <p className="text-[10px] font-medium text-white/20 uppercase tracking-widest">
            © 2024 Maison Editorial. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/20">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
