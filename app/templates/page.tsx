"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Monitor,
  Layout,
  ArrowRight,
  ChevronRight,
  Sparkles
} from 'lucide-react'

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-[#F9F7F4] text-[#0A0A0A] font-sans">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-2xl border-b border-[#E4E0D9] px-6 py-4 md:px-12">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 bg-[#C9A96E] rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
               <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
               </svg>
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-xl font-black uppercase tracking-tighter">Liquid UI <span className="text-[#C9A96E]">Pro</span></span>
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#C9A96E]/60 pl-0.5">Created by SHAH</span>
            </div>
          </Link>
          <Link href="/" className="text-[10px] font-black uppercase tracking-widest text-[#7A7570] hover:text-black transition-colors">Back to Home</Link>
        </div>
      </nav>

      <main className="pt-40 pb-24 px-6 md:px-12 max-w-[1440px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 text-center"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 italic uppercase underline decoration-[#C9A96E] decoration-8">Our Templates.</h1>
          <p className="max-w-2xl mx-auto text-xl text-[#7A7570] font-medium leading-relaxed">
            Full-page Shopify templates designed for specific industries. Launch your store with elite design in minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title: 'Luxury Jewelry', type: 'Premium', desc: 'A sophisticated design with animated cart drawers and mega menus.' },
            { title: 'Minimal SaaS', type: 'Clean', desc: 'Perfect for digital products with dark-mode support and grid layouts.' },
            { title: 'Fashion House', type: 'Bold', desc: 'Focuses on large imagery and smooth product reveals.' },
            { title: 'Home Essentials', type: 'Modern', desc: 'Balanced grid systems for high SKU stores with complex filtering.' },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white border border-[#E4E0D9] rounded-[3rem] overflow-hidden hover:border-[#C9A96E] transition-all"
            >
              <div className="aspect-video bg-[#F9F7F4] flex items-center justify-center relative overflow-hidden">
                 <div className="absolute top-8 left-8 bg-white px-4 py-1.5 rounded-full border border-[#E4E0D9] text-[10px] font-black uppercase tracking-widest text-[#7A7570]">
                   {item.type}
                 </div>
                 <Layout className="h-20 w-20 text-[#E4E0D9] group-hover:scale-110 group-hover:text-[#C9A96E] transition-all duration-700" />
              </div>
              <div className="p-12">
                 <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-4">{item.title}</h3>
                 <p className="text-[#7A7570] font-medium leading-relaxed mb-10">{item.desc}</p>
                 <button className="px-8 py-4 bg-[#0A0A0A] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#C9A96E] transition-all flex items-center gap-3 group/btn">
                    Preview Template <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-2 transition-transform" />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}
