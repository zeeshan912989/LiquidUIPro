"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()

  const navLinks = [
    { name: 'Features', href: '/features' },
    { name: 'Templates', href: '/templates' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Support', href: '/support' },
  ]

  return (
    <nav className="w-full bg-white/90 backdrop-blur-xl border-b border-[#F3EFE9] px-6 py-5 md:px-12 fixed top-0 z-[100]">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative">
            <svg className="h-10 w-10 text-[#C9A96E]" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M12 32L20 8L28 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
               <path d="M20 8L20 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
               <path d="M20 20L28 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
               <path d="M20 20L30 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
               <circle cx="12" cy="35" r="2" fill="currentColor"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter uppercase font-outfit text-[#1A1A1A] leading-none">
              LIQUIDUI<span className="text-[#C9A96E]">PRO</span>
            </span>
            <span className="text-[7px] font-black tracking-[0.4em] uppercase text-[#C4C0B9] mt-1.5 ml-0.5">
              DESIGN BY SHAH
            </span>
          </div>
        </Link>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`text-[13px] font-bold tracking-tight transition-all duration-300 ${
                pathname === link.href ? 'text-[#C9A96E]' : 'text-[#4A4A4A] hover:text-[#000]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/components/cart" className="px-7 py-3 bg-[#C9A96E] text-white rounded-xl text-[12px] font-black tracking-tight transition-all shadow-lg shadow-[#C9A96E]/20 hover:bg-[#A8853F] hover:translate-y-[-1px]">
            Get Started
          </Link>
          <Link href="https://github.com/zeeshan912989/LiquidUIPro" className="hidden md:flex px-5 py-3 bg-white border border-[#E4E0D9] rounded-xl text-[12px] font-black tracking-tight items-center gap-2.5 hover:bg-gray-50 transition-all hover:translate-y-[-1px]">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            GitHub
          </Link>
          <button className="md:hidden p-2 text-gray-600">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  )
}
