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
    <div className="min-h-screen bg-[#F9F7F4] text-[#0A0A0A] font-sans selection:bg-[#C9A96E] selection:text-white overflow-x-hidden">
      
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
                <span className="text-xl font-black uppercase tracking-tighter">Liquid UI <span className="text-[#C9A96E]">Pro</span></span>
                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#C9A96E]/60 pl-0.5">Created by SHAH</span>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {['Features', 'Components', 'Templates', 'Pricing', 'Support'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-[10px] font-black uppercase tracking-widest text-[#7A7570] hover:text-black transition-colors"
              >
                {item}
              </Link>
            ))}
            <div className="h-4 w-px bg-[#E4E0D9]" />
            <Link href="/components/cart" className="px-6 py-2.5 bg-[#C9A96E] text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#A8853F] transition-all shadow-xl shadow-[#C9A96E]/20">
               Get Started
            </Link>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-[#0A0A0A]">
             {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 px-6 md:px-12">
         <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
            >
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#E4E0D9] shadow-sm mb-8">
                  <Sparkles className="h-4 w-4 text-[#C9A96E]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#7A7570]">Premium Component Library</span>
               </div>
               <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8 uppercase italic">
                  Build Shopify Stores <br />
                  <span className="text-[#7A7570]">Faster with</span> <span className="text-[#C9A96E]">LiquidUI Pro.</span>
               </h1>
               <p className="max-w-lg text-lg text-[#7A7570] leading-relaxed mb-12 font-medium">
                  Professional grade component library designed for high-conversion Shopify stores. 
                  250+ customizable elements ready for production.
               </p>
               <div className="flex flex-wrap gap-4">
                  <Link href="/components/cart" className="px-8 py-4 bg-[#0A0A0A] text-white rounded-xl font-black uppercase tracking-widest text-xs shadow-xl shadow-black/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                     Explore Dashboard
                  </Link>
                  <button className="px-8 py-4 bg-white border border-[#E4E0D9] text-[#0A0A0A] rounded-xl font-black uppercase tracking-widest text-xs hover:bg-[#F9F7F4] transition-all">
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
               <div className="absolute top-0 left-0 w-[240px] md:w-[300px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#E4E0D9] p-4 rotate-[-6deg] z-20">
                  <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#F9F7F4]">
                     <span className="text-[10px] font-black text-[#7A7570] uppercase tracking-widest">Cart drawer</span>
                     <X className="h-3 w-3 text-[#7A7570]" />
                  </div>
                  <div className="space-y-3 mb-6">
                     {[1, 2].map((i) => (
                        <div key={i} className="flex gap-3">
                           <div className="h-12 w-12 bg-[#F9F7F4] rounded-lg" />
                           <div className="flex-1 space-y-1">
                              <div className="h-2 w-16 bg-[#E4E0D9] rounded" />
                              <div className="h-2 w-8 bg-[#F9F7F4] rounded" />
                           </div>
                           <span className="text-[10px] font-black text-[#C9A96E]">$120</span>
                        </div>
                     ))}
                  </div>
                  <button className="w-full py-3 bg-[#0A0A0A] text-white text-[10px] font-black uppercase tracking-widest rounded-lg">Checkout</button>
               </div>

               {/* Product Card Mockup */}
               <div className="absolute top-[150px] right-0 w-[260px] md:w-[320px] bg-white rounded-2xl shadow-[0_30px_70px_rgba(0,0,0,0.08)] border border-[#E4E0D9] p-6 rotate-[4deg] z-30">
                  <div className="aspect-[4/5] bg-[#F9F7F4] rounded-xl mb-6 relative overflow-hidden group">
                     <div className="absolute top-4 right-4 h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <ShoppingBag className="h-4 w-4 text-[#C9A96E]" />
                     </div>
                  </div>
                  <h4 className="text-sm font-black mb-1 uppercase tracking-tight italic">Luxury Product Item</h4>
                  <div className="flex items-center gap-1 mb-4 text-[#C9A96E]">
                     {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                  </div>
                  <div className="flex items-center justify-between">
                     <span className="text-lg font-black">$49.00</span>
                     <button className="px-4 py-2 bg-[#C9A96E] text-white rounded-lg text-[10px] font-black uppercase tracking-widest">Add</button>
                  </div>
               </div>

               {/* Header Fragment */}
               <div className="absolute bottom-0 left-[10%] w-[400px] bg-white/80 backdrop-blur-xl border border-[#E4E0D9] rounded-xl p-3 z-10 hidden md:block shadow-xl">
                  <div className="flex items-center gap-4">
                     <div className="h-6 w-16 bg-[#F9F7F4] rounded" />
                     <div className="flex-1 flex gap-2">
                        {[...Array(4)].map((_, i) => <div key={i} className="h-2 w-12 bg-[#F9F7F4] rounded" />)}
                     </div>
                     <div className="h-6 w-6 bg-[#C9A96E] rounded-full" />
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Component Library Section */}
      <section id="components" className="py-32 px-6 md:px-12 bg-white relative border-y border-[#E4E0D9]">
         <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
               <div>
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 italic uppercase">A Library of Powerful <br /> Shopify Components</h2>
                  <p className="text-[#C9A96E] font-black uppercase tracking-[0.5em] text-xs">250+ Blocks</p>
               </div>
               <div className="relative w-full md:w-96">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#7A7570]" />
                  <input 
                     type="text" 
                     placeholder="Search components..." 
                     className="w-full bg-[#F9F7F4] border border-[#E4E0D9] rounded-xl px-12 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/30"
                  />
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { name: 'Top Nav Header', icon: Monitor },
                 { name: 'Banner Hero', icon: Layout },
                 { name: 'Product Grid', icon: Layers },
                 { name: 'Shopping Cart', icon: ShoppingBag },
                 { name: 'Mini Cart', icon: Smartphone },
                 { name: 'Footer System', icon: Layout },
               ].map((comp, i) => (
                 <Link key={i} href="/components/cart" className="group relative bg-[#F9F7F4] border border-[#E4E0D9] rounded-3xl overflow-hidden hover:border-[#C9A96E] transition-all hover:-translate-y-2 p-2">
                    <div className="aspect-video bg-white rounded-[1.8rem] transition-all duration-700 p-8 flex items-center justify-center overflow-hidden relative">
                        <comp.icon className="h-12 w-12 text-[#E4E0D9] group-hover:scale-110 group-hover:text-[#C9A96E] transition-all duration-700" />
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                           <div className="h-10 w-10 bg-[#C9A96E] text-white rounded-full flex items-center justify-center">
                              <ArrowRight className="h-4 w-4" />
                           </div>
                        </div>
                    </div>
                    <div className="p-6">
                       <h4 className="font-black uppercase tracking-widest text-xs text-[#7A7570] group-hover:text-[#0A0A0A] transition-colors">{comp.name}</h4>
                    </div>
                 </Link>
               ))}
            </div>
         </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 md:px-12 bg-[#F9F7F4]">
         <div className="max-w-[1440px] mx-auto">
            <h2 className="text-3xl font-black mb-16 italic underline decoration-[#C9A96E] decoration-4 uppercase">Features.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { title: 'Customizable', desc: 'Customizable font and background blur.', icon: Sparkles },
                 { title: 'Performance', desc: 'Customized performance and resources.', icon: Zap },
                 { title: 'Responsive', desc: 'Responsive store and quality process.', icon: Smartphone },
                 { title: 'Native Liquid', desc: 'Native Liquid code compliance visual.', icon: Code2 }
               ].map((feat, i) => (
                 <div key={i} className="flex gap-6 group">
                    <div className="h-12 w-12 bg-white border border-[#E4E0D9] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#C9A96E] group-hover:text-white transition-all shadow-sm">
                       <feat.icon className="h-6 w-6" />
                    </div>
                    <div>
                       <h4 className="font-black uppercase tracking-tight mb-2 italic text-[#0A0A0A]">{feat.title}</h4>
                       <p className="text-xs text-[#7A7570] leading-relaxed font-medium">{feat.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 md:px-12 bg-white border-y border-[#E4E0D9]">
         <div className="max-w-[1440px] mx-auto">
            <h2 className="text-3xl font-black mb-16 italic uppercase">Testimonials.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[...Array(3)].map((_, i) => (
                 <div key={i} className="p-10 bg-[#F9F7F4] border border-[#E4E0D9] rounded-[2.5rem]">
                    <div className="flex items-center gap-4 mb-6">
                       <div className="h-12 w-12 bg-[#E4E0D9] rounded-full" />
                       <div>
                          <h4 className="text-sm font-black uppercase tracking-tight">Store Owner</h4>
                          <p className="text-[10px] text-[#C9A96E] font-black uppercase tracking-widest">Shopify Merchant</p>
                       </div>
                    </div>
                    <p className="text-sm text-[#7A7570] leading-relaxed italic font-medium">
                       "The best investment we've made for our storefront. Performance and design are both world-class."
                    </p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-6 md:px-12 bg-white border-t border-[#E4E0D9]">
         <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
               <div className="lg:col-span-4">
                  <Link href="/" className="flex items-center gap-3 mb-8 group">
                     <div className="h-10 w-10 bg-[#C9A96E] text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                           <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                     </div>
                     <div className="flex flex-col -space-y-1">
                        <span className="text-xl font-black uppercase tracking-tighter">Liquid UI <span className="text-[#C9A96E]">Pro</span></span>
                        <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#C9A96E]/60 pl-0.5">Created by SHAH</span>
                     </div>
                  </Link>
                  <p className="text-sm text-[#7A7570] leading-relaxed font-medium max-w-sm mb-10">
                     The definitive library for premium Shopify components. Built for high-performance storefronts and elite development workflows.
                  </p>
                  <div className="flex gap-4">
                     {['Twitter', 'Instagram', 'Discord'].map((social) => (
                       <Link key={social} href="#" className="h-10 w-10 bg-[#F9F7F4] border border-[#E4E0D9] rounded-xl flex items-center justify-center text-[#7A7570] hover:text-[#0A0A0A] hover:border-[#C9A96E] transition-all">
                          <span className="text-[8px] font-black uppercase">{social[0]}</span>
                       </Link>
                     ))}
                  </div>
               </div>
               
               <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-12">
                  {[
                    { title: 'Explorer', links: ['Carts', 'Footers', 'Headers', 'Banners'] },
                    { title: 'Platform', links: ['Templates', 'Utilities', 'UI Kit', 'Liquid Docs'] },
                    { title: 'Support', links: ['Documentation', 'License', 'Contact', 'Changelog'] }
                  ].map((group) => (
                    <div key={group.title}>
                       <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C9A96E] mb-8 italic">{group.title}</h5>
                       <ul className="space-y-4">
                          {group.links.map((link) => (
                            <li key={link}>
                               <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-[#7A7570] hover:text-black transition-colors">{link}</Link>
                            </li>
                          ))}
                       </ul>
                    </div>
                  ))}
               </div>

               <div className="lg:col-span-3">
                  <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0A0A0A] mb-8 italic">Join the Inner Circle</h5>
                  <p className="text-xs text-[#7A7570] font-medium mb-8 leading-relaxed">Get the latest Liquid artifacts and updates delivered to your inbox.</p>
                  <div className="flex gap-2 p-1.5 bg-[#F9F7F4] border border-[#E4E0D9] rounded-2xl">
                     <input type="text" placeholder="Email Address" className="bg-transparent border-none px-4 py-2 text-xs font-medium focus:outline-none flex-1" />
                     <button className="px-6 py-3 bg-[#C9A96E] text-white rounded-xl text-[8px] font-black uppercase tracking-widest shadow-lg shadow-[#C9A96E]/20">Join</button>
                  </div>
               </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-[#E4E0D9]">
               <div className="flex items-center gap-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#7A7570]">LiquidUI Pro &copy; 2026</p>
                  <div className="h-1 w-1 bg-[#E4E0D9] rounded-full" />
                  <p className="text-[8px] font-black uppercase tracking-widest text-[#C9A96E]/60">Design & Engine by SHAH</p>
               </div>
               <Link href="https://github.com/zeeshan912989/LiquidUIPro" className="group flex items-center gap-3 px-6 py-3 bg-[#0A0A0A] text-white rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span className="text-[10px] font-black uppercase tracking-widest">Star on GitHub</span>
               </Link>
            </div>
         </div>
      </footer>

      <style jsx global>{`
        .perspective-1000 {
           perspective: 1000px;
        }
      `}</style>
    </div>
  )
}
