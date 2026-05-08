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
  Box
} from 'lucide-react'

const categories = [
  { name: 'Headers', icon: Navigation, slug: 'headers' },
  { name: 'Heroes', icon: ImageIcon, slug: 'heroes' },
  { name: 'Cards', icon: Square, slug: 'cards' },
  { name: 'Banners', icon: Box, slug: 'banners' },
  { name: 'Footers', icon: Layout, slug: 'footers' },
  { name: 'About', icon: User, slug: 'about' },
  { name: 'Contact', icon: MessageSquare, slug: 'contact' },
  { name: 'Cart', icon: ShoppingCart, slug: 'cart' },
  { name: 'Checkout', icon: CreditCard, slug: 'checkout' },
  { name: 'Testimonials', icon: CheckCircle2, slug: 'testimonials' },
  { name: 'Products', icon: Box, slug: 'product' },
  { name: 'UI Elements', icon: Type, slug: 'ui-elements' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 hidden h-[calc(100vh-4rem)] w-64 border-r border-border-custom bg-bg-card lg:block">
      <div className="flex h-full flex-col overflow-y-auto px-4 py-6">
        <div className="mb-8 px-2">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-muted">
            Categories
          </h2>
        </div>
        <nav className="space-y-1">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/components/${category.slug}`}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === `/components/${category.slug}`
                  ? "bg-accent/10 text-accent"
                  : "text-text-custom hover:bg-bg"
              )}
            >
              <category.icon className="h-4 w-4" />
              {category.name}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}
