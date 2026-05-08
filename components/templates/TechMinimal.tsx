"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingCart, Search, Menu, X, ArrowRight, Play, Cpu, Zap, Globe, Shield } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function TechMinimalTemplate() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-inter selection:bg-blue-500 selection:text-white">
      {/* Header */}
      <header 
        className={cn(
          "fixed top-0 left-0 w-full z-[200] transition-all duration-500 px-6 py-6 md:px-12",
          isScrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent"
        )}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center gap-3">
             <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-white fill-white" />
             </div>
             <span className="text-xl font-black tracking-tighter uppercase font-outfit">CORE<span className="text-blue-500">TECH</span></span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {['Processors', 'Graphics', 'Storage', 'Solutions'].map((item) => (
              <a key={item} href="#" className="text-[12px] font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors">{item}</a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <button className="hidden md:flex items-center gap-2 text-[12px] font-bold text-white/60 hover:text-white transition-colors">
               Sign In
            </button>
            <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg text-[12px] font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
               Get Started
            </button>
            <Menu className="h-6 w-6 lg:hidden cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] rounded-full translate-y-1/3 -translate-x-1/4" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8">
               <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
               <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Next Gen Hardware Released</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold font-outfit leading-[0.9] tracking-tighter mb-8">
               Pure Power. <br />
               <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent italic">Redefined.</span>
            </h1>
            <p className="text-xl text-white/60 mb-12 max-w-lg leading-relaxed font-medium">
               Architected for the future of computation. Experience unprecedented speed with the all-new CORE-X Series.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6">
               <button className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-xl text-[13px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-500 flex items-center justify-center gap-3">
                  Pre-order Now <ArrowRight className="h-4 w-4" />
               </button>
               <button className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white rounded-xl text-[13px] font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                  <Play className="h-4 w-4 fill-white" /> Watch Keynote
               </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
             <div className="relative z-10 p-1 bg-gradient-to-br from-white/20 to-transparent rounded-[3rem] shadow-2xl">
                <img src="/assets/images/hero-penthouse.jpg" className="w-full aspect-square object-cover rounded-[2.9rem] grayscale hover:grayscale-0 transition-all duration-700" alt="Hardware" />
             </div>
             {/* Floating UI elements */}
             <div className="absolute -top-10 -right-10 p-6 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-20 hidden md:block">
                <Cpu className="h-8 w-8 text-blue-500 mb-4" />
                <div className="space-y-2">
                   <div className="h-2 w-32 bg-white/20 rounded" />
                   <div className="h-2 w-24 bg-white/10 rounded" />
                </div>
             </div>
             <div className="absolute -bottom-10 -left-10 p-6 bg-blue-600 rounded-2xl shadow-2xl z-20 hidden md:block">
                <Zap className="h-8 w-8 text-white mb-4" />
                <p className="text-2xl font-bold font-outfit">4.8GHz</p>
                <p className="text-[10px] font-bold text-white/60 uppercase">Turbo Clock</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-32 px-6 md:px-12">
         <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-24">
               <span className="text-[11px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 block">Core Innovation</span>
               <h2 className="text-4xl md:text-6xl font-bold font-outfit tracking-tighter">Engineered for Extremes</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                  { title: 'Neural Engine', desc: 'Dedicated AI processing cores for real-time machine learning tasks.', icon: Globe },
                  { title: 'Ultra Bandwidth', desc: 'Lightning fast data transfer with zero latency architecture.', icon: Zap },
                  { title: 'Secure Vault', desc: 'Hardware-level encryption for your most sensitive computations.', icon: Shield },
                  { title: 'Quantum Cooling', desc: 'Next-gen thermal management for sustained high performance.', icon: Cpu },
               ].map((f, i) => (
                  <div key={i} className="p-10 bg-white/5 border border-white/5 rounded-3xl group hover:border-blue-600/50 hover:bg-white/[0.07] transition-all duration-500">
                     <div className="h-14 w-14 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 mb-8 group-hover:scale-110 transition-transform">
                        <f.icon className="h-7 w-7" />
                     </div>
                     <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{f.title}</h3>
                     <p className="text-sm text-white/50 leading-relaxed font-medium">{f.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Product Section */}
      <section className="py-32 px-6 md:px-12 bg-[#050505]">
         <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
               <div>
                  <span className="text-[11px] font-black text-blue-500 uppercase tracking-[0.4em] mb-4 block">Hardware Store</span>
                  <h2 className="text-4xl md:text-5xl font-bold font-outfit tracking-tighter">Build Your Rig</h2>
               </div>
               <button className="flex items-center gap-2 text-sm font-bold text-blue-500 hover:text-white transition-colors">
                  View Configuration Guide <ArrowRight className="h-4 w-4" />
               </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                  { name: 'CORE-X Pro', price: '$499', image: '/assets/images/hero2.jpeg', specs: '16 Cores | 32 Threads' },
                  { name: 'CORE-X Ultra', price: '$799', image: '/assets/images/hero-liquid-gold.jpg', specs: '24 Cores | 48 Threads' },
                  { name: 'CORE-X Max', price: '$1,299', image: '/assets/images/hero-penthouse.jpg', specs: '32 Cores | 64 Threads' },
               ].map((p, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden group hover:border-blue-500/30 transition-all duration-500">
                     <div className="aspect-[4/3] overflow-hidden">
                        <img src={p.image} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt={p.name} />
                     </div>
                     <div className="p-8">
                        <div className="flex justify-between items-start mb-4">
                           <div>
                              <h4 className="text-xl font-bold mb-1">{p.name}</h4>
                              <p className="text-xs text-white/40 font-bold uppercase tracking-widest">{p.specs}</p>
                           </div>
                           <span className="text-xl font-bold font-outfit text-blue-500">{p.price}</span>
                        </div>
                        <button className="w-full py-4 bg-white text-black rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl hover:shadow-blue-600/20">
                           Configure Now
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black">
         <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-3">
               <Zap className="h-6 w-6 text-blue-500" />
               <span className="text-lg font-black tracking-tighter uppercase font-outfit">CORETECH</span>
            </div>
            <div className="flex gap-12">
               {['Specs', 'Privacy', 'Security', 'About'].map(item => (
                  <a key={item} href="#" className="text-[12px] font-bold text-white/40 hover:text-white uppercase tracking-widest transition-colors">{item}</a>
               ))}
            </div>
            <p className="text-[11px] font-bold text-white/20 uppercase tracking-[0.2em]">© 2026 CORETECH SYSTEMS</p>
         </div>
      </footer>
    </div>
  )
}
