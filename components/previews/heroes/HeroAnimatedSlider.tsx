"use client"

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroAnimatedSlider() {
  const [mounted, setMounted] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      title: "The Urban \nExplorer.",
      sub: "Adventure Ready",
      color: "bg-blue-600",
      img: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Peak \nPerformance.",
      sub: "Engineered for Speed",
      color: "bg-red-600",
      img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Silent \nSophistication.",
      sub: "Minimalist Aesthetic",
      color: "bg-slate-900",
      img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2080&auto=format&fit=crop"
    }
  ]

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setActiveSlide(s => (s + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden flex items-center">
      
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, i) => (
          <div 
            key={i}
            className={cn(
              "absolute inset-0 transition-all duration-[2000ms] ease-in-out scale-110",
              activeSlide === i ? "opacity-60 scale-100" : "opacity-0 scale-110"
            )}
          >
            <img src={slide.img} className="h-full w-full object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-8 w-full flex flex-col justify-center">
         
         {/* Slide Metadata */}
         <div className="overflow-hidden mb-6">
            <p className={cn(
              "text-sm font-black uppercase tracking-[0.4em] text-white/40 transition-all duration-700",
              mounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            )}>
              {slides[activeSlide].sub}
            </p>
         </div>

         {/* Animated Heading */}
         <h1 
           className="text-7xl md:text-[10rem] font-black italic text-white uppercase tracking-tighter leading-[0.8] mb-12"
           key={activeSlide} // Trigger re-animation on slide change
         >
            {slides[activeSlide].title.split('\n').map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <span className="block animate-slide-up-heading">
                  {line}
                </span>
              </span>
            ))}
         </h1>

         <div className={cn(
           "flex flex-col sm:flex-row items-center gap-8 transition-all duration-1000 delay-500",
           mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
         )}>
            <button className={cn(
              "px-12 py-6 text-white font-black uppercase tracking-widest text-sm rounded-full transition-all active:scale-95 flex items-center gap-4 shadow-2xl",
              slides[activeSlide].color
            )}>
              View Collection <ArrowRight className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-4">
               <div className="flex -space-x-2">
                  {[1,2,3].map(i => <div key={i} className="h-10 w-10 rounded-full border-2 border-black bg-white/20 backdrop-blur-md" />)}
               </div>
               <p className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-tight">
                  Join <span className="text-white">1,500+</span> <br /> explorers
               </p>
            </div>
         </div>
      </div>

      {/* Progress Bars (Slider Dots) */}
      <div className="absolute bottom-12 left-12 flex gap-4 z-20">
         {slides.map((_, i) => (
           <button 
             key={i} 
             onClick={() => setActiveSlide(i)}
             className="relative h-1 w-24 bg-white/10 rounded-full overflow-hidden"
           >
              {activeSlide === i && (
                <div className="absolute top-0 left-0 h-full bg-white animate-progress-bar" />
              )}
           </button>
         ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-12 right-12 flex gap-4 z-20">
         <button 
           onClick={() => setActiveSlide(s => (s - 1 + slides.length) % slides.length)}
           className="h-16 w-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
         >
            <ChevronLeft className="h-6 w-6" />
         </button>
         <button 
           onClick={() => setActiveSlide(s => (s + 1) % slides.length)}
           className="h-16 w-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
         >
            <ChevronRight className="h-6 w-6" />
         </button>
      </div>

      <style jsx>{`
        @keyframes slide-up-heading {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up-heading {
          animation: slide-up-heading 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes progress-bar {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress-bar {
          animation: progress-bar 6s linear forwards;
        }
      `}</style>
    </section>
  )
}
