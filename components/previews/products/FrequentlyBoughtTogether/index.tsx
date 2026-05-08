"use client"

import { Plus, ShoppingCart, Check } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function FrequentlyBoughtTogether() {
  const [items, setItems] = useState([
    { id: 1, name: 'Main Product', price: 189, checked: true, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200' },
    { id: 2, name: 'Premium Socks', price: 25, checked: true, img: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?q=80&w=200' },
    { id: 3, name: 'Cleaning Kit', price: 15, checked: false, img: 'https://images.unsplash.com/photo-1628102476625-5927419ce556?q=80&w=200' }
  ])

  const totalPrice = items.reduce((acc, item) => item.checked ? acc + item.price : acc, 0)
  const bundleCount = items.filter(i => i.checked).length

  const toggleItem = (id: number) => {
    setItems(items.map(i => i.id === id ? { ...i, checked: !i.checked } : i))
  }

  return (
    <div className="max-w-4xl mx-auto p-12 bg-white rounded-[48px] shadow-2xl border border-gray-100">
      <div className="flex flex-col lg:flex-row items-center gap-12">
         
         {/* Bundle Images View */}
         <div className="flex items-center gap-6">
            {items.map((item, idx) => (
              <div key={item.id} className="flex items-center gap-6">
                 <div className={cn(
                   "h-24 w-24 md:h-32 md:w-32 rounded-3xl overflow-hidden border-2 transition-all relative",
                   item.checked ? "border-indigo-600 shadow-xl opacity-100" : "border-transparent opacity-30 grayscale"
                 )}>
                    <img src={item.img} className="h-full w-full object-cover" alt="" />
                    <button 
                      onClick={() => toggleItem(item.id)}
                      className={cn(
                        "absolute top-2 right-2 h-6 w-6 rounded-full flex items-center justify-center transition-all",
                        item.checked ? "bg-indigo-600 text-white" : "bg-white border border-gray-200 text-gray-300"
                      )}
                    >
                       {item.checked ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </button>
                 </div>
                 {idx < items.length - 1 && <Plus className="h-6 w-6 text-gray-200" />}
              </div>
            ))}
         </div>

         {/* Selection & Checkout */}
         <div className="flex-1 space-y-6 w-full lg:border-l border-gray-50 lg:pl-12">
            <h4 className="text-xl font-black uppercase tracking-tighter italic">Frequently Bought Together</h4>
            
            <div className="space-y-3">
               {items.map(item => (
                 <label key={item.id} className="flex items-center gap-3 cursor-pointer group">
                    <div className={cn(
                      "h-5 w-5 rounded border-2 flex items-center justify-center transition-all",
                      item.checked ? "bg-indigo-600 border-indigo-600" : "bg-white border-gray-200"
                    )}>
                       <input type="checkbox" className="hidden" checked={item.checked} onChange={() => toggleItem(item.id)} />
                       {item.checked && <Check className="h-3 w-3 text-white" />}
                    </div>
                    <span className={cn("text-xs font-bold transition-colors", item.checked ? "text-gray-900" : "text-gray-400")}>
                       {item.name} <span className="ml-1 text-indigo-600">${item.price}</span>
                    </span>
                 </label>
               ))}
            </div>

            <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
               <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total for {bundleCount} items</p>
                  <p className="text-3xl font-black text-gray-900">${totalPrice}</p>
               </div>
               <button className="px-10 py-5 bg-black text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:scale-105 transition-all shadow-xl active:scale-95">
                  <ShoppingCart className="h-4 w-4" /> Add Bundle
               </button>
            </div>
         </div>
      </div>
    </div>
  )
}
