"use client"

import { ArrowRight } from 'lucide-react'

export default function Hero01() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="flex flex-col lg:flex-row lg:items-center">
        {/* Text Content */}
        <div className="flex-1 px-8 py-16 lg:px-16 lg:py-32">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            Luxury Reimagined. <br />
            <span className="text-gray-400">Crafted for You.</span>
          </h1>
          <p className="mb-10 max-w-lg text-lg text-gray-600">
            Discover our new collection of sustainable premium jewelry. 
            Designed in London, worn worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-black px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-105">
              Shop Collection
            </button>
            <button className="flex items-center gap-2 rounded-full border border-gray-200 px-8 py-4 text-sm font-bold text-gray-900 transition-colors hover:bg-gray-50">
              Our Story
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex-1 bg-gray-100 lg:h-[600px]">
          <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1515562141207-7a18b5ce7142?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        </div>
      </div>
    </section>
  )
}
