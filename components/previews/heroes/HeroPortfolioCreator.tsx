"use client"

import { useState, useEffect } from 'react'
import { ArrowRight, MoveRight, Globe, Send, Terminal, MousePointer2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroPortfolioCreator() {
  const [mounted, setMounted] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 50,
        y: (e.clientY / window.innerHeight - 0.5) * 50
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative h-screen w-full bg-[#f8f8f8] overflow-hidden flex items-center">
      
      {/* Interactive Background Text */}
      <div 
        className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] select-none transition-transform duration-100 ease-out"
        style={{ transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)` }}
      >
         <h2 className="text-[30vw] font-black uppercase leading-none">CREATIVE</h2>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-8 w-full flex flex-col lg:flex-row items-center gap-24">
         
         {/* Left: Profile & Interactive Media */}
         <div className={cn(
           "flex-1 relative transition-all duration-1000",
           mounted ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
         )}>
            <div className="relative h-[500px] w-full max-w-md mx-auto group">
               {/* Animated Circles */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[120%] w-[120%] border border-black/5 rounded-full animate-spin-slow" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[110%] w-[110%] border border-black/10 rounded-full animate-spin-reverse" />
               
               {/* Main Profile Image Container */}
               <div className="relative h-full w-full bg-black rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  
                  {/* Floating Contact Tag */}
                  <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                     <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Available for projects</p>
                     <p className="text-sm font-bold text-white">hello@creative.studio</p>
                  </div>
               </div>

               {/* Interactive Labels */}
               <div 
                 className="absolute -top-12 -right-12 p-6 bg-white rounded-3xl shadow-2xl border border-black/5 animate-float-slow"
                 style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
               >
                  <p className="text-xs font-black uppercase tracking-widest text-black">8+ Years Exp.</p>
               </div>
               <div 
                 className="absolute bottom-24 -left-12 p-6 bg-black text-white rounded-3xl shadow-2xl animate-float-medium"
                 style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)` }}
               >
                  <p className="text-xs font-black uppercase tracking-widest text-white">Award Winning</p>
               </div>
            </div>
         </div>

         {/* Right: Content */}
         <div className="flex-1 text-center lg:text-left">
            <h1 className={cn(
              "text-7xl lg:text-[9rem] font-black tracking-tighter text-black leading-[0.8] mb-12 transition-all duration-1000 delay-200",
              mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            )}>
              Digital <br />
              <span className="text-transparent border border-black px-4">Artisan.</span>
            </h1>

            <p className={cn(
              "text-xl text-black/60 max-w-md mx-auto lg:mx-0 mb-16 leading-tight transition-all duration-1000 delay-400",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}>
              I craft high-end digital experiences for world-class brands. 
              Specializing in interactive design, 3D motion, and premium development.
            </p>

            <div className={cn(
              "flex flex-wrap justify-center lg:justify-start gap-8 items-center transition-all duration-1000 delay-600",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}>
               <button className="px-12 py-5 bg-black text-white font-black uppercase tracking-widest text-sm rounded-full hover:scale-105 transition-all flex items-center gap-4 group">
                 View Projects <MoveRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
               </button>
               <div className="flex gap-6">
                 <Globe className="h-5 w-5 text-black/20 hover:text-black transition-colors" />
                 <Send className="h-5 w-5 text-black/20 hover:text-black transition-colors" />
                 <Terminal className="h-5 w-5 text-black/20 hover:text-black transition-colors" />
               </div>
            </div>
         </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
        }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 7s ease-in-out infinite; }
      `}</style>
    </section>
  )
}
