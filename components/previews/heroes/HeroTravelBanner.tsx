"use client"

import { useState, useEffect } from 'react'
import { Search, MapPin, Calendar, Users, ArrowRight, Play, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroTravelBanner() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-900">
      
      {/* Cinematic Background Media */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10" />
        <div 
          className="h-full w-full bg-[url('https://images.unsplash.com/photo-1506929113614-bb48858af847?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-[20s] linear"
          style={{ transform: mounted ? 'scale(1.1)' : 'scale(1)' }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 mx-auto max-w-[1440px] h-full px-8 flex flex-col justify-center items-center text-center text-white">
         
         <div className={cn(
           "mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-black uppercase tracking-[0.3em] transition-all duration-1000",
           mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
         )}>
           <Globe className="h-4 w-4" />
           <span>Explore 150+ Destinations</span>
         </div>

         <h1 className={cn(
           "text-6xl md:text-[10rem] font-serif leading-[0.9] mb-12 transition-all duration-1000 delay-200",
           mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
         )}>
           Your World, <br />
           <span className="italic font-light">Unlimited.</span>
         </h1>

         <p className={cn(
           "text-xl text-white/70 max-w-2xl mx-auto mb-16 leading-relaxed font-light transition-all duration-1000 delay-400",
           mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
         )}>
           Escape the ordinary and discover hidden gems across the globe. 
           Curated luxury experiences designed for the modern explorer.
         </p>

         {/* Search Booking UI (Glass Card) */}
         <div className={cn(
           "w-full max-w-5xl bg-white/10 backdrop-blur-2xl rounded-[40px] border border-white/20 p-4 md:p-6 transition-all duration-1000 delay-600",
           mounted ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
         )}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
               <div className="flex flex-col items-start px-6 border-b md:border-b-0 md:border-r border-white/10 py-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Location</span>
                  <div className="flex items-center gap-2 w-full">
                     <MapPin className="h-4 w-4 text-blue-400" />
                     <input type="text" placeholder="Where to?" className="bg-transparent text-sm font-bold text-white outline-none placeholder:text-white/30 w-full" />
                  </div>
               </div>
               <div className="flex flex-col items-start px-6 border-b md:border-b-0 md:border-r border-white/10 py-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Check-in</span>
                  <div className="flex items-center gap-2 w-full">
                     <Calendar className="h-4 w-4 text-blue-400" />
                     <input type="text" placeholder="Add dates" className="bg-transparent text-sm font-bold text-white outline-none placeholder:text-white/30 w-full" />
                  </div>
               </div>
               <div className="flex flex-col items-start px-6 border-b md:border-b-0 md:border-r border-white/10 py-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Guests</span>
                  <div className="flex items-center gap-2 w-full">
                     <Users className="h-4 w-4 text-blue-400" />
                     <input type="text" placeholder="Add guests" className="bg-transparent text-sm font-bold text-white outline-none placeholder:text-white/30 w-full" />
                  </div>
               </div>
               <div className="px-2">
                  <button className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-[24px] font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl shadow-blue-500/40 transition-all active:scale-95">
                     Explore <Search className="h-5 w-5" />
                  </button>
               </div>
            </div>
         </div>

         {/* Watch Story Button */}
         <button className={cn(
           "mt-12 group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-white transition-all duration-1000 delay-800",
           mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
         )}>
            <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
               <Play className="h-4 w-4 fill-current" />
            </div>
            Watch Story
         </button>
      </div>

      {/* Floating Bottom Navigation (Mock) */}
      <div className="absolute bottom-12 left-12 flex gap-8 items-center text-white/40 text-[10px] font-black uppercase tracking-widest hidden xl:flex">
         <a href="#" className="text-white hover:text-white transition-colors">Stays</a>
         <a href="#" className="hover:text-white transition-colors">Flights</a>
         <a href="#" className="hover:text-white transition-colors">Experiences</a>
         <a href="#" className="hover:text-white transition-colors">Cruises</a>
      </div>
    </section>
  )
}
