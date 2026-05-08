"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  CheckCircle2,
  Star,
  Zap,
  ArrowRight
} from 'lucide-react'

export default function PricingPage() {
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

      <main className="pt-40 pb-24 px-6 md:px-12 max-w-[1000px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-32 text-center"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter mb-12 italic uppercase underline decoration-[#C9A96E] decoration-8 font-outfit">Deployment Plans.</h1>
          <p className="max-w-2xl mx-auto text-xl md:text-3xl text-[#7A7570] font-medium leading-relaxed">
            Gain unlimited access to the entire component repository and build elite storefronts with unprecedented speed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Free Plan */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-16 bg-white rounded-[4rem] border border-[#E4E0D9] shadow-sm flex flex-col h-full"
          >
            <h3 className="text-3xl font-black uppercase tracking-tight mb-4 italic font-outfit">Core Artifacts</h3>
            <p className="text-[#7A7570] mb-12 font-medium italic">Essential building blocks for scaling merchants.</p>
            <p className="text-7xl font-black mb-16 italic tracking-tighter">$0<span className="text-xl text-gray-300 font-bold not-italic">/mo</span></p>
            
            <ul className="space-y-8 flex-1 mb-16">
              {['20+ Essential Artifacts', 'Standard Previews', 'Engine Documentation', 'Basic Support'].map((item) => (
                <li key={item} className="flex items-center gap-5 text-sm font-bold text-[#7A7570]">
                  <CheckCircle2 className="h-6 w-6 text-[#C9A96E]" />
                  {item}
                </li>
              ))}
            </ul>
            
            <button className="w-full py-6 border-2 border-[#0A0A0A] rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all">Get Started</button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-16 bg-black text-white rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.15)] relative overflow-hidden flex flex-col h-full"
          >
            <div className="absolute top-16 right-16">
              <Star className="h-12 w-12 text-[#C9A96E] fill-[#C9A96E]" />
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tight mb-4 italic font-outfit text-[#C9A96E]">Elite Unlimited</h3>
            <p className="text-gray-400 mb-12 font-medium italic">Designed for elite agencies & architects.</p>
            <p className="text-7xl font-black mb-16 italic tracking-tighter text-white">$49<span className="text-xl text-gray-600 font-bold not-italic">/mo</span></p>
            
            <ul className="space-y-8 flex-1 mb-16">
              {['250+ Premium Artifacts', 'Full Schema Architecture', 'Priority Engine Support', 'Private Beta Access', 'Weekly Core Updates'].map((item) => (
                <li key={item} className="flex items-center gap-5 text-sm font-bold text-gray-300">
                  <CheckCircle2 className="h-6 w-6 text-[#C9A96E]" />
                  {item}
                </li>
              ))}
            </ul>
            
            <button className="w-full py-6 bg-[#C9A96E] text-white rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#A8853F] transition-all shadow-2xl shadow-[#C9A96E]/20">Unlock Pro Unlimited</button>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
