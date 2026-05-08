"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Code2, 
  ShoppingBag, 
  Monitor, 
  ChevronRight,
  CheckCircle2,
  Menu,
  X,
  Star,
  Github
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#F9F7F4] text-[#0A0A0A] font-sans selection:bg-[#C9A96E] selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-500 px-6 py-4 md:px-12",
        scrolled ? "bg-white/80 backdrop-blur-2xl border-b border-[#E4E0D9] py-4" : "bg-transparent py-8"
      )}>
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 bg-[#C9A96E] rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
               <span className="text-xl font-black italic">L</span>
            </div>
            <span className="text-2xl font-black tracking-tighter">LiquidUI<span className="text-[#C9A96E] italic">Pro.</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <Link href="#pricing" className="text-[10px] font-black uppercase tracking-[0.2em] text-[#7A7570] hover:text-[#0A0A0A] transition-colors">Pricing</Link>
            <div className="h-4 w-px bg-[#E4E0D9]" />
            <Link href="https://github.com/zeeshan912989/LiquidUIPro" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#7A7570] hover:text-[#0A0A0A] transition-colors">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>GitHub</span>
            </Link>
            <Link href="/components/cart" className="px-6 py-3 bg-[#C9A96E] text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#A8853F] transition-all shadow-xl shadow-[#C9A96E]/20">
               Get Started
            </Link>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
             {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-60 md:pb-40 px-6 md:px-12 overflow-hidden">
         <div className="max-w-[1440px] mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#E4E0D9] shadow-sm mb-12"
            >
               <Sparkles className="h-4 w-4 text-[#C9A96E]" />
               <span className="text-[10px] font-black uppercase tracking-widest text-[#7A7570]">100+ Shopify Components</span>
               <div className="h-4 w-px bg-[#E4E0D9] mx-2" />
               <Link href="/components/cart" className="text-[10px] font-black uppercase tracking-widest text-[#0A0A0A] flex items-center gap-1 group">
                  Explore Library <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
               </Link>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] mb-12"
            >
               BUILD SHOPIFY <br />
               <span className="text-[#C9A96E] italic">STORES</span> FASTER.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg md:text-xl text-[#7A7570] leading-relaxed mb-16 font-medium"
            >
               A curated library of premium Shopify Liquid components. 
               Copy, paste, and deploy high-fidelity storefronts in seconds.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
               <Link href="/components/cart" className="w-full sm:w-auto px-12 py-6 bg-[#0A0A0A] text-white rounded-2xl font-black uppercase tracking-[0.3em] text-xs shadow-2xl shadow-black/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 group">
                  Open Dashboard
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
               </Link>
               <button className="w-full sm:w-auto px-12 py-6 bg-white text-black border border-[#E4E0D9] rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-gray-50 transition-all flex items-center justify-center gap-4">
                  <Zap className="h-5 w-5 text-[#C9A96E]" />
                  Documentation
               </button>
            </motion.div>
         </div>

         {/* Dashboard Preview Visual */}
         <motion.div 
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4, duration: 0.8 }}
           className="mt-32 max-w-[1200px] mx-auto relative"
         >
            <div className="relative rounded-[2.5rem] bg-[#E4E0D9] p-2 shadow-2xl overflow-hidden">
               <div className="bg-white rounded-[2.2rem] aspect-[16/10] overflow-hidden border border-white/20">
                  <div className="flex h-full">
                     {/* Fake Sidebar */}
                     <div className="w-64 border-r border-[#F9F7F4] bg-[#F9F7F4]/30 p-8 hidden md:block">
                        <div className="space-y-4">
                           {[...Array(6)].map((_, i) => (
                             <div key={i} className="h-10 w-full rounded-xl bg-white/50" />
                           ))}
                        </div>
                     </div>
                     {/* Fake Content */}
                     <div className="flex-1 p-12 bg-[#F9F7F4]/50">
                        <div className="h-64 w-full rounded-[2rem] bg-white shadow-sm flex items-center justify-center">
                           <ShoppingBag className="h-12 w-12 text-[#C9A96E]/20" />
                        </div>
                        <div className="mt-8 grid grid-cols-2 gap-8">
                           <div className="h-32 rounded-3xl bg-white/80" />
                           <div className="h-32 rounded-3xl bg-[#C9A96E]/10" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white">
         <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { title: 'Live Artifacts', desc: 'Real-time interactive previews for every component.', icon: Monitor },
                 { title: 'Liquid First', desc: 'Native Shopify Liquid code with dynamic schemas.', icon: Code2 },
                 { title: 'Hyper Speed', desc: 'Zero dependencies. Blazing fast theme performance.', icon: Zap }
               ].map((item, i) => (
                 <div key={i} className="p-10 rounded-[2.5rem] bg-[#F9F7F4] border border-[#E4E0D9]/50 group hover:border-[#C9A96E]/30 transition-all">
                    <div className="h-14 w-14 bg-[#C9A96E] text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#C9A96E]/20 group-hover:scale-110 transition-transform">
                       <item.icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-xl font-black uppercase tracking-tight mb-4 italic">{item.title}</h4>
                    <p className="text-[#7A7570] font-medium leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Pricing Section Placeholder */}
      <section id="pricing" className="py-40 px-6 md:px-12 text-center bg-[#F9F7F4]">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#C9A96E] mb-8">Access Plans</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 italic">CHOOSE YOUR POWER.</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
               <div className="bg-white p-12 rounded-[2.5rem] border border-[#E4E0D9] shadow-sm">
                  <h4 className="text-2xl font-black italic mb-2 tracking-tight">FREE CORE</h4>
                  <p className="text-[#7A7570] mb-8 font-medium">Perfect for starters</p>
                  <p className="text-5xl font-black mb-8 italic">$0<span className="text-lg text-gray-300 font-bold not-italic">/mo</span></p>
                  <ul className="space-y-4 mb-12">
                     <li className="flex items-center gap-3 text-sm font-bold text-[#7A7570]"><CheckCircle2 className="h-4 w-4 text-[#C9A96E]" /> 20+ Free Artifacts</li>
                     <li className="flex items-center gap-3 text-sm font-bold text-[#7A7570]"><CheckCircle2 className="h-4 w-4 text-[#C9A96E]" /> Standard Support</li>
                  </ul>
                  <button className="w-full py-4 border border-[#0A0A0A] rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">Get Started</button>
               </div>
               <div className="bg-black text-white p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8">
                     <Star className="h-8 w-8 text-[#C9A96E] fill-[#C9A96E]" />
                  </div>
                  <h4 className="text-2xl font-black italic mb-2 tracking-tight text-[#C9A96E]">PRO UNLIMITED</h4>
                  <p className="text-gray-400 mb-8 font-medium italic">For elite agencies</p>
                  <p className="text-5xl font-black mb-8 italic">$49<span className="text-lg text-gray-600 font-bold not-italic">/mo</span></p>
                  <ul className="space-y-4 mb-12">
                     <li className="flex items-center gap-3 text-sm font-bold text-gray-300"><CheckCircle2 className="h-4 w-4 text-[#C9A96E]" /> 100+ Premium Artifacts</li>
                     <li className="flex items-center gap-3 text-sm font-bold text-gray-300"><CheckCircle2 className="h-4 w-4 text-[#C9A96E]" /> Private Components</li>
                     <li className="flex items-center gap-3 text-sm font-bold text-gray-300"><CheckCircle2 className="h-4 w-4 text-[#C9A96E]" /> Priority Updates</li>
                  </ul>
                  <button className="w-full py-4 bg-[#C9A96E] text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#A8853F] transition-all">Unlock Pro Access</button>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-12 border-t border-[#E4E0D9] bg-white">
         <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-3">
               <div className="h-8 w-8 bg-[#C9A96E] rounded-lg flex items-center justify-center text-white">
                  <span className="text-lg font-black italic">L</span>
               </div>
               <span className="text-xl font-black tracking-tighter">LiquidUI<span className="text-[#C9A96E] italic">Pro.</span></span>
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#7A7570]">
               Built for the future of Shopify Merchants &copy; 2026
            </p>
            <div className="flex gap-8">
               {['Twitter', 'Instagram', 'Github'].map((social) => (
                 <Link key={social} href="#" className="text-[10px] font-black uppercase tracking-widest text-[#7A7570] hover:text-[#0A0A0A] transition-colors">{social}</Link>
               ))}
            </div>
         </div>
      </footer>
    </div>
  )
}
