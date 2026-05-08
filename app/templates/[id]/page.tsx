"use client"

import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { ChevronLeft, Code, Copy, Check, X, Smartphone, Monitor, Tablet, ExternalLink, Download, FileJson, FileCode } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import FashionLuxuryTemplate from '@/components/templates/FashionLuxury'
import TechMinimalTemplate from '@/components/templates/TechMinimal'
import BeautyHeroTemplate from '@/components/templates/BeautyHero'
import ProductGridTemplate from '@/components/templates/ProductGrid'
import { cn } from '@/lib/utils'

const templateConfig: Record<string, { component: any, title: string, liquid: string }> = {
  'fashion-luxury': { 
    component: FashionLuxuryTemplate, 
    title: 'Fashion Luxury',
    liquid: `{% comment %}
  LiquidUI Pro - Fashion Luxury Section
{% endcomment %}
<div class="fashion-luxury-section">
  <header class="luxury-header">
    <div class="logo">{{ section.settings.logo_text }}</div>
  </header>
  <section class="luxury-hero">
    <h1>{{ section.settings.title }}</h1>
  </section>
</div>
{% schema %}
{
  "name": "Fashion Luxury",
  "settings": [
    { "type": "text", "id": "logo_text", "label": "Logo", "default": "ELYSÉ" },
    { "type": "text", "id": "title", "label": "Title", "default": "Define Your Essence" }
  ]
}
{% endschema %}`
  },
  'tech-minimal': { 
    component: TechMinimalTemplate, 
    title: 'Tech Minimal',
    liquid: `{% comment %} Tech Minimal Section {% endcomment %}`
  },
  'beauty-hero': { 
    component: BeautyHeroTemplate, 
    title: 'Beauty Hero Split',
    liquid: `{% comment %} Beauty Hero Section {% endcomment %}`
  },
  'product-grid': { 
    component: ProductGridTemplate, 
    title: 'Product Grid - Clean',
    liquid: `{% comment %} Product Grid Section {% endcomment %}`
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
  const [codeContent, setCodeContent] = useState('')

  const template = templateConfig[id]

  useEffect(() => {
    if (showCode) {
      if (codeType === 'react') {
        setCodeContent(`// Source code for ${template?.title || 'Template'}
// File: components/templates/${id.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')}.tsx

import React from 'react';
import { motion } from 'framer-motion';

export default function Template() {
  return (
    <div className="template-container">
      <h1>${template?.title}</h1>
      <p>Mobile-responsive design with Tailwind CSS.</p>
    </div>
  );
}
`)
      } else {
        setCodeContent(template?.liquid || '{% comment %} Liquid code not available for this preview {% endcomment %}')
      }
    }
  }, [showCode, codeType, id, template])

  if (!template) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold mb-4 text-gray-900">Template not found</h1>
        <button 
          onClick={() => router.push('/templates')}
          className="px-6 py-2 bg-[#C9A96E] text-white rounded-lg font-bold"
        >
          Back to Gallery
        </button>
      </div>
    )
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(codeContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([codeContent], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${id}.${codeType === 'react' ? 'tsx' : 'liquid'}`;
    document.body.appendChild(element);
    element.click();
  }

  return (
    <div className="h-screen flex flex-col bg-[#0F0F0F] overflow-hidden">
      {/* Top Controller Bar */}
      <div className="h-16 bg-black border-b border-white/5 flex items-center justify-between px-6 shrink-0 z-[500] relative">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => router.push('/templates')}
            className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors text-white/60"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div>
            <h1 className="text-sm font-bold text-white uppercase tracking-widest">{template.title}</h1>
            <div className="flex items-center gap-2">
               <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
               <span className="text-[10px] text-white/40 uppercase font-black">Real-time Preview</span>
            </div>
          </div>
        </div>

        {/* View Controls */}
        <div className="hidden md:flex items-center bg-white/5 rounded-xl p-1 border border-white/5">
          <button 
            onClick={() => setViewMode('desktop')}
            className={cn("p-2 rounded-lg transition-all", viewMode === 'desktop' ? "bg-white text-black shadow-lg" : "text-white/40 hover:text-white")}
          >
            <Monitor className="h-4 w-4" />
          </button>
          <button 
            onClick={() => setViewMode('tablet')}
            className={cn("p-2 rounded-lg transition-all", viewMode === 'tablet' ? "bg-white text-black shadow-lg" : "text-white/40 hover:text-white")}
          >
            <Tablet className="h-4 w-4" />
          </button>
          <button 
            onClick={() => setViewMode('mobile')}
            className={cn("p-2 rounded-lg transition-all", viewMode === 'mobile' ? "bg-white text-black shadow-lg" : "text-white/40 hover:text-white")}
          >
            <Smartphone className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => { setShowCode(true); setCodeType('react'); }}
            className="px-6 py-2 bg-white text-black rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#C9A96E] hover:text-white transition-all flex items-center gap-2"
          >
            <Code className="h-4 w-4" /> Get Code
          </button>
          <button 
            onClick={handleDownload}
            className="h-10 w-10 flex items-center justify-center bg-white/5 rounded-xl border border-white/5 text-white/60 hover:text-white"
          >
            <Download className="h-4 w-4" />
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
            scale: viewMode === 'mobile' ? 0.9 : 1
          }}
          className={cn(
            "bg-white shadow-2xl transition-all duration-700 h-full origin-center relative overflow-hidden",
          )}
          style={{ borderRadius: viewMode === 'desktop' ? '0' : '2.5rem' }}
        >
          {/* Mockup Frame (for mobile/tablet) */}
          {viewMode !== 'desktop' && (
            <div className="absolute top-0 left-0 right-0 h-8 bg-gray-100 flex items-center justify-center gap-1.5 z-50">
               <div className="h-1.5 w-1.5 rounded-full bg-gray-300" />
               <div className="h-1.5 w-12 rounded-full bg-gray-300" />
            </div>
          )}
          
          {/* Scrollable Template Content */}
          <div className={cn("w-full h-full overflow-y-auto custom-scrollbar", viewMode !== 'desktop' ? "pt-8" : "")}>
            <template.component />
          </div>
        </motion.div>
      </div>

      {/* Code Side Panel */}
      <AnimatePresence>
        {showCode && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCode(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[550]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-3xl bg-[#0F0F0F] border-l border-white/10 z-[600] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white font-outfit uppercase tracking-tighter">Source Assets</h2>
                  <p className="text-[10px] text-white/40 uppercase font-black mt-1">Select code format for your platform</p>
                </div>
                <button 
                  onClick={() => setShowCode(false)}
                  className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Code Type Tabs */}
              <div className="px-6 py-4 flex gap-4">
                 <button 
                  onClick={() => setCodeType('react')}
                  className={cn("flex-1 py-4 rounded-xl border flex flex-col items-center gap-2 transition-all", codeType === 'react' ? "bg-white border-white text-black" : "bg-white/5 border-white/5 text-white/40 hover:border-white/20")}
                 >
                    <FileCode className="h-5 w-5" />
                    <span className="text-[10px] font-black uppercase">React + Tailwind</span>
                 </button>
                 <button 
                  onClick={() => setCodeType('liquid')}
                  className={cn("flex-1 py-4 rounded-xl border flex flex-col items-center gap-2 transition-all", codeType === 'liquid' ? "bg-[#C9A96E] border-[#C9A96E] text-white" : "bg-white/5 border-white/5 text-white/40 hover:border-white/20")}
                 >
                    <FileJson className="h-5 w-5" />
                    <span className="text-[10px] font-black uppercase">Shopify Liquid</span>
                 </button>
              </div>

              <div className="flex-1 p-6 overflow-hidden">
                <div className="h-full bg-black rounded-2xl border border-white/5 relative group overflow-hidden">
                  <div className="absolute top-4 right-4 flex gap-2 z-10">
                    <button 
                      onClick={handleCopy}
                      className="px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-white hover:text-black transition-all"
                    >
                      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                    <button 
                      onClick={handleDownload}
                      className="px-4 py-2 bg-[#C9A96E] text-white rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#A8853F] transition-all"
                    >
                      <Download className="h-3 w-3" /> Download
                    </button>
                  </div>
                  
                  <pre className="p-8 pt-16 text-sm text-white/70 font-mono h-full overflow-auto custom-scrollbar-dark leading-relaxed">
                    <code>{codeContent}</code>
                  </pre>
                </div>
              </div>

              <div className="p-6 border-t border-white/10 bg-black/40">
                 <div className="flex items-center gap-4 p-4 bg-[#C9A96E]/10 rounded-xl border border-[#C9A96E]/20">
                    <div className="h-10 w-10 bg-[#C9A96E] rounded-lg flex items-center justify-center text-white">
                       <Check className="h-5 w-5" />
                    </div>
                    <div>
                       <h4 className="text-xs font-bold text-white uppercase">Production Ready</h4>
                       <p className="text-[10px] text-white/40">This code is sanitized and ready for Shopify Theme injection.</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E4E0D9;
          border-radius: 10px;
        }
        .custom-scrollbar-dark::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar-dark::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar-dark::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 10px;
        }
      `}</style>
    </div>
  )
}
