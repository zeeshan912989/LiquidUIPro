"use client"

import { ShoppingCart } from 'lucide-react'

export default function Card01() {
  return (
    <div className="group relative w-full max-w-[280px] rounded-lg border border-gray-100 bg-white p-4 transition-all hover:shadow-lg">
      {/* Badge */}
      <div className="absolute left-2 top-2 z-10 rounded-full bg-red-500 px-2 py-1 text-[10px] font-bold text-white">
        SALE
      </div>
      
      {/* Image */}
      <div className="mb-4 aspect-square w-full overflow-hidden rounded-md bg-gray-50">
        <img 
          src="https://images.unsplash.com/photo-1617033762211-1243936081e6?q=80&w=2070&auto=format&fit=crop" 
          alt="Product"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Info */}
      <div className="space-y-1">
        <h4 className="text-sm font-medium text-gray-500">ZARA</h4>
        <h3 className="text-base font-bold text-gray-900">Premium Leather Handbag</h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-red-600">Rs. 4,500</span>
          <span className="text-sm text-gray-400 line-through">Rs. 6,000</span>
        </div>
      </div>

      {/* Quick Add */}
      <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-black py-2 text-sm font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
        <ShoppingCart className="h-4 w-4" />
        Add to Cart
      </button>
    </div>
  )
}
