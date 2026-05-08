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
