"use client"

import { cn } from '@/lib/utils'

export default function UltraMinimal() {
  return (
    <footer className="w-full bg-white py-16 flex flex-col items-center">
      <div className="max-w-[1440px] mx-auto px-8 w-full flex flex-col items-center gap-10">
         
         {/* Simple Logo */}
         <div className="text-xl font-black uppercase tracking-tighter">Unit.</div>

         {/* Essential Links */}
         <nav>
            <ul className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
               <li className="hover:text-black cursor-pointer transition-colors">Journal</li>
               <li className="hover:text-black cursor-pointer transition-colors">Imprint</li>
               <li className="hover:text-black cursor-pointer transition-colors">Contact</li>
            </ul>
         </nav>

         {/* Tiny Copyright */}
         <p className="text-[9px] font-medium text-gray-300 uppercase tracking-[0.4em]">
            © 2024 Unit Design. Minimal by Choice.
         </p>
      </div>
    </footer>
  )
}
