"use client"

import { Building2, Globe, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function CorporateBusiness() {
  return (
    <footer className="w-full bg-[#f8fafc] text-slate-900 pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Logo & HQ */}
          <div className="lg:col-span-4 space-y-10">
             <div className="flex items-center gap-3">
                <Building2 className="h-10 w-10 text-blue-700" />
                <span className="text-2xl font-black tracking-tight text-slate-900">GlobalAssets.</span>
             </div>
             <div className="space-y-6 text-sm text-slate-500 font-medium">
                <div className="flex items-start gap-4">
                   <MapPin className="h-5 w-5 text-blue-700 mt-0.5" />
                   <span>Corporate Headquarters <br /> One Financial Plaza, NY 10004</span>
                </div>
                <div className="flex items-center gap-4">
                   <Phone className="h-5 w-5 text-blue-700" />
                   <span>+1 (212) 555-0900</span>
                </div>
                <div className="flex items-center gap-4">
                   <Mail className="h-5 w-5 text-blue-700" />
                   <span>investor.relations@globalassets.com</span>
                </div>
             </div>
          </div>

          {/* Business Units */}
          <div className="lg:col-span-2 lg:col-start-6 space-y-8">
             <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Services</h4>
             <ul className="space-y-4 text-sm font-bold text-slate-900">
                <li className="hover:text-blue-700 cursor-pointer transition-colors">Asset Management</li>
                <li className="hover:text-blue-700 cursor-pointer transition-colors">Private Equity</li>
                <li className="hover:text-blue-700 cursor-pointer transition-colors">Wealth Strategy</li>
                <li className="hover:text-blue-700 cursor-pointer transition-colors">Advisory</li>
             </ul>
          </div>

          {/* Governance */}
          <div className="lg:col-span-2 space-y-8">
             <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Governance</h4>
             <ul className="space-y-4 text-sm font-bold text-slate-900">
                <li className="hover:text-blue-700 cursor-pointer transition-colors">Board of Directors</li>
                <li className="hover:text-blue-700 cursor-pointer transition-colors">Ethics & Policy</li>
                <li className="hover:text-blue-700 cursor-pointer transition-colors">Compliance</li>
                <li className="hover:text-blue-700 cursor-pointer transition-colors">Annual Reports</li>
             </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-2 space-y-8">
             <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Global Offices</h4>
             <ul className="space-y-4 text-sm font-bold text-slate-900">
                <li className="hover:text-blue-700 cursor-pointer transition-colors">London, UK</li>
                <li className="hover:text-blue-700 cursor-pointer transition-colors">Singapore</li>
                <li className="hover:text-blue-700 cursor-pointer transition-colors">Dubai, UAE</li>
                <li className="hover:text-blue-700 cursor-pointer transition-colors">Tokyo, JP</li>
             </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-12 border-t border-slate-200">
           <div className="flex flex-wrap items-center gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-slate-300" /> SEC Registered</div>
              <div className="h-4 w-[1px] bg-slate-200 hidden md:block" />
              <p>© 2024 GlobalAssets International Group.</p>
           </div>
           <div className="flex gap-8">
              <svg className="h-5 w-5 text-slate-400 hover:text-blue-700 cursor-pointer transition-all" viewBox="0 0 24 24" fill="currentColor" aria-label="LinkedIn"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              <svg className="h-5 w-5 text-slate-400 hover:text-blue-700 cursor-pointer transition-all" viewBox="0 0 24 24" fill="currentColor" aria-label="Twitter / X"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
           </div>
        </div>
      </div>
    </footer>
  )
}
