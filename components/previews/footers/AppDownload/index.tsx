"use client"

import { Apple, Play, Smartphone, QrCode, Globe, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function AppDownload() {
  return (
    <footer className="w-full bg-[#0a0a0a] text-white pt-24 pb-12 overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[140px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 mb-24 items-center">
          
          {/* Left: App Showcase */}
          <div className="lg:w-1/2 space-y-12">
             <div className="flex items-center gap-4">
                <div className="h-14 w-14 bg-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/20">
                   <Smartphone className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-black tracking-tighter">Mobile First.</h3>
             </div>
             <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">
                Experience the <br /> <span className="text-blue-500">Full Power</span> <br /> in your pocket.
             </h2>
             <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl hover:scale-105 transition-all shadow-xl">
                   <Apple className="h-6 w-6 fill-current" />
                   <div className="text-left">
                      <p className="text-[10px] uppercase font-bold leading-none opacity-50">Download on the</p>
                      <p className="text-sm font-black leading-none mt-1">App Store</p>
                   </div>
                </button>
                <button className="flex items-center gap-3 bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl hover:bg-white/20 transition-all shadow-sm">
                   <Play className="h-6 w-6 fill-current" />
                   <div className="text-left">
                      <p className="text-[10px] uppercase font-bold leading-none opacity-50">Get it on</p>
                      <p className="text-sm font-black leading-none mt-1">Google Play</p>
                   </div>
                </button>
             </div>
          </div>

          {/* Right: QR & Links */}
          <div className="lg:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/5 p-12 rounded-[48px] border border-white/10 backdrop-blur-xl">
             <div className="space-y-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Scan to Download</h4>
                <div className="h-40 w-40 bg-white p-4 rounded-3xl flex items-center justify-center shadow-2xl">
                   <QrCode className="h-full w-full text-black" />
                </div>
                <p className="text-xs text-white/40 font-medium leading-relaxed">
                   Point your camera at the QR code for an instant setup.
                </p>
             </div>
             <div className="space-y-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Navigation</h4>
                <ul className="space-y-4 text-sm font-bold text-white/80">
                   <li className="hover:text-blue-500 cursor-pointer transition-colors">Developer API</li>
                   <li className="hover:text-blue-500 cursor-pointer transition-colors">Enterprise Tools</li>
                   <li className="hover:text-blue-500 cursor-pointer transition-colors">Privacy Cloud</li>
                   <li className="hover:text-blue-500 cursor-pointer transition-colors">Support Hub</li>
                </ul>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/10">
           <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-white/20">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-blue-500" /> AES-256 Encrypted</div>
              <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
              <p>© 2024 Pocket Protocol Inc.</p>
           </div>
           <div className="flex gap-6">
              <svg className="h-5 w-5 text-white/20 hover:text-white cursor-pointer transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-label="Twitter / X"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              <svg className="h-5 w-5 text-white/20 hover:text-white cursor-pointer transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-label="GitHub"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
              <Globe className="h-5 w-5 text-white/20 hover:text-white cursor-pointer transition-colors" />
           </div>
        </div>
      </div>
    </footer>
  )
}
