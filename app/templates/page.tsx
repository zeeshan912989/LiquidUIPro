"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Layout,
  ArrowRight,
  Monitor,
  Layers
} from 'lucide-react'

export default function TemplatesPage() {
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
             Theme Blueprints
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-12">
             Master <span className="text-[#C9A96E]">Archetypes.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-[#666] font-medium leading-relaxed">
            Elite-tier Shopify theme templates designed for high-SKU catalogs and luxury brand narratives. Launch in minutes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
              className="group relative bg-white border border-[#E4E0D9] rounded-[3.5rem] overflow-hidden hover:border-[#C9A96E] transition-all shadow-sm flex flex-col"
            >
              <div className="aspect-[16/10] bg-[#FBF9F7] flex items-center justify-center relative overflow-hidden p-12">
                 <div className="absolute top-8 left-8 bg-white px-4 py-1.5 rounded-full border border-[#E4E0D9] text-[9px] font-black uppercase tracking-[0.2em] text-[#7A7570]">
                   TYPE: {item.type}
                 </div>
                 <div className="w-full h-full border border-[#E4E0D9] rounded-2xl bg-white shadow-lg flex items-center justify-center">
                    <Layout className="h-16 w-16 text-[#E4E0D9] group-hover:scale-110 transition-all duration-700" />
                 </div>
              </div>
              <div className="p-12">
                 <h3 className="text-3xl font-bold tracking-tight mb-4">{item.title}</h3>
                 <p className="text-[#666] leading-relaxed mb-10 text-[15px]">{item.desc}</p>
                 <button className="px-10 py-4 bg-[#0A0A0A] text-white rounded-xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#C9A96E] transition-all flex items-center gap-4 group/btn w-fit">
                    Launch Artifact <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-2 transition-transform" />
                 </button>
              </div>
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
