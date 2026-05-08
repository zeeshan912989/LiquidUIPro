"use client"

import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { ChevronLeft, Code, Copy, Check, X, Smartphone, Monitor, Tablet, ExternalLink, Download, FileJson, FileCode, Archive } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import JSZip from 'jszip'
import FashionLuxuryTemplate from '@/components/templates/FashionLuxury'
import TechMinimalTemplate from '@/components/templates/TechMinimal'
import BeautyHeroTemplate from '@/components/templates/BeautyHero'
import ProductGridTemplate from '@/components/templates/ProductGrid'
import { cn } from '@/lib/utils'

const templateConfig: Record<string, { component: any, title: string, reactCode: string, liquidHeader: string, liquidHero: string, liquidFooter: string }> = {
  'fashion-luxury': { 
    component: FashionLuxuryTemplate, 
    title: 'Fashion Luxury',
    reactCode: `"use client"
import React from 'react';
export default function Template() { return <div>Fashion Luxury</div> }`,
    liquidHeader: `{% comment %} Luxury Header {% endcomment %}
<header class="luxury-header">
  <div class="logo">{{ section.settings.logo_text }}</div>
  <nav>{% for link in linklists.main-menu.links %}<a href="{{ link.url }}">{{ link.title }}</a>{% endfor %}</nav>
</header>
{% schema %} { "name": "Header", "settings": [{ "type": "text", "id": "logo_text", "label": "Logo", "default": "ELYSÉ" }] } {% endschema %}`,
    liquidHero: `{% comment %} Luxury Hero {% endcomment %}
<section class="luxury-hero">
  <h1>{{ section.settings.title }}</h1>
  <p>{{ section.settings.text }}</p>
</section>
{% schema %} { "name": "Hero", "settings": [{ "type": "text", "id": "title", "label": "Title", "default": "Define Your Essence" }] } {% endschema %}`,
    liquidFooter: `{% comment %} Luxury Footer {% endcomment %}
<footer class="luxury-footer">
  <p>&copy; {{ 'now' | date: "%Y" }} {{ shop.name }}. All rights reserved.</p>
</footer>
{% schema %} { "name": "Footer", "settings": [] } {% endschema %}`
  },
  'tech-minimal': { 
    component: TechMinimalTemplate, 
    title: 'Tech Minimal',
    reactCode: ``, liquidHeader: ``, liquidHero: ``, liquidFooter: ``
  },
  'beauty-hero': { 
    component: BeautyHeroTemplate, 
    title: 'Beauty Hero Split',
    reactCode: ``, liquidHeader: ``, liquidHero: ``, liquidFooter: ``
  },
  'product-grid': { 
    component: ProductGridTemplate, 
    title: 'Product Grid - Clean',
    reactCode: ``, liquidHeader: ``, liquidHero: ``, liquidFooter: ``
  },
}

export default function TemplateViewer() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')
  const [showCode, setShowCode] = useState(false)
  const [codeType, setCodeType] = useState<'react' | 'liquid'>('react')
  const [copied, setCopied] = useState(false)
  const [isZipping, setIsZipping] = useState(false)

  const template = templateConfig[id]

  if (!template) return null

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownloadZip = async () => {
    setIsZipping(true)
    const zip = new JSZip()
    
    // Create Shopify theme structure
    const sections = zip.folder("sections")
    if (sections) {
      sections.file("header.liquid", template.liquidHeader)
      sections.file("hero.liquid", template.liquidHero)
      sections.file("footer.liquid", template.liquidFooter)
    }

    const content = await zip.generateAsync({ type: "blob" })
    const url = window.URL.createObjectURL(content)
    const link = document.createElement("a")
    link.href = url
    link.download = `${id}-shopify-bundle.zip`
    link.click()
    setIsZipping(false)
  }

  return (
    <div className="h-screen flex flex-col bg-[#0F0F0F] overflow-hidden">
      {/* Top Controller Bar */}
      <div className="h-16 bg-black border-b border-white/5 flex items-center justify-between px-6 shrink-0 z-[500] relative">
        <div className="flex items-center gap-4">
          <button onClick={() => router.push('/templates')} className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-white/5 text-white/60">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div>
            <h1 className="text-sm font-bold text-white uppercase tracking-widest">{template.title}</h1>
            <div className="flex items-center gap-2">
               <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
               <span className="text-[10px] text-white/40 uppercase font-black">Interactive Preview</span>
            </div>
          </div>
        </div>

        {/* View Controls */}
        <div className="hidden md:flex items-center bg-white/5 rounded-xl p-1 border border-white/5">
          {(['desktop', 'tablet', 'mobile'] as const).map(mode => (
            <button 
              key={mode}
              onClick={() => setViewMode(mode)}
              className={cn("p-2 rounded-lg transition-all", viewMode === mode ? "bg-white text-black shadow-lg" : "text-white/40 hover:text-white")}
            >
              {mode === 'desktop' ? <Monitor className="h-4 w-4" /> : mode === 'tablet' ? <Tablet className="h-4 w-4" /> : <Smartphone className="h-4 w-4" />}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => { setShowCode(true); setCodeType('react'); }}
            className="px-6 py-2 bg-white text-black rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#C9A96E] hover:text-white transition-all flex items-center gap-2"
          >
            <Code className="h-4 w-4" /> Get Code
          </button>
          <button 
            onClick={handleDownloadZip}
            disabled={isZipping}
            className="px-6 py-2 bg-[#C9A96E] text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#A8853F] transition-all flex items-center gap-2 disabled:opacity-50"
          >
            <Archive className="h-4 w-4" /> {isZipping ? 'Zipping...' : 'Download ZIP'}
          </button>
        </div>
      </div>

      {/* Main Preview Area */}
      <div className="flex-1 bg-[#1A1A1A] p-4 md:p-8 flex items-center justify-center overflow-auto relative">
        <motion.div 
          layout
          initial={false}
          animate={{
            width: viewMode === 'desktop' ? '100%' : viewMode === 'tablet' ? '768px' : '375px',
            scale: viewMode === 'mobile' ? 0.95 : 1
          }}
          className={cn("bg-white shadow-2xl h-full origin-center relative overflow-hidden", viewMode === 'desktop' ? "rounded-none" : "rounded-[3rem]")}
        >
          <div className="w-full h-full overflow-y-auto custom-scrollbar">
            <template.component />
          </div>
        </motion.div>
      </div>

      {/* Code Side Panel */}
      <AnimatePresence>
        {showCode && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowCode(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[550]" />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-4xl bg-[#0F0F0F] border-l border-white/10 z-[600] flex flex-col"
            >
              <div className="p-8 border-b border-white/10 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white font-outfit uppercase">Template Assets</h2>
                  <p className="text-xs text-white/40 uppercase font-black mt-1">Full Source Bundle for Shopify & React</p>
                </div>
                <button onClick={() => setShowCode(false)} className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white">
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Format Selection */}
              <div className="px-8 py-6 flex gap-6">
                 <button onClick={() => setCodeType('react')} className={cn("flex-1 py-6 rounded-2xl border flex flex-col items-center gap-3 transition-all", codeType === 'react' ? "bg-white border-white text-black" : "bg-white/5 border-white/5 text-white/40 hover:border-white/20")}>
                    <FileCode className="h-6 w-6" />
                    <span className="text-xs font-black uppercase">React Component</span>
                 </button>
                 <button onClick={() => setCodeType('liquid')} className={cn("flex-1 py-6 rounded-2xl border flex flex-col items-center gap-3 transition-all", codeType === 'liquid' ? "bg-[#C9A96E] border-[#C9A96E] text-white" : "bg-white/5 border-white/5 text-white/40 hover:border-white/20")}>
                    <Archive className="h-6 w-6" />
                    <span className="text-xs font-black uppercase">Shopify Liquid Bundle</span>
                 </button>
              </div>

              <div className="flex-1 p-8 overflow-hidden">
                <div className="h-full grid grid-rows-1 gap-6 overflow-y-auto custom-scrollbar-dark pr-4">
                  {codeType === 'react' ? (
                    <div className="bg-black rounded-2xl border border-white/5 p-6 relative group">
                       <button onClick={() => handleCopy(template.reactCode)} className="absolute top-4 right-4 p-2 bg-white/5 text-white rounded-lg hover:bg-white hover:text-black transition-all">
                          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                       </button>
                       <span className="text-[10px] text-white/20 uppercase font-black mb-4 block">template.tsx</span>
                       <pre className="text-sm text-white/70 font-mono"><code>{template.reactCode}</code></pre>
                    </div>
                  ) : (
                    <div className="space-y-6">
                       {[
                         { name: 'header.liquid', code: template.liquidHeader },
                         { name: 'hero.liquid', code: template.liquidHero },
                         { name: 'footer.liquid', code: template.liquidFooter }
                       ].map((file, i) => (
                         <div key={i} className="bg-black rounded-2xl border border-white/5 p-6 relative group">
                            <button onClick={() => handleCopy(file.code)} className="absolute top-4 right-4 p-2 bg-white/5 text-white rounded-lg hover:bg-white hover:text-black transition-all">
                               <Copy className="h-4 w-4" />
                            </button>
                            <span className="text-[10px] text-[#C9A96E] uppercase font-black mb-4 block">{file.name}</span>
                            <pre className="text-sm text-white/70 font-mono overflow-x-auto"><code>{file.code}</code></pre>
                         </div>
                       ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="p-8 border-t border-white/10 flex justify-center">
                 <button 
                  onClick={handleDownloadZip}
                  className="px-12 py-5 bg-[#C9A96E] text-white rounded-2xl font-black uppercase tracking-widest hover:bg-[#A8853F] transition-all flex items-center gap-3 shadow-2xl shadow-[#C9A96E]/20"
                 >
                    <Download className="h-5 w-5" /> Download Full Theme ZIP
                 </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar-dark::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar-dark::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
      `}</style>
    </div>
  )
}
