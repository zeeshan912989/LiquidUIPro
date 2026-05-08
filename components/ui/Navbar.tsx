"use client"

import Link from 'next/link'
import { Search, Menu, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border-custom bg-bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Menu className="h-6 w-6 lg:hidden" />
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-accent">
              LiquidUI<span className="text-text-custom">Pro</span>
            </span>
          </Link>
        </div>

        <div className="hidden max-w-md flex-1 items-center gap-4 px-8 lg:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="Search components..."
              className="w-full rounded-full border border-border-custom bg-bg px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full p-2 hover:bg-bg"
          >
            {mounted && (theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
          </button>
          <Link
            href="/premium"
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-dark md:block"
          >
            Get Premium Pack
          </Link>
        </div>
      </div>
    </nav>
  )
}

{/* Action Buttons */ }
<div className="flex items-center gap-4">
  <Link href="/components/cart" className="px-7 py-3 bg-[#C9A96E] text-white rounded-xl text-[12px] font-black tracking-tight transition-all shadow-lg shadow-[#C9A96E]/20 hover:bg-[#A8853F] hover:translate-y-[-1px]">
    Get Started
  </Link>
  <Link href="https://github.com/zeeshan912989/LiquidUIPro" className="hidden md:flex px-5 py-3 bg-white border border-[#E4E0D9] rounded-xl text-[12px] font-black tracking-tight items-center gap-2.5 hover:bg-gray-50 transition-all hover:translate-y-[-1px]">
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
    GitHub
  </Link>
  <button className="md:hidden p-2 text-gray-600">
    <Menu className="h-6 w-6" />
  </button>
</div>
      </div >
    </nav >
  )
}

