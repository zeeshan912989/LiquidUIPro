import Navbar from '@/components/ui/Navbar'
import Sidebar from '@/components/ui/Sidebar'
import ComponentCard from '@/components/ui/ComponentCard'
import { components } from '@/lib/components'
import { ArrowRight, Sparkles, Code, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 lg:pl-64">
          <div className="container mx-auto px-4 py-8 md:px-8">
            {/* Hero Section */}
            <section className="relative mb-16 overflow-hidden rounded-3xl bg-accent px-8 py-16 text-white shadow-xl">
              <div className="absolute right-0 top-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-accent-dark/30 blur-3xl" />
              
              <div className="relative z-10 max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm font-medium backdrop-blur-md">
                  <Sparkles className="h-4 w-4" />
                  <span>100+ Shopify Components</span>
                </div>
                <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
                  Build Shopify Stores <br />
                  <span className="text-white/80">Faster Than Ever.</span>
                </h1>
                <p className="mb-8 text-lg text-white/90 md:text-xl">
                  A curated library of premium Shopify Liquid components. 
                  Live preview, copy code, and deploy in seconds. Free forever.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-accent transition-transform hover:scale-105">
                    Browse All Components
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  <button className="flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20">
                    <Zap className="h-5 w-5" />
                    Get Premium Pack
                  </button>
                </div>
              </div>
            </section>

            {/* Features */}
            <div className="mb-16 grid gap-8 md:grid-cols-3">
              {[
                { title: 'Live Preview', desc: 'See how components look on different devices instantly.', icon: Sparkles },
                { title: 'One-Click Copy', desc: 'Copy production-ready Liquid and CSS with a single click.', icon: Code },
                { title: 'Mobile First', desc: 'Every component is tested and optimized for mobile shoppers.', icon: Zap },
              ].map((feature, i) => (
                <div key={i} className="rounded-2xl border border-border-custom bg-bg-card p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-text-custom">{feature.title}</h3>
                  <p className="text-text-muted">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Featured Components */}
            <section className="mb-16">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-3xl font-extrabold text-text-custom">Featured Components</h2>
                <button className="text-sm font-semibold text-accent hover:underline">View all</button>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {components.map((comp) => (
                  <ComponentCard key={comp.id} component={comp} />
                ))}
                {/* Placeholders for demo */}
                {[1, 2].map((i) => (
                  <div key={i} className="aspect-video animate-pulse rounded-xl bg-border-custom/20" />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
