"use client"

import { Ruler, X, ChevronRight, Info } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function SizeGuide() {
  const [isOpen, setIsOpen] = useState(false)
  const [unit, setUnit] = useState<'cm' | 'in'>('cm')

  const sizes = [
    { label: 'S', chest: '91-96', waist: '76-81', hip: '91-96' },
    { label: 'M', chest: '97-102', waist: '82-87', hip: '97-102' },
    { label: 'L', chest: '103-108', waist: '88-93', hip: '103-108' },
    { label: 'XL', chest: '109-114', waist: '94-99', hip: '109-114' }
  ]

  return (
    <div className="max-w-md mx-auto p-12 bg-white rounded-[40px] shadow-2xl border border-gray-100 flex flex-col items-center">
      
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-4 group p-6 bg-gray-50 rounded-[32px] w-full border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all"
      >
         <div className="h-14 w-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-xl border border-gray-50 group-hover:scale-110 transition-transform">
            <Ruler className="h-6 w-6" />
         </div>
         <div className="flex-1 text-left">
            <h4 className="text-sm font-black uppercase tracking-tighter italic">Size Guide</h4>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Find your perfect fit</p>
         </div>
         <ChevronRight className="h-5 w-5 text-gray-300 group-hover:translate-x-2 transition-transform" />
      </button>

      {/* Modal Overlay */}
      <div className={cn(
        "fixed inset-0 z-[100] bg-black/40 backdrop-blur-md flex items-center justify-center p-6 transition-all duration-500",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
         <div className={cn(
           "bg-white w-full max-w-2xl rounded-[48px] overflow-hidden shadow-2xl transition-all duration-500 transform",
           isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-20"
         )}>
            <div className="p-10 border-b border-gray-50 flex items-center justify-between">
               <div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter italic">Official Sizing</h3>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Regular Fit Collection</p>
               </div>
               <button onClick={() => setIsOpen(false)} className="h-14 w-14 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-black transition-all">
                  <X className="h-6 w-6" />
               </button>
            </div>

            <div className="p-10">
               <div className="flex justify-end gap-2 mb-8">
                  <button 
                    onClick={() => setUnit('cm')}
                    className={cn("px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all", unit === 'cm' ? "bg-black text-white" : "bg-gray-100 text-gray-400")}
                  >CM</button>
                  <button 
                    onClick={() => setUnit('in')}
                    className={cn("px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all", unit === 'in' ? "bg-black text-white" : "bg-gray-100 text-gray-400")}
                  >IN</button>
               </div>

               <div className="overflow-x-auto">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-100">
                           <th className="pb-6">Size</th>
                           <th className="pb-6">Chest</th>
                           <th className="pb-6">Waist</th>
                           <th className="pb-6">Hip</th>
                        </tr>
                     </thead>
                     <tbody className="text-sm font-bold text-gray-900">
                        {sizes.map((s, i) => (
                          <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                             <td className="py-6">{s.label}</td>
                             <td className="py-6">{s.chest}</td>
                             <td className="py-6">{s.waist}</td>
                             <td className="py-6">{s.hip}</td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </div>

               <div className="mt-10 p-6 bg-indigo-50/50 rounded-3xl flex items-start gap-4">
                  <Info className="h-6 w-6 text-indigo-500 mt-1" />
                  <p className="text-xs font-medium text-gray-500 leading-relaxed">
                     Measurements shown represent body measurements, not product dimensions. 
                     For a looser fit, we recommend ordering one size up.
                  </p>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}
