"use client"

import { useState, useEffect } from 'react'
import { Zap, Shield, TrendingUp, Cpu, Globe, ArrowRight, Wallet, Bitcoin } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HeroCryptoWeb3() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative h-screen w-full bg-[#020617] overflow-hidden flex items-center">
      
      {/* Animated Cyber Grid & Mesh */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15)_0%,transparent_70%)]" />
         {/* Animated Glows */}
         <div className="absolute -top-20 -left-20 h-96 w-96 bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
         <div className="absolute -bottom-20 -right-20 h-96 w-96 bg-cyan-600/20 blur-[120px] rounded-full animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-8 w-full grid lg:grid-cols-2 gap-24 items-center">
         
         {/* Left: Content */}
         <div className="text-center lg:text-left">
            <div className={cn(
              "inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8 transition-all duration-1000",
              mounted ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            )}>
              <Bitcoin className="h-4 w-4" />
              <span>Decentralized Future v3.0</span>
            </div>

            <h1 className={cn(
              "text-6xl lg:text-9xl font-black tracking-tighter text-white leading-[0.85] mb-10 transition-all duration-1000 delay-200",
              mounted ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            )}>
              Own Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 animate-shimmer bg-[length:200%_auto]">
                Wealth.
              </span>
            </h1>

            <p className={cn(
              "text-xl text-slate-400 max-w-lg mx-auto lg:mx-0 mb-12 leading-relaxed transition-all duration-1000 delay-400",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}>
              Secure, fast, and fully transparent. The next generation of finance is here. 
              Join the 10M+ users building on the most trusted Web3 platform.
            </p>

            <div className={cn(
              "flex flex-wrap justify-center lg:justify-start gap-6 transition-all duration-1000 delay-600",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}>
               <button className="px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-sm rounded-2xl shadow-2xl shadow-blue-500/40 transition-all active:scale-95 flex items-center gap-3 group">
                 Connect Wallet <Wallet className="h-5 w-5 group-hover:rotate-12 transition-transform" />
               </button>
               <button className="px-12 py-5 border border-white/10 bg-white/5 backdrop-blur-xl text-white font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-white/10 transition-all flex items-center gap-3">
                 View Markets <TrendingUp className="h-5 w-5 text-green-400" />
               </button>
            </div>

            {/* Network Stats */}
            <div className={cn(
              "mt-16 grid grid-cols-3 gap-8 pt-12 border-t border-white/5 transition-all duration-1000 delay-800",
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}>
               <div>
                  <p className="text-white font-black text-2xl mb-1">0.02s</p>
                  <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">Finality</p>
               </div>
               <div>
                  <p className="text-white font-black text-2xl mb-1">$0.001</p>
                  <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">Avg. Fee</p>
               </div>
               <div>
                  <p className="text-white font-black text-2xl mb-1">∞</p>
                  <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">Scalability</p>
               </div>
            </div>
         </div>

         {/* Right: Glassmorphism Card & Interactive Chart */}
         <div className={cn(
           "relative hidden lg:block transition-all duration-1000 delay-1000",
           mounted ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
         )}>
            <div className="relative bg-white/5 backdrop-blur-3xl rounded-[48px] border border-white/10 p-10 shadow-2xl overflow-hidden group">
               {/* Inner Gloss */}
               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
               
               <div className="flex justify-between items-center mb-10">
                  <div className="flex gap-4">
                     <div className="h-12 w-12 bg-blue-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                        <Bitcoin className="h-6 w-6" />
                     </div>
                     <div>
                        <p className="text-white font-black">BTC / USDT</p>
                        <p className="text-xs text-green-400 font-bold flex items-center gap-1"><TrendingUp className="h-3 w-3" /> +5.42%</p>
                     </div>
                  </div>
                  <div className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center text-white/40 border border-white/10"><Globe className="h-5 w-5" /></div>
               </div>

               {/* Mock Live Chart */}
               <div className="h-48 w-full flex items-end gap-2 mb-10">
                  {[40, 60, 45, 80, 55, 90, 70, 85, 60, 100].map((h, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-blue-500/20 border-t-2 border-blue-400 group-hover:bg-blue-500/40 transition-all duration-500" 
                      style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }} 
                    />
                  ))}
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                     <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-2">Market Cap</p>
                     <p className="text-lg font-black text-white">$1.2T</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                     <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-2">24h Volume</p>
                     <p className="text-lg font-black text-white">$45B</p>
                  </div>
               </div>
            </div>

            {/* Decorative Floating Elements */}
            <div className="absolute -top-12 -right-12 h-24 w-24 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
            <div className="absolute -bottom-12 -left-12 h-32 w-32 bg-indigo-500/20 blur-3xl rounded-full animate-pulse delay-700" />
         </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .animate-shimmer { animation: shimmer 4s linear infinite; }
      `}</style>
    </section>
  )
}
