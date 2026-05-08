"use client"

import { Zap, Send, Mail, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function GlassmorphismFooter() {
  return (
    <footer className="w-full bg-[#050505] pt-32 pb-16 overflow-hidden relative">
      
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/20 blur-[140px] rounded-full -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/20 blur-[120px] rounded-full translate-y-1/2 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-12 relative z-10">
        
        {/* Glass Card Content */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-3xl rounded-[64px] p-16 md:p-24 shadow-2xl">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-20">
              
              {/* Brand */}
              <div className="lg:col-span-5 space-y-12">
                 <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="h-16 w-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform">
                       <Zap className="h-8 w-8 text-white fill-current" />
                    </div>
                    <span className="text-4xl font-black tracking-tighter text-white">Vesper.</span>
                 </div>
                 <h2 className="text-3xl font-medium text-white/80 leading-relaxed italic">
                    The next evolution of digital experiences. 
                    Built for the decentralized world.
                 </h2>
                 <div className="flex gap-6">
                    <div className="h-14 w-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-white/10 transition-all cursor-pointer">
                       <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-label="Twitter / X"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </div>
                    <div className="h-14 w-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-white/10 transition-all cursor-pointer">
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-label="GitHub"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
                    </div>
                 </div>
              </div>

              {/* Links Grid */}
              <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
                 <div className="space-y-8">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Protocol</h4>
                    <ul className="space-y-4 text-sm font-bold text-white/60">
                       <li className="hover:text-cyan-400 cursor-pointer transition-colors">Nodes</li>
                       <li className="hover:text-cyan-400 cursor-pointer transition-colors">Governance</li>
                       <li className="hover:text-cyan-400 cursor-pointer transition-colors">Staking</li>
                    </ul>
                 </div>
                 <div className="space-y-8">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Developers</h4>
                    <ul className="space-y-4 text-sm font-bold text-white/60">
                       <li className="hover:text-purple-400 cursor-pointer transition-colors">API Docs</li>
                       <li className="hover:text-purple-400 cursor-pointer transition-colors">SDK Core</li>
                       <li className="hover:text-purple-400 cursor-pointer transition-colors">CLI</li>
                    </ul>
                 </div>
                 <div className="space-y-8 col-span-2 md:col-span-1">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Newsletter</h4>
                    <div className="relative">
                       <input 
                         type="email" 
                         placeholder="Your Email" 
                         className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all text-white"
                       />
                       <button className="absolute right-2 top-2 h-10 w-10 bg-cyan-500 text-black rounded-xl flex items-center justify-center hover:scale-105 transition-all">
                          <Send className="h-4 w-4" />
                       </button>
                    </div>
                 </div>
              </div>
           </div>

           {/* Bottom Bar */}
           <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-16 border-t border-white/10">
              <div className="flex items-center gap-4 text-xs font-bold text-white/20">
                 <ShieldCheck className="h-5 w-5 text-cyan-500" />
                 Fully Audited Infrastructure
              </div>
              <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.5em] text-white/20">
                 <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
                 <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
              </div>
           </div>
        </div>
      </div>
    </footer>
  )
}
