"use client"

import { useState } from 'react'
import { Trash2, Plus, Minus, ArrowRight, Store, Truck, ShieldCheck, MapPin, ChevronRight, ShoppingBag } from 'lucide-react'
import { cn } from '@/lib/utils'

const initialVendors = [
  {
    id: 1,
    name: 'Nordic Home Collective',
    rating: 4.8,
    items: [
      {
        id: 101,
        name: 'Handcrafted Ceramic Mug',
        price: 24.00,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1514228742587-6b1558fbed20?q=80&w=300&h=300&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 2,
    name: 'TechGear Pro Store',
    rating: 4.9,
    items: [
      {
        id: 201,
        name: 'Ultra-Slim Keyboard Case',
        price: 89.00,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1541140532154-b024d715b909?q=80&w=300&h=300&auto=format&fit=crop'
      },
      {
        id: 202,
        name: 'USB-C Magnetic Adapter',
        price: 15.00,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=300&h=300&auto=format&fit=crop'
      }
    ]
  }
]

export default function CartMarketplace() {
  const [vendors, setVendors] = useState(initialVendors)

  const updateQuantity = (vendorId: number, itemId: number, delta: number) => {
    setVendors(vendors.map(v => {
      if (v.id === vendorId) {
        return {
          ...v,
          items: v.items.map(item => 
            item.id === itemId ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
          )
        }
      }
      return v
    }))
  }

  const removeItem = (vendorId: number, itemId: number) => {
    setVendors(vendors.map(v => {
      if (v.id === vendorId) {
        return { ...v, items: v.items.filter(item => item.id !== itemId) }
      }
      return v
    }).filter(v => v.items.length > 0))
  }

  const calculateSubtotal = () => {
    return vendors.reduce((acc, v) => {
      return acc + v.items.reduce((vAcc, item) => vAcc + (item.price * item.quantity), 0)
    }, 0)
  }

  const subtotal = calculateSubtotal()

  return (
    <div className="w-full min-h-screen bg-gray-50 text-slate-900 font-sans p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8 pb-12 border-b border-gray-200">
           <div className="flex items-center gap-6">
              <div className="h-14 w-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-600/20">
                 <ShoppingBag className="h-7 w-7" />
              </div>
              <div>
                 <h1 className="text-3xl font-black text-slate-900 tracking-tight">Marketplace Bag</h1>
                 <p className="text-slate-500 font-medium italic">Items from {vendors.length} independent sellers.</p>
              </div>
           </div>
           
           <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-gray-200 shadow-sm">
              <MapPin className="h-4 w-4 text-indigo-600" />
              <p className="text-xs font-black uppercase tracking-widest text-slate-600">Shipping to: <span className="text-indigo-600">New York, US</span></p>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
           {/* Vendors and Items */}
           <div className="lg:col-span-8 space-y-12">
              {vendors.length > 0 ? (
                vendors.map((vendor) => (
                  <div key={vendor.id} className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
                     {/* Vendor Header */}
                     <div className="p-8 border-b border-gray-50 flex flex-wrap items-center justify-between gap-6 bg-slate-50/50">
                        <div className="flex items-center gap-4">
                           <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center border border-gray-200 shadow-sm">
                              <Store className="h-5 w-5 text-slate-900" />
                           </div>
                           <div>
                              <h3 className="font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
                                 {vendor.name} <ChevronRight className="h-4 w-4 text-slate-400" />
                              </h3>
                              <div className="flex items-center gap-2">
                                 <span className="text-emerald-500 font-black text-[10px]">★ {vendor.rating}</span>
                                 <span className="h-1 w-1 bg-slate-300 rounded-full" />
                                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Merchant Verified</p>
                              </div>
                           </div>
                        </div>
                        <div className="flex items-center gap-4">
                           <div className="flex -space-x-2">
                              {[...Array(3)].map((_, i) => (
                                <div key={i} className="h-6 w-6 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[8px] font-black uppercase text-slate-400">{(vendor.name[0] + i).toUpperCase()}</div>
                              ))}
                           </div>
                           <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">2.4k Total Sales</p>
                        </div>
                     </div>

                     {/* Vendor Items */}
                     <div className="p-8 space-y-10">
                        {vendor.items.map((item) => (
                          <div key={item.id} className="flex flex-col md:flex-row gap-8 group">
                             <div className="w-full md:w-32 h-32 bg-slate-50 rounded-2xl overflow-hidden shrink-0 border border-slate-100">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                             </div>

                             <div className="flex-1 flex flex-col justify-between py-1">
                                <div className="flex justify-between items-start">
                                   <div>
                                      <h4 className="text-lg font-black text-slate-900 mb-2">{item.name}</h4>
                                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                                         <ShieldCheck className="h-3 w-3 text-emerald-500" /> Full Purchase Protection
                                      </p>
                                   </div>
                                   <p className="text-xl font-black italic text-slate-900">${item.price.toFixed(2)}</p>
                                </div>

                                <div className="flex justify-between items-center mt-6">
                                   <div className="flex items-center gap-4 bg-slate-50 p-1 rounded-xl border border-slate-100">
                                      <button 
                                        onClick={() => updateQuantity(vendor.id, item.id, -1)}
                                        className="h-8 w-8 flex items-center justify-center hover:bg-white rounded-lg text-slate-400 hover:text-slate-900 transition-all shadow-sm"
                                      >
                                        <Minus className="h-3 w-3" />
                                      </button>
                                      <span className="w-4 text-center text-xs font-black">{item.quantity}</span>
                                      <button 
                                        onClick={() => updateQuantity(vendor.id, item.id, 1)}
                                        className="h-8 w-8 flex items-center justify-center hover:bg-white rounded-lg text-slate-400 hover:text-slate-900 transition-all shadow-sm"
                                      >
                                        <Plus className="h-3 w-3" />
                                      </button>
                                   </div>
                                   <button 
                                     onClick={() => removeItem(vendor.id, item.id)}
                                     className="h-10 w-10 flex items-center justify-center text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-all"
                                   >
                                      <Trash2 className="h-4 w-4" />
                                   </button>
                                </div>
                             </div>
                          </div>
                        ))}
                     </div>

                     {/* Vendor Specific Shipping */}
                     <div className="bg-slate-50/30 p-6 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-50">
                        <div className="flex items-center gap-4">
                           <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center border border-slate-100 shadow-sm">
                              <Truck className="h-5 w-5 text-indigo-600" />
                           </div>
                           <div>
                              <p className="text-xs font-bold text-slate-900 uppercase tracking-tight italic">Standard Merchant Delivery</p>
                              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Ships from {vendor.id === 1 ? 'Oslo, NO' : 'Shenzhen, CN'}</p>
                           </div>
                        </div>
                        <div className="text-right">
                           <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 italic">Arrival Estimate</p>
                           <p className="text-xs font-black text-slate-900 uppercase">May 14 — May 18</p>
                        </div>
                     </div>
                  </div>
                ))
              ) : (
                <div className="py-32 text-center bg-white rounded-[3rem] border border-gray-100 border-dashed border-2">
                   <p className="text-slate-400 font-bold uppercase tracking-widest text-xs italic">Marketplace items cleared.</p>
                   <button className="mt-8 px-10 py-4 bg-indigo-600 text-white rounded-full font-black uppercase tracking-widest text-[10px]">Back to Market</button>
                </div>
              )}
           </div>

           {/* Global Summary */}
           <div className="lg:col-span-4">
              <div className="bg-white rounded-[3rem] p-10 md:p-12 border border-gray-100 shadow-xl shadow-slate-900/5 sticky top-12">
                 <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-12">Consolidated Ledger</h2>
                 
                 <div className="space-y-6 mb-12 pb-12 border-b border-slate-50">
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Base Value</span>
                       <span className="font-black text-slate-900">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Multi-Seller Shipping</span>
                       <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest italic">Complimentary Bundle</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Platform Fee</span>
                       <span className="font-black text-slate-900">$0.00</span>
                    </div>
                 </div>

                 <div className="flex justify-between items-baseline mb-16">
                    <span className="text-sm font-black uppercase tracking-widest text-slate-900">Final Total</span>
                    <div className="text-right">
                       <p className="text-5xl font-black italic tracking-tighter text-slate-900">
                          ${subtotal.toFixed(2)}
                       </p>
                    </div>
                 </div>

                 <button className="w-full bg-slate-900 text-white py-8 rounded-[2rem] font-black uppercase tracking-[0.4em] text-xs hover:bg-indigo-600 transition-all flex items-center justify-center gap-4 group">
                    Consolidate Order <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                 </button>

                 <div className="mt-12 space-y-8">
                    <div className="flex items-center gap-6 text-slate-500">
                       <ShieldCheck className="h-5 w-5 text-indigo-600" />
                       <span className="text-[10px] uppercase tracking-[0.3em] font-black italic">Buyer Protection Guaranteed</span>
                    </div>
                    <div className="flex items-center gap-6 text-slate-500">
                       <Store className="h-5 w-5 text-indigo-600" />
                       <span className="text-[10px] uppercase tracking-[0.3em] font-black italic">Supporting Independent Creators</span>
                    </div>
                 </div>

                 <div className="mt-10 p-8 bg-slate-50 rounded-[2rem] border border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-relaxed text-center italic">
                       "Each item is shipped directly from the seller's atelier. Expect individual tracking for each brand."
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
