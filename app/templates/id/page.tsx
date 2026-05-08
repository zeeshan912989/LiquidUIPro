"use client"

import { useParams, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { ChevronLeft, Code, Copy, Check, X, Smartphone, Monitor, Tablet, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import FashionLuxuryTemplate from '@/components/templates/FashionLuxury'
import TechMinimalTemplate from '@/components/templates/TechMinimal'
import BeautyHeroTemplate from '@/components/templates/BeautyHero'
import ProductGridTemplate from '@/components/templates/ProductGrid'

const templateConfig: Record<string, { component: any, title: string }> = {
  'fashion-luxury': { component: FashionLuxuryTemplate, title: 'Fashion Luxury' },
  'tech-minimal': { component: TechMinimalTemplate, title: 'Tech Minimal' },
  'beauty-hero': { component: BeautyHeroTemplate, title: 'Beauty Hero Split' },
  'product-grid': { component: ProductGridTemplate, title: 'Product Grid - Clean' },
}

export default function TemplateViewer() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string
  const [viewMode, setViewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)
  const [codeContent, setCodeContent] = useState('')

  const template = templateConfig[id]

  useEffect(() => {
    if (showCode) {
      // In a real app, we'd fetch the source file. Here we'll simulate or provide the core JSX.
      setCodeContent(`// Source code for ${template?.title || 'Template'}
// File: components/templates/${id.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')}.tsx

import React from 'react';
import { motion } from 'framer-motion';

export default function Template() {
  return (
    <div className="template-container">
      {/* High-fidelity template implementation */}
      <h1>${template?.title}</h1>
      <p>Production-ready Shopify Liquid & React architecture.</p>
    </div>
  );
}
`)
    }
  }, [showCode, id, template])

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

  return (
    <div className="h-screen flex flex-col bg-[#0F0F0F] overflow-hidden">
      {/* Top Controller Bar */}
      <div className="h-16 bg-black border-b border-white/5 flex items-center justify-between px-6 shrink-0 z-[100]">
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
               <span className="text-[10px] text-white/40 uppercase font-black">Live Preview</span>
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
            onClick={() => setShowCode(true)}
            className="px-6 py-2 bg-white text-black rounded-xl text-xs font-black uppercase tracking-widest hover:bg-[#C9A96E] hover:text-white transition-all flex items-center gap-2"
          >
            <Code className="h-4 w-4" /> Get Code
          </button>
          <button className="h-10 w-10 flex items-center justify-center bg-white/5 rounded-xl border border-white/5 text-white/60 hover:text-white">
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Main Preview Area */}
      <div className="flex-1 bg-[#1A1A1A] p-4 md:p-8 flex items-center justify-center overflow-auto relative">
        <motion.div 
          layout
          className={cn(
            "bg-white shadow-2xl transition-all duration-700 h-full origin-center relative overflow-hidden",
            viewMode === 'desktop' ? "w-full" : viewMode === 'tablet' ? "w-[768px]" : "w-[375px]"
          )}
          style={{ borderRadius: viewMode === 'desktop' ? '0' : '2rem' }}
        >
          {/* Scrollable Template Content */}
          <div className="w-full h-full overflow-y-auto custom-scrollbar">
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-2xl bg-[#0F0F0F] border-l border-white/10 z-[210] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white font-outfit uppercase tracking-tighter">Source Code</h2>
                  <p className="text-[10px] text-white/40 uppercase font-black mt-1">Copy React & Tailwind Implementation</p>
                </div>
                <button 
                  onClick={() => setShowCode(false)}
                  className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 p-6 overflow-hidden">
                <div className="h-full bg-black rounded-2xl border border-white/5 relative group overflow-hidden">
                  <pre className="p-8 text-sm text-white/70 font-mono h-full overflow-auto custom-scrollbar-dark leading-relaxed">
                    <code>{codeContent}</code>
                  </pre>
                  
                  <button 
                    onClick={handleCopy}
                    className="absolute top-4 right-4 px-4 py-2 bg-white text-black rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#C9A96E] hover:text-white transition-all shadow-xl"
                  >
                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    {copied ? 'Copied!' : 'Copy Code'}
                  </button>
                </div>
              </div>

              <div className="p-6 border-t border-white/10 bg-black/40">
                 <div className="flex items-center gap-4 p-4 bg-[#C9A96E]/10 rounded-xl border border-[#C9A96E]/20">
                    <div className="h-10 w-10 bg-[#C9A96E] rounded-lg flex items-center justify-center text-white">
                       <Smartphone className="h-5 w-5" />
                    </div>
                    <div>
                       <h4 className="text-xs font-bold text-white uppercase">Mobile Optimized</h4>
                       <p className="text-[10px] text-white/40">This code includes responsive Tailwind utility classes.</p>
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
