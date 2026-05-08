"use client"

import { Cpu, Apple, Play, ExternalLink, ShieldCheck, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function TechStartup() {
  return (
    <footer className="w-full bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Logo & Intro */}
          <div className="col-span-2 lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
               <div className="h-12 w-12 bg-black rounded-2xl flex items-center justify-center text-white">
                  <Cpu className="h-7 w-7" />
               </div>
               <span className="text-2xl font-black tracking-tighter">HyperCore</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Scaling infrastructure for the AI-first world. Build, deploy, and monitor globally with unmatched latency.
            </p>
            
            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-3">
               <button className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-xl hover:scale-105 transition-all shadow-lg">
                  <Apple className="h-5 w-5 fill-current" />
                  <div className="text-left">
                     <p className="text-[8px] uppercase leading-none opacity-50">Download on</p>
                     <p className="text-xs font-bold leading-none">App Store</p>
                  </div>
               </button>
               <button className="flex items-center gap-2 bg-white border border-gray-200 text-black px-5 py-2.5 rounded-xl hover:scale-105 transition-all shadow-sm">
                  <Play className="h-5 w-5 fill-current" />
                  <div className="text-left">
                     <p className="text-[8px] uppercase leading-none opacity-50">Get it on</p>
                     <p className="text-xs font-bold leading-none">Play Store</p>
                  </div>
               </button>
            </div>
          </div>

          {/* Links 1 */}
          <div className="lg:col-span-2 lg:col-start-6 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Platform</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-900">
               <li className="hover:text-indigo-600 cursor-pointer transition-colors flex items-center justify-between">Cloud Engine <ExternalLink className="h-3 w-3" /></li>
               <li className="hover:text-indigo-600 cursor-pointer transition-colors">Serverless</li>
               <li className="hover:text-indigo-600 cursor-pointer transition-colors">Edge Computing</li>
               <li className="hover:text-indigo-600 cursor-pointer transition-colors">Pricing</li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Resources</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-900">
               <li className="hover:text-indigo-600 cursor-pointer transition-colors">Documentation</li>
               <li className="hover:text-indigo-600 cursor-pointer transition-colors">Open Source</li>
               <li className="hover:text-indigo-600 cursor-pointer transition-colors">Community</li>
               <li className="hover:text-indigo-600 cursor-pointer transition-colors">Case Studies</li>
            </ul>
          </div>

          {/* Links 3 */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Company</h4>
            <ul className="space-y-4 text-sm font-bold text-gray-900">
               <li className="hover:text-indigo-600 cursor-pointer transition-colors">Our Vision</li>
               <li className="hover:text-indigo-600 cursor-pointer transition-colors">Careers <span className="ml-1 text-[10px] bg-green-50 text-green-600 px-1.5 py-0.5 rounded">Hiring</span></li>
               <li className="hover:text-indigo-600 cursor-pointer transition-colors">Security</li>
               <li className="hover:text-indigo-600 cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-gray-100">
           <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-gray-400">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-green-500" /> ISO 27001 Certified</div>
              <div className="h-4 w-[1px] bg-gray-100" />
              <p>© 2024 HyperCore Systems Inc.</p>
           </div>
           <div className="flex gap-6">
              <svg className="h-5 w-5 text-gray-400 hover:text-black cursor-pointer transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-label="GitHub"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
              <svg className="h-5 w-5 text-gray-400 hover:text-black cursor-pointer transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-label="Twitter / X"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              <Globe className="h-5 w-5 text-gray-400 hover:text-black cursor-pointer transition-colors" />
           </div>
        </div>
      </div>
    </footer>
  )
}
