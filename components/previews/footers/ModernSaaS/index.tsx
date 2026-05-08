"use client"

import { Zap, Globe, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ModernSaaS() {
  return (
    <footer className="w-full bg-[#030712] text-white pt-24 pb-12 overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-12 mb-24">
          
          {/* Brand Block */}
          <div className="col-span-2 lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
               <div className="h-10 w-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <Zap className="h-6 w-6 text-white fill-current" />
               </div>
               <span className="text-2xl font-black tracking-tight">Flux.io</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Automate your workflow with AI-driven intelligence. The modern stack for high-growth engineering teams.
            </p>
            <div className="flex gap-5">
               <svg className="h-5 w-5 text-gray-500 hover:text-white transition-colors cursor-pointer" viewBox="0 0 24 24" fill="currentColor" aria-label="GitHub"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
               <svg className="h-5 w-5 text-gray-500 hover:text-white transition-colors cursor-pointer" viewBox="0 0 24 24" fill="currentColor" aria-label="Twitter / X"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
               <Globe className="h-5 w-5 text-gray-500 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Product */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-bold text-white">Product</h4>
            <ul className="space-y-4 text-sm text-gray-400">
               <li className="hover:text-indigo-400 cursor-pointer transition-colors flex items-center gap-2">Features <span className="text-[10px] bg-indigo-500/10 text-indigo-400 px-1.5 py-0.5 rounded">New</span></li>
               <li className="hover:text-indigo-400 cursor-pointer transition-colors">Integrations</li>
               <li className="hover:text-indigo-400 cursor-pointer transition-colors">Pricing</li>
               <li className="hover:text-indigo-400 cursor-pointer transition-colors">Changelog</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-bold text-white">Developers</h4>
            <ul className="space-y-4 text-sm text-gray-400">
               <li className="hover:text-indigo-400 cursor-pointer transition-colors flex items-center gap-2">Documentation <ExternalLink className="h-3 w-3" /></li>
               <li className="hover:text-indigo-400 cursor-pointer transition-colors">API Reference</li>
               <li className="hover:text-indigo-400 cursor-pointer transition-colors">SDKs</li>
               <li className="hover:text-indigo-400 cursor-pointer transition-colors">Status Page</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 lg:col-span-4 space-y-8">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
               <h4 className="text-lg font-bold mb-4">Stay in the loop</h4>
               <p className="text-sm text-gray-400 mb-6">Get the latest product updates and engineering deep-dives.</p>
               <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="name@company.com" 
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                  />
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl px-4 py-3 transition-all">
                     <ArrowRight className="h-4 w-4" />
                  </button>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                 <ShieldCheck className="h-4 w-4 text-green-500" />
                 SOC2 Type II Compliant
              </div>
              <div className="h-4 w-[1px] bg-white/5" />
              <p className="text-xs text-gray-500">© 2024 Flux Technologies Inc.</p>
           </div>
           <div className="flex gap-8 text-xs font-medium text-gray-500">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
              <span className="hover:text-white cursor-pointer transition-colors">Security</span>
           </div>
        </div>
      </div>
    </footer>
  )
}
