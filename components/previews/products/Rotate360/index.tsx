"use client"

import { RotateCcw, MousePointer2, MoveHorizontal, Maximize2 } from 'lucide-react'
import { useState, useRef } from 'react'
import { cn } from '@/lib/utils'

export default function Rotate360() {
  const [rotation, setRotation] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const lastX = useRef(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const deltaX = e.clientX - lastX.current
    setRotation(prev => (prev + deltaX) % 360)
    lastX.current = e.clientX
  }

  return (
    <div className="max-w-4xl mx-auto p-12 bg-white rounded-[48px] shadow-2xl border border-gray-100 flex flex-col items-center">
      
      <div className="text-center mb-12">
         <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
            <RotateCcw className="h-4 w-4" />
            <span>Interactive 360° View</span>
         </div>
         <h3 className="text-4xl font-black uppercase tracking-tighter italic">Experience Depth</h3>
      </div>

      {/* Main 360 View Container */}
      <div 
        className="relative w-full aspect-video bg-gray-50 rounded-[40px] overflow-hidden border border-gray-100 cursor-grab active:cursor-grabbing group"
        onMouseDown={(e) => { setIsDragging(true); lastX.current = e.clientX }}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
      >
         {/* Mock 360 Image Rotation */}
         <div 
           className="h-full w-full flex items-center justify-center transition-transform duration-100 ease-out"
           style={{ transform: `rotateY(${rotation}deg)` }}
         >
            <img 
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000" 
              className="h-[80%] object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.2)]"
              alt="360 Product"
            />
         </div>

         {/* Interaction Overlay */}
         <div className="absolute inset-x-0 bottom-10 flex flex-col items-center gap-4 pointer-events-none">
            <div className="flex items-center gap-3 px-6 py-3 bg-black/80 backdrop-blur-md rounded-full text-white">
               <MoveHorizontal className="h-5 w-5 animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-widest">Drag to Rotate</span>
            </div>
         </div>

         {/* Quick Utilities */}
         <div className="absolute top-8 right-8 flex flex-col gap-3">
            <button className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center text-gray-500 shadow-xl hover:text-indigo-600 transition-all">
               <Maximize2 className="h-5 w-5" />
            </button>
            <button 
              onClick={() => setRotation(0)}
              className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center text-gray-500 shadow-xl hover:text-indigo-600 transition-all"
            >
               <RotateCcw className="h-5 w-5" />
            </button>
         </div>
      </div>

      <p className="mt-12 text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Inspect every angle of the Vanguard Elite Series</p>
    </div>
  )
}
