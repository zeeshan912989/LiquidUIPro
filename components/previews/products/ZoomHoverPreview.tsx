"use client"

import { useState, useRef } from 'react'
import { cn } from '@/lib/utils'

export default function ZoomHoverPreview() {
  const [showZoom, setShowZoom] = useState(false)
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setZoomPos({ x, y })
  }

  const imageUrl = "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop"

  return (
    <div className="max-w-2xl mx-auto p-12">
      <div className="relative grid md:grid-cols-2 gap-12 items-start">
        
        {/* Main Image Container */}
        <div 
          ref={containerRef}
          className="relative aspect-square rounded-[32px] overflow-hidden border border-gray-100 bg-white shadow-xl cursor-crosshair"
          onMouseEnter={() => setShowZoom(true)}
          onMouseLeave={() => setShowZoom(false)}
          onMouseMove={handleMouseMove}
        >
          <img 
            src={imageUrl} 
            className="h-full w-full object-cover" 
            alt="Handbag Detail"
          />
          
          {/* Magnifier Lens */}
          {showZoom && (
            <div 
              className="absolute h-40 w-40 border-2 border-white/50 shadow-2xl pointer-events-none rounded-full"
              style={{ 
                left: `${zoomPos.x}%`, 
                top: `${zoomPos.y}%`,
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 0 1000px rgba(0,0,0,0.1)'
              }}
            />
          )}
        </div>

        {/* Detailed Zoom View (Amazon Style) */}
        <div className="space-y-6">
           <h3 className="text-2xl font-black uppercase tracking-tighter">Premium Leather Artisan Tote</h3>
           <p className="text-gray-500 text-sm leading-relaxed">
             Hover over the image to inspect the hand-stitched details and the authentic texture of our sustainably sourced Italian leather.
           </p>
           
           <div className={cn(
             "aspect-square rounded-3xl overflow-hidden border border-gray-100 shadow-2xl bg-white transition-opacity duration-300",
             showZoom ? "opacity-100" : "opacity-0 pointer-events-none"
           )}>
             <div 
               className="h-full w-full bg-cover bg-no-repeat"
               style={{ 
                 backgroundImage: `url(${imageUrl})`,
                 backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                 transform: 'scale(2.5)'
               }}
             />
           </div>
        </div>
      </div>
    </div>
  )
}
