"use client"

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import {
   Check,
   X,
   ChevronDown,
   Sparkles,
   Code2,
   ArrowRight,
   Layout,
   Layers,
   Zap,
   Globe,
   Plus
} from 'lucide-react'

const pricingPlans = [
   {
      name: 'Free',
      description: 'Perfect for getting started',
      price: '0',
      cta: 'Get Started',
      features: [
         { text: '10 Templates', included: true },
         { text: '20+ Components', included: true },
         { text: 'AI Section Generator', desc: '5 credits / month', included: true },
         { text: 'Export Code', sub: 'Limited', included: true },
         { text: 'Community Support', included: true }
      ],
      highlight: false
   },
   {
      name: 'Starter',
      description: 'For new store owners',
      price: '19',
      cta: 'Get Started',
      features: [
         { text: 'All Free features', included: true },
         { text: 'Unlimited Templates', included: true },
         { text: '200+ Components', included: true },
         { text: 'AI Section Generator', desc: '100 credits / month', included: true },
         { text: 'Export Code', sub: 'Unlimited', included: true },
         { text: 'Standard Support', included: true }
      ],
      highlight: false
   },
   {
      name: 'Pro',
      description: 'For growing businesses',
      price: '39',
      cta: 'Get Started',
      features: [
         { text: 'All Starter features', included: true },
         { text: 'Premium Templates', included: true },
         { text: '500+ Components', included: true },
         { text: 'AI Section Generator', desc: '500 credits / month', included: true },
         { text: 'Export Code', sub: 'Unlimited', included: true },
         { text: 'Priority Support', included: true },
         { text: 'Custom Code Editor', included: true },
         { text: 'Remove Branding', included: true }
      ],
      highlight: true,
      tag: 'MOST POPULAR'
   },
   {
      name: 'Agency',
      description: 'For agencies & teams',
      price: '79',
      cta: 'Get Started',
      features: [
         { text: 'All Pro features', included: true },
         { text: 'Everything Unlimited', included: true },
         { text: 'AI Section Generator', desc: '2000 credits / month', included: true },
         { text: 'Team Members', sub: '5 seats', included: true },
         { text: 'White Label Export', included: true },
         { text: 'Dedicated Support', included: true },
         { text: 'Early Access', included: true }
      ],
      highlight: false,
      tag: 'Best for teams'
   }
];

const comparisonData = [
   { feature: 'Templates', free: '10', starter: 'Unlimited', pro: 'Premium', agency: 'Everything', icon: Layout },
   { feature: 'Components', free: '20+', starter: '200+', pro: '500+', agency: 'Everything', icon: Layers },
   { feature: 'AI Section Generator', free: '5 credits / month', starter: '100 credits / month', pro: '500 credits / month', agency: '2000 credits / month', icon: Sparkles },
   { feature: 'Export Code', free: 'Limited', starter: 'Unlimited', pro: 'Unlimited', agency: 'Unlimited', icon: Code2 },
   { feature: 'Custom Code Editor', free: false, starter: false, pro: true, agency: true, icon: Zap },
   { feature: 'Remove Branding', free: false, starter: false, pro: true, agency: true, icon: Globe },
   { feature: 'Team Members', free: '1', starter: '1', pro: '1', agency: 'Up to 5', icon: Globe },
   { feature: 'Support', free: 'Community', starter: 'Standard', pro: 'Priority', agency: 'Dedicated', icon: Globe },
   { feature: 'Updates', free: 'Basic', starter: 'Regular', pro: 'Priority', agency: 'Priority + Early Access', icon: Globe },
];

const faqs = [
   { question: 'Can I cancel my subscription anytime?', answer: 'Yes! You can cancel your subscription at any time. No hidden fees, no long-term contracts.' },
   { question: 'Can I upgrade or downgrade my plan?', answer: 'Absolutely! You can upgrade, downgrade, or cancel your plan anytime from your dashboard.' },
   { question: 'Do you offer refunds?', answer: 'We offer a 7-day money-back guarantee if you\'re not satisfied with our service.' },
   { question: 'Is my payment information secure?', answer: 'Yes, we use Stripe to securely process all payments. Your data is 100% safe with us.' }
];

export default function PricingPage() {
   const [billingCycle, setBillingCycle] = useState('monthly');

   return (
      <div className="min-h-screen bg-white text-[#1A1A1A] font-inter selection:bg-[#C9A96E] selection:text-white">

         {/* Navbar (Consistent) */}
         <nav className="w-full bg-white border-b border-[#F3EFE9] px-6 py-4 md:px-12 relative z-50">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between">
               <Link href="/" className="flex items-center gap-2">
                  <span className="text-xl font-black tracking-widest uppercase font-outfit text-[#1A1A1A]">
                     LIQUIDUI<span className="text-[#C9A96E]">PRO</span>
                  </span>
               </Link>
               <div className="hidden md:flex items-center gap-8">
                  <Link href="/library" className="text-[13px] font-bold text-gray-500 hover:text-gray-900 transition-colors">Library</Link>
                  <Link href="/templates" className="text-[13px] font-bold text-gray-500 hover:text-gray-900 transition-colors">Templates</Link>
                  <Link href="/pricing" className="text-[13px] font-bold text-[#C9A96E]">Pricing</Link>
                  <Link href="/support" className="text-[13px] font-bold text-gray-500 hover:text-gray-900 transition-colors">Support</Link>
               </div>
               <div className="flex items-center gap-4">
                  <Link href="/components/cart" className="px-6 py-2.5 bg-[#C9A96E] text-white rounded-md text-[11px] font-bold transition-all shadow-sm">
                     Get Started
                  </Link>
                  <Link href="https://github.com/zeeshan912989/LiquidUIPro" className="px-4 py-2.5 bg-white border border-[#E4E0D9] rounded-md text-[11px] font-bold flex items-center gap-2 hover:bg-gray-50 transition-all">
                     <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  </Link>
               </div>
            </div>
         </nav>

         {/* Hero Section */}
         <section className="bg-[#FCFAF8] pt-20 pb-24 border-b border-[#F3EFE9]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
               <div className="inline-block px-4 py-1.5 bg-[#FBF9F7] border border-[#E4E0D9] rounded-full text-[10px] font-black text-[#C9A96E] mb-8 uppercase tracking-widest">
                  Simple, Transparent Pricing
               </div>
               <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 font-outfit text-[#1A1A1A]">
                  Choose the perfect plan <br />
                  for your <span className="text-[#C9A96E]">Shopify</span> journey
               </h1>
               <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                  Build stunning Shopify stores faster with professional components, templates, and AI power.
               </p>

               {/* Toggle */}
               <div className="flex items-center justify-center gap-4">
                  <div className="bg-[#FBF9F7] border border-[#E4E0D9] p-1 rounded-xl flex items-center shadow-sm">
                     <button
                        onClick={() => setBillingCycle('monthly')}
                        className={`px-8 py-2.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all ${billingCycle === 'monthly' ? 'bg-[#C9A96E] text-white shadow-md' : 'text-gray-400 hover:text-gray-900'}`}
                     >
                        Monthly
                     </button>
                     <button
                        onClick={() => setBillingCycle('yearly')}
                        className={`px-8 py-2.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all ${billingCycle === 'yearly' ? 'bg-[#C9A96E] text-white shadow-md' : 'text-gray-400 hover:text-gray-900'}`}
                     >
                        Yearly <span className="text-[8px] opacity-70 ml-1">(Save 20%)</span>
                     </button>
                  </div>
               </div>
            </div>
         </section>

         {/* Pricing Cards */}
         <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {pricingPlans.map((plan, i) => (
                  <div key={i} className={`relative flex flex-col bg-white border rounded-[2rem] p-8 transition-all duration-500 hover:shadow-xl hover:shadow-gray-100 ${plan.highlight ? 'border-[#C9A96E] ring-1 ring-[#C9A96E]' : 'border-[#F3EFE9]'}`}>
                     {plan.tag && (
                        <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase ${plan.highlight ? 'bg-[#C9A96E] text-white' : 'bg-[#FBF9F7] text-gray-500 border border-[#E4E0D9]'}`}>
                           {plan.tag}
                        </div>
                     )}

                     <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                        <p className="text-[13px] text-gray-400 font-medium">{plan.description}</p>
                     </div>

                     <div className="mb-10">
                        <div className="flex items-baseline gap-1">
                           <span className="text-4xl font-bold">$</span>
                           <span className="text-5xl font-black">{billingCycle === 'monthly' ? plan.price : Math.floor(parseInt(plan.price) * 0.8)}</span>
                           <span className="text-[13px] text-gray-400 font-medium ml-1">/ month</span>
                        </div>
                     </div>

                     <button className={`w-full py-4 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all mb-10 ${plan.highlight ? 'bg-[#C9A96E] text-white shadow-lg shadow-[#C9A96E]/30 hover:bg-[#A8853F]' : 'bg-[#FBF9F7] border border-[#E4E0D9] text-[#1A1A1A] hover:bg-gray-50'}`}>
                        {plan.cta}
                     </button>

                     <ul className="space-y-4 flex-1 mb-8">
                        {plan.features.map((feat, j) => (
                           <li key={j} className="flex gap-3 text-[13px] font-medium">
                              <Check className={`h-4 w-4 shrink-0 mt-0.5 ${feat.included ? 'text-[#C9A96E]' : 'text-gray-300'}`} />
                              <div className="flex-1 flex justify-between items-start gap-2">
                                 <span className={feat.included ? 'text-gray-700' : 'text-gray-400'}>
                                    {feat.text}
                                    {feat.desc && <span className="block text-[10px] text-gray-400 mt-0.5">{feat.desc}</span>}
                                 </span>
                                 {feat.sub && <span className="text-[10px] text-gray-400 font-bold uppercase">{feat.sub}</span>}
                              </div>
                           </li>
                        ))}
                     </ul>

                     <div className="pt-6 border-t border-gray-50 flex items-center justify-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                           {i === 0 ? 'No credit card required' : i === 1 ? 'Cancel anytime' : i === 2 ? 'Everything included' : 'Best for teams'}
                        </span>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         {/* Comparison Table */}
         <section className="py-24 px-6 md:px-12 bg-[#FCFAF8] border-y border-[#F3EFE9]">
            <div className="max-w-[1200px] mx-auto">
               <h2 className="text-3xl font-bold text-gray-900 mb-16 px-4">Compare Plans</h2>

               <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                     <thead>
                        <tr className="text-[11px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100">
                           <th className="py-8 px-6 text-left w-1/3">Feature</th>
                           <th className="py-8 px-6 text-center">Free</th>
                           <th className="py-8 px-6 text-center">Starter</th>
                           <th className="py-8 px-6 text-center relative">
                              Pro <span className="absolute -top-1 left-1/2 -translate-x-1/2 bg-[#C9A96E] text-white text-[7px] px-2 py-0.5 rounded">POPULAR</span>
                           </th>
                           <th className="py-8 px-6 text-center">Agency</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-50">
                        {comparisonData.map((row, i) => (
                           <tr key={i} className="group hover:bg-white transition-colors">
                              <td className="py-6 px-6">
                                 <div className="flex items-center gap-4">
                                    <div className="h-8 w-8 bg-white rounded-lg border border-gray-100 flex items-center justify-center text-[#C9A96E]">
                                       <row.icon className="h-4 w-4" />
                                    </div>
                                    <span className="text-[14px] font-bold text-gray-700">{row.feature}</span>
                                 </div>
                              </td>
                              <td className="py-6 px-6 text-center text-[13px] text-gray-500 font-medium">{typeof row.free === 'string' ? row.free : row.free ? <Check className="h-4 w-4 mx-auto text-[#C9A96E]" /> : <X className="h-4 w-4 mx-auto text-gray-300" />}</td>
                              <td className="py-6 px-6 text-center text-[13px] text-gray-500 font-medium">{typeof row.starter === 'string' ? row.starter : row.starter ? <Check className="h-4 w-4 mx-auto text-[#C9A96E]" /> : <X className="h-4 w-4 mx-auto text-gray-300" />}</td>
                              <td className="py-6 px-6 text-center text-[13px] text-gray-900 font-bold bg-[#C9A96E]/5">{typeof row.pro === 'string' ? row.pro : row.pro ? <Check className="h-4 w-4 mx-auto text-[#C9A96E]" /> : <X className="h-4 w-4 mx-auto text-gray-300" />}</td>
                              <td className="py-6 px-6 text-center text-[13px] text-gray-500 font-medium">{typeof row.agency === 'string' ? row.agency : row.agency ? <Check className="h-4 w-4 mx-auto text-[#C9A96E]" /> : <X className="h-4 w-4 mx-auto text-gray-300" />}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </section>

         {/* FAQs */}
         <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 font-outfit">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {faqs.map((faq, i) => (
                  <div key={i} className="p-8 bg-white border border-[#F3EFE9] rounded-[2rem] hover:border-[#C9A96E] transition-all group cursor-pointer">
                     <div className="flex items-center justify-between mb-4">
                        <h4 className="text-[15px] font-bold text-gray-900">{faq.question}</h4>
                        <ChevronDown className="h-4 w-4 text-gray-300 group-hover:text-[#C9A96E] transition-colors" />
                     </div>
                     <p className="text-[13px] text-gray-500 leading-relaxed font-medium">{faq.answer}</p>
                  </div>
               ))}
            </div>
         </section>

         {/* Final CTA */}
         <section className="px-6 md:px-12 pb-24 max-w-[1400px] mx-auto">
            <div className="w-full bg-[#FBF9F7] border border-[#F3EFE9] rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
               <div className="flex items-center gap-8 text-left">
                  <div className="h-16 w-16 bg-white rounded-2xl border border-[#F3EFE9] flex items-center justify-center shadow-sm text-[#C9A96E]">
                     <Sparkles className="h-8 w-8" />
                  </div>
                  <div>
                     <h4 className="text-xl font-bold text-gray-900 mb-2">Ready to build stunning Shopify stores?</h4>
                     <p className="text-sm text-gray-500 font-medium">Join thousands of store owners and developers using LiquidUI Pro.</p>
                  </div>
               </div>
               <button className="px-10 py-5 bg-[#C9A96E] text-white rounded-xl text-[12px] font-bold flex items-center gap-3 hover:bg-[#A8853F] transition-all shadow-lg shadow-[#C9A96E]/30">
                  Get Started Now <ArrowRight className="h-4 w-4" />
               </button>
            </div>
         </section>

         {/* Mega Footer */}
         <footer className="pt-24 pb-12 px-6 md:px-12 border-t border-[#F3EFE9]">
            <div className="max-w-[1400px] mx-auto">
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-24">
                  <div className="col-span-2">
                     <Link href="/" className="flex items-center gap-2 mb-8">
                        <span className="text-xl font-black tracking-widest uppercase font-outfit text-[#1A1A1A]">
                           LIQUIDUI<span className="text-[#C9A96E]">PRO</span>
                        </span>
                     </Link>
                     <p className="text-[13px] text-gray-500 leading-relaxed max-w-xs mb-8 font-medium">
                        Build stunning Shopify stores with powerful UI components and AI tools.
                     </p>
                     <div className="flex items-center gap-4">
                        {[
                           { name: 'github', path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
                           { name: 'twitter', path: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' },
                           { name: 'youtube', path: 'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z' },
                           { name: 'instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' }
                        ].map((social, i) => (
                           <Link key={i} href="#" className="h-8 w-8 bg-[#FBF9F7] rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#C9A96E] hover:text-white transition-all">
                              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d={social.path} /></svg>
                           </Link>
                        ))}
                     </div>
                  </div>

                  <div>
                     <h5 className="text-[11px] font-black uppercase tracking-widest text-gray-900 mb-8">Product</h5>
                     <ul className="space-y-4">
                        {['Library', 'Templates', 'Pricing', 'Changelog'].map(item => (
                           <li key={item}><Link href="#" className="text-[13px] text-gray-500 hover:text-black font-medium transition-colors">{item}</Link></li>
                        ))}
                     </ul>
                  </div>

                  <div>
                     <h5 className="text-[11px] font-black uppercase tracking-widest text-gray-900 mb-8">Resources</h5>
                     <ul className="space-y-4">
                        {['Documentation', 'Blog', 'Tutorials', 'Community'].map(item => (
                           <li key={item}><Link href="#" className="text-[13px] text-gray-500 hover:text-black font-medium transition-colors">{item}</Link></li>
                        ))}
                     </ul>
                  </div>

                  <div>
                     <h5 className="text-[11px] font-black uppercase tracking-widest text-gray-900 mb-8">Company</h5>
                     <ul className="space-y-4">
                        {['About Us', 'Careers', 'Privacy Policy', 'Terms of Service'].map(item => (
                           <li key={item}><Link href="#" className="text-[13px] text-gray-500 hover:text-black font-medium transition-colors">{item}</Link></li>
                        ))}
                     </ul>
                  </div>

                  <div>
                     <h5 className="text-[11px] font-black uppercase tracking-widest text-gray-900 mb-8">Support</h5>
                     <ul className="space-y-4">
                        {['Help Center', 'Contact Us', 'System Status'].map(item => (
                           <li key={item}><Link href="#" className="text-[13px] text-gray-500 hover:text-black font-medium transition-colors">{item}</Link></li>
                        ))}
                     </ul>
                  </div>
               </div>

               <div className="flex flex-col md:flex-row items-center justify-center pt-12 border-t border-gray-50 text-center">
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.4em]">Engineered for Shopify. Design by SHAH.</p>
               </div>
            </div>
         </footer>
      </div>
   )
}
