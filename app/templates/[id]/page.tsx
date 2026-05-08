"use client"

import { use } from 'react'
import { notFound } from 'next/navigation'
import FashionLuxuryTemplate from '@/components/templates/FashionLuxury'
import TechMinimalTemplate from '@/components/templates/TechMinimal'

interface TemplatePageProps {
  params: Promise<{
    id: string
  }>
}

export default function TemplateViewerPage({ params }: TemplatePageProps) {
  const { id } = use(params)

  const renderTemplate = () => {
    switch (id) {
      case 'fashion-luxury':
        return <FashionLuxuryTemplate />
      case 'tech-minimal':
        return <TechMinimalTemplate />
      default:
        notFound()
    }
  }

  return (
    <div className="w-full">
      {renderTemplate()}
    </div>
  )
}
