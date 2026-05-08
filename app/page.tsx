import Navbar from '@/components/ui/Navbar'
import Sidebar from '@/components/ui/Sidebar'
import ComponentCard from '@/components/ui/ComponentCard'
import { components } from '@/lib/components'
import { ArrowRight, Sparkles, Code, Zap, ShoppingCart, Layout, Monitor, MousePointer2 } from 'lucide-react'

export default function Home() {
  const featuredComponents = components.slice(0, 6);
  const categories = [
    { name: 'Carts', count: 20, icon: ShoppingCart, color: 'bg-blue-500' },
    { name: 'Footers', count: 20, icon: Layout, color: 'bg-purple-500' },
    { name: 'Headers', count: 15, icon: Monitor, color: 'bg-emerald-500' },
    { name: 'Product Pages', count: 12, icon: MousePointer2, color: 'bg-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-bg selection:bg-accent selection:text-white">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 lg:pl-64">
          <div className="container mx-auto px-4 py-12 md:px-12 md:py-20">
            
            {/* Hero Section */}
            <section className="relative mb-24 overflow-hidden rounded-[2.5rem] bg-[#0f172a] px-8 py-24 text-white shadow-2xl md:px-16">
              {/* Mesh Gradient Background */}
              <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] animate-pulse rounded-full bg-accent/20 blur-[120px]" />
                <div className="absolute -right-1/4 bottom-0 h-[600px] w-[600px] animate-pulse rounded-full bg-blue-600/20 blur-[100px] delay-1000" />
              </div>
              
              <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                    <Sparkles className="h-4 w-4 text-accent" />
                    <span className="text-accent">New: 20 Premium Cart Variants</span>
                  </div>
                  <h1 className="mb-8 text-5xl font-black leading-[1.1] tracking-tighter md:text-7xl lg:text-8xl">
                    Elevate Your <br />
                    <span className="bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">Shopify Store.</span>
                  </h1>
                  <p className="mb-10 max-w-lg text-lg leading-relaxed text-slate-400 md:text-xl">
                    A curated collection of high-fidelity, production-ready Liquid components. 
                    Copy-paste premium designs directly into your theme.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="flex items-center gap-3 rounded-2xl bg-accent px-8 py-4 font-black uppercase tracking-widest text-white shadow-xl shadow-accent/20 transition-all hover:scale-105 active:scale-95">
                      Explore Library
                      <ArrowRight className="h-5 w-5" />
                    </button>
                    <button className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-black uppercase tracking-widest text-white backdrop-blur-md transition-all hover:bg-white/10">
                      <Zap className="h-5 w-5 text-accent group-hover:animate-pulse" />
                      Get Pro Access
                    </button>
                  </div>
                </div>

                {/* Hero Visual */}
                <div className="hidden lg:block">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-accent to-blue-500 opacity-20 blur-2xl" />
                    <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                      <div className="grid grid-cols-2 gap-4">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="aspect-video overflow-hidden rounded-xl bg-slate-800/50 p-2">
                             <div className="h-full w-full rounded-lg bg-slate-700/30" />
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Floating Badge */}
                    <div className="absolute -right-8 -top-8 animate-bounce duration-[3000ms]">
                       <div className="rounded-2xl bg-accent p-6 shadow-2xl">
                          <Code className="h-8 w-8 text-white" />
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Stats / Category Pill Marquee */}
            <div className="mb-24 flex flex-wrap justify-center gap-6 md:gap-12">
               {categories.map((cat, i) => (
                 <div key={i} className="group flex cursor-pointer items-center gap-4 rounded-3xl border border-border-custom bg-bg-card p-4 px-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                    <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg", cat.color)}>
                       <cat.icon className="h-6 w-6" />
                    </div>
                    <div>
                       <h4 className="font-bold text-text-custom">{cat.name}</h4>
                       <p className="text-[10px] font-black uppercase tracking-widest text-text-muted">{cat.count} Artifacts</p>
                    </div>
                 </div>
               ))}
            </div>

            {/* Main Components Grid */}
            <section className="mb-24">
              <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                  <h2 className="text-4xl font-black tracking-tighter text-text-custom md:text-5xl">Featured Artifacts.</h2>
                  <p className="mt-4 text-text-muted">Our most popular high-conversion designs, ready for your theme.</p>
                </div>
                <button className="group flex items-center gap-2 rounded-xl border border-border-custom px-6 py-3 text-sm font-black uppercase tracking-widest text-text-custom transition-all hover:bg-text-custom hover:text-white">
                  Browse All 
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {featuredComponents.map((comp) => (
                  <ComponentCard key={comp.id} component={comp} />
                ))}
              </div>
            </section>

            {/* Value Props Section */}
            <section className="grid gap-8 md:grid-cols-3">
               {[
                 { 
                   title: 'Liquid Optimized', 
                   desc: 'Every snippet is optimized for Shopify Online Store 2.0 with dynamic schemas.',
                   icon: Code,
                   accent: 'bg-emerald-500/10 text-emerald-600'
                 },
                 { 
                   title: 'Hyper Responsive', 
                   desc: 'Pixel-perfect rendering across mobile, tablet, and ultra-wide desktops.',
                   icon: MousePointer2,
                   accent: 'bg-blue-500/10 text-blue-600'
                 },
                 { 
                   title: 'Next-Gen Performance', 
                   desc: 'Zero-dependency CSS and lightweight SVGs ensure blazing fast page loads.',
                   icon: Zap,
                   accent: 'bg-accent/10 text-accent'
                 },
               ].map((prop, i) => (
                 <div key={i} className="group rounded-[2rem] border border-border-custom bg-bg-card p-10 shadow-sm transition-all hover:border-accent/20">
                    <div className={cn("mb-8 flex h-16 w-16 items-center justify-center rounded-[1.5rem] transition-transform group-hover:scale-110", prop.accent)}>
                       <prop.icon className="h-8 w-8" />
                    </div>
                    <h3 className="mb-4 text-2xl font-black tracking-tight text-text-custom">{prop.title}</h3>
                    <p className="leading-relaxed text-text-muted">{prop.desc}</p>
                 </div>
               ))}
            </section>

          </div>
          
          {/* Subtle Bottom Footer */}
          <footer className="mt-20 border-t border-border-custom py-12 text-center">
             <p className="text-[10px] font-black uppercase tracking-[0.4em] text-text-muted">
                LiquidUI Pro &copy; 2026 // Built for the next generation of Shopify Merchants.
             </p>
          </footer>
        </main>
      </div>
    </div>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
