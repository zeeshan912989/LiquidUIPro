"use client"

import { Zap, Globe, ArrowRight, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function AnimatedGradientFooter() {
  return (
    <footer className="w-full relative overflow-hidden pt-32 pb-16">
      
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-[#050505] -z-20" />
      <div className="absolute inset-0 -z-10 opacity-30">
         <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-[spin_20s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,#4f46e5,#3b82f6,#06b6d4,#8b5cf6,#4f46e5)] blur-[100px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24">
           
           {/* Brand High Impact */}
           <div className="lg:col-span-6 space-y-12">
              <div className="flex items-center gap-3">
                 <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center text-black">
                    <Sparkles className="h-6 w-6 fill-current" />
                 </div>
                 <span className="text-3xl font-black tracking-tighter text-white">Lumina.</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter uppercase">
                 The Future is <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 italic">Luminous.</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-6">
                 <button className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-full hover:scale-105 transition-all shadow-2xl">
                    Get Started Free
                 </button>
                 <button className="px-10 py-5 border border-white/20 text-white font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-white/5 transition-all">
                    Book a Demo
                 </button>
              </div>
           </div>

           {/* Links */}
           <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-12 pt-4">
              <div className="space-y-8">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Platform</h4>
                 <ul className="space-y-5 text-sm font-bold text-white/60">
                    <li className="hover:text-white cursor-pointer transition-colors">Features</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Solutions</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Integrations</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Enterprise</li>
                 </ul>
              </div>
              <div className="space-y-8">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Company</h4>
                 <ul className="space-y-5 text-sm font-bold text-white/60">
                    <li className="hover:text-white cursor-pointer transition-colors">Our Mission</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Journal</li>
                    <li className="hover:text-white cursor-pointer transition-colors">Legal</li>
                 </ul>
              </div>
              <div className="space-y-8 col-span-2 md:col-span-1">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Connect</h4>
                 <div className="flex gap-4">
                    <svg className="h-5 w-5 text-white/40 hover:text-white cursor-pointer transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-label="Twitter / X"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    <svg className="h-5 w-5 text-white/40 hover:text-white cursor-pointer transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-label="GitHub"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
                    <Globe className="h-5 w-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
                 </div>
              </div>
           </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-12 border-t border-white/10">
           <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">
              © 2024 Lumina Labs. Made with light.
           </p>
           <div className="flex items-center gap-6">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">All systems operational</span>
           </div>
        </div>
      </div>
    </footer>
  )
}
