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
  Search,
  Layout,
  MousePointer2,
  Smartphone,
  Layers,
  ExternalLink
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
    <div className="min-h-screen bg-[#F9F7F4] text-[#0A0A0A] font-inter selection:bg-[#C9A96E] selection:text-white overflow-x-hidden">
      
      {/* Dynamic Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#C9A96E]/5 rounded-full blur-[120px]" />
         <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-[#C9A96E]/5 rounded-full blur-[100px]" />
      </div>

      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-500 px-6 py-4 md:px-12",
        scrolled ? "bg-white/80 backdrop-blur-2xl border-b border-[#E4E0D9] py-4" : "bg-transparent py-8"
      )}>
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
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
          </div>

          <div className="hidden lg:flex items-center gap-10">
            <Link href="/features" className="text-[10px] font-black uppercase tracking-widest text-[#7A7570] hover:text-black transition-colors">Features</Link>
            <Link href="/components/cart" className="text-[10px] font-black uppercase tracking-widest text-[#7A7570] hover:text-black transition-colors">Library</Link>
            <Link href="/templates" className="text-[10px] font-black uppercase tracking-widest text-[#7A7570] hover:text-black transition-colors">Templates</Link>
            <Link href="/pricing" className="text-[10px] font-black uppercase tracking-widest text-[#7A7570] hover:text-black transition-colors">Pricing</Link>
            <Link href="/support" className="text-[10px] font-black uppercase tracking-widest text-[#7A7570] hover:text-black transition-colors">Support</Link>
            <div className="h-4 w-px bg-[#E4E0D9]" />
            <Link href="/components/cart" className="px-6 py-3 bg-[#C9A96E] text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#A8853F] transition-all shadow-xl shadow-[#C9A96E]/20">
               Get Started
            </Link>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-[#0A0A0A]">
             {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-60 md:pb-40 px-6 md:px-12">
         <div className="max-w-[1440px] mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white rounded-full border border-[#E4E0D9] shadow-sm mb-12"
            >
               <Sparkles className="h-4 w-4 text-[#C9A96E]" />
               <span className="text-[10px] font-black uppercase tracking-widest text-[#7A7570]">Elite Component Engine 2026</span>
               <div className="h-4 w-px bg-[#E4E0D9] mx-2" />
               <Link href="/components/cart" className="text-[10px] font-black uppercase tracking-widest text-[#0A0A0A] flex items-center gap-1 group">
                  Deploy to Storefront <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
               </Link>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-[11rem] font-black tracking-tighter leading-[0.82] mb-12 uppercase italic font-outfit"
            >
               Elite Liquid <br />
               <span className="text-[#C9A96E]">Artifacts</span> for Shopify.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto text-lg md:text-3xl text-[#7A7570] leading-relaxed mb-16 font-medium"
            >
               Accelerate your development cycle with 250+ production-ready Liquid components. 
               Engineered for high-conversion storefronts and elite theme architectures.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-8"
            >
               <Link href="/components/cart" className="w-full sm:w-auto px-16 py-8 bg-[#0A0A0A] text-white rounded-[2rem] font-black uppercase tracking-[0.4em] text-xs shadow-2xl shadow-black/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 group">
                  Open Component Explorer
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
               </Link>
               <button className="w-full sm:w-auto px-16 py-8 bg-white text-[#0A0A0A] border border-[#E4E0D9] rounded-[2rem] font-black uppercase tracking-[0.4em] text-xs hover:bg-[#F9F7F4] transition-all flex items-center justify-center gap-4">
                  <Zap className="h-5 w-5 text-[#C9A96E]" />
                  Documentation
               </button>
            </motion.div>
         </div>

         {/* Hero Visual Mockup */}
         <motion.div 
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4, duration: 1 }}
           className="mt-40 max-w-[1300px] mx-auto relative px-4"
         >
            <div className="relative rounded-[4rem] bg-[#E4E0D9] p-2 shadow-2xl overflow-hidden group">
               <div className="bg-white rounded-[3.8rem] aspect-[16/9] overflow-hidden border border-white/20 relative">
                  {/* Mockup Overlay */}
                  <div className="absolute inset-0 bg-[#F9F7F4]/10 backdrop-blur-3xl p-12 flex flex-col">
                     <div className="flex items-center justify-between mb-12">
                        <div className="flex gap-3">
                           {[...Array(3)].map((_, i) => <div key={i} className="h-4 w-4 bg-[#E4E0D9] rounded-full" />)}
                        </div>
                        <div className="px-6 py-2 bg-white rounded-full border border-[#E4E0D9] text-[10px] font-black tracking-widest text-[#C9A96E] italic">
                           PREVIEW_SYSTEM.LIQUID_RENDERER
                        </div>
                     </div>
                     <div className="flex-1 rounded-[3rem] border border-[#E4E0D9] bg-white shadow-inner flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-[2s]">
                        <div className="text-center">
                           <Layers className="h-32 w-32 text-[#F9F7F4] mx-auto mb-8" />
                           <p className="text-[10px] font-black uppercase tracking-[0.6em] text-[#C9A96E]">High-Fidelity Component Artifacts</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </motion.div>
      </section>

      {/* Value Proposition */}
      <section id="features" className="py-40 px-6 md:px-12 bg-white border-y border-[#E4E0D9]">
         <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
               {[
                 { title: 'Zero Dependency', desc: 'Engineered with pure Liquid and Vanilla CSS for maximum speed.', icon: Zap },
                 { title: 'Conversion First', desc: 'Components designed using proven high-conversion UX patterns.', icon: Sparkles },
                 { title: 'Elite Design', desc: 'Professional grade UI artifacts that outshine standard themes.', icon: Monitor },
                 { title: 'Global Settings', desc: 'Fully integrated with Shopify Theme Editor settings.', icon: Code2 }
               ].map((feat, i) => (
                 <div key={i} className="space-y-8 group">
                    <div className="h-16 w-16 bg-[#F9F7F4] border border-[#E4E0D9] rounded-2xl flex items-center justify-center group-hover:bg-[#C9A96E] group-hover:text-white transition-all shadow-sm">
                       <feat.icon className="h-8 w-8" />
                    </div>
                    <div>
                       <h4 className="text-xl font-black uppercase tracking-tight mb-4 italic font-outfit">{feat.title}</h4>
                       <p className="text-[#7A7570] font-medium leading-relaxed">{feat.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Pricing Section (Integrated) */}
      <section id="pricing" className="py-40 px-6 md:px-12 bg-[#F9F7F4]">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[10px] font-black uppercase tracking-[0.8em] text-[#C9A96E] mb-12">Deployment Plans</h2>
            <h3 className="text-6xl md:text-8xl font-black tracking-tighter mb-20 italic font-outfit uppercase underline decoration-[#C9A96E] decoration-8">Ready to Build?</h3>
            <div className="grid md:grid-cols-2 gap-12 text-left">
               <div className="bg-white p-12 md:p-16 rounded-[3.5rem] border border-[#E4E0D9] shadow-sm">
                  <h4 className="text-3xl font-black italic mb-4 tracking-tighter">FREE CORE</h4>
                  <p className="text-[#7A7570] mb-12 font-medium italic">Essential components for basic builds.</p>
                  <p className="text-6xl font-black mb-12 italic tracking-tighter">$0<span className="text-lg text-gray-300 font-bold not-italic">/mo</span></p>
                  <ul className="space-y-6 mb-12">
                     <li className="flex items-center gap-4 text-sm font-bold text-[#7A7570]"><CheckCircle2 className="h-5 w-5 text-[#C9A96E]" /> 20+ Free Artifacts</li>
                     <li className="flex items-center gap-4 text-sm font-bold text-[#7A7570]"><CheckCircle2 className="h-5 w-5 text-[#C9A96E]" /> Standard Support</li>
                  </ul>
                  <button className="w-full py-6 border-2 border-[#0A0A0A] rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">Get Started</button>
               </div>
               <div className="bg-black text-white p-12 md:p-16 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-12 right-12">
                     <Star className="h-10 w-10 text-[#C9A96E] fill-[#C9A96E]" />
                  </div>
                  <h4 className="text-3xl font-black italic mb-4 tracking-tighter text-[#C9A96E]">PRO UNLIMITED</h4>
                  <p className="text-gray-400 mb-12 font-medium italic">Unlimited access for elite storefronts.</p>
                  <p className="text-6xl font-black mb-12 italic tracking-tighter">$49<span className="text-lg text-gray-600 font-bold not-italic">/mo</span></p>
                  <ul className="space-y-6 mb-12">
                     <li className="flex items-center gap-4 text-sm font-bold text-gray-300"><CheckCircle2 className="h-5 w-5 text-[#C9A96E]" /> 250+ Premium Artifacts</li>
                     <li className="flex items-center gap-4 text-sm font-bold text-gray-300"><CheckCircle2 className="h-5 w-5 text-[#C9A96E]" /> Priority Engine Support</li>
                  </ul>
                  <button className="w-full py-6 bg-[#C9A96E] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#A8853F] transition-all shadow-xl shadow-[#C9A96E]/20">Unlock Unlimited</button>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-6 md:px-12 bg-white border-t border-[#E4E0D9]">
         <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-24">
               <div className="lg:col-span-5">
                  <Link href="/" className="flex items-center gap-4 mb-10 group">
                     <div className="h-12 w-12 bg-[#C9A96E] text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                           <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                     </div>
                     <div className="flex flex-col -space-y-1">
                        <span className="text-2xl font-black uppercase tracking-tighter font-outfit">Liquid UI <span className="text-[#C9A96E]">Pro</span></span>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#C9A96E]/60 pl-0.5">Created by SHAH</span>
                     </div>
                  </Link>
                  <p className="text-lg text-[#7A7570] leading-relaxed font-medium max-w-md mb-12">
                     The definitive library for premium Shopify components. Engineered for high-performance storefronts and elite development workflows.
                  </p>
                  <div className="flex gap-6">
                     {['Twitter', 'Instagram', 'Discord'].map((social) => (
                       <Link key={social} href="#" className="h-12 w-12 bg-[#F9F7F4] border border-[#E4E0D9] rounded-2xl flex items-center justify-center text-[#7A7570] hover:text-[#0A0A0A] hover:border-[#C9A96E] transition-all">
                          <span className="text-[10px] font-black uppercase tracking-widest">{social[0]}</span>
                       </Link>
                     ))}
                  </div>
               </div>
               
               <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-16">
                  {[
                    { title: 'Library', links: ['Carts', 'Footers', 'Headers', 'Product'] },
                    { title: 'Platform', links: ['Features', 'Pricing', 'Templates', 'Support'] },
                    { title: 'Legal', links: ['License', 'Privacy', 'Terms', 'Security'] }
                  ].map((group) => (
                    <div key={group.title}>
                       <h5 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#C9A96E] mb-10 italic font-outfit">{group.title}</h5>
                       <ul className="space-y-6">
                          {group.links.map((link) => (
                            <li key={link}>
                               <Link href={`/${link.toLowerCase()}`} className="text-[11px] font-black uppercase tracking-[0.2em] text-[#7A7570] hover:text-[#0A0A0A] transition-colors">{link}</Link>
                            </li>
                          ))}
                       </ul>
                    </div>
                  ))}
               </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-16 border-t border-[#E4E0D9]">
               <div className="flex items-center gap-6">
                  <p className="text-[11px] font-black uppercase tracking-widest text-[#7A7570]">LiquidUI Pro &copy; 2026</p>
                  <div className="h-1.5 w-1.5 bg-[#E4E0D9] rounded-full" />
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#C9A96E]/60 italic">Design & Engine by SHAH</p>
               </div>
               <Link href="https://github.com/zeeshan912989/LiquidUIPro" className="group flex items-center gap-4 px-8 py-4 bg-[#0A0A0A] text-white rounded-[1.5rem] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span className="text-[10px] font-black uppercase tracking-widest">Repository Access</span>
               </Link>
            </div>
         </div>
      </footer>
    </div>
  )
}
