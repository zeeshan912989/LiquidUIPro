"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, 
  Sparkles, 
  Zap, 
  Code2, 
  ShoppingBag, 
  Layout, 
  Monitor, 
  MousePointer2, 
  Github, 
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Menu,
  X
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
    <div className="min-h-screen bg-[#fafafa] text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-500 px-6 py-4 md:px-12",
        scrolled ? "bg-white/80 backdrop-blur-2xl border-b border-gray-100 py-4" : "bg-transparent py-8"
      )}>
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 bg-black rounded-xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
               <span className="text-xl font-black italic">L</span>
            </div>
            <span className="text-2xl font-black tracking-tighter">LiquidUI<span className="text-gray-400 italic">Pro.</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {['Carts', 'Footers', 'Headers', 'Pricing'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-black transition-colors"
              >
                {item}
              </Link>
            ))}
            <div className="h-4 w-px bg-gray-200" />
            <Link href="https://github.com/zeeshan912989/LiquidUIPro" className="text-gray-400 hover:text-black transition-colors">
               <Github className="h-5 w-5" />
            </Link>
            <button className="px-6 py-3 bg-black text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10">
               Get Started
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
             {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-60 md:pb-40 px-6 md:px-12 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-to-b from-gray-100/50 to-transparent rounded-full blur-[120px]" />
            <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-rose-50/50 rounded-full blur-[100px]" />
         </div>

         <div className="max-w-[1440px] mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-100 shadow-sm mb-12"
            >
               <Sparkles className="h-4 w-4 text-amber-500" />
               <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">The 2026 Collection is now Live</span>
               <div className="h-4 w-px bg-gray-200 mx-2" />
               <Link href="/cart" className="text-[10px] font-black uppercase tracking-widest text-black flex items-center gap-1 group">
                  Browse Carts <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
               </Link>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-12"
            >
               BUILD BETTER <br />
               <span className="text-gray-200 italic">SHOPIFY</span> STORES.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 leading-relaxed mb-16 font-medium"
            >
               A premium library of 100+ high-fidelity Liquid components. 
               Optimized for performance, conversion, and effortless integration.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
               <Link href="/components/cart" className="w-full sm:w-auto px-12 py-6 bg-black text-white rounded-2xl font-black uppercase tracking-[0.3em] text-xs shadow-2xl shadow-black/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 group">
                  Explore Components
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
               </Link>
               <button className="w-full sm:w-auto px-12 py-6 bg-white text-black border border-gray-200 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-gray-50 transition-all flex items-center justify-center gap-4">
                  <Zap className="h-5 w-5" />
                  Documentation
               </button>
            </motion.div>
         </div>

         {/* Hero Visual Mockup */}
         <motion.div 
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4, duration: 0.8 }}
           className="mt-32 max-w-[1200px] mx-auto relative px-4"
         >
            <div className="relative aspect-[16/10] bg-white rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden group">
               <div className="absolute inset-0 bg-gray-50/50 backdrop-blur-3xl p-8 flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                     <div className="flex gap-2">
                        {[...Array(3)].map((_, i) => <div key={i} className="h-3 w-3 bg-gray-200 rounded-full" />)}
                     </div>
                     <div className="px-4 py-1.5 bg-white rounded-full border border-gray-100 text-[10px] font-black tracking-widest text-gray-400">
                        PREVIEW: CART_ANIMATED_INTERACTIVE.LIQUID
                     </div>
                  </div>
                  <div className="flex-1 bg-white rounded-3xl border border-gray-100 shadow-inner flex items-center justify-center relative group-hover:scale-[1.02] transition-transform duration-1000">
                     <div className="text-center space-y-6">
                        <ShoppingBag className="h-20 w-20 text-gray-100 mx-auto" />
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-200">Interactive Preview System</p>
                     </div>
                     {/* Floating UI Elements */}
                     <div className="absolute top-12 left-12 p-4 bg-white rounded-2xl shadow-xl border border-gray-50 -rotate-6 animate-bounce duration-[4000ms]">
                        <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                     </div>
                     <div className="absolute bottom-12 right-12 p-6 bg-black text-white rounded-2xl shadow-2xl border border-white/10 rotate-6 animate-bounce duration-[3000ms]">
                        <Zap className="h-6 w-6 text-amber-500" />
                     </div>
                  </div>
               </div>
            </div>
         </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-gray-100 bg-white">
         <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: '100+', label: 'Components' },
              { val: '24/7', label: 'Updates' },
              { val: '99.9%', label: 'Performance' },
              { val: '0', label: 'Dependencies' },
            ].map((stat, i) => (
              <div key={i}>
                 <p className="text-4xl md:text-5xl font-black tracking-tighter mb-2 italic">{stat.val}</p>
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">{stat.label}</p>
              </div>
            ))}
         </div>
      </section>

      {/* Category Grid - Bento Style */}
      <section id="carts" className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto">
         <div className="mb-24">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-gray-400 mb-6">Component Artifacts</h2>
            <div className="flex flex-col md:flex-row justify-between items-baseline gap-6">
               <h3 className="text-5xl md:text-7xl font-black tracking-tighter italic">EVERYTHING YOU <br /> NEED TO CONVERT.</h3>
               <p className="max-w-md text-gray-500 leading-relaxed font-medium">From high-end jewelry carts to minimalist SaaS footers, our library covers every Shopify niche with precision.</p>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[300px]">
            {/* Large Card: Carts */}
            <Link href="/components/cart" className="md:col-span-8 bg-gray-50 rounded-[3rem] p-12 border border-gray-100 group relative overflow-hidden flex flex-col justify-between hover:bg-black hover:text-white transition-all duration-700">
               <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-100 transition-opacity translate-x-12 group-hover:translate-x-0 duration-1000">
                  <ShoppingBag className="h-64 w-64 -rotate-12" />
               </div>
               <div className="relative z-10">
                  <div className="h-12 w-12 bg-white text-black rounded-xl flex items-center justify-center mb-8 shadow-sm">
                     <ShoppingCart className="h-6 w-6" />
                  </div>
                  <h4 className="text-4xl font-black tracking-tighter italic mb-4">Cart Artifacts.</h4>
                  <p className="text-sm font-medium max-w-xs opacity-60">20+ Premium drawer, modal, and full-page cart variants for Shopify.</p>
               </div>
               <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em]">
                  Browse Collection <ArrowRight className="h-4 w-4" />
               </div>
            </Link>

            {/* Small Card: Footers */}
            <Link href="/components/footers" className="md:col-span-4 bg-[#f1f3f6] rounded-[3rem] p-12 border border-gray-100 group flex flex-col justify-between hover:bg-indigo-600 hover:text-white transition-all duration-700">
               <div className="h-12 w-12 bg-white text-black rounded-xl flex items-center justify-center mb-8 shadow-sm">
                  <Layout className="h-6 w-6" />
               </div>
               <div>
                  <h4 className="text-2xl font-black tracking-tighter mb-4 italic leading-tight">Footer <br /> Systems.</h4>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">20 Designs</p>
               </div>
            </Link>

            {/* Small Card: Headers */}
            <Link href="/components/headers" className="md:col-span-4 bg-black text-white rounded-[3rem] p-12 border border-white/5 group flex flex-col justify-between hover:invert transition-all duration-700">
               <div className="h-12 w-12 bg-white/10 rounded-xl flex items-center justify-center mb-8 border border-white/10">
                  <Monitor className="h-6 w-6" />
               </div>
               <div>
                  <h4 className="text-2xl font-black tracking-tighter mb-4 italic leading-tight">Header <br /> Architectures.</h4>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">15 Designs</p>
               </div>
            </Link>

            {/* Large Card: Product Pages */}
            <Link href="/components/product" className="md:col-span-8 bg-emerald-50 rounded-[3rem] p-12 border border-emerald-100 group relative overflow-hidden flex flex-col justify-between hover:bg-emerald-600 hover:text-white transition-all duration-700">
               <div className="absolute bottom-0 right-0 p-12 opacity-10 group-hover:opacity-30 transition-all duration-1000 translate-y-12 group-hover:translate-y-0">
                  <MousePointer2 className="h-64 w-64 rotate-12" />
               </div>
               <div className="relative z-10">
                  <h4 className="text-4xl font-black tracking-tighter italic mb-4">Product Experience.</h4>
                  <p className="text-sm font-medium max-w-sm opacity-60">High-conversion product sections including upsells, variants, and galleries.</p>
               </div>
               <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em]">
                  View Experience <ArrowRight className="h-4 w-4" />
               </div>
            </Link>
         </div>
      </section>

      {/* Features Showcase */}
      <section className="py-32 bg-black text-white">
         <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-12">
               <h2 className="text-xs font-black uppercase tracking-[0.5em] text-gray-500">Why LiquidUI Pro?</h2>
               <h3 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">CRAFTED FOR <br /> PERFORMANCE.</h3>
               <div className="space-y-12 pt-12">
                  {[
                    { title: 'Shopify 2.0 Ready', desc: 'Fully compatible with the latest Liquid standards and dynamic theme editor settings.', icon: CheckCircle2 },
                    { title: 'Zero Dependency', desc: 'Lightweight CSS and modular JS ensure your store stays blazing fast.', icon: Zap },
                    { title: 'Conversion Driven', desc: 'Every design is based on proven UX patterns to maximize your revenue.', icon: Sparkles }
                  ].map((feat, i) => (
                    <div key={i} className="flex gap-8 group">
                       <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-all">
                          <feat.icon className="h-6 w-6" />
                       </div>
                       <div>
                          <h4 className="text-xl font-black uppercase tracking-tight mb-2 italic">{feat.title}</h4>
                          <p className="text-gray-500 leading-relaxed font-medium max-w-sm">{feat.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="relative">
               <div className="aspect-[4/5] bg-gray-900 rounded-[4rem] overflow-hidden border border-white/5 relative group">
                  <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&h=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-[3s]" alt="Showcase" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-16 left-16 right-16">
                     <p className="text-[10px] font-black uppercase tracking-[0.5em] text-amber-500 mb-6">Featured Design</p>
                     <h4 className="text-4xl font-black italic tracking-tighter leading-none mb-8">LUXURY JEWELRY <br /> CART SYSTEM.</h4>
                     <button className="px-8 py-4 bg-white text-black rounded-2xl text-[10px] font-black uppercase tracking-widest hover:invert transition-all">Preview Artifact</button>
                  </div>
               </div>
               {/* Floating elements */}
               <div className="absolute -top-12 -right-12 h-40 w-40 bg-indigo-600 rounded-full flex items-center justify-center text-center p-8 animate-spin-slow">
                  <p className="text-[8px] font-black uppercase tracking-widest leading-tight">ULTRA FAST RENDERING SYSTEM 2.0</p>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 md:px-12 text-center bg-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]" />
         <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-xs font-black uppercase tracking-[0.8em] text-gray-400 mb-12">Deployment</h2>
            <h3 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-16 italic underline decoration-gray-100">READY TO <br /> DEPLOY?</h3>
            <p className="text-xl text-gray-500 mb-20 font-medium leading-relaxed max-w-2xl mx-auto">Join the next generation of Shopify developers building premium storefronts with LiquidUI Pro.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
               <button className="w-full sm:w-auto px-16 py-8 bg-black text-white rounded-[2rem] font-black uppercase tracking-[0.4em] text-sm shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:scale-105 active:scale-95 transition-all">Get Pro Access</button>
               <Link href="/cart" className="text-[10px] font-black uppercase tracking-[0.4em] hover:text-indigo-600 transition-colors flex items-center gap-3">
                  Browse Free Library <ArrowRight className="h-4 w-4" />
               </Link>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-12 border-t border-gray-100 bg-[#fafafa]">
         <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
               <div className="col-span-1 md:col-span-1">
                  <div className="h-12 w-12 bg-black rounded-xl flex items-center justify-center text-white mb-8">
                     <span className="text-2xl font-black italic">L</span>
                  </div>
                  <p className="text-sm font-medium text-gray-400 leading-relaxed italic">The definitive library for premium Shopify components. Built with precision and optimized for the high-growth merchant.</p>
               </div>
               
               {['Explore', 'Utilities', 'Support', 'Legal'].map((group) => (
                 <div key={group}>
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-8">{group}</h5>
                    <ul className="space-y-4">
                       {[1, 2, 3].map((item) => (
                         <li key={item}>
                            <Link href="#" className="text-xs font-black uppercase tracking-widest text-gray-500 hover:text-black transition-colors">Link {item}</Link>
                         </li>
                       ))}
                    </ul>
                 </div>
               ))}
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-gray-100">
               <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-gray-300">
                     <ShieldCheck className="h-4 w-4" />
                     <span className="text-[8px] font-black uppercase tracking-widest leading-none">Secure Deployment System</span>
                  </div>
                  <div className="h-1 w-1 bg-gray-200 rounded-full" />
                  <p className="text-[8px] font-black uppercase tracking-widest text-gray-300">LiquidUI Pro &copy; 2026</p>
               </div>
               <div className="flex gap-8">
                  {['Twitter', 'Instagram', 'Github'].map((social) => (
                    <Link key={social} href="#" className="text-[8px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors">{social}</Link>
                  ))}
               </div>
            </div>
         </div>
      </footer>
    </div>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
