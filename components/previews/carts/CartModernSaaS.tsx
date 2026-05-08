"use client"

import { useState } from 'react'
import { Trash2, Plus, Minus, ArrowRight, Shield, CreditCard, Box, LayoutGrid, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const initialItems = [
  {
    id: 1,
    name: 'Growth Plan Subscription',
    price: 49.00,
    interval: 'monthly',
    users: 'Up to 10 users',
    quantity: 1,
    icon: <LayoutGrid className="h-6 w-6 text-indigo-600" />
  },
  {
    id: 2,
    name: 'Add-on: Advanced Analytics',
    price: 19.00,
    interval: 'monthly',
    users: 'Included',
    quantity: 1,
    icon: <Box className="h-6 w-6 text-indigo-600" />
  }
]

export default function CartModernSaaS() {
  const [items, setItems] = useState(initialItems)

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ))
  }

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)

  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 font-sans min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
           <div>
              <h1 className="text-3xl font-black tracking-tight text-slate-900 mb-2">Review your plan</h1>
              <p className="text-slate-500 font-medium">Configure your subscription and add-ons before checkout.</p>
           </div>
           <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm">
                 <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
                 <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Pricing Locked</span>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Steps */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8 flex flex-wrap gap-8 items-center justify-between shadow-sm">
               {[
                 { label: 'Plan Selection', status: 'done' },
                 { label: 'Review Cart', status: 'active' },
                 { label: 'Checkout', status: 'pending' }
               ].map((step, i) => (
                 <div key={i} className="flex items-center gap-3">
                    <div className={cn(
                      "h-8 w-8 rounded-full flex items-center justify-center text-xs font-black",
                      step.status === 'done' ? "bg-emerald-100 text-emerald-600" :
                      step.status === 'active' ? "bg-indigo-600 text-white" :
                      "bg-slate-100 text-slate-400"
                    )}>
                       {step.status === 'done' ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                    </div>
                    <span className={cn(
                      "text-xs font-black uppercase tracking-widest",
                      step.status === 'active' ? "text-slate-900" : "text-slate-400"
                    )}>{step.label}</span>
                    {i < 2 && <ArrowRight className="h-3 w-3 text-slate-200 hidden md:block" />}
                 </div>
               ))}
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
               <div className="p-6 md:p-10">
                  <div className="space-y-8">
                     {items.length > 0 ? (
                       items.map((item) => (
                         <div key={item.id} className="flex flex-col md:flex-row gap-8 items-center justify-between p-6 bg-slate-50/50 border border-slate-100 rounded-2xl hover:border-indigo-200 transition-colors group">
                            <div className="flex items-center gap-6">
                               <div className="h-16 w-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                                  {item.icon}
                               </div>
                               <div>
                                  <h3 className="font-bold text-slate-900 mb-1">{item.name}</h3>
                                  <div className="flex items-center gap-3">
                                     <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.users}</p>
                                     <span className="h-1 w-1 bg-slate-300 rounded-full" />
                                     <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Billed {item.interval}</p>
                                  </div>
                               </div>
                            </div>

                            <div className="flex items-center gap-12 w-full md:w-auto justify-between md:justify-end">
                               <div className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl p-1 shadow-sm">
                                  <button 
                                    onClick={() => updateQuantity(item.id, -1)}
                                    className="h-8 w-8 flex items-center justify-center hover:bg-slate-50 rounded-lg text-slate-500 transition-colors"
                                  >
                                    <Minus className="h-3 w-3" />
                                  </button>
                                  <span className="w-6 text-center text-sm font-black">{item.quantity}</span>
                                  <button 
                                    onClick={() => updateQuantity(item.id, 1)}
                                    className="h-8 w-8 flex items-center justify-center hover:bg-slate-50 rounded-lg text-slate-500 transition-colors"
                                  >
                                    <Plus className="h-3 w-3" />
                                  </button>
                               </div>

                               <div className="text-right min-w-[80px]">
                                  <p className="font-black text-slate-900">${(item.price * item.quantity).toFixed(2)}</p>
                                  <button 
                                    onClick={() => removeItem(item.id)}
                                    className="text-[10px] font-black uppercase tracking-widest text-rose-500 hover:text-rose-700 transition-colors mt-1"
                                  >
                                    Remove
                                  </button>
                               </div>
                            </div>
                         </div>
                       ))
                     ) : (
                       <div className="text-center py-16">
                          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-8">No active subscriptions in cart.</p>
                          <button className="text-indigo-600 text-sm font-black uppercase tracking-widest border-b-2 border-indigo-600 pb-1">View Pricing Plans</button>
                       </div>
                     )}
                  </div>
               </div>
               
               {/* Trust Footer */}
               <div className="bg-slate-50 border-t border-slate-200 p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex items-center gap-4">
                     <Shield className="h-5 w-5 text-emerald-500" />
                     <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Enterprise Security</p>
                  </div>
                  <div className="flex items-center gap-4">
                     <CreditCard className="h-5 w-5 text-indigo-500" />
                     <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Secure Payments</p>
                  </div>
                  <div className="flex items-center gap-4">
                     <CheckCircle2 className="h-5 w-5 text-indigo-500" />
                     <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Cancel Anytime</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
             <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-sm sticky top-12">
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-8">Billing Summary</h2>
                
                <div className="space-y-6 mb-8 pb-8 border-b border-slate-100">
                   <div className="flex justify-between">
                      <span className="text-slate-600 font-medium">Recurring Subtotal</span>
                      <span className="font-bold text-slate-900">${subtotal.toFixed(2)}/mo</span>
                   </div>
                   <div className="flex justify-between">
                      <span className="text-slate-600 font-medium">One-time Setup Fee</span>
                      <span className="font-bold text-slate-900">$0.00</span>
                   </div>
                   <div className="flex justify-between">
                      <span className="text-slate-600 font-medium">Tax</span>
                      <span className="font-bold text-slate-900">$0.00</span>
                   </div>
                </div>

                <div className="flex justify-between items-baseline mb-10">
                   <span className="text-sm font-black uppercase tracking-widest text-slate-900">Total Due Today</span>
                   <div className="text-right">
                      <span className="text-3xl font-black text-slate-900">${subtotal.toFixed(2)}</span>
                   </div>
                </div>

                <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-3 group">
                   Activate Account <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <div className="mt-8 p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                   <p className="text-[10px] font-black text-emerald-700 uppercase tracking-widest leading-relaxed">
                      Saving $120.00 annually by choosing the monthly growth plan today.
                   </p>
                </div>
                
                <div className="mt-8 flex justify-center gap-6 grayscale opacity-40">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
                   <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                   <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
