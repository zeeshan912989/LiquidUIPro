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
  CheckCircle2,
  ChevronRight,
  ArrowRight
} from 'lucide-react'

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#F9F7F4] text-[#0A0A0A] font-inter">
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
              <span className="text-xl font-black uppercase tracking-tighter font-outfit">Liquid UI <span className="text-[#C9A96E]">Pro</span></span>
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
          className="mb-32 text-center"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter mb-12 italic uppercase underline decoration-[#C9A96E] decoration-8 font-outfit">Core Capabilities.</h1>
          <p className="max-w-3xl mx-auto text-xl md:text-3xl text-[#7A7570] font-medium leading-relaxed">
            Every artifact is engineered for peak performance, elite aesthetics, and seamless integration into the Shopify ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
              className="p-12 bg-white rounded-[3rem] border border-[#E4E0D9] hover:border-[#C9A96E] transition-all group"
            >
              <div className="h-16 w-16 bg-[#F9F7F4] rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#C9A96E] group-hover:text-white transition-all shadow-sm">
                 <feat.icon className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-4 italic font-outfit">{feat.title}</h3>
              <p className="text-lg text-[#7A7570] font-medium leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}
