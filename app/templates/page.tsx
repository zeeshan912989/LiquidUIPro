"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Layout,
  ArrowRight
} from 'lucide-react'

export default function TemplatesPage() {
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
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter mb-12 italic uppercase underline decoration-[#C9A96E] decoration-8 font-outfit">Master Blueprints.</h1>
          <p className="max-w-3xl mx-auto text-xl md:text-3xl text-[#7A7570] font-medium leading-relaxed">
            Elite-tier Shopify theme templates designed for high-SKU catalogs and luxury brand narratives. Launch in minutes, scale forever.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {[
            { title: 'Luxury Atelier', type: 'Premium', desc: 'A sophisticated design framework with high-fidelity animated cart drawers and mega navigation systems.' },
            { title: 'Next-Gen SaaS', type: 'Clean', desc: 'The definitive artifact for digital product stores, featuring complex grid systems and elite dark-mode transitions.' },
            { title: 'Vanguard Fashion', type: 'Bold', desc: 'Engineered for high-impact visual storytelling with large-scale imagery and smooth liquid reveals.' },
            { title: 'Modern Estate', type: 'Minimal', desc: 'Precision-built grid architecture for home and living catalogs with advanced filtering logic.' },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white border border-[#E4E0D9] rounded-[4rem] overflow-hidden hover:border-[#C9A96E] transition-all shadow-sm"
            >
              <div className="aspect-video bg-[#F9F7F4] flex items-center justify-center relative overflow-hidden">
                 <div className="absolute top-12 left-12 bg-white px-6 py-2.5 rounded-full border border-[#E4E0D9] text-[10px] font-black uppercase tracking-[0.3em] text-[#7A7570] italic">
                   ARCHETYPE: {item.type}
                 </div>
                 <Layout className="h-24 w-24 text-[#E4E0D9] group-hover:scale-110 group-hover:text-[#C9A96E] transition-all duration-1000" />
              </div>
              <div className="p-16">
                 <h3 className="text-4xl font-black uppercase tracking-tighter italic mb-6 font-outfit">{item.title}</h3>
                 <p className="text-lg text-[#7A7570] font-medium leading-relaxed mb-12">{item.desc}</p>
                 <button className="px-12 py-6 bg-[#0A0A0A] text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] hover:bg-[#C9A96E] transition-all flex items-center gap-4 group/btn">
                    Launch Artifact <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-3 transition-transform" />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}
