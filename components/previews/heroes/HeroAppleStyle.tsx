"use client"

import { useState, useEffect } from 'react'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroAppleStyle() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative h-[85vh] min-h-[650px] w-full bg-[#fbfbfd] overflow-hidden">
      <div className="mx-auto flex h-full max-w-[1440px] flex-col items-center pt-24 text-center">
        
        {/* Top Eyebrow */}
        <div className={cn(
          "mb-4 transition-all duration-1000",
          mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          <span className="text-xl font-semibold text-orange-600">New</span>
        </div>

        {/* Hero Heading */}
        <h1 className={cn(
          "mb-6 text-5xl font-bold tracking-tight text-[#1d1d1f] md:text-8xl transition-all duration-1000 delay-200",
          mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        )}>
          Pro Beyond.
        </h1>

        {/* Subheading */}
        <p className={cn(
          "mb-10 text-xl font-medium text-[#86868b] md:text-2xl transition-all duration-1000 delay-400",
          mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          Experience the power of our most advanced chip yet. <br className="hidden md:block" />
          Stunning 8K display. All-day battery life.
        </p>

        {/* CTAs */}
        <div className={cn(
          "mb-16 flex items-center gap-8 transition-all duration-1000 delay-600",
          mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          <button className="rounded-full bg-[#0071e3] px-8 py-3.5 text-sm font-semibold text-white hover:bg-[#0077ed] transition-colors shadow-lg shadow-blue-100">
            Buy Now
          </button>
          <a href="#" className="group flex items-center gap-1 text-xl font-medium text-[#0066cc] hover:underline underline-offset-4 decoration-2">
            Learn more <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Floating Product Image Container */}
        <div className={cn(
          "relative w-full max-w-4xl px-4 transition-all duration-1000 delay-800",
          mounted ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
        )}>
          <div className="relative aspect-[16/9] w-full rounded-2xl bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden group">
             {/* Mock Content */}
             <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-12">
                <div className="h-full w-full bg-white rounded-xl shadow-inner border border-blue-100 flex items-center justify-center">
                    <div className="h-32 w-32 bg-gradient-to-tr from-blue-400 to-indigo-600 rounded-3xl animate-pulse shadow-2xl shadow-blue-200" />
                </div>
             </div>
             
             {/* Gloss Effect */}
             <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
          </div>
          
          {/* Decorative Floating Cards */}
          <div className="absolute -left-12 top-1/4 h-24 w-48 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-4 hidden xl:block animate-bounce-slow">
            <div className="h-2 w-3/4 bg-gray-200 rounded-full mb-3" />
            <div className="h-2 w-1/2 bg-blue-100 rounded-full" />
          </div>
          <div className="absolute -right-12 bottom-1/4 h-32 w-48 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 p-6 hidden xl:block animate-bounce-slow delay-500">
             <div className="h-10 w-10 bg-indigo-50 rounded-lg mb-4" />
             <div className="h-2 w-full bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
