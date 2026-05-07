export type Component = {
  id: string
  name: string
  category: string
  tags: string[]
  description: string
  previewComponent: string    // Preview ka component naam
  liquidCode: string          // Copy karne wala code
  cssCode?: string            // Optional CSS
  isPremium: boolean
}

export const components: Component[] = [
  {
    id: "header-01",
    name: "Minimal Sticky Header",
    category: "headers",
    tags: ["sticky", "minimal", "responsive"],
    description: "Clean sticky header with logo, nav links and cart icon",
    previewComponent: "Header01",
    liquidCode: `<header class="site-header sticky-header border-bottom">
  <div class="container-fluid">
    <div class="header-wrapper flex justify-between align-center py-4">
      <!-- Logo -->
      <div class="header-logo">
        <a href="{{ routes.root_url }}" class="h2 font-bold">
          {{ shop.name }}
        </a>
      </div>

      <!-- Navigation -->
      <nav class="header-nav hidden-mobile">
        <ul class="flex gap-6 list-unstyled">
          {% for link in linklists.main-menu.links %}
            <li>
              <a href="{{ link.url }}" class="nav-link {% if link.active %}active{% endif %}">
                {{ link.title }}
              </a>
            </li>
          {% endfor %}
        </ul>
      </nav>

      <!-- Icons -->
      <div class="header-icons flex gap-4">
        <a href="{{ routes.search_url }}" class="icon-link">
          {% render 'icon-search' %}
        </a>
        <a href="{{ routes.account_url }}" class="icon-link">
          {% render 'icon-account' %}
        </a>
        <a href="{{ routes.cart_url }}" class="icon-link relative">
          {% render 'icon-cart' %}
          <span class="cart-count badge">{{ cart.item_count }}</span>
        </a>
      </div>
    </div>
  </div>
</header>

<style>
.site-header { background: #fff; transition: all 0.3s ease; }
.sticky-header { position: sticky; top: 0; z-index: 100; }
.nav-link { color: #555; text-decoration: none; font-size: 14px; }
.nav-link:hover, .nav-link.active { color: #000; }
.cart-count { position: absolute; top: -8px; right: -8px; background: #000; color: #fff; border-radius: 50%; width: 18px; height: 18px; font-size: 10px; display: flex; align-center; justify-center; }
</style>`,
    isPremium: false
  },
  {
    id: "hero-01",
    name: "Split Image Hero",
    category: "heroes",
    tags: ["split", "cta", "luxury"],
    description: "High-impact hero section with image on one side and bold typography on the other.",
    previewComponent: "Hero01",
    liquidCode: `<section class="split-hero">
  <div class="flex-container">
    <div class="hero-content">
      <h1 class="hero-title">{{ section.settings.title }}</h1>
      <p class="hero-text">{{ section.settings.text }}</p>
      <div class="hero-actions">
        <a href="{{ section.settings.link }}" class="button primary">Shop Now</a>
      </div>
    </div>
    <div class="hero-image">
      <img src="{{ section.settings.image | img_url: 'master' }}" alt="{{ section.settings.title }}">
    </div>
  </div>
</section>

<style>
.split-hero .flex-container { display: flex; flex-direction: row; align-items: center; }
.hero-content { flex: 1; padding: 60px; }
.hero-image { flex: 1; height: 600px; }
.hero-image img { width: 100%; height: 100%; object-fit: cover; }
@media (max-width: 768px) { .split-hero .flex-container { flex-direction: column; } }
</style>`,
    isPremium: false
  },
]
