"use client"

import { Star, ThumbsUp, MessageSquare, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function RatingReviews() {
  const ratings = [
    { stars: 5, count: 85, color: 'bg-green-500' },
    { stars: 4, count: 12, color: 'bg-green-400' },
    { stars: 3, count: 2, color: 'bg-yellow-400' },
    { stars: 2, count: 1, color: 'bg-orange-400' },
    { stars: 1, count: 0, color: 'bg-red-400' }
  ]

  return (
    <div className="max-w-4xl mx-auto p-12 bg-white rounded-[40px] shadow-2xl border border-gray-100 flex flex-col md:flex-row gap-16">
      
      {/* Overview Block */}
      <div className="md:w-1/3 flex flex-col items-center justify-center text-center">
         <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-6">Verified Reviews</div>
         <div className="text-8xl font-black text-gray-900 leading-none mb-4">4.9</div>
         <div className="flex gap-1 mb-4 text-yellow-500">
            {[1,2,3,4,5].map(i => <Star key={i} className="h-6 w-6 fill-current" />)}
         </div>
         <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Based on 128 Reviews</p>
      </div>

      {/* Breakdown Block */}
      <div className="flex-1 space-y-6">
         {ratings.map((r) => (
           <div key={r.stars} className="flex items-center gap-6 group">
              <span className="w-12 text-xs font-black text-gray-900 flex items-center gap-1">
                 {r.stars} <Star className="h-3 w-3 fill-current text-yellow-500" />
              </span>
              <div className="flex-1 h-2 bg-gray-50 rounded-full overflow-hidden border border-gray-100">
                 <div 
                   className={cn("h-full rounded-full transition-all duration-1000 group-hover:opacity-80", r.color)} 
                   style={{ width: `${r.count}%` }} 
                 />
              </div>
              <span className="w-12 text-right text-[10px] font-black text-gray-400 uppercase">{r.count}%</span>
           </div>
         ))}
         
         <div className="pt-10 flex flex-col sm:flex-row gap-4">
            <button className="flex-1 py-5 bg-black text-white font-black uppercase tracking-widest text-xs rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-800 transition-all">
               <MessageSquare className="h-4 w-4" /> Write a Review
            </button>
            <button className="flex-1 py-5 border border-gray-100 text-gray-900 font-black uppercase tracking-widest text-xs rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-50 transition-all">
               <CheckCircle2 className="h-4 w-4 text-green-500" /> Verified Only
            </button>
         </div>
      </div>
    </div>
  )
}
