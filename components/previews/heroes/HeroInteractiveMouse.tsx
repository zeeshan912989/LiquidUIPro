"use client"

import { useState, useEffect } from 'react'
import { Sparkles, MousePointer2, Zap, ArrowRight, Layers } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroInteractiveMouse() {
  const [mounted, setMounted] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative h-screen w-full bg-[#050505] overflow-hidden flex items-center justify-center cursor-none">
      
      {/* Interactive Mouse Glow Follower */}
      <div 
        className="fixed pointer-events-none z-50 h-[400px] w-[400px] bg-indigo-600/20 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out"
        style={{ left: mousePos.x, top: mousePos.y }}
      />
      
      {/* Custom Cursor */}
      <div 
        className="fixed pointer-events-none z-[100] h-4 w-4 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out flex items-center justify-center"
        style={{ left: mousePos.x, top: mousePos.y }}
      >
         <div className="h-1 w-1 bg-black rounded-full" />
      </div>

      {/* Floating Elements that react to mouse */}
      <div className="absolute inset-0 z-0">
         {mounted && [...Array(20)].map((_, i) => (
           <div 
             key={i}
             className="absolute h-1 w-1 bg-white/20 rounded-full"
             style={{ 
               top: `${Math.random() * 100}%`, 
               left: `${Math.random() * 100}%`,
               transform: `translate(${(mousePos.x - window.innerWidth/2) * (Math.random() * 0.05)}px, ${(mousePos.y - window.innerHeight/2) * (Math.random() * 0.05)}px)`
             }}
           />
         ))}
      </div>

      <div className="relative z-10 text-center px-8">
         <div className={cn(
           "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-black uppercase tracking-[0.5em] mb-12 transition-all duration-1000",
           mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
         )}>
           <MousePointer2 className="h-4 w-4" />
           <span>Interactive Experience</span>
         </div>

         <h1 className={cn(
           "text-6xl md:text-[12rem] font-black italic text-white uppercase tracking-tighter leading-[0.8] mb-12 transition-all duration-1000 delay-200",
           mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
         )}>
           Feel the <br />
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 animate-pulse">Connection.</span>
         </h1>

         <p className={cn(
           "text-xl text-white/40 max-w-2xl mx-auto mb-16 leading-relaxed transition-all duration-1000 delay-400",
           mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
         )}>
           Move your mouse to interact with the environment. 
           We build digital worlds that respond to your every touch, move, and click.
         </p>

         <div className={cn(
           "flex flex-wrap justify-center gap-8 transition-all duration-1000 delay-600",
           mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
         )}>
            <button className="px-12 py-6 bg-white text-black font-black uppercase tracking-widest text-sm rounded-full hover:scale-110 transition-all flex items-center gap-4 group">
               Start Exploration <Zap className="h-5 w-5 fill-current" />
            </button>
            <button className="px-12 py-6 border border-white/20 text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-white hover:text-black transition-all">
               Our Philosophy
            </button>
         </div>
      </div>

      {/* Floating UI Elements */}
      <div className="absolute top-1/4 left-12 animate-float-slow hidden xl:block">
         <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl">
            <Layers className="h-8 w-8 text-indigo-400 mb-4" />
            <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">Multi-Layered</p>
         </div>
      </div>
      <div className="absolute bottom-1/4 right-12 animate-float-medium hidden xl:block">
         <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl">
            <Sparkles className="h-8 w-8 text-pink-400 mb-4" />
            <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">Particle Engine</p>
         </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
      `}</style>
    </section>
  )
}
