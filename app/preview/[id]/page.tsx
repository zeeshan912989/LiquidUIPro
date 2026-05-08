"use client"

import { use } from 'react'
import { components } from '@/lib/components'
import { previewRegistry } from '@/lib/preview-registry'
import { notFound } from 'next/navigation'

interface PreviewPageProps {
  params: Promise<{
    id: string
  }>
}

export default function PreviewPage({ params }: PreviewPageProps) {
  const { id } = use(params)
  const component = components.find((comp) => comp.id === id)

  if (!component) {
    notFound()
  }

  const Preview = previewRegistry[component.previewComponent]

  if (!Preview) {
    return <div className="p-8 text-center text-sm text-slate-500 font-mono">Component Preview Not Found</div>
  }

  return (
    <div>
      <Preview />
    </div>
  )
}
