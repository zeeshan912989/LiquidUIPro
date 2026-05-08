"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Copy, Check, Eye, Code2, ArrowRight, MousePointer2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Component } from '@/lib/components'
import { previewRegistry } from '@/lib/preview-registry'
import CodeBlock from './CodeBlock'

interface ComponentCardProps {
  component: Component
}

export default function ComponentCard({ component }: ComponentCardProps) {
  const [view, setView] = useState<'preview' | 'code'>('preview')

  return (
    <div className="group overflow-hidden rounded-[2rem] border border-border-custom bg-bg-card shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-black/5">
      <div className="flex items-center justify-between border-b border-border-custom bg-bg/30 px-6 py-4 backdrop-blur-sm">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted mb-0.5">Artifact No. {component.id.slice(0, 4)}</p>
          <Link 
            href={`/components/${component.category}/${component.id}`}
            className="text-sm font-black uppercase tracking-widest text-text-custom hover:text-accent transition-colors"
          >
            {component.name}
          </Link>
        </div>
        
        <div className="flex rounded-xl border border-border-custom bg-bg p-1">
          <button
            onClick={() => setView('preview')}
            className={cn(
              "rounded-lg px-3 py-1.5 text-[10px] font-black uppercase tracking-widest transition-all",
              view === 'preview' ? "bg-text-custom text-bg shadow-sm" : "text-text-muted hover:text-text-custom"
            )}
          >
            <Eye className="mr-2 inline-block h-3 w-3" />
            Preview
          </button>
          <button
            onClick={() => setView('code')}
            className={cn(
              "rounded-lg px-3 py-1.5 text-[10px] font-black uppercase tracking-widest transition-all",
              view === 'code' ? "bg-text-custom text-bg shadow-sm" : "text-text-muted hover:text-text-custom"
            )}
          >
            <Code2 className="mr-2 inline-block h-3 w-3" />
            Liquid
          </button>
        </div>
      </div>

      <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg">
        {view === 'preview' ? (
          <div className="h-full w-full relative">
            <iframe 
              src={`/preview/${component.id}`}
              className="h-full w-full border-0 pointer-events-none md:pointer-events-auto"
              title={component.name}
              loading="lazy"
            />
            {/* Overlay for small screens to prevent iframe interaction when scrolling */}
            <div className="absolute inset-0 bg-transparent group-hover:hidden transition-all md:hidden" />
          </div>
        ) : (
          <div className="h-full w-full overflow-auto p-4 custom-scrollbar">
            <CodeBlock code={component.liquidCode} language="html" />
          </div>
        )}
      </div>

      <div className="p-8">
        <div className="mb-6 flex flex-wrap gap-2">
          {component.tags.map((tag) => (
            <span key={tag} className="rounded-lg bg-bg px-3 py-1 text-[10px] font-black uppercase tracking-widest text-text-muted border border-border-custom/50">
              #{tag}
            </span>
          ))}
        </div>
        
        <p className="mb-8 text-sm leading-relaxed text-text-muted line-clamp-2 italic font-medium">
          "{component.description}"
        </p>

        <div className="flex items-center gap-4">
          <Link 
            href={`/components/${component.category}/${component.id}`}
            className="flex-1 flex items-center justify-center gap-3 rounded-xl bg-text-custom py-4 text-[10px] font-black uppercase tracking-[0.2em] text-bg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/5"
          >
            Deploy Artifact
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button className="h-12 w-12 flex items-center justify-center rounded-xl border border-border-custom text-text-muted hover:text-text-custom hover:bg-bg transition-all">
             <MousePointer2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
