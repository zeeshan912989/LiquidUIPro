"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Copy, Check, Eye, Code2, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Component } from '@/lib/components'
import { previewRegistry } from '@/lib/preview-registry'
import CodeBlock from './CodeBlock'

interface PreviewRendererProps {
  componentName: string
}

function PreviewRenderer({ componentName }: PreviewRendererProps) {
  const Preview = previewRegistry[componentName]
  if (!Preview) return <div className="p-4 text-xs text-text-muted">Preview not available</div>
  return <Preview />
}

interface ComponentCardProps {
  component: Component
}

export default function ComponentCard({ component }: ComponentCardProps) {
  const [view, setView] = useState<'preview' | 'code'>('preview')

  return (
    <div className="group overflow-hidden rounded-xl border border-border-custom bg-bg-card shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center justify-between border-b border-border-custom bg-bg/50 px-4 py-3">
        <Link 
          href={`/components/${component.category}/${component.id}`}
          className="font-semibold text-text-custom hover:text-accent transition-colors"
        >
          {component.name}
        </Link>
        <div className="flex items-center gap-2">
          <div className="flex rounded-lg border border-border-custom bg-bg-card p-1">
            <button
              onClick={() => setView('preview')}
              className={cn(
                "rounded-md px-2 py-1 text-xs font-medium transition-colors",
                view === 'preview' ? "bg-accent text-white" : "text-text-muted hover:text-text-custom"
              )}
            >
              <Eye className="mr-1 inline-block h-3 w-3" />
              Preview
            </button>
            <button
              onClick={() => setView('code')}
              className={cn(
                "rounded-md px-2 py-1 text-xs font-medium transition-colors",
                view === 'code' ? "bg-accent text-white" : "text-text-muted hover:text-text-custom"
              )}
            >
              <Code2 className="mr-1 inline-block h-3 w-3" />
              Liquid
            </button>
          </div>
        </div>
      </div>

      <div className="relative aspect-video w-full overflow-hidden bg-bg">
        {view === 'preview' ? (
          <iframe 
            src={`/preview/${component.id}`}
            className="h-full w-full border-0"
            title={component.name}
            loading="lazy"
          />
        ) : (
          <CodeBlock code={component.liquidCode} language="html" />
        )}
      </div>

      <div className="p-4">
        <div className="mb-3 flex flex-wrap gap-2">
          {component.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-bg px-2 py-0.5 text-[10px] font-medium text-text-muted">
              #{tag}
            </span>
          ))}
        </div>
        <p className="mb-4 text-sm text-text-muted line-clamp-2">
          {component.description}
        </p>

        <Link 
          href={`/components/${component.category}/${component.id}`}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-border-custom bg-bg py-2 text-xs font-bold text-text-custom transition-colors hover:bg-accent hover:text-white"
        >
          View Full Page
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  )
}
