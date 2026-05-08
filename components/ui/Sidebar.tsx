"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { 
  Layout, 
  Square, 
  CreditCard, 
  Navigation, 
  Image as ImageIcon, 
  Type, 
  MessageSquare, 
  ShoppingCart, 
  User, 
  CheckCircle2,
  Box,
  Sparkles
} from 'lucide-react'

const categories = [
  { name: 'Carts', icon: ShoppingCart, slug: 'cart' },
  { name: 'Footers', icon: Layout, slug: 'footers' },
  { name: 'Headers', icon: Navigation, slug: 'headers' },
  { name: 'Heroes', icon: ImageIcon, slug: 'heroes' },
  { name: 'Products', icon: Box, slug: 'product' },
  { name: 'Cards', icon: Square, slug: 'cards' },
]

const utilities = [
  { name: 'UI Elements', icon: Type, slug: 'ui-elements' },
  { name: 'Icons', icon: Sparkles, slug: 'icons' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 hidden h-[calc(100vh-5rem)] w-64 bg-bg lg:block overflow-y-auto border-r border-border-custom pt-8">
      <div className="flex h-full flex-col px-6">
        
        <div className="mb-10">
          <h2 className="mb-6 px-4 text-[10px] font-black uppercase tracking-[0.4em] text-text-muted">
             Artifacts
          </h2>
          <nav className="space-y-1.5">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/components/${category.slug}`}
                className={cn(
                  "flex items-center gap-4 rounded-xl px-4 py-3 text-xs font-black uppercase tracking-widest transition-all",
                  pathname === `/components/${category.slug}`
                    ? "bg-text-custom text-bg shadow-lg shadow-black/5"
                    : "text-text-muted hover:bg-white hover:text-text-custom"
                )}
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mb-10">
          <h2 className="mb-6 px-4 text-[10px] font-black uppercase tracking-[0.4em] text-text-muted">
             Utilities
          </h2>
          <nav className="space-y-1.5">
            {utilities.map((category) => (
              <Link
                key={category.slug}
                href={`/components/${category.slug}`}
                className={cn(
                  "flex items-center gap-4 rounded-xl px-4 py-3 text-xs font-black uppercase tracking-widest transition-all",
                  pathname === `/components/${category.slug}`
                    ? "bg-text-custom text-bg shadow-lg shadow-black/5"
                    : "text-text-muted hover:bg-white hover:text-text-custom"
                )}
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-auto pb-12">
           <div className="rounded-2xl bg-accent/5 p-6 border border-accent/10">
              <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-4">Pro Version Available</p>
              <h3 className="text-xs font-bold text-text-custom leading-relaxed mb-4">Unlock 200+ exclusive Liquid components.</h3>
              <button className="w-full rounded-xl bg-accent py-3 text-[10px] font-black uppercase tracking-widest text-white transition-all hover:scale-105">
                 Upgrade Now
              </button>
           </div>
        </div>
      </div>
    </aside>
  )
}
