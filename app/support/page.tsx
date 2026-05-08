"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  MessageCircle,
  HelpCircle,
  Mail,
  ArrowRight,
  ChevronRight
} from 'lucide-react'

export default function SupportPage() {
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
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 italic uppercase underline decoration-[#C9A96E] decoration-8">Support.</h1>
          <p className="max-w-2xl mx-auto text-xl text-[#7A7570] font-medium leading-relaxed">
            Need help integrating our components? We're here to ensure your development experience is seamless.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { title: 'Knowledge Base', desc: 'Browse our detailed documentation and tutorials.', icon: HelpCircle, btn: 'Read Docs' },
            { title: 'Community Discord', desc: 'Join our community of elite Shopify developers.', icon: MessageCircle, btn: 'Join Discord' },
            { title: 'Direct Email', desc: 'Get priority assistance for your pro account.', icon: Mail, btn: 'Contact Us' },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-12 bg-white rounded-[2.5rem] border border-[#E4E0D9] hover:border-[#C9A96E] transition-all group"
            >
              <div className="h-16 w-16 bg-[#F9F7F4] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#C9A96E] group-hover:text-white transition-all shadow-sm">
                 <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 italic italic">{item.title}</h3>
              <p className="text-[#7A7570] font-medium leading-relaxed mb-10">{item.desc}</p>
              <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#0A0A0A] hover:text-[#C9A96E] transition-colors">
                {item.btn} <ChevronRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="bg-black text-white p-12 md:p-24 rounded-[4rem] text-center relative overflow-hidden">
           <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#C9A96E]/10 rounded-full blur-[100px]" />
           <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 italic uppercase">Still have questions?</h2>
           <p className="max-w-xl mx-auto text-gray-400 font-medium mb-12">Our team is ready to help you with anything from custom Liquid implementations to standard component usage.</p>
           <button className="px-12 py-6 bg-[#C9A96E] text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#A8853F] transition-all shadow-xl shadow-[#C9A96E]/20">Submit a Ticket</button>
        </div>
      </main>
    </div>
  )
}
