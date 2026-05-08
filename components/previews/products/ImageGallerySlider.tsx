"use client"

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, Search } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ImageGallerySlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const images = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=2070&auto=format&fit=crop"
  ]

  return (
    <div className="max-w-3xl mx-auto p-6 flex flex-col md:flex-row gap-6">
      
      {/* Thumbnails Sidebar */}
      <div className="flex md:flex-col gap-4 order-2 md:order-1">
         {images.map((img, i) => (
           <button 
             key={i} 
             onClick={() => setActiveIndex(i)}
             className={cn(
               "h-20 w-20 rounded-2xl overflow-hidden border-2 transition-all",
               activeIndex === i ? "border-indigo-600 scale-105" : "border-transparent opacity-60 hover:opacity-100"
             )}
           >
              <img src={img} className="h-full w-full object-cover" alt="" />
           </button>
         ))}
      </div>

      {/* Main Image Slider */}
      <div className="flex-1 relative order-1 md:order-2 group">
         <div className="aspect-[4/5] bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-xl relative">
            <img 
              src={images[activeIndex]} 
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              alt="Product View"
            />
            
            {/* Nav Arrows */}
            <button 
              onClick={() => setActiveIndex(s => (s - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
               <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={() => setActiveIndex(s => (s + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
               <ChevronRight className="h-6 w-6" />
            </button>

            {/* Quick Actions */}
            <div className="absolute bottom-6 right-6 flex gap-3">
               <button className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-lg text-gray-500 hover:text-indigo-600 transition-all">
                  <Maximize2 className="h-5 w-5" />
               </button>
               <button className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-lg text-gray-500 hover:text-indigo-600 transition-all">
                  <Search className="h-5 w-5" />
               </button>
            </div>
         </div>

         {/* Dot Indicators */}
         <div className="flex justify-center gap-2 mt-6 md:hidden">
            {images.map((_, i) => (
              <div 
                key={i} 
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  activeIndex === i ? "w-8 bg-indigo-600" : "w-2 bg-gray-200"
                )}
              />
            ))}
         </div>
      </div>
    </div>
  )
}
