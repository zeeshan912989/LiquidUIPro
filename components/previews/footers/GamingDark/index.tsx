"use client"

import { Gamepad2, MessageSquare, Zap, ArrowUpRight, Trophy } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function GamingDark() {
  return (
    <footer className="w-full bg-[#050505] text-white pt-24 pb-12 overflow-hidden relative">
      
      {/* Neon Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-24 p-12 bg-white/5 rounded-[40px] border border-white/10 backdrop-blur-xl">
           <div className="flex items-center gap-8">
              <div className="h-20 w-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-cyan-500/20 group cursor-pointer hover:rotate-6 transition-transform">
                 <Gamepad2 className="h-10 w-10 text-white fill-current" />
              </div>
              <div>
                 <h2 className="text-3xl font-black uppercase tracking-tighter italic">Level Up Your Gear.</h2>
                 <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mt-2 flex items-center gap-2">
                    <Zap className="h-4 w-4 fill-current" /> High Performance Hardware
                 </p>
              </div>
           </div>
           <button className="px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase tracking-widest text-xs rounded-2xl transition-all shadow-xl shadow-cyan-500/20 active:scale-95 flex items-center gap-3">
              Join Discord <MessageSquare className="h-4 w-4 fill-current" />
           </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-12 mb-24">
          {/* Links 1 */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-500">Inventory</h4>
            <ul className="space-y-4 text-sm font-bold text-white/60">
               <li className="hover:text-cyan-400 cursor-pointer transition-colors flex items-center justify-between group">
                  Keyboards <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" />
               </li>
               <li className="hover:text-cyan-400 cursor-pointer transition-colors flex items-center justify-between group">
                  Headsets <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" />
               </li>
               <li className="hover:text-cyan-400 cursor-pointer transition-colors flex items-center justify-between group">
                  Laptops <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all" />
               </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-xs font-black uppercase tracking-widest text-gray-500">Guild</h4>
            <ul className="space-y-4 text-sm font-bold text-white/60">
               <li className="hover:text-purple-400 cursor-pointer transition-colors">About Us</li>
               <li className="hover:text-purple-400 cursor-pointer transition-colors">Affiliates</li>
               <li className="hover:text-purple-400 cursor-pointer transition-colors">Careers</li>
               <li className="hover:text-purple-400 cursor-pointer transition-colors">Support</li>
            </ul>
          </div>

          {/* Socials */}
          <div className="col-span-2 lg:col-span-4 lg:col-start-9 space-y-10 text-center lg:text-right">
             <div className="flex justify-center lg:justify-end gap-6">
                <div className="h-14 w-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-cyan-500 hover:text-black transition-all cursor-pointer">
                   <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-label="Twitch"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>
                </div>
                <div className="h-14 w-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-cyan-500 hover:text-black transition-all cursor-pointer">
                   <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-label="Twitter / X"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </div>
             </div>
             <div className="p-6 bg-cyan-500/10 border border-cyan-500/20 rounded-3xl inline-flex items-center gap-4 text-cyan-400">
                <Trophy className="h-6 w-6" />
                <div className="text-left">
                   <p className="text-[10px] font-black uppercase tracking-widest">Global Partner</p>
                   <p className="text-xs font-bold text-white">E-Sports World Series</p>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
           <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]">
              © 2024 Titan Gaming Labs. Stay Tuned.
           </p>
           <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/20">
              <span className="hover:text-cyan-400 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-cyan-400 cursor-pointer transition-colors">Terms of War</span>
           </div>
        </div>
      </div>
    </footer>
  )
}
