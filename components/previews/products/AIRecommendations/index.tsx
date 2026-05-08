"use client"

import { Sparkles, ShoppingBag, Plus, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function AIRecommendations() {
  const recommendations = [
    { name: 'Aura Sport 5', price: 129, rating: 4.8, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=300' },
    { name: 'Stealth Pack 2.0', price: 89, rating: 4.9, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=300' },
    { name: 'Vision X1', price: 210, rating: 4.7, img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=300' }
  ]

  return (
    <div className="max-w-5xl mx-auto p-12 bg-white rounded-[48px] shadow-2xl border border-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
         <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
               <Sparkles className="h-4 w-4" />
               <span>AI-Powered Suggestions</span>
            </div>
            <h3 className="text-4xl font-black uppercase tracking-tighter italic">Recommended for You</h3>
         </div>
         <button className="text-xs font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:opacity-50 transition-all">View Full Collection</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
         {recommendations.map((p, i) => (
           <div key={i} className="group cursor-pointer">
              <div className="relative aspect-square rounded-[32px] overflow-hidden bg-gray-50 border border-gray-50 mb-6 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                 <img src={p.img} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <button className="h-14 w-14 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl text-black hover:bg-black hover:text-white">
                       <Plus className="h-6 w-6" />
                    </button>
                 </div>
              </div>
              
              <div className="flex justify-between items-start">
                 <div>
                    <h4 className="text-sm font-black uppercase tracking-tighter mb-1">{p.name}</h4>
                    <div className="flex items-center gap-2">
                       <div className="flex text-yellow-400">
                          <Star className="h-3 w-3 fill-current" />
                       </div>
                       <span className="text-[10px] font-bold text-gray-400">{p.rating}</span>
                    </div>
                 </div>
                 <span className="text-lg font-black text-indigo-600">${p.price}</span>
              </div>
           </div>
         ))}
      </div>
    </div>
  )
}
