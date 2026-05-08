"use client"

import { useState, useEffect } from 'react'
import { 
  Zap, 
  Search, 
  Menu, 
  X, 
  ChevronRight,
  Home,
  Layers,
  Cpu,
  Globe,
  MessageSquare
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeaderFuturisticAI() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="w-full min-h-screen bg-[#020617] text-slate-100 font-mono overflow-hidden">
      {/* Animated Background Mesh (Cyberpunk Style) */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-20%,#1e1b4b,transparent)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <header 
        className={cn(
          "fixed top-0 left-0 z-50 w-full transition-all duration-500 px-4 py-4 lg:px-8",
          scrolled ? "py-3" : "py-6"
        )}
      >
        <div 
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-6 py-2 rounded-2xl border transition-all duration-500 group",
            scrolled 
              ? "bg-[#0f172a]/80 backdrop-blur-xl border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)]" 
              : "bg-transparent border-slate-800"
          )}
        >
          {/* Animated Gradient Border Effect */}
          <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 bg-[length:200%_auto] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] p-[1px]" />

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
              <div className="absolute inset-0 bg-cyan-500/20 animate-pulse" />
              <Zap className="relative z-10 h-6 w-6 text-cyan-400 fill-cyan-400" />
            </div>
            <span className="text-xl font-bold tracking-[0.2em] uppercase text-white">
              NEURO<span className="text-cyan-400">FLUX</span>
            </span>
          </div>

          {/* Nav (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1">
            {['Engine', 'Models', 'Cloud', 'Nexus'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="px-6 py-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-cyan-400 transition-all relative group/nav"
              >
                {item}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-cyan-500 group-hover/nav:w-1/2 transition-all" />
              </a>
            ))}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="text-slate-400 hover:text-white transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="relative px-8 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 text-xs font-black uppercase tracking-widest overflow-hidden group/btn hover:bg-cyan-500 hover:text-white transition-all shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <span className="relative z-10 flex items-center gap-2">Initiate System <ChevronRight className="h-4 w-4" /></span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite] transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburguer */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Bottom Tab Navigation (Mobile) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[400px] h-16 bg-[#0f172a]/90 backdrop-blur-xl rounded-2xl border border-cyan-500/20 flex items-center justify-around px-4 shadow-[0_0_50px_rgba(0,0,0,0.5)] lg:hidden">
        <button className="flex flex-col items-center gap-1 text-cyan-400">
          <Home className="h-5 w-5" />
          <span className="text-[8px] font-bold uppercase tracking-tighter">Core</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-500">
          <Layers className="h-5 w-5" />
          <span className="text-[8px] font-bold uppercase tracking-tighter">Layers</span>
        </button>
        <div className="relative -top-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500 text-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.5)] ring-8 ring-[#0f172a]">
            <Cpu className="h-7 w-7 animate-spin-slow" />
          </div>
        </div>
        <button className="flex flex-col items-center gap-1 text-slate-500">
          <Globe className="h-5 w-5" />
          <span className="text-[8px] font-bold uppercase tracking-tighter">Nexus</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-500">
          <MessageSquare className="h-5 w-5" />
          <span className="text-[8px] font-bold uppercase tracking-tighter">Talk</span>
        </button>
      </div>

      {/* Mobile Sidebar (Cyberpunk Glass) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[200] lg:hidden">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[300px] bg-[#0f172a]/90 backdrop-blur-2xl border-l border-cyan-500/20 p-10 flex flex-col">
            <div className="flex items-center justify-between mb-12">
              <span className="text-xl font-bold tracking-widest text-white uppercase">NEURO<span className="text-cyan-400">FLUX</span></span>
              <button onClick={() => setIsMenuOpen(false)} className="rounded-xl border border-slate-800 p-2 text-slate-500"><X className="h-5 w-5" /></button>
            </div>
            
            <nav className="flex flex-col gap-10">
              {['System Architecture', 'Neural Engines', 'Cloud Integration', 'Pricing Model', 'Documentation'].map((item) => (
                <a key={item} href="#" className="text-sm font-bold text-slate-400 hover:text-cyan-400 transition-all flex justify-between items-center group">
                  {item}
                  <div className="h-1 w-1 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_#06b6d4]" />
                </a>
              ))}
            </nav>

            <button className="mt-auto w-full py-4 rounded-xl bg-cyan-500 text-slate-900 font-black text-xs uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:scale-105 active:scale-95 transition-all">
              Initialize Account
            </button>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="h-24" />

    </div>
  )
}
