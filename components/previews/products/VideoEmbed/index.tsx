"use client"

import { Play, Pause, Volume2, Maximize2, ShoppingBag } from 'lucide-react'
import { useState, useRef } from 'react'
import { cn } from '@/lib/utils'

export default function VideoEmbed() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause()
      else videoRef.current.play()
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="relative aspect-[9/16] md:aspect-video bg-black rounded-[48px] overflow-hidden shadow-2xl group border-[8px] border-white ring-1 ring-gray-100">
        
        {/* Mock Video Placeholder */}
        <video 
          ref={videoRef}
          src="https://joy1.videvo.net/videvo_files/video/free/2019-11/large_watermarked/190828_07_Shoes_03_preview.mp4"
          className="h-full w-full object-cover"
          loop
          muted
        />

        {/* Overlay Controls */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-between p-10">
           <div className="flex justify-between items-start">
              <div className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black text-white uppercase tracking-widest border border-white/20">
                 Product in Action
              </div>
              <button className="h-12 w-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
                 <Maximize2 className="h-5 w-5" />
              </button>
           </div>

           <div className="flex items-end justify-between">
              <div className="flex-1">
                 <h4 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Vanguard Pro</h4>
                 <p className="text-white/60 text-xs font-medium max-w-xs mb-8">Experience the motion, the grip, and the lightweight feel of our flagship series.</p>
                 <button className="px-8 py-4 bg-white text-black rounded-full font-black uppercase text-[10px] tracking-widest flex items-center gap-3 hover:scale-105 transition-all shadow-xl">
                    <ShoppingBag className="h-4 w-4" /> Shop the look
                 </button>
              </div>
              
              <button 
                onClick={togglePlay}
                className="h-20 w-20 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-indigo-500/50 hover:scale-110 transition-all active:scale-95"
              >
                 {isPlaying ? <Pause className="h-8 w-8 fill-current" /> : <Play className="h-8 w-8 fill-current ml-1" />}
              </button>
           </div>
        </div>

        {/* Mute Toggle */}
        <button className="absolute top-10 left-10 h-10 w-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white md:hidden">
           <Volume2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
