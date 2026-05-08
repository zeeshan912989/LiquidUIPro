"use client"

import { useState, useEffect } from 'react'
import { Sparkles, Layers, Box, ArrowRight, Zap, MousePointer2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Hero3DFloating() {
  const [mounted, setMounted] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative h-screen w-full bg-[#08080a] overflow-hidden flex items-center justify-center perspective-1000">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-8 grid lg:grid-cols-2 gap-24 items-center">
        
        {/* Left: Content */}
        <div className="text-center lg:text-left">
           <div className={cn(
             "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8 transition-all duration-1000",
             mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
           )}>
             <Box className="h-4 w-4" />
             <span>Dimensional Design System</span>
           </div>

           <h1 className={cn(
             "text-6xl lg:text-9xl font-black tracking-tighter text-white leading-[0.8] mb-10 transition-all duration-1000 delay-200",
             mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
           )}>
             Depth. <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
               Redefined.
             </span>
           </h1>

           <p className={cn(
             "text-xl text-gray-400 max-w-lg mx-auto lg:mx-0 mb-12 leading-relaxed transition-all duration-1000 delay-400",
             mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
           )}>
             Break the flat web barrier. Our 3D floating interface brings your content to life 
             with multi-layered depth and interactive motion.
           </p>

           <div className={cn(
             "flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 transition-all duration-1000 delay-600",
             mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
           )}>
              <button className="px-12 py-5 bg-white text-black font-black uppercase tracking-widest text-sm rounded-full shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:scale-105 transition-all flex items-center gap-3">
                Get Started <Zap className="h-4 w-4 fill-current" />
              </button>
              <button className="flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest hover:text-indigo-400 transition-colors">
                <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center">
                   <ArrowRight className="h-4 w-4" />
                </div>
                View Showcase
              </button>
           </div>
        </div>

        {/* Right: 3D Floating Scene */}
        <div 
          className="relative h-[600px] hidden lg:flex items-center justify-center"
          style={{ 
            transform: `rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
           {/* Center Card */}
           <div className="relative h-96 w-72 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-[40px] border border-white/10 backdrop-blur-2xl shadow-2xl flex items-center justify-center group overflow-hidden">
              <div className="h-48 w-48 bg-white/5 rounded-3xl animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
           </div>

           {/* Floating elements at different depths */}
           <div 
             className="absolute -top-12 -left-12 h-32 w-32 bg-indigo-500 rounded-3xl shadow-2xl shadow-indigo-500/40 animate-float-slow opacity-80" 
             style={{ transform: `translateZ(50px)` }}
           />
           <div 
             className="absolute bottom-12 -right-8 h-40 w-40 bg-purple-600/30 backdrop-blur-xl border border-white/10 rounded-[32px] shadow-2xl flex items-center justify-center animate-float-medium"
             style={{ transform: `translateZ(80px)` }}
           >
              <Sparkles className="h-12 w-12 text-white/40" />
           </div>
           <div 
             className="absolute top-1/2 -right-24 h-24 w-24 bg-pink-500/40 blur-xl rounded-full animate-pulse" 
             style={{ transform: `translateZ(-40px)` }}
           />
           <div 
             className="absolute top-24 right-4 h-16 w-16 bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center shadow-2xl animate-float-fast"
             style={{ transform: `translateZ(120px)` }}
           >
              <Layers className="h-6 w-6 text-indigo-400" />
           </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateZ(50px); }
          50% { transform: translateY(-30px) translateZ(70px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) translateZ(80px); }
          50% { transform: translateY(-20px) translateZ(100px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) translateZ(120px); }
          50% { transform: translateY(-40px) translateZ(150px); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
      `}</style>
    </section>
  )
}
