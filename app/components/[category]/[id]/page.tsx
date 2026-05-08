"use client"

import Navbar from '@/components/ui/Navbar'
import { components } from '@/lib/components'
import { previewRegistry } from '@/lib/preview-registry'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Copy, Check, Monitor, Tablet, Smartphone, Code2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState, use, useEffect } from 'react'

interface ComponentDetailPageProps {
  params: Promise<{
    category: string
    id: string
  }>
}

type ViewMode = 'desktop' | 'tablet' | 'mobile'

import CodeBlock from '@/components/ui/CodeBlock'

export default function ComponentDetailPage({ params }: ComponentDetailPageProps) {
  const { category, id } = use(params)
  const [viewMode, setViewMode] = useState<ViewMode>('desktop')
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const component = components.find((comp) => comp.id === id)

  if (!component) {
    notFound()
  }

  const Preview = previewRegistry[component.previewComponent]


  if (!mounted) return null

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      
      <div className="flex h-[calc(100vh-4rem)] flex-col lg:flex-row">
        {/* Left Sidebar: Details & Code */}
        <aside className="w-full border-r border-border-custom bg-bg-card lg:w-[400px] xl:w-[500px]">
          <div className="flex h-full flex-col p-6">
            <Link 
              href={`/components/${category}`}
              className="mb-6 flex items-center gap-2 text-sm font-medium text-text-muted hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to {category}
            </Link>

            <div className="mb-8">
              <h1 className="mb-2 text-3xl font-extrabold text-text-custom">{component.name}</h1>
              <p className="text-text-muted">{component.description}</p>
            </div>

            <div className="flex-1 overflow-hidden rounded-xl border border-border-custom">
              <CodeBlock code={component.liquidCode} language="html" />
            </div>
          </div>
        </aside>

        {/* Right Content: Live Preview */}
        <main className="flex-1 overflow-hidden bg-bg/50 p-4 lg:p-8">
          <div className="flex h-full flex-col items-center">
            {/* Viewport Toggles */}
            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="flex rounded-xl border border-border-custom bg-bg-card p-1 shadow-sm">
                {[
                  { id: 'desktop', icon: Monitor, label: 'Desktop (100%)' },
                  { id: 'tablet', icon: Tablet, label: 'Tablet (768px)' },
                  { id: 'mobile', icon: Smartphone, label: 'Mobile (375px)' },
                ].map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setViewMode(v.id as ViewMode)}
                    title={v.label}
                    className={cn(
                      "rounded-lg p-2 transition-all",
                      viewMode === v.id 
                        ? "bg-accent/10 text-accent shadow-inner" 
                        : "text-text-muted hover:bg-bg hover:text-text-custom"
                    )}
                  >
                    <v.icon className="h-5 w-5" />
                  </button>
                ))}
              </div>
            </div>

            {/* Preview Frame Container */}
            <div 
              className={cn(
                "flex-1 overflow-hidden rounded-2xl border border-border-custom bg-white shadow-2xl transition-all duration-300 ease-in-out",
                viewMode === 'desktop' && "w-full",
                viewMode === 'tablet' && "max-w-[768px] w-full",
                viewMode === 'mobile' && "max-w-[375px] w-full"
              )}
            >
              <div className="h-full w-full">
                <iframe 
                  src={`/preview/${component.id}`}
                  className="h-full w-full border-0"
                  title={component.name}
                />
              </div>
            </div>
            
            <div className="mt-4 text-xs text-text-muted">
              Viewport: <span className="font-mono">{viewMode === 'desktop' ? 'Full Width' : viewMode === 'tablet' ? '768px' : '375px'}</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
