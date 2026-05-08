"use client"

import { useState, useEffect } from 'react'
import { 
  Menu, 
  X, 
  ChevronDown,
  Layout,
  PieChart,
  Zap,
  Shield,
  Layers
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeaderModernSaaS() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="w-full bg-[#f8fafc]">
      <header 
        className={cn(
          "fixed top-0 left-0 z-50 w-full transition-all duration-300 px-4 py-4",
          scrolled ? "py-3" : "py-6"
        )}
      >
        <div 
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-6 py-3 rounded-2xl border transition-all duration-300",
            scrolled 
              ? "bg-white/70 backdrop-blur-md border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.05)]" 
              : "bg-transparent border-transparent"
          )}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform">
              <Zap className="h-6 w-6 text-white fill-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Flux<span className="text-blue-600">AI</span>
            </span>
          </div>

          {/* Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                Product <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[480px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-white rounded-2xl border border-slate-100 shadow-2xl p-6 grid grid-cols-2 gap-4">
                  {[
                    { title: 'Dashboard', desc: 'Real-time analytics', icon: Layout },
                    { title: 'Analytics', desc: 'Deep data insights', icon: PieChart },
                    { title: 'Automations', desc: 'No-code workflows', icon: Zap },
                    { title: 'Security', desc: 'Enterprise grade', icon: Shield },
                  ].map((item) => (
                    <a key={item.title} href="#" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                      <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">{item.title}</div>
                        <div className="text-xs text-slate-500">{item.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {['Pricing', 'Resources', 'Community'].map((item) => (
              <a key={item} href="#" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                {item}
              </a>
            ))}
          </nav>

          {/* Actions (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="px-5 py-2.5 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">
              Log in
            </button>
            <button className="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl shadow-lg shadow-slate-200 hover:bg-blue-600 hover:shadow-blue-100 transition-all active:scale-95">
              Start Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(true)}
            className="lg:hidden p-2 rounded-xl border border-slate-200 bg-white shadow-sm text-slate-600"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Slide-in Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[300px] bg-white shadow-2xl p-8 flex flex-col">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-blue-600 fill-blue-600" />
                <span className="text-xl font-bold tracking-tight text-slate-900">FluxAI</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 rounded-lg bg-slate-50 text-slate-500">
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6">
              {['Features', 'Pricing', 'Resources', 'About Us'].map((item) => (
                <a key={item} href="#" className="text-lg font-bold text-slate-900 flex justify-between items-center group">
                  {item}
                  <ChevronDown className="-rotate-90 h-5 w-5 text-slate-300 group-hover:text-blue-600 transition-colors" />
                </a>
              ))}
            </nav>

            <div className="mt-auto space-y-4">
              <button className="w-full py-4 rounded-xl border border-slate-200 text-slate-900 font-bold hover:bg-slate-50 transition-colors">
                Log in
              </button>
              <button className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-100 transition-all active:scale-95">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="h-32" />
    </div>
  )
}
