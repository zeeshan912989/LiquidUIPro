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
  ExternalLink,
  Plus,
  Pencil,
  Code,
  MessageCircle
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#FBF9F7] text-[#0A0A0A] font-inter selection:bg-[#C9A96E] selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-300 px-6 py-4 md:px-12",
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-[#E4E0D9] py-3" : "bg-transparent py-6"
      )}>
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="h-11 w-11 flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
               <img src="/icon.svg" alt="logo" className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-2xl font-black tracking-tighter uppercase leading-none font-outfit text-[#C9A96E]">LIQUIDUI</span>
              <div className="flex items-center gap-1 w-full">
                <div className="h-[1px] flex-1 bg-[#E4E0D9]" />
                <span className="text-[9px] font-black tracking-[0.4em] uppercase text-[#7A7570]">PRO</span>
                <div className="h-[1px] flex-1 bg-[#E4E0D9]" />
              </div>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-12">
            {['Library', 'Templates', 'Pricing', 'Support'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="text-sm font-semibold text-[#555] hover:text-black transition-colors">
                {item}
              </Link>
            ))}
          </div>

          {/* Auth/CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/components/cart" className="px-6 py-2.5 bg-[#C9A96E] text-white rounded-lg text-sm font-bold hover:bg-[#A8853F] transition-all">
               Get Started
            </Link>
            <Link href="https://github.com/zeeshan912989/LiquidUIPro" className="px-6 py-2.5 border border-[#E4E0D9] rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-gray-50 transition-all">
               <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
               </svg>
               GitHub
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 bg-[#FBF9F7] border border-[#F3EFE9] rounded-full text-[13px] font-semibold text-[#C9A96E] mb-8">
               AI-Powered Shopify UI Builder
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
               Build Stunning Shopify <br />
               Stores <span className="text-[#C9A96E]">10x Faster</span>
            </h1>
            <p className="text-lg text-[#666] mb-10 max-w-lg leading-relaxed">
               Generate, customize, and export beautiful Shopify sections with AI. No coding needed.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/components/cart" className="px-8 py-4 bg-[#C9A96E] text-white rounded-lg font-bold flex items-center gap-2 hover:bg-[#A8853F] transition-all shadow-lg shadow-[#C9A96E]/20">
                 Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="https://github.com/zeeshan912989/LiquidUIPro" className="px-8 py-4 bg-white border border-[#E4E0D9] rounded-lg font-bold flex items-center gap-3 hover:bg-gray-50 transition-all">
                 <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                 </svg>
                 GitHub
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#C9A96E]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                </div>
                <p className="text-[12px] font-semibold text-[#888]">Trusted by 2,000+ store owners and developers</p>
              </div>
            </div>
          </div>

          {/* Right Image/Mockup */}
          <div className="lg:w-1/2 relative">
             <div className="relative rounded-2xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.08)] border border-[#E4E0D9] bg-white p-1 md:p-2">
                {/* Browser Header */}
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-100 bg-white">
                   <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                   <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                   <div className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                </div>
                {/* Mockup Content */}
                <div className="bg-white aspect-[4/3] flex flex-col overflow-hidden">
                   {/* Mockup Nav */}
                   <div className="h-10 border-b border-gray-100 flex items-center justify-between px-4">
                      <div className="flex items-center gap-2">
                         <div className="h-4 w-4 bg-[#C9A96E] rounded-md" />
                         <span className="text-[8px] font-black uppercase tracking-tighter text-[#C9A96E]">LIQUIDUI PRO</span>
                      </div>
                      <div className="flex gap-2">
                         <div className="h-5 w-10 bg-gray-50 rounded border border-gray-100" />
                         <div className="h-5 w-10 bg-[#C9A96E] rounded border border-[#C9A96E]" />
                      </div>
                   </div>
                   
                   <div className="flex-1 flex overflow-hidden">
                      {/* Mockup Sidebar */}
                      <div className="w-32 md:w-40 border-r border-gray-100 p-4 space-y-4 hidden md:block">
                         <div className="flex items-center justify-between">
                            <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Components</span>
                            <ChevronRight className="h-2 w-2 text-gray-400" />
                         </div>
                         <div className="space-y-2">
                            {['Header', 'Hero Sections', 'Product Sections', 'Collections', 'Features', 'Testimonials', 'FAQ', 'Footers'].map((item, idx) => (
                               <div key={item} className={cn(
                                  "flex items-center justify-between p-1.5 rounded transition-colors",
                                  idx === 3 ? "bg-[#FBF9F7] text-[#C9A96E]" : "hover:bg-gray-50"
                               )}>
                                  <span className="text-[7px] font-bold text-gray-500">{item}</span>
                                  <ChevronRight className="h-2 w-2 text-gray-300" />
                               </div>
                            ))}
                         </div>
                      </div>

                      {/* Mockup Canvas */}
                      <div className="flex-1 bg-[#FBF9F7] p-4 md:p-6 overflow-hidden">
                         <div className="h-full w-full bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col overflow-hidden">
                            {/* Banner Inside Mockup */}
                            <div className="relative h-32 md:h-48 bg-[#F3EFE9] flex items-center px-6 md:px-10 overflow-hidden">
                               <div className="relative z-10 max-w-[140px] md:max-w-[200px]">
                                  <h4 className="text-sm md:text-lg font-black leading-tight mb-2 font-outfit">NEW <br /> COLLECTION</h4>
                                  <p className="text-[6px] md:text-[8px] text-gray-500 mb-3 leading-relaxed">Modern design. Premium quality. Made for your store.</p>
                                  <button className="px-3 py-1.5 bg-[#C9A96E] text-white text-[6px] md:text-[8px] font-bold rounded">Shop Now</button>
                               </div>
                               {/* Abstract Vase/Product Placeholder */}
                               <div className="absolute right-0 bottom-0 w-24 md:w-40 h-full opacity-40 flex items-end justify-center">
                                  <div className="w-16 md:w-24 h-32 md:h-40 bg-[#C9A96E]/20 rounded-t-full border border-[#C9A96E]/30" />
                               </div>
                            </div>
                            {/* Bottom Grid Inside Mockup */}
                            <div className="flex-1 p-3 md:p-5 grid grid-cols-4 gap-2 md:gap-4">
                               {[
                                 { name: 'Product Grid', icon: Layout },
                                 { name: 'Banner', icon: Monitor },
                                 { name: 'Collection List', icon: Layers },
                                 { name: 'Testimonials', icon: MessageCircle }
                               ].map((item, i) => (
                                 <div key={i} className="bg-white border border-gray-50 rounded-lg p-2 md:p-3 flex flex-col items-center justify-center text-center shadow-[0_4px_10px_rgba(0,0,0,0.02)]">
                                    <item.icon className="h-3 w-3 md:h-4 md:w-4 text-[#C9A96E] mb-1.5" />
                                    <span className="text-[5px] md:text-[7px] font-bold text-gray-500 whitespace-nowrap">{item.name}</span>
                                 </div>
                               ))}
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Everything you need to build faster</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: 'Component Library', desc: '100+ modern, responsive Shopify components.', icon: Layout },
              { title: 'AI Generation', desc: 'Generate sections with AI using simple prompts.', icon: Plus },
              { title: 'Drag & Drop Builder', desc: 'Visual builder with live preview and easy controls.', icon: Pencil },
              { title: 'Clean Liquid Code', desc: 'Export clean, schema-ready Liquid code.', icon: Code },
              { title: 'Fully Responsive', desc: 'All components are mobile, tablet & desktop ready.', icon: Smartphone },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-[#FBF9F7] rounded-xl border border-[#F3EFE9] group hover:border-[#C9A96E]/30 transition-all">
                <div className="h-12 w-12 bg-white rounded-lg border border-[#F3EFE9] flex items-center justify-center mb-6 text-[#C9A96E] group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-[15px] mb-3">{item.title}</h4>
                <p className="text-[13px] text-[#888] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Footer Text */}
      <div className="py-8 bg-[#FBF9F7] border-t border-[#E4E0D9] text-center">
         <p className="text-[14px] font-semibold text-[#555]">Built for Shopify. Loved by developers. Trusted by brands.</p>
      </div>

    </div>
  )
}
