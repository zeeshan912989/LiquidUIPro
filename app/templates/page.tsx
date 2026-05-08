"use client"

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, Eye, ChevronDown, LayoutTemplate, Box, RefreshCw, Monitor, Check, Sparkles } from 'lucide-react'

const browseLinks = [
   { name: 'All Templates', count: 48, slug: 'all' },
   { name: 'Headers', count: 8, slug: 'Header' },
   { name: 'Hero Sections', count: 12, slug: 'Hero' },
   { name: 'Product Sections', count: 10, slug: 'Product' },
   { name: 'Collection Pages', count: 6, slug: 'Collection' },
   { name: 'Product Pages', count: 4, slug: 'Page' },
   { name: 'Cart & Checkout', count: 3, slug: 'Cart' },
   { name: 'Footers', count: 5, slug: 'Footer' },
];

const styles = [
   { name: 'Minimal', count: 18 },
   { name: 'Modern', count: 24 },
   { name: 'Luxury', count: 12 },
   { name: 'Bold', count: 8 },
   { name: 'Creative', count: 6 },
];

const industries = [
   { name: 'Fashion', count: 22 },
   { name: 'Beauty', count: 14 },
   { name: 'Electronics', count: 12 },
   { name: 'Home & Decor', count: 10 },
   { name: 'Jewelry', count: 8 },
];

const templates = [
   { id: 'fashion-luxury', title: 'Elysé Luxury Fashion', image: '/assets/images/hero-liquid-gold.jpg', tags: ['Page', 'Luxury', 'Fashion'] },
   { id: 'tech-minimal', title: 'Aero Performance Hardware', image: '/assets/images/hero-luxury-living.jpg', tags: ['Page', 'Modern', 'Tech'] },
   { id: 'beauty-hero', title: 'GlowCare Beauty Hero', image: '/assets/images/hero-penthouse.jpg', tags: ['Hero', 'Minimal', 'Beauty'] },
   { id: 'product-grid', title: 'Studio Minimalist Grid', image: '/assets/images/hero2.jpeg', tags: ['Product', 'Modern', 'Furniture'] },
   { id: 'product-slider', title: 'Premium Product Carousel', image: '/assets/images/hero-liquid-gold.jpg', tags: ['Product', 'Minimal', 'Luxury'] },
   { id: 'collection-list', title: 'Curated Collection List', image: '/assets/images/hero1.jpeg', tags: ['Collection', 'Modern', 'Fashion'] },
   { id: 'cart-drawer', title: 'Smart Slide-out Cart', image: '/assets/images/hero2.jpeg', tags: ['Cart', 'Modern'] },
   { id: 'one-page-checkout', title: 'High-Conversion Checkout', image: '/assets/images/hero-luxury-living.jpg', tags: ['Checkout', 'Minimal'] },
   { id: 'footer-dark', title: 'Modern Dark Footer', image: '/assets/images/hero-penthouse.jpg', tags: ['Footer', 'Modern'] },
   { id: 'landing-skincare', title: 'Clinical Skincare Landing', image: '/assets/images/hero-liquid-gold.jpg', tags: ['Page', 'Beauty'] },
   { id: 'landing-electronics', title: 'Hardware Hub Landing', image: '/assets/images/hero-luxury-living.jpg', tags: ['Page', 'Electronics'] },
   { id: 'landing-jewelry', title: 'Fine Jewelry Boutique', image: '/assets/images/hero-penthouse.jpg', tags: ['Page', 'Luxury'] },
];

export default function TemplatesPage() {
   const [searchQuery, setSearchQuery] = useState('')
   const [activeCategory, setActiveCategory] = useState('all')
   const [activeStyle, setActiveStyle] = useState<string | null>(null)
   const [activeIndustry, setActiveIndustry] = useState<string | null>(null)

   const filteredTemplates = useMemo(() => {
      return templates.filter(template => {
         const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
         
         const matchesCategory = activeCategory === 'all' || template.tags.includes(activeCategory)
         const matchesStyle = !activeStyle || template.tags.includes(activeStyle)
         const matchesIndustry = !activeIndustry || template.tags.includes(activeIndustry)

         return matchesSearch && matchesCategory && matchesStyle && matchesIndustry
      })
   }, [searchQuery, activeCategory, activeStyle, activeIndustry])

   const resetFilters = () => {
      setSearchQuery('')
      setActiveCategory('all')
      setActiveStyle(null)
      setActiveIndustry(null)
   }

   return (
      <div className="min-h-screen bg-white text-[#1A1A1A] font-inter selection:bg-[#C9A96E] selection:text-white pt-16">
         {/* Sub Header / Breadcrumb Bar */}
         <div className="bg-white border-b border-[#F3EFE9] sticky top-16 z-40 px-6 md:px-12 py-4">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between">
               <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
                  <Link href="/" className="hover:text-[#C9A96E] transition-colors">Home</Link>
                  <span>/</span>
                  <span className="text-gray-900">Template Library</span>
               </div>
               <div className="flex items-center gap-6">
                  <div className="hidden sm:flex items-center gap-6">
                     {['Trending', 'Bestsellers', 'New Arrivals'].map(item => (
                        <a key={item} href="#" className="text-[11px] font-bold text-gray-500 hover:text-[#C9A96E] transition-colors uppercase tracking-wider">{item}</a>
                     ))}
                  </div>
                  <div className="h-4 w-[1px] bg-gray-200 hidden sm:block" />
                  <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#C9A96E]">
                     <Sparkles className="h-3.5 w-3.5" /> Featured
                  </button>
               </div>
            </div>
         </div>

         {/* Hero Section */}
         <section className="bg-[#FCFAF8] py-20 border-b border-[#F3EFE9] overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 relative">
               <div className="lg:w-1/2 relative z-10">
                  <span className="text-[10px] font-black text-[#C9A96E] uppercase tracking-widest mb-6 block">Template Library</span>
                  <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 font-outfit text-[#1A1A1A]">
                     Beautiful Shopify <br />
                     <span className="text-[#C9A96E]">Templates</span> & Sections
                  </h1>
                  <p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed font-medium">
                     Explore our collection of premium templates and sections built for speed, conversion, and stunning design.
                  </p>

                  {/* Search Bar */}
                  <div className="relative max-w-md mb-8">
                     <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search templates, sections..."
                        className="w-full pl-6 pr-12 py-4 bg-white border border-[#E4E0D9] rounded-xl outline-none focus:border-[#C9A96E] transition-colors shadow-sm text-sm"
                     />
                     <Search className="absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>

                  {/* Popular Tags */}
                  <div className="flex items-center gap-3 flex-wrap">
                     <span className="text-[11px] font-bold text-gray-900 mr-2">Popular:</span>
                     {['Hero', 'Product', 'Collection', 'Header', 'Footer', 'Cart'].map(tag => (
                        <button 
                           key={tag} 
                           onClick={() => setSearchQuery(tag)}
                           className={`px-4 py-1.5 border rounded-full text-[10px] font-bold transition-colors shadow-sm ${searchQuery === tag ? 'bg-[#C9A96E] text-white border-[#C9A96E]' : 'bg-white border-[#E4E0D9] text-gray-500 hover:border-[#C9A96E] hover:text-[#C9A96E]'}`}
                        >
                           {tag}
                        </button>
                     ))}
                  </div>
               </div>

               {/* Hero Mockup Cards */}
               <div className="lg:w-1/2 relative h-[400px] hidden lg:block">
                  <div className="absolute top-10 left-0 w-[240px] aspect-[9/16] bg-white rounded-2xl shadow-xl border border-gray-100 p-2 transform -rotate-6 opacity-80 overflow-hidden">
                     <img src="/assets/images/hero-penthouse.jpg" className="w-full h-full object-cover rounded-xl" alt="mockup 1" />
                  </div>
                  <div className="absolute top-20 right-0 w-[260px] aspect-[9/16] bg-white rounded-2xl shadow-xl border border-gray-100 p-2 transform rotate-6 opacity-80 overflow-hidden">
                     <img src="/assets/images/hero-liquid-gold.jpg" className="w-full h-full object-cover rounded-xl" alt="mockup 2" />
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] aspect-[9/16] bg-white rounded-3xl shadow-2xl border border-gray-100 p-2 z-10 overflow-hidden">
                     <div className="w-full h-full bg-[#F5F2EE] rounded-2xl relative overflow-hidden flex flex-col">
                        <div className="p-4 flex justify-between items-center bg-white border-b border-gray-50">
                           <div className="h-2 w-16 bg-gray-200 rounded" />
                           <div className="h-4 w-4 rounded-full bg-gray-200" />
                        </div>
                        <div className="flex-1 p-4">
                           <img src="/assets/images/hero1.jpeg" className="w-full aspect-[4/5] object-cover rounded-xl shadow-sm mb-4" alt="mockup main" />
                           <div className="grid grid-cols-3 gap-2">
                              <div className="aspect-[3/4] bg-gray-100 rounded-lg" />
                              <div className="aspect-[3/4] bg-gray-100 rounded-lg" />
                              <div className="aspect-[3/4] bg-gray-100 rounded-lg" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Main Content Area */}
         <section className="py-16 px-6 md:px-12 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12">

            {/* Sidebar */}
            <aside className="w-full lg:w-[240px] shrink-0 space-y-12">

               {/* Browse Section */}
               <div>
                  <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-900 mb-6">Browse</h3>
                  <ul className="space-y-1.5">
                     {browseLinks.map((link, i) => (
                        <li key={i}>
                           <button 
                              onClick={() => setActiveCategory(link.slug)}
                              className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-[13px] font-bold transition-colors ${activeCategory === link.slug ? 'bg-[#C9A96E] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
                           >
                              <span className="flex items-center gap-3">
                                 {i === 0 && <LayoutTemplate className="h-4 w-4 opacity-70" />}
                                 {i === 1 && <Monitor className="h-4 w-4 opacity-70" />}
                                 {i === 2 && <Box className="h-4 w-4 opacity-70" />}
                                 {i > 2 && <div className="h-1.5 w-1.5 rounded-full bg-current opacity-30 ml-1.5" />}
                                 {link.name}
                              </span>
                              <span className={`text-[10px] ${activeCategory === link.slug ? 'text-white/80' : 'text-gray-400'}`}>{link.count}</span>
                           </button>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Filter Section */}
               <div>
                  <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-900 mb-6">Filter By</h3>

                  {/* Style Filter */}
                  <div className="mb-8 border-t border-gray-100 pt-6">
                     <div className="flex items-center justify-between mb-4 cursor-pointer group">
                        <span className="text-[13px] font-bold text-gray-900">Style</span>
                        <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-gray-900" />
                     </div>
                     <ul className="space-y-3">
                        {styles.map((style, i) => (
                           <li 
                              key={i} 
                              onClick={() => setActiveStyle(activeStyle === style.name ? null : style.name)}
                              className="flex items-center justify-between group cursor-pointer"
                           >
                              <div className="flex items-center gap-3">
                                 <div className={`h-4 w-4 rounded border flex items-center justify-center transition-colors ${activeStyle === style.name ? 'border-[#C9A96E] bg-[#C9A96E]/10' : 'border-gray-300 group-hover:border-[#C9A96E]'}`}>
                                    {activeStyle === style.name && <Check className="h-3 w-3 text-[#C9A96E]" />}
                                 </div>
                                 <span className={`text-[13px] transition-colors ${activeStyle === style.name ? 'text-[#C9A96E] font-bold' : 'text-gray-600 group-hover:text-gray-900'}`}>{style.name}</span>
                              </div>
                              <span className="text-[10px] text-gray-400">{style.count}</span>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Industry Filter */}
                  <div className="mb-8 border-t border-gray-100 pt-6">
                     <div className="flex items-center justify-between mb-4 cursor-pointer group">
                        <span className="text-[13px] font-bold text-gray-900">Industry</span>
                        <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-gray-900" />
                     </div>
                     <ul className="space-y-3">
                        {industries.map((ind, i) => (
                           <li 
                              key={i} 
                              onClick={() => setActiveIndustry(activeIndustry === ind.name ? null : ind.name)}
                              className="flex items-center justify-between group cursor-pointer"
                           >
                              <div className="flex items-center gap-3">
                                 <div className={`h-4 w-4 rounded border flex items-center justify-center transition-colors ${activeIndustry === ind.name ? 'border-[#C9A96E] bg-[#C9A96E]/10' : 'border-gray-300 group-hover:border-[#C9A96E]'}`}>
                                    {activeIndustry === ind.name && <Check className="h-3 w-3 text-[#C9A96E]" />}
                                 </div>
                                 <span className={`text-[13px] transition-colors ${activeIndustry === ind.name ? 'text-[#C9A96E] font-bold' : 'text-gray-600 group-hover:text-gray-900'}`}>{ind.name}</span>
                              </div>
                              <span className="text-[10px] text-gray-400">{ind.count}</span>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Reset Button */}
                  <button 
                     onClick={resetFilters}
                     className="w-full py-3 bg-white border border-gray-200 rounded-lg text-[12px] font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors text-gray-600"
                  >
                     <RefreshCw className="h-3 w-3" /> Reset Filters
                  </button>
               </div>
            </aside>

            {/* Main Grid Content */}
            <main className="flex-1">
               {/* Top Bar */}
               <div className="flex flex-col sm:flex-row items-center justify-between mb-8 pb-6 border-b border-gray-100">
                  <div>
                     <h2 className="text-2xl font-bold text-gray-900">
                        {activeCategory === 'all' ? 'All Templates' : `${activeCategory}s`}
                     </h2>
                     <p className="text-sm text-gray-500 mt-1">{filteredTemplates.length} templates found</p>
                  </div>
                  <div className="flex items-center gap-4 mt-4 sm:mt-0">
                     <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 cursor-pointer hover:border-gray-300 transition-colors">
                        <span className="text-[12px] font-bold text-gray-700">Sort by: Newest</span>
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                     </div>
                  </div>
               </div>

               {/* Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {filteredTemplates.length > 0 ? (
                     filteredTemplates.map((template) => (
                        <div key={template.id} className="group">
                           <Link href={`/templates/${template.id}`} className="block">
                              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 mb-4 relative">
                                 <img
                                    src={template.image}
                                    alt={template.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                 />
                                 <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                    <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:scale-110 transition-transform shadow-xl">
                                       <Eye className="h-5 w-5" />
                                    </div>
                                 </div>
                              </div>
                           </Link>

                           {/* Card Info */}
                           <div className="px-1">
                              <Link href={`/templates/${template.id}`}>
                                 <h4 className="text-[15px] font-bold text-gray-900 mb-3 group-hover:text-[#C9A96E] transition-colors">{template.title}</h4>
                              </Link>
                              <div className="flex items-center justify-between">
                                 <div className="flex items-center gap-2">
                                    {template.tags.map(tag => (
                                       <span key={tag} className="px-3 py-1 bg-[#FBF9F7] border border-[#E4E0D9] text-gray-600 text-[10px] font-bold rounded-md uppercase tracking-wider">
                                          {tag}
                                       </span>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))
                  ) : (
                     <div className="col-span-full py-20 text-center">
                        <div className="h-16 w-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                           <Search className="h-8 w-8" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">No templates found</h3>
                        <p className="text-gray-500 mt-2">Try adjusting your filters or search query.</p>
                        <button 
                           onClick={resetFilters}
                           className="mt-6 text-[#C9A96E] font-bold hover:underline"
                        >
                           Clear all filters
                        </button>
                     </div>
                  )}
               </div>

            </main>
         </section>

         {/* Bottom Banner */}
         <section className="px-6 md:px-12 pb-24 max-w-[1400px] mx-auto">
            <div className="w-full bg-[#FBF9F7] border border-[#F3EFE9] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
               <div className="flex items-center gap-6">
                  <div className="h-16 w-16 bg-white rounded-2xl border border-[#F3EFE9] flex items-center justify-center shadow-sm shrink-0 text-[#C9A96E]">
                     <Sparkles className="h-8 w-8" />
                  </div>
                  <div>
                     <h4 className="text-lg font-bold text-gray-900 mb-1">Don't find what you need?</h4>
                     <p className="text-sm text-gray-500">Our AI can generate custom sections exactly how you imagine.</p>
                  </div>
               </div>
               <button className="px-8 py-4 bg-[#C9A96E] text-white rounded-xl text-[12px] font-bold flex items-center gap-2 hover:bg-[#A8853F] transition-all shadow-lg shadow-[#C9A96E]/20 whitespace-nowrap">
                  Generate with AI <Search className="h-4 w-4" />
               </button>
            </div>
         </section>

      </div>
   )
}
