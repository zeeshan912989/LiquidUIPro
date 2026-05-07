"use client"

import { useState } from 'react'
import { Copy, Check, Eye, Code2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Component } from '@/lib/components'
import { previewRegistry } from '@/lib/preview-registry'

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
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(component.liquidCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group overflow-hidden rounded-xl border border-border-custom bg-bg-card shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center justify-between border-b border-border-custom bg-bg/50 px-4 py-3">
        <h3 className="font-semibold text-text-custom">{component.name}</h3>
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
          <button
            onClick={copyToClipboard}
            className="rounded-lg border border-border-custom bg-bg-card p-2 text-text-muted transition-colors hover:text-accent"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="relative aspect-video w-full overflow-hidden bg-bg">
        {view === 'preview' ? (
          <div className="h-full w-full overflow-auto bg-white">
            <PreviewRenderer componentName={component.previewComponent} />
          </div>
        ) : (
          <div className="h-full overflow-auto bg-[#0d1117] p-4 text-xs font-mono text-white">
            <pre><code>{component.liquidCode}</code></pre>
          </div>
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
        <p className="text-sm text-text-muted line-clamp-2">
          {component.description}
        </p>
      </div>
    </div>
  )
}
