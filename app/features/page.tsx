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
      </main>

      <div className="py-8 bg-white border-t border-[#E4E0D9] text-center mt-20">
         <p className="text-[12px] font-bold text-[#7A7570] uppercase tracking-[0.4em]">Engineered for Shopify. Design by SHAH.</p>
      </div>
    </div>
  )
}
