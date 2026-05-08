"use client"

import { ShoppingBag, Heart, Filter, ChevronDown, Grid, List } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProductGridTemplate() {
  const products = [
    { id: 1, name: 'Minimalist Chair', price: '$420', image: '/assets/images/hero2.jpeg', category: 'Furniture' },
    { id: 2, name: 'Glass Vase Set', price: '$180', image: '/assets/images/hero-penthouse.jpg', category: 'Decor' },
    { id: 3, name: 'Linen Pendant Light', price: '$350', image: '/assets/images/hero1.jpeg', category: 'Lighting' },
    { id: 4, name: 'Ceramic Plate Set', price: '$120', image: '/assets/images/hero-luxury-living.jpg', category: 'Kitchen' },
    { id: 5, name: 'Oak Side Table', price: '$580', image: '/assets/images/hero-penthouse.jpg', category: 'Furniture' },
    { id: 6, name: 'Wool Throw Blanket', price: '$210', image: '/assets/images/hero2.jpeg', category: 'Textiles' },
  ]

  return (
    <div className="min-h-screen bg-[#FBF9F7] font-inter">
      {/* Mini Header */}
      <div className="bg-white border-b border-gray-100 py-4 px-6 md:px-12 sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-xs font-black uppercase tracking-widest text-gray-900">Filters</span>
          </div>
          <div className="flex items-center gap-6">
             <div className="flex bg-gray-50 rounded-lg p-1">
                <div className="p-1.5 bg-white rounded shadow-sm"><Grid className="h-4 w-4" /></div>
                <div className="p-1.5 text-gray-400"><List className="h-4 w-4" /></div>
             </div>
             <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                Sort: Recommended <ChevronDown className="h-4 w-4" />
             </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold font-outfit uppercase tracking-tighter mb-2">New Arrivals</h1>
          <p className="text-sm text-gray-500 font-medium">{products.length} Items Found</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-white mb-6 shadow-sm border border-gray-50">
                <img 
                  src={product.image} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt={product.name} 
                />
                <button className="absolute top-6 right-6 h-10 w-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors shadow-xl">
                  <Heart className="h-5 w-5" />
                </button>
                <div className="absolute bottom-6 left-6 right-6 flex gap-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="flex-1 py-4 bg-gray-900 text-white text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-black transition-all shadow-2xl">
                    Add To Cart
                  </button>
                  <button className="h-12 w-12 bg-white text-gray-900 rounded-xl flex items-center justify-center hover:bg-[#C9A96E] hover:text-white transition-all shadow-xl">
                    <ShoppingBag className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="px-2">
                <span className="text-[10px] font-black text-[#C9A96E] uppercase tracking-widest mb-1 block">{product.category}</span>
                <div className="flex justify-between items-center">
                  <h3 className="text-[16px] font-bold text-gray-900 group-hover:text-[#C9A96E] transition-colors">{product.name}</h3>
                  <span className="text-[16px] font-bold font-outfit text-gray-900">{product.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
