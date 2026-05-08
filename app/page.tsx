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
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      
      {/* Dynamic Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
         <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse delay-700" />
         <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-purple-500/10 rounded-full blur-[80px]" />
      </div>

      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-500 px-6 py-4 md:px-12",
        scrolled ? "bg-[#020617]/80 backdrop-blur-2xl border-b border-white/5 py-4" : "bg-transparent py-8"
      )}>
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 bg-gradient-to-tr from-cyan-400 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
               <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
               </svg>
            </div>
            <span className="text-xl font-black uppercase tracking-tighter">Liquid UI <span className="text-cyan-400">Pro</span></span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {['Features', 'Components', 'Templates', 'Pricing', 'Support'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
               <div className="h-4 w-4 rounded-full bg-white flex items-center justify-center">
                  <div className="h-2 w-2 bg-[#020617] rounded-full" />
               </div>
               <span className="text-[10px] font-bold text-white/40">Light / Dark</span>
            </div>
            <Link href="/components/cart" className="px-6 py-2.5 bg-cyan-400 text-[#020617] rounded-full text-xs font-black uppercase tracking-widest hover:bg-cyan-300 transition-all shadow-xl shadow-cyan-400/20">
               Get Started
            </Link>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white/60 hover:text-white">
             {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 px-6 md:px-12">
         <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
            >
               <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8">
                  Build Shopify Stores <br />
                  <span className="text-white/80">Faster with</span> <span className="text-cyan-400">LiquidUI Pro.</span>
               </h1>
               <p className="max-w-lg text-lg text-white/60 leading-relaxed mb-12 font-medium">
                  A Premium Component Library designed for Shopify & Liquid. 
                  250+ customizable elements to create stunning e-commerce experiences effortlessly.
               </p>
               <div className="flex flex-wrap gap-4">
                  <Link href="/components/cart" className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-black uppercase tracking-widest text-xs shadow-xl shadow-indigo-600/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                     Explore Components
                  </Link>
                  <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
                     View Demo Store
                  </button>
               </div>
            </motion.div>

            {/* Hero Visual Mockup */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
               animate={{ opacity: 1, scale: 1, rotateY: 0 }}
               transition={{ duration: 1 }}
               className="relative lg:h-[600px] perspective-1000"
            >
               {/* Cart Drawer Mockup */}
               <div className="absolute top-0 left-0 w-[240px] md:w-[300px] bg-[#1e293b]/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-4 rotate-[-6deg] z-20">
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                     <span className="text-[10px] font-bold text-white/40 uppercase">Cart drawer</span>
                     <X className="h-3 w-3 text-white/20" />
                  </div>
                  <div className="space-y-3 mb-6">
                     {[1, 2].map((i) => (
                        <div key={i} className="flex gap-3">
                           <div className="h-12 w-12 bg-white/5 rounded-lg border border-white/5" />
                           <div className="flex-1 space-y-1">
                              <div className="h-2 w-16 bg-white/20 rounded" />
                              <div className="h-2 w-8 bg-white/10 rounded" />
                           </div>
                           <span className="text-[10px] font-bold text-white/40">$120</span>
                        </div>
                     ))}
                  </div>
                  <div className="flex justify-between text-xs font-bold mb-4">
                     <span>Total</span>
                     <span className="text-cyan-400">$340.00</span>
                  </div>
                  <button className="w-full py-3 bg-indigo-600 text-[10px] font-black uppercase rounded-lg">Checkout</button>
               </div>

               {/* Product Card Mockup */}
               <div className="absolute top-[150px] right-0 w-[260px] md:w-[320px] bg-[#1e293b]/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-6 rotate-[4deg] z-30">
                  <div className="aspect-[4/5] bg-white/5 rounded-xl mb-6 relative overflow-hidden group">
                     <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent" />
                     <div className="absolute top-4 right-4 h-8 w-8 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center">
                        <ShoppingBag className="h-4 w-4 text-cyan-400" />
                     </div>
                  </div>
                  <h4 className="text-sm font-bold mb-1">Product Title</h4>
                  <div className="flex items-center gap-1 mb-4 text-amber-500">
                     {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                  </div>
                  <div className="flex items-center justify-between">
                     <span className="text-lg font-black">$49.00</span>
                     <button className="px-4 py-2 bg-indigo-600 rounded-lg text-[10px] font-black uppercase">Add to Cart</button>
                  </div>
               </div>

               {/* Header / Banner Fragments */}
               <div className="absolute bottom-0 left-[10%] w-[400px] bg-[#1e293b]/50 backdrop-blur-xl border border-white/5 rounded-xl p-3 z-10 hidden md:block">
                  <div className="flex items-center gap-4">
                     <div className="h-6 w-16 bg-white/10 rounded" />
                     <div className="flex-1 flex gap-2">
                        {[...Array(4)].map((_, i) => <div key={i} className="h-2 w-12 bg-white/5 rounded" />)}
                     </div>
                     <div className="h-6 w-6 bg-cyan-400 rounded-full" />
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Component Library Section */}
      <section id="components" className="py-32 px-6 md:px-12 bg-[#020617]/50 relative">
         <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
               <div>
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">A Library of Powerful <br /> Shopify Components</h2>
                  <p className="text-white/40 font-bold uppercase tracking-widest text-xs">250+ Blocks</p>
               </div>
               <div className="relative w-full md:w-96">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20" />
                  <input 
                     type="text" 
                     placeholder="Search components..." 
                     className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  />
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { name: 'Top Nav Header', icon: Monitor, color: 'from-blue-500/20' },
                 { name: 'Banner Hero', icon: Layout, color: 'from-purple-500/20' },
                 { name: 'Product Grid', icon: Layers, color: 'from-cyan-500/20' },
                 { name: 'Shopping Cart', icon: ShoppingBag, color: 'from-pink-500/20' },
                 { name: 'Mini Cart', icon: Smartphone, color: 'from-orange-500/20' },
                 { name: 'Footer System', icon: Layout, color: 'from-emerald-500/20' },
               ].map((comp, i) => (
                 <Link key={i} href="/components/cart" className="group relative bg-[#1e293b]/40 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all hover:-translate-y-2">
                    <div className={cn("aspect-video bg-gradient-to-br transition-all duration-700 p-8", comp.color)}>
                        <div className="w-full h-full bg-white/5 rounded-xl border border-white/10 relative overflow-hidden flex items-center justify-center">
                           <comp.icon className="h-12 w-12 text-white/10" />
                           <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/50 to-transparent" />
                        </div>
                    </div>
                    <div className="p-6 flex items-center justify-between">
                       <h4 className="font-bold text-white/80 group-hover:text-white transition-colors">{comp.name}</h4>
                       <ArrowRight className="h-4 w-4 text-white/20 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                    </div>
                 </Link>
               ))}
            </div>
         </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 md:px-12 border-t border-white/5">
         <div className="max-w-[1440px] mx-auto">
            <h2 className="text-3xl font-black mb-16 italic underline decoration-cyan-400 decoration-4">Features.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { title: 'Customizable', desc: 'Customizable font and background blur.', icon: Sparkles },
                 { title: 'Performance', desc: 'Customized performance and resources.', icon: Zap },
                 { title: 'Responsive', desc: 'Responsive store and quality process.', icon: Smartphone },
                 { title: 'Native Liquid', desc: 'Native Liquid code compliance visual.', icon: Code2 }
               ].map((feat, i) => (
                 <div key={i} className="flex gap-6 group">
                    <div className="h-12 w-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                       <feat.icon className="h-6 w-6" />
                    </div>
                    <div>
                       <h4 className="font-bold mb-2 text-white/80">{feat.title}</h4>
                       <p className="text-xs text-white/40 leading-relaxed font-medium">{feat.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 md:px-12 bg-white/5 border-y border-white/5">
         <div className="max-w-[1440px] mx-auto">
            <h2 className="text-3xl font-black mb-16 italic">Testimonials.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[...Array(3)].map((_, i) => (
                 <div key={i} className="p-8 bg-[#1e293b]/40 border border-white/5 rounded-3xl backdrop-blur-sm">
                    <div className="flex items-center gap-4 mb-6">
                       <div className="h-12 w-12 bg-gray-700 rounded-full" />
                       <div>
                          <h4 className="text-sm font-bold">User Name</h4>
                          <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Shopify Plus Store</p>
                       </div>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed italic">
                       "LiquidUI Pro has completely transformed our development workflow. The components are pixel-perfect and the performance is unmatched."
                    </p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 md:px-12">
         <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
               <div className="col-span-1 md:col-span-1">
                  <Link href="/" className="flex items-center gap-3 mb-8">
                     <div className="h-10 w-10 bg-cyan-400 text-[#020617] rounded-xl flex items-center justify-center">
                        <span className="text-xl font-black italic">L</span>
                     </div>
                     <span className="text-xl font-black uppercase tracking-tighter">Liquid UI <span className="text-cyan-400">Pro</span></span>
                  </Link>
                  <p className="text-sm text-white/40 leading-relaxed">The definitive library for premium Shopify components. Built with precision for high-growth merchants.</p>
               </div>
               
               {['Explore', 'Utilities', 'Support', 'Legal'].map((group) => (
                 <div key={group}>
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-8">{group}</h5>
                    <ul className="space-y-4">
                       {[1, 2, 3].map((item) => (
                         <li key={item}>
                            <Link href="#" className="text-xs font-bold text-white/40 hover:text-white transition-colors">Link {item}</Link>
                         </li>
                       ))}
                    </ul>
                 </div>
               ))}
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
               <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">LiquidUI Pro &copy; 2026</p>
               <div className="flex gap-8">
                  <Link href="https://github.com/zeeshan912989/LiquidUIPro" className="text-white/20 hover:text-white transition-colors flex items-center gap-2">
                     <Github className="h-4 w-4" />
                     <span className="text-[10px] font-bold uppercase tracking-widest">GitHub</span>
                  </Link>
                  <Link href="#" className="text-white/20 hover:text-white transition-colors">
                     <ExternalLink className="h-4 w-4" />
                  </Link>
               </div>
            </div>
         </div>
      </footer>

      <style jsx global>{`
        .perspective-1000 {
           perspective: 1000px;
        }
        .animate-spin-slow {
           animation: spin 12s linear infinite;
        }
        @keyframes spin {
           from { transform: rotate(0deg); }
           to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
