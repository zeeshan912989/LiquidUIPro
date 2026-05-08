"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
   Zap,
   Sparkles,
   Monitor,
   Code2,
   Smartphone,
   Layers,
   ArrowRight,
   Shield,
   Cpu,
   Globe,
   Layout,
   Command,
   ChevronRight
} from 'lucide-react'

export default function FeaturesPage() {
   return (
      <div className="min-h-screen bg-white text-[#1A1A1A] font-inter selection:bg-[#C9A96E] selection:text-white">

         {/* Top Navbar (Consistent with Templates) */}
         <nav className="w-full bg-white border-b border-[#F3EFE9] px-6 py-4 md:px-12 relative z-50">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between">
               <Link href="/" className="flex items-center gap-2">
                  <span className="text-xl font-black tracking-widest uppercase font-outfit text-[#1A1A1A]">
                     LIQUIDUI<span className="text-[#C9A96E]">PRO</span>
                  </span>
               </Link>
               <div className="hidden md:flex items-center gap-8">
                  <Link href="/templates" className="text-[13px] font-bold text-gray-500 hover:text-gray-900 transition-colors">Templates</Link>
                  <Link href="/features" className="text-[13px] font-bold text-[#C9A96E]">Features</Link>
                  <Link href="/pricing" className="text-[13px] font-bold text-gray-500 hover:text-gray-900 transition-colors">Pricing</Link>
                  <Link href="/support" className="text-[13px] font-bold text-gray-500 hover:text-gray-900 transition-colors">Support</Link>
               </div>
               <div className="flex items-center gap-4">
                  <Link href="/components/cart" className="px-6 py-2.5 bg-[#C9A96E] text-white rounded-md text-[11px] font-bold transition-all shadow-sm">
                     Get Started
                  </Link>
               </div>
            </div>
         </nav>

         {/* Hero Section */}
         <section className="bg-[#FCFAF8] pt-24 pb-32 border-b border-[#F3EFE9]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
               >
                  <span className="text-[10px] font-black text-[#C9A96E] uppercase tracking-widest mb-6 block">Platform Capabilities</span>
                  <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 font-outfit text-[#1A1A1A]">
                     Elite Component <br />
                     <span className="text-[#C9A96E]">Infrastructure.</span>
                  </h1>
                  <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
                     Every artifact is engineered for peak performance, extreme customization, and seamless Shopify integration.
                  </p>
               </motion.div>
            </div>
         </section>

         {/* Feature Section 1: Split Visual */}
         <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-20">
               <div className="lg:w-1/2">
                  <div className="inline-block px-4 py-1.5 bg-[#FBF9F7] border border-[#E4E0D9] rounded-full text-[11px] font-bold text-[#C9A96E] mb-8 uppercase tracking-widest">
                     Performance Architecture
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 font-outfit leading-tight">
                     Built for the <span className="text-[#C9A96E]">Next Generation</span> of E-commerce.
                  </h2>
                  <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
                     We don't just build components; we build the future of Shopify storefronts. Our Liquid 2.0 engine ensures that every section is as fast as it is beautiful.
                  </p>
                  <ul className="space-y-6">
                     {[
                        { title: 'Zero Bloat', desc: 'No heavy libraries. Just pure, optimized Liquid and CSS.', icon: Zap },
                        { title: 'Mobile First', desc: 'Flawless execution across every device and screen size.', icon: Smartphone },
                        { title: 'SEO Optimized', desc: 'Semantic HTML and best practices baked into every core.', icon: Globe }
                     ].map((item, i) => (
                        <li key={i} className="flex gap-6">
                           <div className="h-12 w-12 bg-[#FBF9F7] rounded-xl flex items-center justify-center shrink-0 text-[#C9A96E]">
                              <item.icon className="h-6 w-6" />
                           </div>
                           <div>
                              <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                              <p className="text-sm text-gray-500">{item.desc}</p>
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="lg:w-1/2 relative">
                  <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                     <img src="/assets/images/hero1.jpeg" alt="Feature Visualization" className="w-full h-full object-cover aspect-[4/5]" />
                  </div>
                  <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 max-w-[240px] hidden md:block">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                           <Zap className="h-5 w-5" />
                        </div>
                        <span className="text-xl font-bold">100/100</span>
                     </div>
                     <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">PageSpeed Score</p>
                  </div>
               </div>
            </div>
         </section>

         {/* Feature Section 2: AI Capabilities (Reusing Flow Style) */}
         <section className="py-24 px-6 md:px-12 bg-[#FCFAF8] border-y border-[#F3EFE9]">
            <div className="max-w-[1400px] mx-auto">
               <div className="text-center mb-20">
                  <span className="text-[10px] font-black text-[#C9A96E] uppercase tracking-widest mb-6 block">Intelligence</span>
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 font-outfit">AI-Powered <span className="text-[#C9A96E]">Workflow</span></h2>
                  <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                     Generate complete Shopify sections from a simple text prompt. Our AI understands your brand and creates production-ready code.
                  </p>
               </div>

               <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6 xl:gap-10 max-w-[1200px] mx-auto w-full">
                  {/* Prompt Card */}
                  <div className="w-[260px] shrink-0 bg-white p-10 rounded-[2rem] shadow-xl text-center relative z-10 border border-[#F3EFE9]">
                     <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8 block">Input</span>
                     <p className="text-[14px] text-gray-600 leading-relaxed italic mb-10">"Create a jewelry hero section with dark aesthetic"</p>
                     <div className="h-12 w-12 bg-[#C9A96E] rounded-full flex items-center justify-center mx-auto text-white">
                        <Sparkles className="h-5 w-5" />
                     </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:flex items-center text-[#C9A96E]/40">
                     <div className="h-[2px] w-12 border-t-[3px] border-dashed border-[#C9A96E]/40" />
                     <ChevronRight className="h-4 w-4" />
                  </div>

                  {/* Visual Preview */}
                  <div className="flex-1 max-w-[500px] bg-[#0A0A0A] aspect-video rounded-[2rem] overflow-hidden shadow-2xl relative z-10 border border-gray-800">
                     <img src="/assets/images/hero2.jpeg" className="h-full w-full object-cover" alt="AI Generated Section" />
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:flex items-center text-[#C9A96E]/40">
                     <div className="h-[2px] w-12 border-t-[3px] border-dashed border-[#C9A96E]/40" />
                     <ChevronRight className="h-4 w-4" />
                  </div>

                  {/* Code Preview */}
                  <div className="w-[280px] shrink-0 bg-[#161616] p-8 rounded-[2rem] shadow-2xl relative z-10 h-[300px] overflow-hidden font-mono text-[9px] text-gray-500 border border-gray-800/50">
                     <div className="flex justify-between items-center mb-6">
                        <span className="text-[9px] font-black text-gray-500 uppercase">Output</span>
                        <Code2 className="h-4 w-4 text-[#C9A96E]" />
                     </div>
                     <div className="space-y-2 opacity-60">
                        <div className="text-[#C9A96E]">{"{% schema %}"}</div>
                        <div className="pl-4">"name": "Luxury Hero",</div>
                        <div className="pl-4">"settings": [ ... ]</div>
                        <div className="text-[#C9A96E]">{"{% endschema %}"}</div>
                     </div>
                     <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#161616] to-transparent" />
                  </div>
               </div>
            </div>
         </section>

         {/* Final Feature Grid */}
         <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                  { title: 'Liquid 2.0 Engine', desc: 'Built for modern Shopify themes with blocks and dynamic sections.', icon: Command },
                  { title: 'Security First', desc: 'Secure, clean code that follows Shopify\'s strict security guidelines.', icon: Shield },
                  { title: 'Instant Deployment', desc: 'Copy-paste or direct sync to your Shopify theme in seconds.', icon: Cpu },
                  { title: 'Responsive Mastery', desc: 'Every component is tested across dozens of device breakpoints.', icon: Layout },
                  { title: 'Developer API', desc: 'Extend and customize the components using our powerful API.', icon: Code2 },
                  { title: 'Global CDN', desc: 'Assets are delivered through a high-speed global network.', icon: Globe }
               ].map((feat, i) => (
                  <div key={i} className="p-12 bg-white rounded-[3rem] border border-[#F3EFE9] hover:border-[#C9A96E] transition-all group hover:shadow-xl hover:shadow-gray-100/50">
                     <div className="h-14 w-14 bg-[#FBF9F7] rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#C9A96E] group-hover:text-white transition-all">
                        <feat.icon className="h-7 w-7" />
                     </div>
                     <h3 className="text-2xl font-bold tracking-tight mb-4">{feat.title}</h3>
                     <p className="text-gray-500 leading-relaxed font-medium">{feat.desc}</p>
                  </div>
               ))}
            </div>
         </section>

         {/* CTA Section */}
         <section className="px-6 md:px-12 pb-24 max-w-[1400px] mx-auto">
            <div className="w-full bg-[#1A1A1A] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C9A96E] to-transparent" />
               </div>
               <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative z-10"
               >
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-outfit">Ready to Build the <span className="text-[#C9A96E]">Future?</span></h2>
                  <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
                     Join hundreds of Shopify designers and developers building high-converting luxury storefronts with LiquidUI Pro.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <Link href="/components/cart" className="px-12 py-5 bg-[#C9A96E] text-white rounded-xl text-[12px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                        Get Started Now
                     </Link>
                     <Link href="/templates" className="px-12 py-5 bg-white/5 text-white border border-white/10 rounded-xl text-[12px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                        View Templates
                     </Link>
                  </div>
               </motion.div>
            </div>
         </section>

         {/* Simple Footer */}
         <footer className="py-12 border-t border-[#F3EFE9] text-center">
            <p className="text-[12px] font-bold text-gray-400 uppercase tracking-[0.4em]">Engineered for Shopify. Design by SHAH.</p>
         </footer>
      </div>
   )
}
