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

      <main className="pt-48 pb-24 px-6 md:px-12 max-w-[1000px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-32 text-center"
        >
          <div className="inline-block px-4 py-1.5 bg-white border border-[#F3EFE9] rounded-full text-[12px] font-bold text-[#C9A96E] mb-8 uppercase tracking-widest">
             Membership Plans
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-12">
             Elite <span className="text-[#C9A96E]">Unlimited</span> Access.
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-[#666] font-medium leading-relaxed">
            Unlock the full potential of our component repository and build elite storefronts with unprecedented speed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Free Plan */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-16 bg-white rounded-[3.5rem] border border-[#E4E0D9] shadow-sm flex flex-col h-full"
          >
            <h3 className="text-2xl font-bold tracking-tight mb-2">Core Access</h3>
            <p className="text-[#888] mb-12 text-sm">Essential building blocks for scaling merchants.</p>
            <p className="text-6xl font-bold mb-16 tracking-tighter">$0<span className="text-lg text-gray-300 font-medium">/mo</span></p>
            
            <ul className="space-y-6 flex-1 mb-16">
              {['20+ Essential Artifacts', 'Standard Previews', 'Engine Documentation', 'Basic Support'].map((item) => (
                <li key={item} className="flex items-center gap-4 text-[13px] font-semibold text-[#666]">
                  <CheckCircle2 className="h-5 w-5 text-[#C9A96E]" />
                  {item}
                </li>
              ))}
            </ul>
            
            <button className="w-full py-5 border border-[#E4E0D9] rounded-xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-gray-50 transition-all">Get Started</button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-16 bg-white rounded-[3.5rem] border-2 border-[#C9A96E] shadow-2xl shadow-[#C9A96E]/10 relative overflow-hidden flex flex-col h-full"
          >
            <div className="absolute top-8 right-8">
              <Star className="h-8 w-8 text-[#C9A96E] fill-[#C9A96E]" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-2 text-[#C9A96E]">Elite Pro</h3>
            <p className="text-[#888] mb-12 text-sm">Designed for elite agencies & architects.</p>
            <p className="text-6xl font-bold mb-16 tracking-tighter text-black">$49<span className="text-lg text-gray-400 font-medium">/mo</span></p>
            
            <ul className="space-y-6 flex-1 mb-16">
              {['250+ Premium Artifacts', 'Full Schema Architecture', 'Priority Engine Support', 'Private Beta Access', 'Weekly Core Updates'].map((item) => (
                <li key={item} className="flex items-center gap-4 text-[13px] font-semibold text-[#666]">
                  <CheckCircle2 className="h-5 w-5 text-[#C9A96E]" />
                  {item}
                </li>
              ))}
            </ul>
            
            <button className="w-full py-5 bg-[#C9A96E] text-white rounded-xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#A8853F] transition-all shadow-lg shadow-[#C9A96E]/20">Unlock Elite Pro</button>
          </motion.div>
        </div>
      </main>

      <div className="py-8 bg-white border-t border-[#E4E0D9] text-center mt-20">
         <p className="text-[12px] font-bold text-[#7A7570] uppercase tracking-[0.4em]">Engineered for Shopify. Design by SHAH.</p>
      </div>
    </div>
  )
}
