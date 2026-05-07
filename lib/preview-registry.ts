import dynamic from 'next/dynamic'

export const previewRegistry: Record<string, any> = {
  Header01: dynamic(() => import('@/components/previews/headers/Header01')),
  Hero01: dynamic(() => import('@/components/previews/heroes/Hero01')),
}
