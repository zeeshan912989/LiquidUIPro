import Navbar from '@/components/ui/Navbar'
import Sidebar from '@/components/ui/Sidebar'
import ComponentCard from '@/components/ui/ComponentCard'
import { components } from '@/lib/components'
import { notFound } from 'next/navigation'

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params
  const filteredComponents = components.filter((comp) => comp.category === category)

  // In a real app, you'd check if the category exists in a list
  // For now, if no components found, we'll show empty or 404
  
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 lg:pl-64">
          <div className="container mx-auto px-4 py-8 md:px-8">
            <header className="mb-12">
              <h1 className="mb-2 text-4xl font-extrabold text-text-custom">{categoryName}</h1>
              <p className="text-lg text-text-muted">
                Premium Shopify Liquid components for your {categoryName.toLowerCase()} section.
              </p>
            </header>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredComponents.length > 0 ? (
                filteredComponents.map((comp) => (
                  <ComponentCard key={comp.id} component={comp} />
                ))
              ) : (
                <div className="col-span-full flex h-64 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border-custom text-center">
                  <p className="text-xl font-semibold text-text-muted">No components found yet.</p>
                  <p className="text-text-muted">We're working on adding more components to this category!</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
