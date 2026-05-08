"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  MessageCircle,
  HelpCircle,
  Mail,
  ChevronRight
} from 'lucide-react'

export default function SupportPage() {
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
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter mb-12 italic uppercase underline decoration-[#C9A96E] decoration-8 font-outfit">Command Center.</h1>
          <p className="max-w-3xl mx-auto text-xl md:text-3xl text-[#7A7570] font-medium leading-relaxed">
            Need elite assistance? Our engine experts are ready to ensure your Shopify implementation is flawless.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
          {[
            { title: 'Knowledge Repository', desc: 'Deep-dive into our technical blueprints and Liquid implementation guides.', icon: HelpCircle, btn: 'Access Docs' },
            { title: 'Architect Community', desc: 'Collaborate with elite Shopify developers in our private HQ.', icon: MessageCircle, btn: 'Join HQ' },
            { title: 'Technical Direct', desc: 'Direct access to core engine maintainers for Pro account holders.', icon: Mail, btn: 'Dispatch Ticket' },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-16 bg-white rounded-[3.5rem] border border-[#E4E0D9] hover:border-[#C9A96E] transition-all group"
            >
              <div className="h-20 w-20 bg-[#F9F7F4] rounded-3xl flex items-center justify-center mb-12 group-hover:bg-[#C9A96E] group-hover:text-white transition-all shadow-sm">
                 <item.icon className="h-10 w-10" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-6 italic font-outfit">{item.title}</h3>
              <p className="text-lg text-[#7A7570] font-medium leading-relaxed mb-12">{item.desc}</p>
              <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#0A0A0A] hover:text-[#C9A96E] transition-colors">
                {item.btn} <ChevronRight className="h-5 w-5" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="bg-black text-white p-16 md:p-32 rounded-[5rem] text-center relative overflow-hidden">
           <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#C9A96E]/10 rounded-full blur-[120px]" />
           <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 italic uppercase font-outfit">Priority Dispatch.</h2>
           <p className="max-w-2xl mx-auto text-xl text-gray-400 font-medium mb-16 leading-relaxed">Our team specialized in high-performance Liquid architecture is standing by to resolve complex storefront challenges.</p>
           <button className="px-16 py-8 bg-[#C9A96E] text-white rounded-[1.5rem] font-black uppercase tracking-[0.4em] text-xs hover:bg-[#A8853F] transition-all shadow-2xl shadow-[#C9A96E]/30">Open Support Ticket</button>
        </div>
      </main>
    </div>
  )
}
