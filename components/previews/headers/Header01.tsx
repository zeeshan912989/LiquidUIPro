"use client"

import { ShoppingBag, Search, User } from 'lucide-react'

export default function Header01() {
  return (
    <header className="w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold tracking-tight text-gray-900">
            MINIMAL<span className="text-gray-400">STORE</span>
          </a>
        </div>

        {/* Navigation */}
        <nav className="hidden space-x-8 lg:flex">
          {['New Arrivals', 'Collections', 'Sale', 'About'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="text-gray-400 transition-colors hover:text-gray-900">
            <Search className="h-5 w-5" />
          </button>
          <button className="text-gray-400 transition-colors hover:text-gray-900">
            <User className="h-5 w-5" />
          </button>
          <button className="relative text-gray-400 transition-colors hover:text-gray-900">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
