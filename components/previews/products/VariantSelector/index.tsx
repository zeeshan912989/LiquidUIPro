"use client"

import { useState } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function VariantSelector() {
  const [selectedColor, setSelectedColor] = useState('Midnight')
  const [selectedSize, setSelectedSize] = useState('M')

  const colors = [
    { name: 'Midnight', hex: '#1a1a1a' },
    { name: 'Ocean', hex: '#1e40af' },
    { name: 'Rose', hex: '#e11d48' },
    { name: 'Sand', hex: '#f5f5f4' }
  ]

  const sizes = ['S', 'M', 'L', 'XL', 'XXL']

  return (
    <div className="max-w-md mx-auto p-12 bg-white rounded-[40px] shadow-2xl border border-gray-100">
      
      {/* Color Selector */}
      <div className="mb-10">
         <div className="flex justify-between items-center mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Color</span>
            <span className="text-xs font-bold text-gray-900">{selectedColor}</span>
         </div>
         <div className="flex gap-4">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={cn(
                  "h-12 w-12 rounded-full border-4 flex items-center justify-center transition-all",
                  selectedColor === color.name ? "border-indigo-600 scale-110 shadow-lg" : "border-transparent hover:border-gray-200"
                )}
                style={{ backgroundColor: color.hex }}
              >
                {selectedColor === color.name && (
                  <Check className={cn("h-5 w-5", color.hex === '#f5f5f4' ? "text-black" : "text-white")} />
                )}
              </button>
            ))}
         </div>
      </div>

      {/* Size Selector */}
      <div>
         <div className="flex justify-between items-center mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Size</span>
            <span className="text-xs font-bold text-gray-900">Size Guide</span>
         </div>
         <div className="flex flex-wrap gap-3">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={cn(
                  "h-14 w-14 rounded-2xl border-2 font-black text-sm transition-all flex items-center justify-center",
                  selectedSize === size 
                    ? "bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-100 scale-105" 
                    : "bg-white border-gray-100 text-gray-400 hover:border-gray-300 hover:text-gray-900"
                )}
              >
                {size}
              </button>
            ))}
         </div>
      </div>

      {/* Helper Text */}
      <p className="mt-10 text-[10px] font-medium text-gray-400 text-center uppercase tracking-widest">
         Selected: {selectedColor} / {selectedSize}
      </p>
    </div>
  )
}
