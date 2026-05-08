"use client"

import Link from 'next/link'
import { Search, Menu, Sun, Moon, Github, Star } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-white/5 bg-bg/80 backdrop-blur-2xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-6">
          <Menu className="h-6 w-6 lg:hidden" />
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white shadow-lg shadow-accent/20">
               <span className="text-xl font-black italic">L</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-text-custom">
              LiquidUI<span className="text-accent italic">Pro.</span>
            </span>
          </Link>
        </div>

        <div className="hidden max-w-lg flex-1 items-center gap-4 px-12 lg:flex">
          <div className="relative w-full group">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted transition-colors group-focus-within:text-accent" />
            <input
              type="text"
              placeholder="Search artifacts..."
              className="w-full rounded-2xl border border-border-custom bg-bg-card/50 px-12 py-3 text-xs font-bold uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-6 lg:flex">
             <Link href="https://github.com/zeeshan912989/LiquidUIPro" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-text-muted hover:text-text-custom transition-colors">
                <Github className="h-4 w-4" />
                <span>GitHub</span>
             </Link>
             <div className="h-4 w-px bg-border-custom" />
          </div>
          
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-xl border border-border-custom bg-bg-card p-2.5 text-text-custom transition-all hover:scale-110 active:scale-95"
          >
            {mounted && (theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
          </button>
          
          <Link
            href="/premium"
            className="hidden items-center gap-2 rounded-xl bg-text-custom px-6 py-3 text-xs font-black uppercase tracking-[0.2em] text-bg transition-all hover:scale-105 hover:shadow-xl md:flex"
          >
            <Star className="h-4 w-4 fill-accent text-accent" />
            Get Pro
          </Link>
        </div>
      </div>
    </nav>
  )
}
