"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Zap, 
  Sparkles, 
  Monitor, 
  Code2, 
  Smartphone, 
  Layers, 
  ArrowRight
} from 'lucide-react'

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F7] text-[#0A0A0A] font-inter selection:bg-[#C9A96E] selection:text-white overflow-x-hidden">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-[#E4E0D9] px-6 py-4 md:px-12">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="h-12 w-12 flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
               <img src="/icon.svg" alt="logo" className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-[0.2em] uppercase leading-none font-outfit text-[#0A0A0A]">LIQUIDUI<span className="text-[#C9A96E]">PRO</span></span>
              <span className="text-[8px] font-black uppercase tracking-[0.5em] text-[#C9A96E]/60 mt-1.5">Design by SHAH</span>
            </div>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-[10px] font-black uppercase tracking-[0.3em] text-[#7A7570] hover:text-black transition-colors">Back to Home</Link>
            <Link href="/pricing" className="px-6 py-2 bg-[#C9A96E] text-white rounded-lg text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#A8853F] transition-all shadow-lg shadow-[#C9A96E]/20">Get Pro</Link>
          </div>
        </div>
      </nav>

      <main className="pt-48 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-32"
        >
          <div className="inline-block px-4 py-1.5 bg-white border border-[#F3EFE9] rounded-full text-[12px] font-bold text-[#C9A96E] mb-8 uppercase tracking-widest">
             Engine Capabilities
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-12">
             Elite Component <br />
             <span className="text-[#C9A96E]">Infrastructure.</span>
          </h1>
          <p className="max-w-2xl text-xl text-[#666] font-medium leading-relaxed">
            Every artifact is engineered for peak performance, extreme customization, and seamless Shopify integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: 'Liquid 2.0 Engine', desc: 'Optimized for dynamic sections, blocks, and the latest Shopify schemas.', icon: Code2 },
            { title: 'Performance First', desc: 'Blazing fast load times with zero heavy dependencies or bloat.', icon: Zap },
            { title: 'Responsive Mastery', desc: 'Flawless execution across every device, from ultra-wide to mobile.', icon: Smartphone },
            { title: 'Live Artifacts', desc: 'Interactive previews that visualize the final store experience instantly.', icon: Monitor },
            { title: 'Developer Control', desc: 'Clean, well-documented source code ready for custom extensions.', icon: Layers },
            { title: 'Conversion DNA', desc: 'Built on years of high-ticket e-commerce UI/UX research.', icon: Sparkles },
          ].map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-12 bg-white rounded-[2.5rem] border border-[#E4E0D9] hover:border-[#C9A96E] transition-all group shadow-sm"
            >
              <div className="h-14 w-14 bg-[#FBF9F7] rounded-xl flex items-center justify-center mb-10 group-hover:bg-[#C9A96E] group-hover:text-white transition-all">
                 <feat.icon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4">{feat.title}</h3>
              <p className="text-[#666] leading-relaxed text-[15px]">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
        {/* Featured Artifacts Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Featured <span className="text-[#C9A96E]">Artifacts.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { name: 'Elite Navigation', category: 'Headers', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop' },
              { name: 'Dynamic Hero', category: 'Sections', img: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop' },
              { name: 'Conversion Grid', category: 'Products', img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop' },
              { name: 'Slide-out Engine', category: 'Carts', img: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=800&auto=format&fit=crop' },
            ].map((item, i) => (
              <div key={i} className="group relative aspect-[16/10] bg-white border border-[#E4E0D9] rounded-[3rem] overflow-hidden hover:border-[#C9A96E] transition-all shadow-sm">
                <img src={item.img} alt={item.name} className="h-full w-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-12">
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A96E] mb-2">{item.category}</span>
                   <h4 className="text-2xl font-bold text-white">{item.name}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/components/cart" className="px-12 py-5 bg-[#0A0A0A] text-white rounded-xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#C9A96E] transition-all">Explore Entire Repository</Link>
          </div>
        </motion.div>
      </main>

      <div className="py-8 bg-white border-t border-[#E4E0D9] text-center mt-20">
         <p className="text-[12px] font-bold text-[#7A7570] uppercase tracking-[0.4em]">Engineered for Shopify. Design by SHAH.</p>
      </div>
    </div>
  )
}
