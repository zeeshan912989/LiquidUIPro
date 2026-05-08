"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  MessageCircle,
  HelpCircle,
  Mail,
  ChevronRight,
  ArrowRight
} from 'lucide-react'

export default function SupportPage() {
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
          className="mb-32 text-center"
        >
          <div className="inline-block px-4 py-1.5 bg-white border border-[#F3EFE9] rounded-full text-[12px] font-bold text-[#C9A96E] mb-8 uppercase tracking-widest">
             Support Center
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-12">
             How Can We <span className="text-[#C9A96E]">Assist?</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-[#666] font-medium leading-relaxed">
            Our technical architects are ready to ensure your Shopify implementation is flawless and high-performing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-40">
          {[
            { title: 'Knowledge Base', desc: 'Deep-dive into our technical blueprints and Liquid implementation guides.', icon: HelpCircle, btn: 'Access Docs' },
            { title: 'Private Community', desc: 'Collaborate with elite Shopify developers in our private HQ.', icon: MessageCircle, btn: 'Join Community' },
            { title: 'Technical Tickets', desc: 'Direct access to core engine maintainers for Pro account holders.', icon: Mail, btn: 'Open Ticket' },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-16 bg-white rounded-[3.5rem] border border-[#E4E0D9] hover:border-[#C9A96E] transition-all group shadow-sm"
            >
              <div className="h-16 w-16 bg-[#FBF9F7] rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#C9A96E] group-hover:text-white transition-all shadow-sm">
                 <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-4">{item.title}</h3>
              <p className="text-[#666] leading-relaxed mb-10 text-[15px]">{item.desc}</p>
              <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0A0A0A] hover:text-[#C9A96E] transition-colors group/btn">
                {item.btn} <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="bg-white border-2 border-[#C9A96E] p-16 md:p-32 rounded-[5rem] text-center relative overflow-hidden shadow-2xl shadow-[#C9A96E]/10">
           <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-10">Priority Dispatch.</h2>
           <p className="max-w-2xl mx-auto text-xl text-[#666] font-medium mb-16 leading-relaxed">Our team specialized in high-performance Liquid architecture is standing by to resolve complex storefront challenges.</p>
           <button className="px-16 py-6 bg-[#C9A96E] text-white rounded-xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-[#A8853F] transition-all shadow-2xl shadow-[#C9A96E]/20">Start a Ticket</button>
        </div>
      </main>

      <div className="py-8 bg-white border-t border-[#E4E0D9] text-center mt-20">
         <p className="text-[12px] font-bold text-[#7A7570] uppercase tracking-[0.4em]">Engineered for Shopify. Design by SHAH.</p>
      </div>
    </div>
  )
}
