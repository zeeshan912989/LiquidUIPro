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

      <main className="pt-40 pb-24 px-6 md:px-12 max-w-[1000px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 text-center"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 italic uppercase underline decoration-[#C9A96E] decoration-8">Our Pricing.</h1>
          <p className="max-w-2xl mx-auto text-xl text-[#7A7570] font-medium leading-relaxed">
            Get unlimited access to the entire component library and build stores with elite speed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Free Plan */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-12 bg-white rounded-[2.5rem] border border-[#E4E0D9] shadow-sm flex flex-col h-full"
          >
            <h3 className="text-2xl font-black uppercase tracking-tight mb-2 italic">Free Core</h3>
            <p className="text-[#7A7570] mb-8 font-medium italic">Perfect for personal projects</p>
            <p className="text-6xl font-black mb-12 italic tracking-tighter">$0<span className="text-lg text-gray-300 font-bold not-italic">/mo</span></p>
            
            <ul className="space-y-6 flex-1 mb-12">
              {['20+ Free Artifacts', 'Standard Previews', 'Community Support', 'Basic Documentation'].map((item) => (
                <li key={item} className="flex items-center gap-4 text-sm font-bold text-[#7A7570]">
                  <CheckCircle2 className="h-5 w-5 text-[#C9A96E]" />
                  {item}
                </li>
              ))}
            </ul>
            
            <button className="w-full py-5 border-2 border-[#0A0A0A] rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">Get Started</button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-12 bg-black text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col h-full"
          >
            <div className="absolute top-12 right-12">
              <Star className="h-10 w-10 text-[#C9A96E] fill-[#C9A96E]" />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight mb-2 italic text-[#C9A96E]">Pro Unlimited</h3>
            <p className="text-gray-400 mb-8 font-medium italic">For elite agencies & developers</p>
            <p className="text-6xl font-black mb-12 italic tracking-tighter">$49<span className="text-lg text-gray-600 font-bold not-italic">/mo</span></p>
            
            <ul className="space-y-6 flex-1 mb-12">
              {['100+ Premium Artifacts', 'Full Schema Control', 'Priority Support', 'Exclusive Private Components', 'Weekly Updates'].map((item) => (
                <li key={item} className="flex items-center gap-4 text-sm font-bold text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-[#C9A96E]" />
                  {item}
                </li>
              ))}
            </ul>
            
            <button className="w-full py-5 bg-[#C9A96E] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#A8853F] transition-all shadow-xl shadow-[#C9A96E]/20">Unlock Pro Access</button>
          </motion.div>
        </div>

        <div className="mt-24 text-center">
          <p className="text-[#7A7570] font-medium mb-4">Looking for enterprise solutions?</p>
          <button className="text-[10px] font-black uppercase tracking-widest text-[#0A0A0A] hover:text-[#C9A96E] transition-colors flex items-center gap-2 mx-auto">
             Contact Sales <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </main>
    </div>
  )
}
