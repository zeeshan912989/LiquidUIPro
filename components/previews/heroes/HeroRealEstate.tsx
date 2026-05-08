"use client"

import { useState, useEffect } from 'react'
import { Search, MapPin, Home, DollarSign, ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroRealEstate() {
  const [mounted, setMounted] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  const properties = [
    { name: 'The Azure Villa', location: 'Malibu, CA', price: '$12,500,000', tags: ['Oceanfront', 'Pool'] },
    { name: 'Skyline Penthouse', location: 'Manhattan, NY', price: '$8,200,000', tags: ['City View', 'Gym'] },
    { name: 'Emerald Estate', location: 'Aspen, CO', price: '$15,000,000', tags: ['Mountain', 'Ski-in'] }
  ]

  return (
    <section className="relative h-screen w-full bg-[#0a0a0b] overflow-hidden flex items-center">
      
      {/* Background Slider (Mocked with Transition) */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0b] via-[#0a0a0b]/40 to-[#0a0a0b] z-10" />
         <div 
           className="h-full w-full bg-[url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center transition-all duration-1000 scale-105"
           style={{ opacity: mounted ? 1 : 0 }}
         />
      </div>

      <div className="relative z-20 mx-auto max-w-[1440px] px-8 w-full">
         <div className="grid lg:grid-cols-2 gap-24 items-center">
            
            {/* Left: Search & Value Prop */}
            <div className="text-center lg:text-left">
               <div className={cn(
                 "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] font-bold uppercase tracking-[0.4em] mb-8 transition-all duration-1000",
                 mounted ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
               )}>
                 <Star className="h-4 w-4 text-yellow-500 fill-current" />
                 <span>Curated Luxury Real Estate</span>
               </div>

               <h1 className={cn(
                 "text-6xl md:text-8xl font-serif text-white leading-tight mb-8 transition-all duration-1000 delay-200",
                 mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
               )}>
                 Find Your <br />
                 <span className="italic font-light text-white/70">Masterpiece.</span>
               </h1>

               {/* Advanced Search Form */}
               <div className={cn(
                 "max-w-xl bg-white/10 backdrop-blur-3xl rounded-[32px] border border-white/10 p-8 shadow-2xl transition-all duration-1000 delay-400",
                 mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
               )}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Location</label>
                        <div className="flex items-center gap-3 text-white border-b border-white/10 pb-2">
                           <MapPin className="h-4 w-4 text-blue-400" />
                           <input type="text" placeholder="Dubai, UAE" className="bg-transparent text-sm font-bold outline-none w-full" />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/40">Property Type</label>
                        <div className="flex items-center gap-3 text-white border-b border-white/10 pb-2">
                           <Home className="h-4 w-4 text-blue-400" />
                           <select className="bg-transparent text-sm font-bold outline-none w-full appearance-none">
                              <option>Villa</option>
                              <option>Penthouse</option>
                              <option>Estate</option>
                           </select>
                        </div>
                     </div>
                  </div>
                  <button className="w-full py-5 bg-white text-black font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-xl flex items-center justify-center gap-3 group">
                     Search Properties <Search className="h-5 w-5" />
                  </button>
               </div>
            </div>

            {/* Right: Interactive Property Highlight */}
            <div className={cn(
              "relative hidden lg:block transition-all duration-1000 delay-600",
              mounted ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            )}>
               <div className="bg-white/10 backdrop-blur-2xl rounded-[40px] border border-white/10 p-8 shadow-2xl relative overflow-hidden group">
                  <div className="aspect-[4/3] bg-gray-800 rounded-3xl mb-8 overflow-hidden">
                     <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  
                  <div className="flex justify-between items-end mb-6">
                     <div>
                        <h3 className="text-3xl font-serif text-white mb-1">{properties[activeSlide].name}</h3>
                        <p className="text-sm text-white/40 font-medium">{properties[activeSlide].location}</p>
                     </div>
                     <div className="text-right">
                        <p className="text-2xl font-bold text-white mb-1">{properties[activeSlide].price}</p>
                        <div className="flex gap-2">
                           {properties[activeSlide].tags.map(t => (
                             <span key={t} className="text-[8px] font-black uppercase tracking-widest px-2 py-1 bg-white/5 border border-white/10 rounded-full text-white/60">{t}</span>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Slider Controls */}
                  <div className="flex gap-4">
                     <button className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                        <ChevronLeft className="h-5 w-5" />
                     </button>
                     <button className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                        <ChevronRight className="h-5 w-5" />
                     </button>
                     <button className="flex-1 py-4 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-[10px] rounded-full hover:bg-white/10 transition-all">
                        View Details
                     </button>
                  </div>
               </div>

               {/* Background Decorative Frame */}
               <div className="absolute -top-12 -right-12 h-64 w-64 border-t-2 border-r-2 border-white/5 -z-10" />
               <div className="absolute -bottom-12 -left-12 h-64 w-64 border-b-2 border-l-2 border-white/5 -z-10" />
            </div>
         </div>
      </div>
    </section>
  )
}
