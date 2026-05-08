"use client"

import { ArrowRight } from 'lucide-react'

export default function Hero01() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[600px]">
        {/* Text Content */}
        <div className="flex flex-1 flex-col justify-center px-6 py-12 sm:px-12 lg:px-16 lg:py-24">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
              Luxury Reimagined. <br />
              <span className="text-gray-400">Crafted for You.</span>
            </h1>
            <p className="mb-8 text-base text-gray-600 sm:text-lg lg:max-w-lg lg:text-xl">
              Discover our new collection of sustainable premium jewelry. 
              Designed in London, worn worldwide.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="w-full rounded-full bg-black px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-105 sm:w-auto">
                Shop Collection
              </button>
              <button className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 px-8 py-4 text-sm font-bold text-gray-900 transition-colors hover:bg-gray-50 sm:w-auto">
                Our Story
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="relative h-[400px] flex-1 lg:h-auto">
          <div className="absolute inset-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1515562141207-7a18b5ce7142?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        </div>
      </div>
    </section>
  )
}
