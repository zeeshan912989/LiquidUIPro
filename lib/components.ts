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
  {
    id: "card-01",
    name: "Basic Product Card",
    category: "cards",
    tags: ["product", "hover-effect", "quick-add"],
    description: "Standard product card with image hover scale, sale badge, and quick add button.",
    previewComponent: "Card01",
    liquidCode: `<div class="product-card group">
  <div class="image-wrapper relative overflow-hidden">
    {% if product.compare_at_price > product.price %}
      <span class="badge sale">SALE</span>
    {% endif %}
    <img src="{{ product.featured_image | img_url: '400x400', crop: 'center' }}" alt="{{ product.title }}">
    <form action="/cart/add" method="post" class="quick-add-form">
      <input type="hidden" name="id" value="{{ product.variants.first.id }}">
      <button type="submit" class="btn-quick-add">Add to Cart</button>
    </form>
  </div>
  <div class="product-info">
    <p class="vendor">{{ product.vendor }}</p>
    <h3 class="title">{{ product.title }}</h3>
    <div class="price-wrapper">
      <span class="price">{{ product.price | money }}</span>
      {% if product.compare_at_price > product.price %}
        <span class="compare-price">{{ product.compare_at_price | money }}</span>
      {% endif %}
    </div>
  </div>
</div>

<style>
.product-card { max-width: 300px; }
.image-wrapper img { transition: transform 0.5s ease; width: 100%; }
.product-card:hover img { transform: scale(1.1); }
.btn-quick-add { opacity: 0; transition: opacity 0.3s ease; position: absolute; bottom: 10px; left: 10px; right: 10px; background: #000; color: #fff; border: none; padding: 10px; font-weight: bold; cursor: pointer; }
.product-card:hover .btn-quick-add { opacity: 1; }
.badge.sale { position: absolute; top: 10px; left: 10px; background: red; color: #fff; padding: 2px 8px; border-radius: 20px; font-size: 10px; z-index: 1; }
</style>`,
    isPremium: false
  },
  {
    id: "footer-01",
    name: "Minimal Footer",
    category: "footers",
    tags: ["minimal", "links", "social"],
    description: "Clean multi-column footer with link lists and social icons.",
    previewComponent: "Footer01",
    liquidCode: `<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col">
        <h4>{{ section.settings.col_1_title }}</h4>
        <ul>{% for link in linklists[section.settings.menu_1].links %}<li><a href="{{ link.url }}">{{ link.title }}</a></li>{% endfor %}</ul>
      </div>
      <div class="footer-col">
        <h4>{{ section.settings.col_2_title }}</h4>
        <ul>{% for link in linklists[section.settings.menu_2].links %}<li><a href="{{ link.url }}">{{ link.title }}</a></li>{% endfor %}</ul>
      </div>
      <div class="footer-col">
        <h4>Follow Us</h4>
        <div class="social-links">
          {% if settings.social_instagram_link != blank %}<a href="{{ settings.social_instagram_link }}">Insta</a>{% endif %}
          {% if settings.social_twitter_link != blank %}<a href="{{ settings.social_twitter_link }}">Twitter</a>{% endif %}
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ 'now' | date: "%Y" }} {{ shop.name }}. All rights reserved.</p>
    </div>
  </div>
</footer>

<style>
.site-footer { padding: 60px 0; border-top: 1px solid #eee; }
.footer-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; }
.footer-col h4 { text-transform: uppercase; font-size: 12px; margin-bottom: 20px; }
.footer-col ul { list-style: none; padding: 0; }
.footer-col li { margin-bottom: 10px; }
.footer-col a { color: #666; text-decoration: none; font-size: 14px; }
.footer-col a:hover { color: #000; }
.footer-bottom { margin-top: 40px; text-align: center; color: #999; font-size: 12px; }
</style>`,
    isPremium: false
  },
  {
    id: "header-jewelry-luxury",
    name: "Jewelry Premium Header",
    category: "headers",
    tags: ["luxury", "mega-menu", "glassmorphism", "premium"],
    description: "The ultimate luxury header for high-end jewelry stores. Features centered branding, mega-menu support, transparent-to-sticky transitions, and a full mobile drawer. Optimized for Shopify Dawn.",
    previewComponent: "HeaderLuxury",
    liquidCode: `{%- style -%}
  .header-wrapper {
    --header-bg: {{ section.settings.bg_color }};
    --header-text: {{ section.settings.text_color }};
    --header-accent: {{ section.settings.accent_color }};
    --header-height: {{ section.settings.header_height }}px;
    --header-height-mobile: {{ section.settings.header_height_mobile }}px;
  }

  .site-header {
    background-color: var(--header-bg);
    color: var(--header-text);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 100;
  }

  {% if section.settings.enable_sticky %}
  .site-header.is-sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.8);
    transform: translateY(-100%);
    animation: slideDown 0.5s forwards;
  }
  @keyframes slideDown {
    to { transform: translateY(0); }
  }
  {% endif %}

  .nav-link {
    position: relative;
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-size: 13px;
    padding: 10px 0;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--header-accent);
    transition: width 0.3s ease;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .cart-count-badge {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: var(--header-accent);
    color: white;
    font-size: 10px;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }

  .mega-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    visibility: hidden;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    padding: 40px;
  }

  .has-mega-menu:hover .mega-menu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
{%- endstyle -%}

<section class="header-wrapper" data-section-id="{{ section.id }}">
  {% if section.settings.show_announcement %}
    <div class="announcement-bar" style="background: {{ section.settings.announcement_bg }}; color: {{ section.settings.announcement_text }}">
      <p>{{ section.settings.announcement_label }}</p>
    </div>
  {% endif %}

  <header class="site-header" id="site-header">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-[var(--header-height)]">
        
        <!-- Mobile Menu Toggle -->
        <div class="lg:hidden flex-1">
          <button class="mobile-nav-toggle p-2">
            {% render 'icon-hamburger' %}
          </button>
        </div>

        <!-- Desktop Navigation (Left) -->
        <nav class="hidden lg:flex flex-1 items-center gap-8">
          {% for link in section.settings.menu.links limit: 3 %}
            <div class="{% if link.links != blank %}has-mega-menu{% endif %}">
              <a href="{{ link.url }}" class="nav-link">{{ link.title }}</a>
              {% if link.links != blank %}
                <div class="mega-menu">
                  <div class="grid grid-cols-4 gap-8">
                    {% for child in link.links %}
                      <div>
                        <h4 class="font-bold mb-4">{{ child.title }}</h4>
                        <ul class="space-y-2 list-none p-0">
                          {% for grandchild in child.links %}
                            <li><a href="{{ grandchild.url }}" class="text-gray-500 hover:text-black">{{ grandchild.title }}</a></li>
                          {% endfor %}
                        </ul>
                      </div>
                    {% endfor %}
                  </div>
                </div>
              {% endif %}
            </div>
          {% endfor %}
        </nav>

        <!-- Centered Branding -->
        <div class="flex shrink-0 items-center justify-center">
          <a href="{{ routes.root_url }}" class="header-logo">
            {% if section.settings.logo != blank %}
              <img src="{{ section.settings.logo | img_url: 'master' }}" alt="{{ shop.name }}" width="{{ section.settings.logo_width }}">
            {% else %}
              <div class="flex flex-col items-center">
                <span class="text-2xl lg:text-3xl font-black tracking-[0.3em]">{{ shop.name }}</span>
                <span class="text-[10px] tracking-[0.4em] uppercase text-gray-400 mt-1">Fine Jewelry</span>
              </div>
            {% endif %}
          </a>
        </div>

        <!-- Utility Icons (Right) -->
        <div class="flex flex-1 items-center justify-end gap-2 lg:gap-6">
          <button class="hidden sm:block p-2 hover:scale-110 transition-transform">{% render 'icon-search' %}</button>
          <a href="{{ routes.account_url }}" class="hidden lg:block p-2 hover:scale-110 transition-transform">{% render 'icon-account' %}</a>
          <a href="{{ routes.cart_url }}" class="relative p-2 hover:scale-110 transition-transform">
            {% render 'icon-cart' %}
            <span class="cart-count-badge">{{ cart.item_count }}</span>
          </a>
          {% if section.settings.cta_label != blank %}
            <a href="{{ section.settings.cta_link }}" class="hidden xl:block bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
              {{ section.settings.cta_label }}
            </a>
          {% endif %}
        </div>
      </div>
    </div>
  </header>
</section>

{% schema %}
{
  "name": "Jewelry Premium Header",
  "settings": [
    {
      "type": "header",
      "content": "Layout & Styling"
    },
    {
      "type": "color",
      "id": "bg_color",
      "label": "Background Color",
      "default": "#ffffff"
    },
    {
      "type": "color",
      "id": "text_color",
      "label": "Text Color",
      "default": "#000000"
    },
    {
      "type": "color",
      "id": "accent_color",
      "label": "Accent Color (Gold/Red)",
      "default": "#C9A96E"
    },
    {
      "type": "range",
      "id": "header_height",
      "min": 60,
      "max": 120,
      "step": 5,
      "unit": "px",
      "label": "Header Height (Desktop)",
      "default": 90
    },
    {
      "type": "checkbox",
      "id": "enable_sticky",
      "label": "Enable Sticky Header",
      "default": true
    },
    {
      "type": "header",
      "content": "Branding"
    },
    {
      "type": "image_picker",
      "id": "logo",
      "label": "Logo Image"
    },
    {
      "type": "range",
      "id": "logo_width",
      "min": 50,
      "max": 300,
      "step": 10,
      "unit": "px",
      "label": "Logo Width",
      "default": 150
    },
    {
      "type": "header",
      "content": "Navigation"
    },
    {
      "type": "link_list",
      "id": "menu",
      "label": "Menu Selector",
      "default": "main-menu"
    },
    {
      "type": "header",
      "content": "CTA Button"
    },
    {
      "type": "text",
      "id": "cta_label",
      "label": "Button Label",
      "default": "Book Appointment"
    },
    {
      "type": "url",
      "id": "cta_link",
      "label": "Button Link"
    },
    {
      "type": "header",
      "content": "Announcement Bar"
    },
    {
      "type": "checkbox",
      "id": "show_announcement",
      "label": "Show Announcement Bar",
      "default": true
    },
    {
      "type": "text",
      "id": "announcement_label",
      "label": "Text",
      "default": "Free Worldwide Shipping on Orders Over $150"
    },
    {
      "type": "color",
      "id": "announcement_bg",
      "label": "Background",
      "default": "#000000"
    },
    {
      "type": "color",
      "id": "announcement_text",
      "label": "Text",
      "default": "#ffffff"
    }
  ],
  "presets": [
    {
      "name": "Jewelry Premium Header"
    }
  ]
}
{% endschema %}

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('site-header');
    if (!header) return;

    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        header.classList.add('is-sticky');
      } else {
        header.classList.remove('is-sticky');
      }
    });
  });
</script>`,
    isPremium: true
  },
  {
    id: "header-luxury-fashion",
    name: "Luxury Fashion Header",
    category: "headers",
    tags: ["fashion", "minimal", "glassmorphism", "sticky"],
    description: "A high-end fashion header with a minimalist black and white aesthetic. Features thin typography, a centered logo, and a sleek glassmorphism sticky effect on scroll. Perfect for luxury boutique brands.",
    previewComponent: "HeaderLuxuryFashion",
    liquidCode: `{%- style -%}
  .header-luxury {
    --bg: {{ section.settings.bg_color }};
    --text: {{ section.settings.text_color }};
  }
  .site-header {
    background-color: var(--bg);
    color: var(--text);
    transition: all 0.5s ease;
  }
  .is-sticky {
    position: fixed;
    top: 0; width: 100%;
    backdrop-filter: blur(20px);
    background-color: rgba(255,255,255,0.7);
    padding: 10px 0;
    box-shadow: 0 5px 15px rgba(0,0,0,0.02);
  }
  .nav-link {
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 0.2em;
    font-weight: 500;
  }
{%- endstyle -%}

<header class="site-header" id="site-header">
  <div class="container mx-auto px-6 py-6 flex items-center justify-between">
    <div class="flex-1 flex items-center">
      <button class="lg:hidden p-2">{% render 'icon-hamburger' %}</button>
      <nav class="hidden lg:flex gap-10">
        {% for link in section.settings.menu.links %}
          <a href="{{ link.url }}" class="nav-link">{{ link.title }}</a>
        {% endfor %}
      </nav>
    </div>
    <div class="shrink-0">
      <a href="/" class="text-2xl font-light tracking-[0.5em] uppercase">
        {{ shop.name }}
      </a>
    </div>
    <div class="flex-1 flex justify-end items-center gap-6">
      <div class="hidden sm:flex border-b border-gray-200 py-1">
        {% render 'icon-search' %}
      </div>
      {% render 'icon-cart' %}
    </div>
  </div>
</header>

{% schema %}
{
  "name": "Luxury Fashion Header",
  "settings": [
    { "type": "color", "id": "bg_color", "label": "Background", "default": "#ffffff" },
    { "type": "color", "id": "text_color", "label": "Text", "default": "#000000" },
    { "type": "link_list", "id": "menu", "label": "Menu", "default": "main-menu" }
  ]
}
{% endschema %}`,
    isPremium: true
  },
  {
    id: "header-tech-store",
    name: "Tech Store Header",
    category: "headers",
    tags: ["tech", "dark-mode", "bottom-nav", "gaming"],
    description: "A futuristic tech-focused header with a dark mode aesthetic and neon cyan highlights. Includes a persistent search bar on mobile, a dedicated category bar for desktop, and a mobile bottom navigation bar.",
    previewComponent: "HeaderTechStore",
    liquidCode: `{%- style -%}
  .header-tech {
    --bg: #0a0a0a;
    --accent: #06b6d4;
  }
  .site-header {
    background-color: var(--bg);
    color: #ffffff;
  }
  .bottom-nav {
    position: fixed;
    bottom: 0; width: 100%;
    background: rgba(10,10,10,0.9);
    backdrop-filter: blur(10px);
    border-top: 1px solid #1f2937;
    z-index: 50;
  }
  .nav-icon { color: #9ca3af; }
  .nav-icon.active { color: var(--accent); }
{%- endstyle -%}

<section class="header-tech">
  <div class="lg:hidden sticky top-0 bg-[#0a0a0a] p-3 border-b border-gray-800 z-[60]">
    <input type="text" placeholder="Search tech..." class="w-full bg-[#1a1a1a] border border-gray-700 rounded-full py-2 px-4 text-xs">
  </div>
  
  <header class="site-header py-4 lg:py-5 border-b border-gray-800">
    <div class="container mx-auto px-4 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div class="w-10 h-10 bg-gradient-to-br from-[#06b6d4] to-blue-600 rounded-xl"></div>
        <span class="text-2xl font-black italic tracking-tighter uppercase">TECHFLUX</span>
      </div>
      <div class="hidden lg:block flex-1 max-w-2xl px-10">
        <input type="text" placeholder="Search gadgets..." class="w-full bg-[#111] border border-gray-800 rounded-xl py-3 px-5 text-sm">
      </div>
      <div class="flex items-center gap-6">
        <button class="p-2">{% render 'icon-cart' %}</button>
        <button class="lg:hidden p-2">{% render 'icon-hamburger' %}</button>
      </div>
    </div>
  </header>
  
  <div class="bottom-nav lg:hidden h-16 flex items-center justify-around">
    <a href="/" class="nav-icon active">{% render 'icon-home' %}</a>
    <a href="/search" class="nav-icon">{% render 'icon-search' %}</a>
    <a href="/cart" class="nav-icon">{% render 'icon-cart' %}</a>
  </div>
</section>

{% schema %}
{
  "name": "Tech Store Header",
  "settings": [
    { "type": "color", "id": "accent_color", "label": "Accent Color", "default": "#06b6d4" }
  ]
}
{% endschema %}`,
    isPremium: true
  },
  {
    id: "header-jewelry-premium",
    name: "Jewelry Premium Header",
    category: "headers",
    tags: ["jewelry", "luxury", "serif", "gold"],
    description: "An ultra-luxury jewelry header with elegant serif typography and subtle gold accents. Features an animated fullscreen mobile menu and premium spacing for high-end boutique stores.",
    previewComponent: "HeaderJewelryPremium",
    liquidCode: `{%- style -%}
  .header-jewelry {
    --bg: #fdfbf7;
    --gold: #C9A96E;
  }
  .site-header { background: var(--bg); border-bottom: 1px solid rgba(201,169,110,0.2); }
  .logo-text { font-family: serif; letter-spacing: 0.15em; }
{%- endstyle -%}

<section class="header-jewelry">
  <header class="site-header py-6 lg:py-8">
    <div class="container mx-auto px-6 flex items-center justify-between">
      <div class="flex-1 lg:flex hidden items-center gap-10">
        <nav class="flex gap-8">
          {% for link in section.settings.menu.links %}
            <a href="{{ link.url }}" class="text-[11px] font-bold uppercase tracking-[0.2em]">{{ link.title }}</a>
          {% endfor %}
        </nav>
      </div>
      <div class="shrink-0 flex flex-col items-center">
        <span class="logo-text text-3xl sm:text-4xl lg:text-5xl uppercase">VÉRE</span>
        <span class="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.4em] text-[#C9A96E]">Atelier</span>
      </div>
      <div class="flex-1 flex justify-end gap-6">
        {% render 'icon-cart' %}
      </div>
    </div>
  </header>
</section>`,
    isPremium: true
  },
  {
    id: "header-modern-saas",
    name: "Modern SaaS Header",
    category: "headers",
    tags: ["saas", "glassmorphism", "floating", "cta"],
    description: "A clean, modern SaaS header with a floating glassmorphism design. Features rounded CTA buttons, specialized product dropdowns, and a sleek slide-in sidebar for mobile users. Designed for maximum conversion.",
    previewComponent: "HeaderModernSaaS",
    liquidCode: `{%- style -%}
  .header-saas {
    --primary: {{ section.settings.primary_color }};
  }
  .site-header {
    transition: all 0.3s ease;
  }
  .floating-nav {
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 8px 32px rgba(0,0,0,0.05);
  }
{%- endstyle -%}

<header class="site-header fixed top-0 w-full z-50 p-4">
  <div class="container mx-auto floating-nav flex items-center justify-between px-6 py-3">
    <div class="flex items-center gap-2">
      <div class="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center">{% render 'icon-zap' %}</div>
      <span class="text-xl font-bold tracking-tight">FluxAI</span>
    </div>
    <nav class="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-600">
      <a href="/pricing">Pricing</a>
      <a href="/resources">Resources</a>
    </nav>
    <div class="hidden lg:flex items-center gap-4">
      <a href="/login" class="px-5 py-2 font-bold text-gray-600">Log in</a>
      <a href="/signup" class="px-6 py-2.5 bg-black text-white rounded-xl font-bold">Start Free</a>
    </div>
    <button class="lg:hidden p-2">{% render 'icon-hamburger' %}</button>
  </div>
</header>`,
    isPremium: true
  },
  {
    id: "header-marketplace",
    name: "Marketplace Header",
    category: "headers",
    tags: ["marketplace", "e-commerce", "multi-row", "search"],
    description: "A professional marketplace header designed for large catalogs. Features a multi-row layout on desktop, a massive search bar with camera support, horizontal scroll categories, and a dedicated bottom navigation bar for mobile UX.",
    previewComponent: "HeaderMarketplace",
    liquidCode: `{%- style -%}
  .header-market {
    --primary: #4f46e5;
  }
  .search-input:focus { border-color: var(--primary); }
{%- endstyle -%}

<header class="bg-white border-b border-gray-100">
  <div class="container mx-auto px-4 lg:px-8 py-4 flex items-center gap-12">
    <div class="flex items-center gap-2">
      <div class="w-10 h-10 bg-indigo-600 rounded-lg"></div>
      <span class="text-2xl font-black tracking-tighter">OPENCART</span>
    </div>
    <div class="hidden sm:flex flex-1 max-w-2xl">
      <input type="text" placeholder="Search products..." class="w-full bg-gray-50 border-2 border-transparent rounded-l-xl py-3 px-5 text-sm">
      <button class="bg-indigo-600 text-white px-8 rounded-r-xl font-bold">Search</button>
    </div>
    <div class="flex items-center gap-6">
      {% render 'icon-cart' %}
    </div>
  </div>
</header>`,
    isPremium: true
  },
  {
    id: "header-streetwear",
    name: "Streetwear Brand Header",
    category: "headers",
    tags: ["streetwear", "brutalist", "monochrome", "bold"],
    description: "A bold, brutalist header for streetwear and lifestyle brands. Features oversized typography, a monochrome aesthetic, and high-impact hover animations. Includes a unique fullscreen mobile menu with outline text effects.",
    previewComponent: "HeaderStreetwear",
    liquidCode: `{%- style -%}
  .header-street {
    border-bottom: 3px solid #000;
  }
  .outline-text {
    -webkit-text-stroke: 1.5px #000;
    color: transparent;
  }
{%- endstyle -%}

<header class="header-street bg-white">
  <div class="container mx-auto flex items-center justify-between px-6 lg:px-10 h-24 lg:h-32">
    <div class="shrink-0">
      <a href="/" class="text-4xl lg:text-6xl font-black tracking-tighter">RAWXCORE</a>
    </div>
    <nav class="hidden lg:flex h-full items-center">
      {% for link in section.settings.menu.links %}
        <a href="{{ link.url }}" class="px-8 h-full flex items-center text-xl font-black uppercase tracking-tighter border-l-[3px] border-black">{{ link.title }}</a>
      {% endfor %}
    </nav>
    <div class="flex items-center">
       <button class="p-4 border-l-[3px] border-black">{% render 'icon-cart' %}</button>
    </div>
  </div>
</header>`,
    isPremium: true
  },
  {
    id: "header-food-delivery",
    name: "Food Delivery Header",
    category: "headers",
    tags: ["food", "delivery", "rounded", "app-style"],
    description: "A friendly, playful header designed for food delivery services. Includes a top promotion bar, integrated location selector, category pills, and a floating mobile quick-access order bar. Features a high-fidelity 'app' feel.",
    previewComponent: "HeaderFoodDelivery",
    liquidCode: `{%- style -%}
  .header-food {
    --primary: #f97316;
  }
  .site-header { background: #ffffff; }
  .floating-checkout {
    position: fixed;
    bottom: 24px; left: 50%;
    transform: translateX(-50%);
    width: 90%; max-width: 400px;
    background: rgba(15,23,42,0.95);
    backdrop-filter: blur(10px);
    border-radius: 24px;
    z-index: 100;
  }
{%- endstyle -%}

<header class="site-header border-b border-gray-100">
  <div class="container mx-auto px-4 py-3 lg:py-5 flex items-center justify-between">
    <div class="flex items-center gap-8">
      <div class="flex items-center gap-2">
        <div class="w-10 h-10 bg-orange-500 rounded-2xl"></div>
        <span class="text-2xl font-black">QuickBites</span>
      </div>
    </div>
    <div class="hidden lg:flex flex-1 max-w-md px-10">
      <input type="text" placeholder="Search food..." class="w-full bg-gray-50 rounded-2xl py-3 px-5 text-sm">
    </div>
    <div class="flex items-center gap-4">
      <button class="p-2">{% render 'icon-cart' %}</button>
    </div>
  </div>
</header>`,
    isPremium: true
  },
  {
    id: "header-electronics-mega",
    name: "Electronics Mega Header",
    category: "headers",
    tags: ["electronics", "mega-menu", "e-commerce", "tech"],
    description: "A robust electronics-focused header with a massive mega menu system. Features a left-hand category sidebar within the menu, featured product cards with images, a top utility bar, and nested accordion menus for mobile responsiveness.",
    previewComponent: "HeaderElectronicsMega",
    liquidCode: `{%- style -%}
  .header-mega {
    --primary: #2563eb;
  }
  .mega-menu {
    display: none;
    position: absolute;
    top: 100%; left: 0;
    width: 800px;
    background: #fff;
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
    border-radius: 16px;
    z-index: 50;
  }
  .nav-item:hover .mega-menu { display: flex; }
{%- endstyle -%}

<header class="bg-white border-b border-gray-200">
  <div class="container mx-auto px-4 py-5 flex items-center justify-between">
    <div class="flex items-center gap-10">
      <a href="/" class="text-2xl font-black uppercase">MEGATECH</a>
      <div class="nav-item relative hidden lg:block">
        <button class="bg-gray-50 border border-gray-100 px-5 py-2.5 rounded-xl font-bold">Categories</button>
        <div class="mega-menu p-8">
           <div class="w-1/3 border-r pr-6">
              {% for collection in collections limit: 5 %}
                <a href="{{ collection.url }}" class="block p-4 font-bold">{{ collection.title }}</a>
              {% endfor %}
           </div>
           <div class="flex-1 pl-8">
              <h4 class="text-xs font-bold text-gray-400 uppercase mb-4">Trending Now</h4>
           </div>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-6">
      {% render 'icon-cart' %}
    </div>
  </div>
</header>`,
    isPremium: true
  },
  {
    id: "header-beauty-cosmetics",
    name: "Beauty Cosmetics Header",
    category: "headers",
    tags: ["beauty", "cosmetics", "pastel", "overlay"],
    description: "An elegant, soft-toned header for beauty and wellness brands. Designed to overlay on hero images, it transitions smoothly into a glassmorphism sticky header. Features pastel color palettes and a luxurious floating mobile menu.",
    previewComponent: "HeaderBeautyCosmetics",
    liquidCode: `{%- style -%}
  .header-beauty {
    --bg: rgba(255, 255, 255, 0.1);
  }
  .sticky-active {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(20px);
    border-radius: 100px;
    margin: 10px 20px;
  }
{%- endstyle -%}

<header class="header-beauty fixed top-0 w-full z-50 p-6">
  <div class="container mx-auto px-8 py-3 flex items-center justify-between border border-white/20 rounded-full transition-all duration-700">
    <div class="flex items-center gap-2">
      <span class="text-2xl font-serif italic text-pink-950">Lumière</span>
    </div>
    <nav class="hidden lg:flex items-center gap-10">
      <a href="/skincare">Skincare</a>
      <a href="/makeup">Makeup</a>
    </nav>
    <div class="flex items-center gap-6">
       {% render 'icon-cart' %}
    </div>
  </div>
</header>`,
    isPremium: true
  },
  {
    id: "header-futuristic-ai",
    name: "Futuristic AI Header",
    category: "headers",
    tags: ["ai", "futuristic", "cyberpunk", "bottom-tabs"],
    description: "A cutting-edge header designed for AI startups and tech platforms. Features a cyberpunk aesthetic with animated gradient borders, glassmorphism, glowing neon accents, and a specialized bottom tab navigation bar for mobile users.",
    previewComponent: "HeaderFuturisticAI",
    liquidCode: `{%- style -%}
  .header-ai {
    --cyan: #06b6d4;
  }
  .gradient-border {
    position: relative;
    border: 1px solid transparent;
    background: linear-gradient(#020617, #020617) padding-box,
                linear-gradient(90deg, var(--cyan), #8b5cf6, var(--cyan)) border-box;
    background-size: 200% 100%;
    animation: borderMove 4s linear infinite;
  }
  @keyframes borderMove { 0% { background-position: 0% 0%; } 100% { background-position: 200% 0%; } }
{%- endstyle -%}

<header class="fixed top-0 w-full z-50 p-4 lg:p-8">
  <div class="container mx-auto px-6 py-2 rounded-2xl border border-slate-800 bg-[#0f172a]/80 backdrop-blur-xl transition-all">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 bg-slate-900 border border-slate-700 rounded-xl flex items-center justify-center">{% render 'icon-zap' %}</div>
        <span class="text-xl font-bold tracking-widest uppercase">NEURO<span class="text-cyan-400">FLUX</span></span>
      </div>
      <nav class="hidden lg:flex items-center gap-1">
        {% for link in section.settings.menu.links %}
          <a href="{{ link.url }}" class="px-6 py-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-cyan-400">{{ link.title }}</a>
        {% endfor %}
      </nav>
      <div class="hidden lg:block">
        <button class="px-8 py-3 bg-cyan-500/10 border border-cyan-400/50 text-cyan-400 rounded-xl font-black text-xs uppercase tracking-widest">Initiate</button>
      </div>
    </div>
  </div>
</header>`,
    isPremium: true
  },
  {
    id: 'header-ultimate-pro',
    name: 'Ultimate E-commerce Pro',
    category: 'headers',
    previewComponent: 'HeaderUltimatePro',
    description: 'The definitive Shopify header. AI-powered search, predictive UI, multi-currency switchers, shipping progress bars, and sticky hide/show logic.',
    tags: ['E-commerce', 'Advanced', 'High Conversion', 'Apple Style'],
    liquidCode: `{% schema %}
{
  "name": "Ultimate Pro Header",
  "settings": [
    {
      "type": "checkbox",
      "id": "sticky_header",
      "label": "Enable Sticky Header",
      "default": true
    },
    {
      "type": "checkbox",
      "id": "hide_on_scroll",
      "label": "Hide on Scroll Down",
      "default": true
    },
    {
      "type": "text",
      "id": "shipping_threshold",
      "label": "Free Shipping Threshold",
      "default": "100"
    },
    {
      "type": "header",
      "content": "AI Search Settings"
    },
    {
      "type": "checkbox",
      "id": "predictive_search",
      "label": "Enable AI Predictive Search",
      "default": true
    }
  ],
  "blocks": [
    {
      "type": "announcement",
      "name": "Announcement",
      "settings": [
        { "type": "text", "id": "text", "label": "Text" },
        { "type": "url", "id": "link", "label": "Link" }
      ]
    }
  ]
}
{% endschema %}

<div class="ultimate-header-wrapper" x-data="{ scrolled: false, visible: true, lastPos: 0 }">
  <!-- Announcement Bar -->
  <div class="announcement-bar bg-slate-900 text-white py-2 text-center text-[10px] font-bold uppercase tracking-widest">
    {% for block in section.blocks %}
      <div class="announcement-item">{{ block.settings.text }}</div>
    {% endfor %}
  </div>

  <header 
    :class="{ 'fixed top-0 shadow-xl': scrolled, '-translate-y-full': !visible && scrolled }"
    class="bg-white border-b border-slate-100 py-4 transition-all duration-300 w-full z-50"
    @scroll.window="
      let curr = window.pageYOffset;
      scrolled = curr > 100;
      visible = curr < lastPos || curr < 100;
      lastPos = curr;
    "
  >
    <div class="container mx-auto px-4 flex items-center justify-between">
      <div class="logo font-black text-2xl tracking-tighter">
        LIQUID<span class="text-blue-600">PRO</span>
      </div>
      
      <div class="search-bar hidden lg:flex flex-1 max-w-lg mx-12">
        <input type="text" placeholder="Search with AI..." class="w-full bg-slate-50 rounded-xl px-6 py-3 text-sm border-none focus:ring-2 focus:ring-blue-600">
      </div>

      <div class="actions flex items-center gap-6">
        <div class="currency-switcher hidden md:block text-[11px] font-bold text-slate-400 cursor-pointer">USD ($)</div>
        <div class="cart-icon relative cursor-pointer">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
          <span class="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] h-5 w-5 rounded-full flex items-center justify-center font-bold">3</span>
        </div>
      </div>
    </div>
  </header>
</div>`,
    isPremium: true
  },
  {
    id: 'header-luxury-lumiere',
    name: 'Lumière Ultra Luxury',
    category: 'headers',
    previewComponent: 'HeaderLuxuryLumiere',
    description: 'Ultra-high-end header with Apple-style animations, scroll progress indicators, and transparent-to-solid transitions.',
    tags: ['Luxury', 'Animations', 'Apple Style', 'Premium'],
    liquidCode: `{% schema %}
{
  "name": "Lumière Luxury Header",
  "settings": [
    {
      "type": "checkbox",
      "id": "show_progress",
      "label": "Show Scroll Progress Bar",
      "default": true
    },
    {
      "type": "color",
      "id": "text_color_scrolled",
      "label": "Text Color (Scrolled)",
      "default": "#000000"
    }
  ]
}
{% endschema %}

<div class="lumiere-wrapper" x-data="{ scrolled: false, progress: 0 }">
  <div 
    class="scroll-progress fixed top-0 left-0 h-[2px] bg-black z-[1000] transition-all"
    :style="'width: ' + progress + '%'"
    @scroll.window="progress = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100; scrolled = window.pageYOffset > 50"
  ></div>

  <header 
    class="fixed top-0 w-full z-[999] py-8 transition-all duration-700"
    :class="scrolled ? 'bg-white/90 backdrop-blur-xl py-4 shadow-sm text-black' : 'bg-transparent text-white'"
  >
    <div class="container mx-auto px-8 flex justify-between items-center">
       <nav class="hidden lg:flex gap-12 text-[11px] font-bold uppercase tracking-widest">
         <a href="#" class="hover:opacity-50 transition-opacity">Collections</a>
         <a href="#" class="hover:opacity-50 transition-opacity">Maison</a>
         <a href="#" class="hover:opacity-50 transition-opacity">Shop</a>
       </nav>

       <div class="logo text-3xl font-light uppercase tracking-[0.4em]">Lumière</div>

       <div class="icons flex gap-8">
         <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-width="1.5"/></svg>
         <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" stroke-width="1.5"/></svg>
       </div>
    </div>
  </header>
</div>`,
    isPremium: true
  },
  {
    id: 'header-mobile-native',
    name: 'MobileNative Pro',
    category: 'headers',
    previewComponent: 'HeaderMobileNative',
    description: 'High-performance app-like header for mobile shoppers. Features bottom navigation, voice search, shimmer effects, and social proof popups.',
    tags: ['Mobile First', 'App Style', 'Social Proof', 'CRO'],
    liquidCode: `{% schema %}
{
  "name": "MobileNative Header",
  "settings": [
    {
      "type": "checkbox",
      "id": "enable_bottom_nav",
      "label": "Enable Bottom Navigation",
      "default": true
    },
    {
      "type": "checkbox",
      "id": "show_purchase_popup",
      "label": "Show Recently Purchased Popup",
      "default": true
    }
  ]
}
{% endschema %}

<div class="mobile-native-wrapper" x-data="{ searchOpen: false, cartOpen: false, popupVisible: false }">
  <header class="sticky top-0 bg-white border-b border-gray-100 p-4 flex gap-3 items-center z-[100]">
    <div class="search-input flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm flex items-center gap-2">
      <svg class="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-width="2"/></svg>
      <span>Search items...</span>
    </div>
    <div class="cart-trigger bg-black text-white p-2 rounded-full relative">
       <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" stroke-width="2"/></svg>
    </div>
  </header>

  <!-- Bottom Navigation -->
  {% if section.settings.enable_bottom_nav %}
    <nav class="fixed bottom-0 left-0 w-full h-20 bg-white/80 backdrop-blur-md border-t flex items-center justify-around z-[100]">
      <div class="nav-item text-black flex flex-col items-center">
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        <span class="text-[9px] font-bold uppercase mt-1">Home</span>
      </div>
      <div class="nav-item text-gray-400 flex flex-col items-center">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16m-7 6h7" stroke-width="2"/></svg>
        <span class="text-[9px] font-bold uppercase mt-1">Shop</span>
      </div>
    </nav>
  {% endif %}
</div>`,
    isPremium: true
  },
  {
    id: 'header-conversion-engine',
    name: 'ConversionEngine Mega',
    category: 'headers',
    previewComponent: 'HeaderConversionEngine',
    description: 'High-conversion header with countdown timer, flash sale ticker, and mega menu product cards. Includes integrated dark mode toggle.',
    tags: ['Conversion', 'Sales', 'Mega Menu', 'Countdown'],
    liquidCode: `{% schema %}
{
  "name": "ConversionEngine Header",
  "settings": [
    {
      "type": "checkbox",
      "id": "enable_timer",
      "label": "Enable Countdown Timer",
      "default": true
    },
    {
      "type": "text",
      "id": "timer_end",
      "label": "Timer End Time (seconds)",
      "default": "3600"
    },
    {
      "type": "checkbox",
      "id": "enable_dark_mode",
      "label": "Allow Dark Mode Toggle",
      "default": true
    }
  ]
}
{% endschema %}

<div class="conversion-header-wrapper" x-data="{ darkMode: false, timer: 3600 }">
  <div class="timer-banner bg-red-600 text-white h-10 flex items-center justify-center text-[10px] font-black uppercase tracking-widest">
     🔥 Flash Sale Ending in: <span class="ml-2 font-mono" x-text="Math.floor(timer/3600) + ':' + Math.floor((timer%3600)/60) + ':' + (timer%60)"></span>
  </div>
  
  <header 
    :class="darkMode ? 'bg-black text-white' : 'bg-white text-black'"
    class="py-6 px-8 border-b transition-all flex justify-between items-center"
  >
    <div class="logo font-black text-2xl uppercase tracking-tighter italic">DEAL DASH</div>
    
    <div class="actions flex gap-6 items-center">
      <div class="toggle cursor-pointer" @click="darkMode = !darkMode">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke-width="2"/></svg>
      </div>
      <div class="cart-trigger relative">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" stroke-width="1.5"/></svg>
        <span class="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] h-4 w-4 rounded-full flex items-center justify-center">12</span>
      </div>
    </div>
  </header>
</div>`,
    isPremium: true
  },
  {
    id: 'hero-luxury-fashion',
    name: 'Luxury Fashion Hero',
    category: 'heroes',
    previewComponent: 'HeroLuxuryFashion',
    description: 'Cinematic fullscreen hero with elegant typography and smooth fade animations. Ideal for high-end fashion and lifestyle brands.',
    tags: ['Luxury', 'Fashion', 'Cinematic', 'Premium'],
    liquidCode: `{% schema %}
{
  "name": "Luxury Fashion Hero",
  "settings": [
    { "type": "image_picker", "id": "image", "label": "Background Image" },
    { "type": "image_picker", "id": "image_mobile", "label": "Mobile Background Image" },
    { "type": "text", "id": "tagline", "label": "Tagline", "default": "Autumn / Winter Collection 2024" },
    { "type": "inline_richtext", "id": "title", "label": "Title", "default": "Essence of Modern Form" },
    { "type": "textarea", "id": "description", "label": "Description", "default": "Discover a curated selection of architectural silhouettes." },
    { "type": "range", "id": "overlay_opacity", "label": "Overlay Opacity", "min": 0, "max": 90, "step": 5, "default": 40 },
    { "type": "text", "id": "button_label", "label": "Button Label", "default": "Shop Collection" }
  ]
}
{% endschema %}

<section class="luxury-hero relative h-[90vh] overflow-hidden bg-black text-white">
  <div class="absolute inset-0 z-0">
    <div class="absolute inset-0 bg-black/{{ section.settings.overlay_opacity }} z-10"></div>
    {% if section.settings.image %}
      <img src="{{ section.settings.image | image_url: width: 2000 }}" class="h-full w-full object-cover">
    {% else %}
       <div class="h-full w-full bg-gray-900"></div>
    {% endif %}
  </div>
  <div class="relative z-20 container mx-auto h-full flex flex-col items-center justify-center text-center px-4">
    <p class="text-xs font-bold uppercase tracking-[0.5em] opacity-70 mb-6">{{ section.settings.tagline }}</p>
    <h1 class="text-5xl md:text-8xl font-extralight uppercase tracking-widest leading-tight mb-8">{{ section.settings.title }}</h1>
    <p class="max-w-xl text-sm font-light opacity-80 mb-12">{{ section.settings.description }}</p>
    <button class="px-12 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-black hover:text-white ring-1 ring-white transition-all">
      {{ section.settings.button_label }}
    </button>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: 'hero-apple-style',
    name: 'Apple Style Product Hero',
    category: 'heroes',
    previewComponent: 'HeroAppleStyle',
    description: 'Clean, product-focused hero with bold typography and a modern white-space aesthetic. Features floating glass elements.',
    tags: ['Tech', 'Minimal', 'Apple Style', 'Product'],
    liquidCode: `{% schema %}
{
  "name": "Apple Style Hero",
  "settings": [
    { "type": "text", "id": "title", "label": "Heading", "default": "Pro Beyond." },
    { "type": "text", "id": "subheading", "label": "Subheading", "default": "Experience the power of our most advanced chip yet." },
    { "type": "image_picker", "id": "product_image", "label": "Product Image" },
    { "type": "url", "id": "button_link", "label": "Button Link" }
  ]
}
{% endschema %}

<section class="apple-hero bg-[#fbfbfd] py-24 text-center overflow-hidden">
  <div class="container mx-auto px-4">
    <h1 class="text-5xl md:text-8xl font-bold tracking-tight text-[#1d1d1f] mb-6">{{ section.settings.title }}</h1>
    <p class="text-xl md:text-2xl font-medium text-[#86868b] mb-12">{{ section.settings.subheading }}</p>
    <div class="flex justify-center gap-8 mb-16">
      <a href="{{ section.settings.button_link }}" class="bg-[#0071e3] text-white px-8 py-3 rounded-full font-semibold">Buy Now</a>
      <a href="#" class="text-[#0066cc] font-medium text-xl hover:underline">Learn more ></a>
    </div>
    <div class="product-preview max-w-4xl mx-auto rounded-3xl bg-white shadow-2xl border p-4">
       {% if section.settings.product_image %}
         <img src="{{ section.settings.product_image | image_url: width: 1200 }}" class="rounded-2xl">
       {% else %}
         <div class="aspect-video bg-gray-50 rounded-2xl"></div>
       {% endif %}
    </div>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: 'hero-ai-saas',
    name: 'AI SaaS Hero',
    category: 'heroes',
    previewComponent: 'HeroAISaaS',
    description: 'Futuristic hero for software platforms with animated gradients, dashboard mockups, and Glassmorphism effects.',
    tags: ['SaaS', 'AI', 'Tech', 'Modern'],
    liquidCode: `{% schema %}
{
  "name": "AI SaaS Hero",
  "settings": [
    { "type": "text", "id": "title", "label": "Heading", "default": "Scale your brand at the speed of AI." },
    { "type": "textarea", "id": "text", "label": "Description", "default": "Automate your entire social media workflow with our neural engine." }
  ]
}
{% endschema %}

<section class="saas-hero bg-[#030712] text-white py-32 overflow-hidden relative">
  <div class="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
     <div class="absolute -top-1/2 -left-1/4 w-full h-full bg-blue-600 blur-[150px] rounded-full"></div>
  </div>
  <div class="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
    <div>
      <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-8">{{ section.settings.title }}</h1>
      <p class="text-lg text-gray-400 mb-10">{{ section.settings.text }}</p>
      <div class="flex gap-6">
        <button class="bg-blue-600 px-8 py-4 rounded-xl font-bold">Start Free Trial</button>
        <button class="bg-white/5 border border-white/10 px-8 py-4 rounded-xl font-bold backdrop-blur-md">Watch Demo</button>
      </div>
    </div>
    <div class="dashboard-preview border border-white/10 bg-white/5 p-4 rounded-3xl backdrop-blur-3xl shadow-2xl">
       <div class="aspect-[4/3] bg-black rounded-2xl"></div>
    </div>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: 'hero-gaming',
    name: 'Gaming Hero Banner',
    category: 'heroes',
    previewComponent: 'HeroGaming',
    description: 'High-energy gaming hero with neon glow, aggressive typography, and futuristic UI elements. Optimized for tech and gaming brands.',
    tags: ['Gaming', 'Esports', 'Tech', 'Neon'],
    liquidCode: `{% schema %}
{
  "name": "Gaming Hero Banner",
  "settings": [
    { "type": "text", "id": "title", "label": "Heading", "default": "Next Gen Gaming." },
    { "type": "textarea", "id": "text", "label": "Description", "default": "Dive into ultra-realistic worlds with zero latency." },
    { "type": "color", "id": "accent_color", "label": "Accent Color", "default": "#9333ea" }
  ]
}
{% endschema %}

<section class="gaming-hero bg-[#050505] text-white py-32 overflow-hidden relative">
  <div class="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
  <div class="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
    <div class="text-center lg:text-left">
      <h1 class="text-6xl md:text-9xl font-black italic uppercase tracking-tighter mb-8 leading-[0.9]">{{ section.settings.title }}</h1>
      <p class="text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0">{{ section.settings.text }}</p>
      <button class="px-12 py-5 bg-[{{ section.settings.accent_color }}] text-white font-black uppercase italic tracking-widest rounded-xl shadow-lg">Play Now</button>
    </div>
    <div class="aspect-square bg-[#111] rounded-[40px] border border-white/10 hidden lg:block"></div>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: 'hero-jewelry-premium',
    name: 'Jewelry Premium Hero',
    category: 'heroes',
    previewComponent: 'HeroJewelryPremium',
    description: 'Ultra-luxe jewelry hero with serif typography, gold accents, and Glassmorphism product cards.',
    tags: ['Jewelry', 'Luxury', 'Premium', 'Bridal'],
    liquidCode: `{% schema %}
{
  "name": "Jewelry Premium Hero",
  "settings": [
    { "type": "image_picker", "id": "bg_image", "label": "Background Image" },
    { "type": "text", "id": "title", "label": "Heading", "default": "Timeless Brilliance." },
    { "type": "textarea", "id": "text", "label": "Description", "default": "Hand-crafted masterpieces that celebrate your unique story." }
  ]
}
{% endschema %}

<section class="jewelry-hero bg-black text-white py-32 overflow-hidden relative min-h-[80vh] flex items-center">
  <div class="absolute inset-0 z-0">
    {% if section.settings.bg_image %}
      <img src="{{ section.settings.bg_image | image_url: width: 2000 }}" class="h-full w-full object-cover opacity-60">
    {% else %}
      <div class="h-full w-full bg-gray-900 opacity-60"></div>
    {% endif %}
  </div>
  <div class="container mx-auto px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
    <div>
      <h1 class="text-6xl md:text-8xl font-serif mb-8 leading-tight">{{ section.settings.title }}</h1>
      <p class="text-lg text-white/60 font-light mb-12 max-w-lg leading-relaxed">{{ section.settings.text }}</p>
      <button class="px-12 py-5 bg-[#d4af37] text-black font-bold uppercase tracking-widest">Explore Collection</button>
    </div>
    <div class="product-card p-8 rounded-3xl border border-[#d4af37]/20 bg-white/5 backdrop-blur-2xl">
       <div class="aspect-square bg-white/10 rounded-2xl mb-6"></div>
       <h4 class="text-white font-serif text-xl mb-2">Solaris Necklace</h4>
       <p class="text-[#d4af37] font-bold tracking-widest uppercase">$4,950</p>
    </div>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: 'hero-split-screen',
    name: 'Split Screen Hero',
    category: 'heroes',
    previewComponent: 'HeroSplitScreen',
    description: 'High-contrast split-screen hero for furniture and decor brands. Features asymmetrical layouts and testimonial glass cards.',
    tags: ['Split Screen', 'Decor', 'Modern', 'Premium'],
    liquidCode: `{% schema %}
{
  "name": "Split Screen Hero",
  "settings": [
    { "type": "image_picker", "id": "image", "label": "Featured Image" },
    { "type": "text", "id": "title", "label": "Heading", "default": "Elevate Your Living Space." }
  ]
}
{% endschema %}

<section class="split-hero flex flex-col lg:flex-row min-h-screen">
  <div class="flex-1 bg-[#faf9f6] flex items-center justify-center p-12">
    <div class="max-w-xl">
      <h1 class="text-6xl md:text-8xl font-serif mb-8">{{ section.settings.title }}</h1>
      <button class="bg-black text-white px-12 py-5 font-bold uppercase tracking-widest">Browse Collection</button>
    </div>
  </div>
  <div class="flex-1 relative">
    {% if section.settings.image %}
       <img src="{{ section.settings.image | image_url: width: 1400 }}" class="h-full w-full object-cover">
    {% else %}
       <div class="h-full w-full bg-gray-200"></div>
    {% endif %}
  </div>
</section>`,
    isPremium: true
  },
  {
    id: 'hero-video-background',
    name: 'Video Background Hero',
    category: 'heroes',
    previewComponent: 'HeroVideoBackground',
    description: 'Fullscreen cinematic video background hero with high-impact italic typography and sound controls.',
    tags: ['Video', 'Cinematic', 'Performance', 'Fullscreen'],
    liquidCode: `{% schema %}
{
  "name": "Video Background Hero",
  "settings": [
    { "type": "url", "id": "video_url", "label": "Video URL (.mp4)" },
    { "type": "text", "id": "title", "label": "Heading", "default": "Feel the Motion." }
  ]
}
{% endschema %}

<section class="video-hero relative h-screen bg-black text-white flex items-center justify-center overflow-hidden">
  <video autoplay muted loop playsinline class="absolute inset-0 h-full w-full object-cover opacity-60">
    <source src="{{ section.settings.video_url }}" type="video/mp4">
  </video>
  <div class="relative z-10 text-center container mx-auto px-6">
    <h1 class="text-6xl md:text-9xl font-black uppercase italic tracking-tighter mb-12">{{ section.settings.title }}</h1>
    <button class="px-12 py-5 bg-white text-black font-black uppercase italic tracking-widest">Shop Now</button>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: 'hero-ecommerce-conversion',
    name: 'Ecommerce Conversion Hero',
    category: 'heroes',
    previewComponent: 'HeroEcommerceConversion',
    description: 'Sales-focused hero with countdown timers, discount badges, and live review callouts. High-converting UI patterns.',
    tags: ['Conversion', 'Sales', 'Timer', 'CRO'],
    liquidCode: `{% schema %}
{
  "name": "Conversion Hero",
  "settings": [
    { "type": "text", "id": "title", "label": "Heading", "default": "Upgrade Your Daily Performance." },
    { "type": "text", "id": "discount", "label": "Discount Text", "default": "50% OFF" }
  ]
}
{% endschema %}

<section class="conversion-hero bg-[#f4f7f6] py-32 overflow-hidden">
  <div class="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
    <div class="aspect-square bg-white rounded-[40px] shadow-xl p-8 relative">
       <div class="absolute -top-6 -right-6 bg-orange-500 text-white p-6 rounded-full font-black rotate-12">{{ section.settings.discount }}</div>
    </div>
    <div>
      <h1 class="text-5xl md:text-8xl font-black tracking-tighter mb-8">{{ section.settings.title }}</h1>
      <div class="timer flex gap-4 mb-10">
         <div class="h-16 w-16 bg-white rounded-xl shadow flex items-center justify-center text-xl font-bold">02</div>
         <div class="h-16 w-16 bg-white rounded-xl shadow flex items-center justify-center text-xl font-bold">59</div>
         <div class="h-16 w-16 bg-white rounded-xl shadow flex items-center justify-center text-xl font-bold">59</div>
      </div>
      <button class="px-12 py-5 bg-indigo-600 text-white rounded-2xl font-black tracking-widest uppercase">Add to Cart</button>
    </div>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: 'hero-scandinavian-minimal',
    name: 'Minimal Scandinavian Hero',
    category: 'heroes',
    previewComponent: 'HeroScandinavianMinimal',
    description: 'Clean, hygge-inspired hero with an asymmetric image grid and balanced serif typography.',
    tags: ['Minimal', 'Scandinavian', 'Hygge', 'Boutique'],
    liquidCode: `{% schema %}
{
  "name": "Scandinavian Hero",
  "settings": [
    { "type": "text", "id": "title", "label": "Heading", "default": "Harmony in Simplicity." }
  ]
}
{% endschema %}

<section class="scandi-hero bg-[#fdfdfc] py-24">
  <div class="container mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
    <div>
      <h1 class="text-5xl md:text-7xl font-serif mb-10">{{ section.settings.title }}</h1>
      <button class="bg-[#2a2a2a] text-white px-12 py-5 font-medium uppercase tracking-widest">Explore Studio</button>
    </div>
    <div class="grid grid-cols-2 gap-4">
       <div class="aspect-[4/5] bg-gray-100"></div>
       <div class="aspect-square bg-gray-200 mt-12"></div>
    </div>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: 'hero-3d-floating',
    name: '3D Floating Hero',
    category: 'heroes',
    previewComponent: 'Hero3DFloating',
    description: 'Highly interactive 3D hero with multi-layered depth and mouse-tracking motion effects.',
    tags: ['3D', 'Interactive', 'Motion', 'Creative'],
    liquidCode: `{% schema %}
{
  "name": "3D Floating Hero",
  "settings": [
    { "type": "text", "id": "title", "label": "Heading", "default": "Depth. Redefined." }
  ]
}
{% endschema %}

<section class="floating-hero bg-[#08080a] text-white h-screen flex items-center overflow-hidden">
  <div class="container mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">
    <div>
      <h1 class="text-6xl md:text-9xl font-black tracking-tighter mb-10">{{ section.settings.title }}</h1>
      <button class="bg-white text-black px-12 py-5 rounded-full font-black">Get Started</button>
    </div>
    <div class="relative h-[500px] hidden lg:flex items-center justify-center">
       <div class="h-96 w-72 bg-indigo-500/20 rounded-[40px] border border-white/10 backdrop-blur-2xl"></div>
    </div>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: 'hero-cyberpunk',
    name: 'Cyberpunk Hero',
    category: 'heroes',
    previewComponent: 'HeroCyberpunk',
    description: 'Futuristic tech-noir hero with neon scanning lines, glitch effects, and data-driven UI elements.',
    tags: ['Cyberpunk', 'Neon', 'Futuristic', 'Tech'],
    liquidCode: `{% schema %}
{
  "name": "Cyberpunk Hero",
  "settings": [
    { "type": "text", "id": "title", "label": "Heading", "default": "No Limits." }
  ]
}
{% endschema %}

<section class="cyber-hero bg-black text-white h-screen flex items-center overflow-hidden relative">
  <div class="absolute inset-0 bg-cyan-500/5 bg-[length:100%_2px,3px_100%]"></div>
  <div class="container mx-auto px-8 relative z-10">
    <h1 class="text-7xl md:text-[10rem] font-black italic uppercase leading-[0.8] mb-12">{{ section.settings.title }}</h1>
    <button class="px-12 py-5 bg-cyan-500 text-black font-black uppercase italic tracking-widest skew-x-[-12deg]">Enter Matrix</button>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: 'hero-streetwear',
    name: 'Streetwear Hero',
    category: 'heroes',
    previewComponent: 'HeroStreetwear',
    description: 'Aggressive urban design with oversized marquees, bold italic typography, and offset photography frames.',
    tags: ['Streetwear', 'Urban', 'Fashion', 'Aggressive'],
    liquidCode: `{% schema %}
{
  "name": "Streetwear Hero",
  "settings": [
    { "type": "text", "id": "title", "label": "Heading", "default": "RAW POWER." }
  ]
}
{% endschema %}

<section class="street-hero bg-[#0a0a0a] text-white min-h-screen py-24 flex items-center relative overflow-hidden">
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-5">
    <h2 class="text-[20vw] font-black uppercase whitespace-nowrap">URBAN ESSENTIALS</h2>
  </div>
  <div class="container mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
    <div class="aspect-[4/5] bg-gray-900 border border-white/10 relative"></div>
    <div class="text-right">
       <h1 class="text-7xl md:text-[9rem] font-black italic leading-[0.8] mb-12">{{ section.settings.title }}</h1>
       <button class="px-12 py-5 bg-white text-black font-black uppercase tracking-widest">Shop the Drop</button>
    </div>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: 'hero-food-delivery',
    name: 'Food Delivery Hero',
    category: 'heroes',
    previewComponent: 'HeroFoodDelivery',
    description: 'Warm, organic design with floating food cards, live ratings, and search-driven address UI.',
    tags: ['Food', 'Delivery', 'Organic', 'CRO'],
    liquidCode: `{% schema %}
{
  "name": "Food Delivery Hero",
  "settings": [
    { "type": "text", "id": "title", "label": "Heading", "default": "Craving? We Deliver." }
  ]
}
{% endschema %}

<section class="food-hero bg-[#fffcf7] py-24 overflow-hidden relative">
  <div class="container mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
    <div>
      <h1 class="text-6xl md:text-8xl font-black mb-8">{{ section.settings.title }}</h1>
      <div class="p-2 bg-white rounded-3xl shadow-xl flex gap-2">
         <input type="text" placeholder="Address..." class="flex-1 px-6 outline-none">
         <button class="bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold">Order</button>
      </div>
    </div>
    <div class="aspect-square bg-orange-100 rounded-full"></div>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: 'hero-travel-banner',
    name: 'Travel Hero Banner',
    category: 'heroes',
    previewComponent: 'HeroTravelBanner',
    description: 'Cinematic landscape hero with an integrated glassmorphism booking bar and serif typography.',
    tags: ['Travel', 'Luxury', 'Booking', 'Cinematic'],
    liquidCode: `{% schema %}
{
  "name": "Travel Hero",
  "settings": [
    { "type": "text", "id": "title", "label": "Heading", "default": "Your World, Unlimited." }
  ]
}
{% endschema %}

<section class="travel-hero h-screen bg-slate-900 text-white flex items-center relative overflow-hidden">
  <div class="container mx-auto px-8 relative z-10 text-center">
    <h1 class="text-6xl md:text-[10rem] font-serif mb-12 leading-[0.9]">{{ section.settings.title }}</h1>
    <div class="max-w-5xl mx-auto bg-white/10 backdrop-blur-xl rounded-[40px] p-6 border border-white/20">
       <div class="grid md:grid-cols-4 gap-4">
          <div class="p-4 border-r border-white/10 text-left">Where to?</div>
          <div class="p-4 border-r border-white/10 text-left">Check-in</div>
          <div class="p-4 border-r border-white/10 text-left">Guests</div>
          <button class="bg-blue-600 rounded-2xl font-bold uppercase">Explore</button>
       </div>
    </div>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: 'hero-fitness',
    name: 'Fitness Hero',
    category: 'heroes',
    previewComponent: 'HeroFitness',
    description: 'High-energy athletic hero with aggressive typography, performance metrics, and energy-line animations.',
    tags: ['Fitness', 'Gym', 'Athletic', 'Aggressive'],
    liquidCode: `{% schema %}
{
  "name": "Fitness Hero",
  "settings": [
    { "type": "text", "id": "title", "label": "Heading", "default": "Push Harder." }
  ]
}
{% endschema %}

<section class="fitness-hero bg-black text-white h-screen flex items-center overflow-hidden relative">
  <div class="container mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
    <div>
       <h1 class="text-7xl md:text-[10rem] font-black italic uppercase leading-[0.8] mb-12">{{ section.settings.title }}</h1>
       <button class="px-12 py-5 bg-yellow-500 text-black font-black uppercase italic tracking-widest">Join Squad</button>
    </div>
    <div class="grid grid-cols-2 gap-6">
       <div class="bg-white/5 p-8 rounded-3xl border border-white/10">BPM: 165</div>
       <div class="bg-white/5 p-8 rounded-3xl border border-white/10">Goal: 92%</div>
    </div>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: 'hero-real-estate',
    name: 'Real Estate Hero',
    category: 'heroes',
    previewComponent: 'HeroRealEstate',
    description: 'Luxury property hero with search filters, property sliders, and premium dark glassmorphism UI.',
    tags: ['Real Estate', 'Luxury', 'Search', 'Premium'],
    liquidCode: `{% schema %}
{
  "name": "Real Estate Hero",
  "settings": [
    { "type": "text", "id": "title", "label": "Heading", "default": "Find Your Masterpiece." }
  ]
}
{% endschema %}

<section class="real-estate-hero bg-[#0a0a0b] text-white py-32 overflow-hidden relative">
  <div class="container mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">
    <div>
      <h1 class="text-6xl md:text-8xl font-serif mb-8">{{ section.settings.title }}</h1>
      <div class="bg-white/10 backdrop-blur-xl p-8 rounded-[32px] border border-white/10">
         <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="border-b border-white/10 pb-2">Location</div>
            <div class="border-b border-white/10 pb-2">Villa</div>
         </div>
         <button class="w-full py-5 bg-white text-black font-black uppercase rounded-2xl">Search</button>
      </div>
    </div>
    <div class="bg-white/10 backdrop-blur-xl p-8 rounded-[40px] border border-white/10 hidden lg:block">
       <div class="aspect-video bg-gray-800 rounded-3xl mb-8"></div>
    </div>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: 'hero-portfolio-creator',
    name: 'Portfolio Creator Hero',
    category: 'heroes',
    previewComponent: 'HeroPortfolioCreator',
    description: 'Highly interactive creative portfolio hero with mouse-tracked depth effects and animated profile sections.',
    tags: ['Portfolio', 'Creative', 'Interactive', 'Motion'],
    liquidCode: `{% schema %}
{
  "name": "Portfolio Hero",
  "settings": [
    { "type": "text", "id": "title", "label": "Heading", "default": "Digital Artisan." }
  ]
}
{% endschema %}

<section class="portfolio-hero bg-[#f8f8f8] py-24 flex items-center overflow-hidden">
  <div class="container mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">
    <div class="relative aspect-square bg-black rounded-3xl overflow-hidden"></div>
    <div>
       <h1 class="text-7xl lg:text-[9rem] font-black italic leading-[0.8] mb-12">{{ section.settings.title }}</h1>
       <button class="bg-black text-white px-12 py-5 rounded-full font-black uppercase">View Projects</button>
    </div>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: 'hero-beauty-cosmetics',
    name: 'Beauty Cosmetics Hero',
    category: 'heroes',
    previewComponent: 'HeroBeautyCosmetics',
    description: 'Soft aesthetic hero for cosmetics with pastel gradients, glassmorphism product cards, and skin quiz CTAs.',
    tags: ['Beauty', 'Cosmetics', 'Wellness', 'Aesthetic'],
    liquidCode: `{% schema %}
{
  "name": "Beauty Hero",
  "settings": [
    { "type": "text", "id": "title", "label": "Heading", "default": "Glow From Within." }
  ]
}
{% endschema %}

<section class="beauty-hero bg-[#fff5f5] py-24 overflow-hidden relative">
  <div class="container mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
    <div>
      <h1 class="text-6xl lg:text-9xl font-serif mb-8">{{ section.settings.title }}</h1>
      <button class="bg-rose-400 text-white px-12 py-5 rounded-full font-bold">Shop Skincare</button>
    </div>
    <div class="aspect-square bg-white rounded-[60px] shadow-2xl"></div>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: 'hero-crypto-web3',
    name: 'Crypto/Web3 Hero',
    category: 'heroes',
    previewComponent: 'HeroCryptoWeb3',
    description: 'High-tech Web3 hero with animated mesh gradients, wallet connection UI, and live market charts.',
    tags: ['Crypto', 'Web3', 'Finance', 'Tech'],
    liquidCode: `{% schema %}
{
  "name": "Crypto Hero",
  "settings": [
    { "type": "text", "id": "title", "label": "Heading", "default": "Own Your Wealth." }
  ]
}
{% endschema %}

<section class="crypto-hero bg-[#020617] text-white py-32 overflow-hidden relative">
  <div class="container mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">
    <div>
      <h1 class="text-6xl lg:text-9xl font-black mb-10 leading-[0.85]">{{ section.settings.title }}</h1>
      <button class="bg-blue-600 px-12 py-5 rounded-2xl font-black uppercase">Connect Wallet</button>
    </div>
    <div class="bg-white/5 backdrop-blur-3xl p-10 rounded-[48px] border border-white/10 hidden lg:block">
       <div class="h-48 bg-blue-500/20 border-t-2 border-blue-400"></div>
    </div>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: 'hero-animated-slider',
    name: 'Animated Slider Hero',
    category: 'heroes',
    previewComponent: 'HeroAnimatedSlider',
    description: 'Advanced multi-slide hero with typography slide-up entrance animations and theme-synced progress bars.',
    tags: ['Slider', 'Multi-slide', 'Animation', 'Engagement'],
    liquidCode: `{% schema %}
{
  "name": "Animated Slider Hero",
  "blocks": [
    {
      "type": "slide",
      "name": "Slide",
      "settings": [
        { "type": "image_picker", "id": "image", "label": "Slide Image" },
        { "type": "text", "id": "title", "label": "Title", "default": "The Urban Explorer." }
      ]
    }
  ]
}
{% endschema %}

<section class="slider-hero bg-black h-screen overflow-hidden flex items-center relative">
  <div class="container mx-auto px-8 relative z-10">
    <h1 class="text-7xl md:text-[10rem] font-black italic text-white uppercase leading-[0.8] mb-12">Urban <br> Explorer.</h1>
    <button class="bg-blue-600 text-white px-12 py-6 rounded-full font-black uppercase">View Collection</button>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: 'hero-interactive-mouse',
    name: 'Interactive Mouse Hero',
    category: 'heroes',
    previewComponent: 'HeroInteractiveMouse',
    description: 'Immersive experience with custom mouse followers, interactive particles, and premium black/indigo aesthetic.',
    tags: ['Interactive', 'Mouse', 'Particles', 'Agency'],
    liquidCode: `{% schema %}
{
  "name": "Interactive Hero",
  "settings": [
    { "type": "text", "id": "title", "label": "Heading", "default": "Feel the Connection." }
  ]
}
{% endschema %}

<section class="interactive-hero bg-[#050505] text-white h-screen flex items-center justify-center overflow-hidden relative">
  <div class="container mx-auto px-8 relative z-10 text-center">
    <h1 class="text-6xl md:text-[12rem] font-black italic uppercase leading-[0.8] mb-12">{{ section.settings.title }}</h1>
    <button class="bg-white text-black px-12 py-6 rounded-full font-black uppercase">Start Exploration</button>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: 'hero-bento-grid',
    name: 'Bento Grid Hero',
    category: 'heroes',
    previewComponent: 'HeroBentoGrid',
    description: 'Modern multi-card bento layout following the Apple-style design system. Perfect for feature-rich showcases.',
    tags: ['Bento', 'Grid', 'Apple', 'Modern'],
    liquidCode: `{% schema %}
{
  "name": "Bento Hero",
  "settings": [
    { "type": "text", "id": "title", "label": "Heading", "default": "Unified. Intelligent." }
  ]
}
{% endschema %}

<section class="bento-hero bg-[#fbfbfd] py-24">
  <div class="container mx-auto px-8 grid lg:grid-cols-12 gap-6">
    <div class="lg:col-span-6 bg-white rounded-[48px] p-12 shadow-xl">
       <h1 class="text-5xl lg:text-8xl font-bold mb-8">{{ section.settings.title }}</h1>
       <button class="bg-black text-white px-10 py-4 rounded-full">Get Started</button>
    </div>
    <div class="lg:col-span-3 bg-indigo-600 rounded-[40px] p-8 text-white">Mobile First</div>
    <div class="lg:col-span-3 bg-white rounded-[40px] p-8 shadow-xl">Real-time</div>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: 'hero-magazine-editorial',
    name: 'Magazine Editorial Hero',
    category: 'heroes',
    previewComponent: 'HeroMagazineEditorial',
    description: 'High-fashion editorial design with asymmetric grids, bold typography, and vertical text overlays.',
    tags: ['Magazine', 'Editorial', 'Fashion', 'Layout'],
    liquidCode: `{% schema %}
{
  "name": "Editorial Hero",
  "settings": [
    { "type": "text", "id": "title", "label": "Heading", "default": "The New Wave." }
  ]
}
{% endschema %}

<section class="editorial-hero bg-white text-black py-24 overflow-hidden border-t border-black">
  <div class="container mx-auto px-8 grid lg:grid-cols-12 gap-8 items-start">
    <div class="lg:col-span-4">
       <h1 class="text-7xl md:text-9xl font-black uppercase mb-12">{{ section.settings.title }}</h1>
       <button class="bg-black text-white px-8 py-6 uppercase font-black">Purchase Issue</button>
    </div>
    <div class="lg:col-span-5 aspect-[3/4] bg-gray-100 relative"></div>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: 'hero-parallax-scroll',
    name: 'Parallax Scroll Hero',
    category: 'heroes',
    previewComponent: 'HeroParallaxScroll',
    description: 'Immersive outdoor hero with layered parallax background effects and dynamic altitude/temp sidebars.',
    tags: ['Parallax', 'Scroll', 'Outdoor', 'Immersive'],
    liquidCode: `{% schema %}
{
  "name": "Parallax Hero",
  "settings": [
    { "type": "text", "id": "title", "label": "Heading", "default": "Higher Ground." }
  ]
}
{% endschema %}

<section class="parallax-hero h-[120vh] bg-[#0c141d] text-white flex items-center relative overflow-hidden">
  <div class="container mx-auto px-8 text-center relative z-10">
    <h1 class="text-7xl md:text-[12rem] font-black uppercase mb-12 leading-[0.8]">{{ section.settings.title }}</h1>
    <button class="bg-white text-black px-12 py-6 rounded-sm uppercase font-black">Start Expedition</button>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: 'hero-floating-glass',
    name: 'Floating Glass Hero',
    category: 'heroes',
    previewComponent: 'HeroFloatingGlass',
    description: 'Premium glassmorphism interface with semi-transparent UI cards and sophisticated background blur effects.',
    tags: ['Glass', 'SaaS', 'Dashboard', 'UI'],
    liquidCode: `{% schema %}
{
  "name": "Glass Hero",
  "settings": [
    { "type": "text", "id": "title", "label": "Heading", "default": "Clarity Defined." }
  ]
}
{% endschema %}

<section class="glass-hero bg-[#f0f4f8] py-32 flex items-center justify-center overflow-hidden relative">
  <div class="container mx-auto px-8 flex flex-col lg:flex-row gap-16 items-center relative z-10">
    <div class="bg-white/40 backdrop-blur-3xl p-12 lg:p-20 rounded-[64px] border border-white/60">
       <h1 class="text-6xl lg:text-8xl font-black mb-10">{{ section.settings.title }}</h1>
       <button class="bg-blue-600 text-white px-12 py-5 rounded-full font-bold">Explore Dashboard</button>
    </div>
    <div class="relative h-96 w-72 bg-white/60 backdrop-blur-2xl rounded-[48px] border border-white hidden lg:block"></div>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: 'product-hero-card',
    name: 'Product Hero Card',
    category: 'product',
    previewComponent: 'ProductHeroCard',
    description: 'High-conversion product block with large imagery, star ratings, and dual CTA buttons. Optimized for featured sections.',
    tags: ['Product', 'Hero', 'Conversion', 'Modern'],
    liquidCode: `{% schema %}
{
  "name": "Product Hero Card",
  "settings": [
    { "type": "product", "id": "product", "label": "Product" },
    { "type": "text", "id": "title", "label": "Heading", "default": "Featured Product" }
  ]
}
{% endschema %}

<section class="product-hero py-12">
  <div class="container mx-auto px-6 bg-white rounded-[32px] shadow-2xl flex flex-col md:flex-row overflow-hidden border border-gray-100">
    <div class="md:w-1/2 aspect-square bg-gray-50 relative">
       {% if section.settings.product.featured_image %}
         <img src="{{ section.settings.product.featured_image | image_url: width: 1000 }}" class="h-full w-full object-cover">
       {% endif %}
    </div>
    <div class="md:w-1/2 p-12">
       <h2 class="text-4xl font-black uppercase mb-6">{{ section.settings.product.title | default: section.settings.title }}</h2>
       <p class="text-3xl font-black text-indigo-600 mb-8">{{ section.settings.product.price | money }}</p>
       <button class="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black">Add to Cart</button>
    </div>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: 'image-gallery-slider',
    name: 'Image Gallery Slider',
    category: 'product',
    previewComponent: 'ImageGallerySlider',
    description: 'Mobile-optimized product gallery with thumbnail navigation and interactive zoom controls.',
    tags: ['Gallery', 'Slider', 'Mobile', 'UI'],
    liquidCode: `{% schema %}
{
  "name": "Product Gallery",
  "settings": [
    { "type": "product", "id": "product", "label": "Product" }
  ]
}
{% endschema %}

<div class="product-gallery flex gap-4">
  <div class="thumbnails flex flex-col gap-2">
    {% for image in section.settings.product.images %}
       <div class="h-20 w-20 bg-gray-100 rounded-xl overflow-hidden border-2 border-transparent hover:border-indigo-600 cursor-pointer">
          <img src="{{ image | image_url: width: 200 }}" class="h-full w-full object-cover">
       </div>
    {% endfor %}
  </div>
  <div class="main-image flex-1 bg-gray-50 rounded-[32px] overflow-hidden">
     <img src="{{ section.settings.product.featured_image | image_url: width: 1200 }}" class="h-full w-full object-cover">
  </div>
</div>`,
    isPremium: true
  },
  {
    id: 'zoom-hover-preview',
    name: 'Zoom on Hover Preview',
    category: 'product',
    previewComponent: 'ZoomHoverPreview',
    description: 'Amazon-style product image magnifier for high-detail inspection of luxury items.',
    tags: ['Zoom', 'Magnifier', 'Detail', 'Premium'],
    liquidCode: `{% schema %}
{
  "name": "Zoom Preview",
  "settings": [
    { "type": "product", "id": "product", "label": "Product" }
  ]
}
{% endschema %}

<div class="zoom-container grid md:grid-cols-2 gap-12">
  <div class="relative overflow-hidden rounded-[32px] border border-gray-100 group">
     <img src="{{ section.settings.product.featured_image | image_url: width: 1000 }}" class="main-img w-full transition-transform duration-500 group-hover:scale-150 origin-center cursor-crosshair">
  </div>
  <div class="p-8">
     <h3 class="text-2xl font-black uppercase">{{ section.settings.product.title }}</h3>
     <p class="text-gray-500 mt-4">Inspect the fine details by hovering over the image.</p>
  </div>
</div>`,
    isPremium: true
  },
  {
    id: 'discount-badge',
    name: 'Discount Badge Component',
    category: 'product',
    previewComponent: 'DiscountBadge',
    description: 'Animated promotional badges for discounts, flash sales, and bestsellers.',
    tags: ['Promotion', 'Badge', 'CRO', 'Animation'],
    liquidCode: `{% schema %}
{
  "name": "Promotional Badges",
  "settings": [
    { "type": "text", "id": "discount", "label": "Discount Text", "default": "-50% OFF" }
  ]
}
{% endschema %}

<div class="badges-row flex gap-4">
  <div class="h-20 w-20 bg-red-500 text-white rounded-full flex flex-col items-center justify-center font-black border-4 border-white shadow-xl rotate-12">
     <span>{{ section.settings.discount }}</span>
  </div>
</div>`,
    isPremium: true
  },
  {
    id: 'countdown-timer',
    name: 'Countdown Timer Offer',
    category: 'product',
    previewComponent: 'CountdownTimer',
    description: 'Flash sale urgency timer with glassmorphism digit cards and demand-driven messaging.',
    tags: ['Timer', 'Urgency', 'Flash Sale', 'CRO'],
    liquidCode: `{% schema %}
{
  "name": "Urgency Timer",
  "settings": [
    { "type": "text", "id": "title", "label": "Heading", "default": "Ends In" }
  ]
}
{% endschema %}

<div class="timer-container bg-slate-900 text-white p-10 rounded-[40px] text-center">
  <p class="text-orange-400 font-black uppercase mb-4">{{ section.settings.title }}</p>
  <div class="flex justify-center gap-4 text-5xl font-black">
     <div class="h-24 w-24 bg-white/5 rounded-3xl flex items-center justify-center">02</div>
     <div class="h-24 w-24 bg-white/5 rounded-3xl flex items-center justify-center">59</div>
     <div class="h-24 w-24 bg-white/5 rounded-3xl flex items-center justify-center">59</div>
  </div>
</div>`,
    isPremium: true
  },
  {
    id: 'variant-selector',
    name: 'Variant Selector',
    category: 'product',
    previewComponent: 'VariantSelector',
    description: 'Modern color swatches and size selector with dynamic feedback and clear selection states.',
    tags: ['Variant', 'Selection', 'Color', 'Size'],
    liquidCode: `{% schema %}
{
  "name": "Variant Selector",
  "settings": [
    { "type": "product", "id": "product", "label": "Product" }
  ]
}
{% endschema %}

<div class="variant-select space-y-8">
  {% for option in section.settings.product.options_with_values %}
    <div class="option-group">
      <p class="text-xs font-black uppercase text-gray-400 mb-4">{{ option.name }}</p>
      <div class="flex gap-2">
        {% for value in option.values %}
          <button class="px-6 py-3 border-2 rounded-xl font-bold hover:border-indigo-600 transition-all">{{ value }}</button>
        {% endfor %}
      </div>
    </div>
  {% endfor %}
</div>`,
    isPremium: true
  },
  {
    id: 'sticky-add-to-cart',
    name: 'Sticky Add to Cart Bar',
    category: 'product',
    previewComponent: 'StickyAddToCart',
    description: 'Floating bottom bar for high-intent checkout, featuring mini-product details and quick buy CTA.',
    tags: ['Sticky', 'Mobile', 'CRO', 'UX'],
    liquidCode: `{% schema %}
{
  "name": "Sticky ATC",
  "settings": [
    { "type": "product", "id": "product", "label": "Product" }
  ]
}
{% endschema %}

<div class="fixed bottom-0 left-0 right-0 p-4 z-50 bg-white shadow-2xl border-t border-gray-100 md:hidden">
   <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
         <img src="{{ section.settings.product.featured_image | image_url: width: 100 }}" class="h-12 w-12 rounded-full object-cover">
         <p class="font-bold">{{ section.settings.product.price | money }}</p>
      </div>
      <button class="bg-indigo-600 text-white px-8 py-3 rounded-full font-black uppercase text-xs">Add to Cart</button>
   </div>
</div>`,
    isPremium: true
  },
  {
    id: 'wishlist-button',
    name: 'Wishlist Button',
    category: 'product',
    previewComponent: 'WishlistButton',
    description: 'Animated heart toggle with interactive sparkle feedback and social proof counters.',
    tags: ['Wishlist', 'Engagement', 'Social', 'Interaction'],
    liquidCode: `{% schema %}
{
  "name": "Wishlist Toggle",
  "settings": [
    { "type": "text", "id": "count", "label": "Initial Count", "default": "12.4k" }
  ]
}
{% endschema %}

<div class="wishlist-group flex flex-col items-center gap-4">
  <button class="h-20 w-20 bg-gray-50 text-gray-300 rounded-full flex items-center justify-center hover:text-rose-500 transition-all">
     <svg class="h-10 w-10 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
  </button>
  <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest">{{ section.settings.count }} SAVED</p>
</div>`,
    isPremium: true
  },
  {
    id: 'rating-reviews',
    name: 'Rating + Reviews Block',
    category: 'product',
    previewComponent: 'RatingReviews',
    description: 'Trust-building interface with numerical scores, star breakdowns, and verified review action buttons.',
    tags: ['Reviews', 'Social Proof', 'Trust', 'Trustpilot'],
    liquidCode: `{% schema %}
{
  "name": "Rating Overview",
  "settings": [
    { "type": "text", "id": "score", "label": "Average Score", "default": "4.9" }
  ]
}
{% endschema %}

<div class="reviews-block flex flex-col md:flex-row gap-12 p-8 border border-gray-100 rounded-[32px]">
  <div class="text-center">
     <p class="text-7xl font-black">{{ section.settings.score }}</p>
     <div class="stars flex gap-1 justify-center text-yellow-500 my-4">★★★★★</div>
  </div>
  <div class="breakdown flex-1 space-y-2">
     {% for i in (1..5) reversed %}
        <div class="flex items-center gap-4">
           <span class="text-xs font-bold">{{ i }} ★</span>
           <div class="flex-1 h-2 bg-gray-50 rounded-full"></div>
        </div>
     {% endfor %}
  </div>
</div>`,
    isPremium: true
  },
  {
    id: 'stock-indicator',
    name: 'Stock Availability Indicator',
    category: 'product',
    previewComponent: 'StockIndicator',
    description: 'Dynamic inventory status with high-urgency alerts, progress bars, and social proof viewer counts.',
    tags: ['Stock', 'Inventory', 'Fulfillment', 'Urgency'],
    liquidCode: `{% schema %}
{
  "name": "Stock Status",
  "settings": [
    { "type": "number", "id": "threshold", "label": "Low Stock Limit", "default": 5 }
  ]
}
{% endschema %}

<div class="stock-status p-6 bg-orange-50 border border-orange-100 rounded-2xl">
  <div class="flex justify-between font-black text-orange-600 mb-2">
     <span>LOW STOCK</span>
     <span>Only 3 Left</span>
  </div>
  <div class="h-2 w-full bg-white rounded-full overflow-hidden">
     <div class="h-full bg-orange-500" style="width: 15%"></div>
  </div>
</div>`,
    isPremium: true
  },
  {
    id: 'delivery-estimator',
    name: 'Delivery Estimator',
    category: 'product',
    previewComponent: 'DeliveryEstimator',
    description: 'Trust-focused shipping block with location detection mocks and estimated delivery date ranges.',
    tags: ['Shipping', 'Delivery', 'Trust', 'Fulfillment'],
    liquidCode: `{% schema %}
{
  "name": "Delivery Estimator",
  "settings": [
    { "type": "text", "id": "location", "label": "Default Location", "default": "Dubai, UAE" }
  ]
}
{% endschema %}

<div class="delivery-card p-8 bg-white border border-gray-100 rounded-[32px] shadow-lg">
  <div class="flex items-center gap-4 mb-6">
     <div class="h-12 w-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 font-bold">TRK</div>
     <div>
        <p class="text-sm font-black">Estimated Delivery</p>
        <p class="text-xs text-gray-500">To {{ section.settings.location }}</p>
     </div>
  </div>
  <p class="text-lg font-black text-indigo-600">May 12 – May 14</p>
</div>`,
    isPremium: true
  },
  {
    id: 'frequently-bought-together',
    name: 'Frequently Bought Together',
    category: 'product',
    previewComponent: 'FrequentlyBoughtTogether',
    description: 'High-conversion bundle suggestion block with interactive selection and real-time price calculation.',
    tags: ['Bundle', 'Upsell', 'AOV', 'Conversion'],
    liquidCode: `{% schema %}
{
  "name": "Bundle Builder",
  "settings": [
    { "type": "product", "id": "upsell_1", "label": "Upsell Product 1" },
    { "type": "product", "id": "upsell_2", "label": "Upsell Product 2" }
  ]
}
{% endschema %}

<div class="bundle-builder p-10 bg-white border border-gray-100 rounded-[48px] shadow-xl flex gap-8">
   <div class="product-mini h-24 w-24 bg-gray-50 rounded-2xl"></div>
   <div class="product-mini h-24 w-24 bg-gray-50 rounded-2xl"></div>
   <div class="flex-1 text-right">
      <p class="text-2xl font-black mb-4">$229.00</p>
      <button class="bg-black text-white px-8 py-3 rounded-full font-black uppercase text-xs">Add Bundle</button>
   </div>
</div>`,
    isPremium: true
  },
  {
    id: 'gift-box-option',
    name: 'Gift Box Option',
    category: 'product',
    previewComponent: 'GiftBoxOption',
    description: 'Premium upselling block for gift wrapping and personalized messages with animated state transitions.',
    tags: ['Gift', 'Upsell', 'Message', 'Personalization'],
    liquidCode: `{% schema %}
{
  "name": "Gift Options",
  "settings": [
    { "type": "text", "id": "price", "label": "Gift Price", "default": "$2.99" }
  ]
}
{% endschema %}

<div class="gift-option p-8 bg-white border border-gray-100 rounded-[32px] shadow-md flex items-center justify-between">
  <div class="flex items-center gap-4">
     <div class="h-12 w-12 bg-rose-50 text-rose-500 rounded-xl flex items-center justify-center">GFT</div>
     <p class="font-black uppercase text-sm italic">Add Gift Wrapping ({{ section.settings.price }})</p>
  </div>
  <button class="bg-gray-100 text-gray-500 px-6 py-2 rounded-full font-black uppercase text-[10px]">Add</button>
</div>`,
    isPremium: true
  },
  {
    id: 'whatsapp-buy',
    name: 'WhatsApp Buy Button',
    category: 'product',
    previewComponent: 'WhatsAppBuy',
    description: 'Direct-ordering block for conversational commerce, optimized for high-engagement support and orders.',
    tags: ['WhatsApp', 'Chat', 'Support', 'Commerce'],
    liquidCode: `{% schema %}
{
  "name": "WhatsApp Order",
  "settings": [
    { "type": "text", "id": "phone", "label": "Phone Number", "default": "+923000000000" }
  ]
}
{% endschema %}

<div class="whatsapp-buy p-10 bg-white border border-gray-100 rounded-[48px] text-center shadow-2xl">
   <div class="h-20 w-20 bg-green-500 rounded-[28px] mx-auto mb-6 flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-green-100">WA</div>
   <h4 class="text-xl font-black uppercase mb-4">Order on WhatsApp</h4>
   <a href="https://wa.me/{{ section.settings.phone }}" class="block w-full py-5 bg-[#25D366] text-white rounded-3xl font-black uppercase text-xs">Start Order Chat</a>
</div>`,
    isPremium: true
  },
  {
    id: 'product-highlights',
    name: 'Product Highlights List',
    category: 'product',
    previewComponent: 'ProductHighlights',
    description: 'Trust-focused feature grid with stylized icons and descriptive benefit-driven copy.',
    tags: ['Highlights', 'Benefits', 'USP', 'Features'],
    liquidCode: `{% schema %}
{
  "name": "Product Promise",
  "blocks": [
    { "type": "highlight", "name": "Highlight", "settings": [ { "type": "text", "id": "title", "label": "Title" } ] }
  ]
}
{% endschema %}

<div class="highlights-grid grid md:grid-cols-2 gap-6 p-10 bg-gray-50 rounded-[48px]">
   <div class="bg-white p-6 rounded-[32px] border border-gray-100">
      <h4 class="font-black uppercase tracking-tighter mb-2 italic">Premium Quality</h4>
      <p class="text-xs text-gray-400">Laboratory-tested materials and premium metals.</p>
   </div>
</div>`,
    isPremium: true
  },
  {
    id: 'video-embed',
    name: 'Product Video Embed',
    category: 'product',
    previewComponent: 'VideoEmbed',
    description: 'Cinematic video component with glassmorphism overlays and context-aware CTAs.',
    tags: ['Video', 'Storytelling', 'UI', 'Cinematic'],
    liquidCode: `{% schema %}
{
  "name": "Product Video",
  "settings": [
    { "type": "video_url", "id": "video", "label": "Video URL", "accept": ["youtube", "vimeo"] }
  ]
}
{% endschema %}

<div class="video-container aspect-video bg-black rounded-[48px] overflow-hidden relative border-[8px] border-white shadow-2xl">
   <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
      <button class="h-20 w-20 bg-indigo-600 text-white rounded-full flex items-center justify-center font-black">PLAY</button>
   </div>
</div>`,
    isPremium: true
  },
  {
    id: 'rotate-360',
    name: '360° Product View',
    category: 'product',
    previewComponent: 'Rotate360',
    description: 'Interactive inspection component with mouse-drag rotation and 3D transforms.',
    tags: ['360', 'Rotate', 'Interactive', 'Detail'],
    liquidCode: `{% schema %}
{
  "name": "360 View",
  "settings": [
    { "type": "product", "id": "product", "label": "Product" }
  ]
}
{% endschema %}

<div class="rotate-360 aspect-video bg-gray-50 rounded-[40px] border border-gray-100 flex items-center justify-center relative overflow-hidden">
   <p class="absolute bottom-10 font-black uppercase text-[10px] tracking-widest text-gray-400">Drag to Rotate</p>
   <img src="{{ section.settings.product.featured_image | image_url: width: 800 }}" class="h-4/5 object-contain drop-shadow-2xl">
</div>`,
    isPremium: true
  },
  {
    id: 'size-guide',
    name: 'Size Guide Popup',
    category: 'product',
    previewComponent: 'SizeGuide',
    description: 'Sophisticated sizing utility with modal overlays and unit switching logic.',
    tags: ['Size', 'Guide', 'Fitting', 'Modal'],
    liquidCode: `{% schema %}
{
  "name": "Sizing Utility",
  "settings": [
    { "type": "page", "id": "guide_page", "label": "Guide Content" }
  ]
}
{% endschema %}

<div class="size-trigger p-6 bg-gray-50 rounded-[32px] border border-gray-100 flex items-center justify-between group cursor-pointer hover:bg-indigo-50 transition-all">
   <p class="font-black uppercase italic tracking-tighter text-sm">Size Guide</p>
   <span class="text-indigo-600 font-bold">➔</span>
</div>`,
    isPremium: true
  },
  {
    id: 'ai-recommendations',
    name: 'AI Recommendation Block',
    category: 'product',
    previewComponent: 'AIRecommendations',
    description: 'High-engagement carousel for AI-driven suggestion logic and personalized browsing.',
    tags: ['AI', 'Recommendations', 'Personalization', 'Discovery'],
    liquidCode: `{% schema %}
{
  "name": "AI Suggestions",
  "settings": [
    { "type": "text", "id": "title", "label": "Heading", "default": "Recommended for You" }
  ]
}
{% endschema %}

<div class="ai-recommendations py-12">
   <h3 class="text-4xl font-black uppercase italic mb-8">{{ section.settings.title }}</h3>
   <div class="grid grid-cols-3 gap-6">
      <div class="aspect-square bg-gray-50 rounded-[32px] border border-gray-100"></div>
      <div class="aspect-square bg-gray-50 rounded-[32px] border border-gray-100"></div>
      <div class="aspect-square bg-gray-50 rounded-[32px] border border-gray-100"></div>
   </div>
</div>`,
    isPremium: true
  },
  {
    id: 'quick-buy-modal',
    name: 'Quick Buy Popup Modal',
    category: 'product',
    previewComponent: 'QuickBuyModal',
    description: 'Streamlined checkout utility with quick selection and accelerated purchase paths.',
    tags: ['Quick Buy', 'Modal', 'Checkout', 'UX'],
    liquidCode: `{% schema %}
{
  "name": "Instant Checkout",
  "settings": [
    { "type": "product", "id": "product", "label": "Product" }
  ]
}
{% endschema %}

<div class="quick-buy-trigger w-full py-5 bg-black text-white rounded-3xl font-black uppercase text-xs text-center shadow-xl cursor-pointer">
   INSTANT QUICK BUY
</div>`,
    isPremium: true
  },
  {
    id: 'footer-minimal-clean',
    name: 'Minimal Clean Footer',
    category: 'footers',
    previewComponent: 'FooterMinimalClean',
    description: 'Refined 3-column footer with subtle dividers and a rounded newsletter utility.',
    tags: ['Minimal', 'Clean', 'Modern', 'Boutique'],
    liquidCode: `{% schema %}
{
  "name": "Minimal Footer",
  "settings": [
    { "type": "link_list", "id": "menu", "label": "Footer Menu" }
  ]
}
{% endschema %}

<footer class="minimal-footer py-20 bg-white border-t border-gray-100">
  <div class="container mx-auto px-6 grid md:grid-cols-4 gap-12">
     <div>
        <h3 class="font-black uppercase tracking-tighter mb-6">{{ shop.name }}</h3>
        <p class="text-sm text-gray-400">Premium lifestyle essentials.</p>
     </div>
     {% for link in linklists[section.settings.menu].links %}
        <div>
           <h4 class="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-6">{{ link.title }}</h4>
           <ul class="space-y-4 text-sm font-medium">
              {% for child in link.links %}
                 <li><a href="{{ child.url }}">{{ child.title }}</a></li>
              {% endfor %}
           </ul>
        </div>
     {% endfor %}
  </div>
</footer>`,
    isPremium: true
  },
  {
    id: 'footer-luxury-brand',
    name: 'Luxury Brand Footer',
    category: 'footers',
    previewComponent: 'FooterLuxuryBrand',
    description: 'Opulent dark design with serif typography and concierge-style contact blocks.',
    tags: ['Luxury', 'Premium', 'Serif', 'Fashion'],
    liquidCode: `{% schema %}
{
  "name": "Luxury Footer",
  "settings": [
    { "type": "text", "id": "title", "label": "Heading", "default": "Lumière." }
  ]
}
{% endschema %}

<footer class="luxury-footer bg-[#0a0a0a] text-white py-24">
   <div class="container mx-auto px-6">
      <h2 class="text-5xl font-serif italic mb-16">{{ section.settings.title }}</h2>
      <div class="grid md:grid-cols-3 gap-16">
         <div>
            <p class="text-white/40 text-sm leading-relaxed tracking-widest uppercase">Maison de Luxe</p>
         </div>
      </div>
   </div>
</footer>`,
    isPremium: true
  },
  {
    id: 'footer-modern-saas',
    name: 'Modern SaaS Footer',
    category: 'footers',
    previewComponent: 'FooterModernSaaS',
    description: 'Developer-focused dark footer with gradient glows and glassmorphism newsletter cards.',
    tags: ['SaaS', 'Dark', 'Tech', 'Modern'],
    liquidCode: `{% schema %}
{
  "name": "SaaS Footer",
  "settings": [
    { "type": "text", "id": "brand", "label": "Brand Name", "default": "Flux.io" }
  ]
}
{% endschema %}

<footer class="saas-footer bg-slate-950 text-white py-24 relative overflow-hidden">
   <div class="container mx-auto px-6 relative z-10 grid md:grid-cols-4 gap-12">
      <div>
         <h3 class="text-2xl font-black mb-6">{{ section.settings.brand }}</h3>
         <p class="text-slate-400 text-sm">Automating the future.</p>
      </div>
   </div>
</footer>`,
    isPremium: true
  },
  {
    id: 'footer-ecommerce-mega',
    name: 'E-commerce Mega Footer',
    category: 'footers',
    previewComponent: 'FooterEcommerceMega',
    description: 'Robust 5-column grid with value props, trust badges, and payment method icons.',
    tags: ['Ecommerce', 'Mega', 'Conversion', 'Trust'],
    liquidCode: `{% schema %}
{
  "name": "Mega Footer",
  "settings": [
    { "type": "text", "id": "title", "label": "Heading", "default": "Swift." }
  ]
}
{% endschema %}

<footer class="mega-footer bg-gray-50 py-24">
   <div class="container mx-auto px-6 border-b border-gray-200 pb-16 mb-16">
      <div class="grid md:grid-cols-3 gap-12">
         <div class="font-black text-sm uppercase tracking-widest">Free Shipping</div>
         <div class="font-black text-sm uppercase tracking-widest">Secure Payment</div>
         <div class="font-black text-sm uppercase tracking-widest">30 Day Returns</div>
      </div>
   </div>
</footer>`,
    isPremium: true
  },
  {
    id: 'footer-minimal-centered',
    name: 'Minimal Centered Footer',
    category: 'footers',
    previewComponent: 'FooterMinimalCentered',
    description: 'Symmetrical layout with centered logo, navigation links, and social utility row.',
    tags: ['Centered', 'Minimal', 'Symmetrical', 'Simple'],
    liquidCode: `{% schema %}
{
  "name": "Centered Footer",
  "settings": [
    { "type": "text", "id": "logo", "label": "Logo Text", "default": "Essence." }
  ]
}
{% endschema %}

<footer class="centered-footer py-24 bg-white border-t border-gray-100 text-center">
   <h2 class="text-3xl font-black italic mb-12">{{ section.settings.logo }}</h2>
   <ul class="flex justify-center gap-12 text-sm font-black uppercase tracking-widest mb-12">
      <li>About</li>
      <li>Journal</li>
      <li>Contact</li>
   </ul>
</footer>`,
    isPremium: true
  },
  {
    id: 'footer-fashion-editorial',
    name: 'Fashion Editorial Footer',
    category: 'footers',
    previewComponent: 'FooterFashionEditorial',
    description: 'High-fashion design with Instagram grid, thin typography, and expansive whitespace.',
    tags: ['Fashion', 'Editorial', 'Instagram', 'Luxury'],
    liquidCode: `{% schema %}
{
  "name": "Editorial Footer",
  "settings": [
    { "type": "text", "id": "handle", "label": "Instagram Handle", "default": "@vogue" }
  ]
}
{% endschema %}

<footer class="editorial-footer py-32 bg-white">
   <div class="instagram-grid grid grid-cols-4 gap-2 mb-24">
      <div class="aspect-square bg-gray-50"></div>
      <div class="aspect-square bg-gray-50"></div>
      <div class="aspect-square bg-gray-50"></div>
      <div class="aspect-square bg-gray-50"></div>
   </div>
   <div class="container mx-auto px-6">
      <h2 class="text-6xl font-serif italic mb-12">{{ shop.name }}.</h2>
   </div>
</footer>`,
    isPremium: true
  },
  {
    id: 'footer-gaming-dark',
    name: 'Dark Mode Gaming Footer',
    category: 'footers',
    previewComponent: 'FooterGamingDark',
    description: 'Futuristic design with neon accents, Discord/Twitch links, and guild-themed lists.',
    tags: ['Gaming', 'Neon', 'Dark', 'Discord'],
    liquidCode: `{% schema %}
{
  "name": "Gaming Footer",
  "settings": [
    { "type": "color", "id": "accent", "label": "Neon Accent", "default": "#06b6d4" }
  ]
}
{% endschema %}

<footer class="gaming-footer bg-black text-white py-24 relative overflow-hidden">
   <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
   <div class="container mx-auto px-6">
      <h3 class="text-3xl font-black italic uppercase tracking-tighter mb-12">Level Up Your Gear.</h3>
   </div>
</footer>`,
    isPremium: true
  },
  {
    id: 'footer-jewelry-luxury',
    name: 'Jewelry Luxury Footer',
    category: 'footers',
    previewComponent: 'FooterJewelryLuxury',
    description: 'Delicate beige design with gold gradients, store locator, and serif typography.',
    tags: ['Jewelry', 'Luxury', 'Gold', 'Premium'],
    liquidCode: `{% schema %}
{
  "name": "Jewelry Footer",
  "settings": [
    { "type": "text", "id": "brand", "label": "Maison Name", "default": "Aurelia Jewels" }
  ]
}
{% endschema %}

<footer class="jewelry-footer bg-[#fdfaf7] py-32 text-center">
   <h2 class="text-5xl font-serif italic mb-8">{{ section.settings.brand }}</h2>
   <div class="h-px w-24 bg-amber-200 mx-auto mb-12"></div>
</footer>`,
    isPremium: true
  },
  {
    id: 'footer-tech-startup',
    name: 'Tech Startup Footer',
    category: 'footers',
    previewComponent: 'FooterTechStartup',
    description: 'Modern structured design with app download buttons and security certification branding.',
    tags: ['Startup', 'Tech', 'Apps', 'Security'],
    liquidCode: `{% schema %}
{
  "name": "Startup Footer",
  "settings": [
    { "type": "text", "id": "name", "label": "Startup Name", "default": "HyperCore" }
  ]
}
{% endschema %}

<footer class="startup-footer py-24 bg-white border-t border-gray-100">
   <div class="container mx-auto px-6 grid md:grid-cols-4 gap-12">
      <div>
         <h3 class="text-2xl font-black mb-6">{{ section.settings.name }}</h3>
         <p class="text-gray-400">Scaling the future of AI.</p>
      </div>
   </div>
</footer>`,
    isPremium: true
  },
  {
    id: 'footer-food-restaurant',
    name: 'Food & Restaurant Footer',
    category: 'footers',
    previewComponent: 'FooterFoodRestaurant',
    description: 'Warm earthy-toned design with kitchen hours, reservation buttons, and farm-to-table messaging.',
    tags: ['Food', 'Restaurant', 'Reservation', 'Organic'],
    liquidCode: `{% schema %}
{
  "name": "Restaurant Footer",
  "settings": [
    { "type": "text", "id": "name", "label": "Restaurant Name", "default": "Hearth & Soil." }
  ]
}
{% endschema %}

<footer class="restaurant-footer bg-stone-900 text-stone-200 py-24">
   <div class="container mx-auto px-6 grid md:grid-cols-3 gap-12">
      <div>
         <h3 class="text-3xl font-black italic uppercase tracking-tighter">{{ section.settings.name }}</h3>
      </div>
      <div>
         <h4 class="text-orange-500 font-black uppercase text-xs tracking-widest mb-6">Hours</h4>
         <p>Mon - Sun: 12:00 - 22:00</p>
      </div>
   </div>
</footer>`,
    isPremium: true
  },
  {
    id: 'footer-split-column',
    name: 'Split Column Footer',
    category: 'footers',
    previewComponent: 'FooterSplitColumn',
    description: 'Modern asymmetric design with high-impact brand story and structured link grids.',
    tags: ['Asymmetric', 'Split', 'Modern', 'Design'],
    liquidCode: `{% schema %}
{
  "name": "Split Footer",
  "settings": [
    { "type": "text", "id": "title", "label": "Heading", "default": "Radiance." }
  ]
}
{% endschema %}

<footer class="split-footer py-24 bg-white border-t border-gray-100">
   <div class="container mx-auto px-6 flex flex-col lg:flex-row gap-24">
      <div class="lg:w-1/2">
         <h2 class="text-5xl font-black italic">{{ section.settings.title }}</h2>
      </div>
      <div class="lg:w-1/2">
         <p class="text-gray-400">Revolutionizing digital aesthetics.</p>
      </div>
   </div>
</footer>`,
    isPremium: true
  },
  {
    id: 'footer-compact-mobile',
    name: 'Compact Mobile Footer',
    category: 'footers',
    previewComponent: 'FooterCompactMobile',
    description: 'Mobile-first design with collapsible navigation and persistent bottom bar.',
    tags: ['Mobile', 'Sticky', 'Compact', 'UX'],
    liquidCode: `{% schema %}
{
  "name": "Mobile Footer",
  "settings": [
    { "type": "link_list", "id": "menu", "label": "Menu" }
  ]
}
{% endschema %}

<footer class="mobile-footer pb-24 md:pb-12 bg-white">
   <div class="container mx-auto px-6">
      <div class="sticky-nav fixed bottom-0 left-0 w-full h-16 bg-white/80 backdrop-blur-md border-t lg:hidden"></div>
   </div>
</footer>`,
    isPremium: true
  },
  {
    id: 'footer-glassmorphism',
    name: 'Glassmorphism Footer',
    category: 'footers',
    previewComponent: 'FooterGlassmorphism',
    description: 'Futuristic Web3-style design with deep blurs, glowing orbs, and glass cards.',
    tags: ['Glassmorphism', 'Web3', 'Dark', 'Modern'],
    liquidCode: `{% schema %}
{
  "name": "Glass Footer",
  "settings": [
    { "type": "color", "id": "glow", "label": "Glow Color", "default": "#8b5cf6" }
  ]
}
{% endschema %}

<footer class="glass-footer bg-black py-32 relative overflow-hidden">
   <div class="glow-orb absolute w-96 h-96 blur-[120px] rounded-full opacity-20"></div>
   <div class="container mx-auto px-6 relative z-10">
      <div class="glass-card bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[48px] p-16">
         <h2 class="text-white text-4xl font-black tracking-tighter italic">Vesper.</h2>
      </div>
   </div>
</footer>`,
    isPremium: true
  },
  {
    id: 'footer-animated-gradient',
    name: 'Animated Gradient Footer',
    category: 'footers',
    previewComponent: 'FooterAnimatedGradient',
    description: 'Cinematic design with rotating conic gradient and bold display typography.',
    tags: ['Animated', 'Gradient', 'Cinematic', 'Hero'],
    liquidCode: `{% schema %}
{
  "name": "Gradient Footer",
  "settings": [
    { "type": "text", "id": "heading", "label": "Heading", "default": "Lumina." }
  ]
}
{% endschema %}

<footer class="gradient-footer bg-black text-white py-32 relative overflow-hidden">
   <div class="animate-conic absolute inset-0 opacity-20"></div>
   <div class="container mx-auto px-6 text-center">
      <h2 class="text-7xl font-black uppercase tracking-tighter">{{ section.settings.heading }}</h2>
   </div>
</footer>`,
    isPremium: true
  },
  {
    id: 'footer-eco-sustainable',
    name: 'Eco Sustainable Footer',
    category: 'footers',
    previewComponent: 'FooterEcoSustainable',
    description: 'Natural design with sage green accents, organic identity, and certification row.',
    tags: ['Eco', 'Sustainable', 'Organic', 'Green'],
    liquidCode: `{% schema %}
{
  "name": "Eco Footer",
  "settings": [
    { "type": "text", "id": "tagline", "label": "Tagline", "default": "Sustainably Sourced." }
  ]
}
{% endschema %}

<footer class="eco-footer bg-[#f4f7f4] py-24 text-[#2d3a2d]">
   <div class="container mx-auto px-6">
      <h2 class="text-4xl font-black italic mb-12">{{ section.settings.tagline }}</h2>
      <div class="flex gap-8 grayscale opacity-40">
         <span>B-Corp</span>
         <span>Organic</span>
      </div>
   </div>
</footer>`,
    isPremium: true
  },
  {
    id: 'footer-corporate-business',
    name: 'Corporate Business Footer',
    category: 'footers',
    previewComponent: 'FooterCorporateBusiness',
    description: 'Structured professional design with multi-location navigation and governance blocks.',
    tags: ['Corporate', 'Business', 'Trust', 'Enterprise'],
    liquidCode: `{% schema %}
{
  "name": "Corporate Footer",
  "settings": [
    { "type": "text", "id": "name", "label": "Company Name", "default": "GlobalAssets." }
  ]
}
{% endschema %}

<footer class="corp-footer bg-slate-50 py-24 border-t">
   <div class="container mx-auto px-6 grid md:grid-cols-4 gap-12">
      <div>
         <h3 class="text-2xl font-black text-blue-800">{{ section.settings.name }}</h3>
         <p class="text-sm text-slate-500">Wealth Strategies Globally.</p>
      </div>
   </div>
</footer>`,
    isPremium: true
  },
  {
    id: 'footer-fashion-instagram',
    name: 'Fashion Instagram Footer',
    category: 'footers',
    previewComponent: 'FooterFashionInstagram',
    description: 'Social-proof driven design with dynamic Instagram grid and influencer CTAs.',
    tags: ['Fashion', 'Instagram', 'Social Proof', 'Shopify'],
    liquidCode: `{% schema %}
{
  "name": "Instagram Footer",
  "settings": [
    { "type": "text", "id": "tag", "label": "HashTag", "default": "#LumiStyle" }
  ]
}
{% endschema %}

<footer class="insta-footer py-24 bg-white">
   <div class="container mx-auto px-6">
      <h2 class="text-4xl font-black uppercase tracking-tighter mb-12">Tag {{ section.settings.tag }}</h2>
      <div class="grid grid-cols-6 gap-4">
         {% for i in (1..6) %}
            <div class="aspect-square bg-gray-50 rounded-xl"></div>
         {% endfor %}
      </div>
   </div>
</footer>`,
    isPremium: true
  },
  {
    id: 'footer-app-download',
    name: 'App Download Footer',
    category: 'footers',
    previewComponent: 'FooterAppDownload',
    description: 'Tech-forward design with store buttons, QR code utility, and security branding.',
    tags: ['App', 'Mobile', 'QR Code', 'Tech'],
    liquidCode: `{% schema %}
{
  "name": "App Footer",
  "settings": [
    { "type": "text", "id": "title", "label": "Heading", "default": "Mobile First." }
  ]
}
{% endschema %}

<footer class="app-footer bg-[#0a0a0a] text-white py-32">
   <div class="container mx-auto px-6 flex flex-col lg:flex-row gap-24">
      <div class="lg:w-1/2">
         <h2 class="text-6xl font-black italic">{{ section.settings.title }}</h2>
      </div>
   </div>
</footer>`,
    isPremium: true
  },
  {
    id: 'footer-ultra-minimal',
    name: 'Ultra Minimal Footer',
    category: 'footers',
    previewComponent: 'FooterUltraMinimal',
    description: 'Reductionist design with tiny brand mark, essential links, and massive whitespace.',
    tags: ['Minimal', 'Radical', 'Luxury', 'Clean'],
    liquidCode: `{% schema %}
{
  "name": "Ultra Minimal Footer",
  "settings": []
}
{% endschema %}

<footer class="ultra-minimal py-16 text-center border-t border-gray-100">
   <div class="text-xl font-black uppercase tracking-tighter mb-8">{{ shop.name }}</div>
   <ul class="flex justify-center gap-12 text-[10px] font-black uppercase tracking-widest text-gray-400">
      <li>About</li>
      <li>Privacy</li>
      <li>Contact</li>
   </ul>
</footer>`,
    isPremium: true
  },
  {
    id: 'footer-high-conversion',
    name: 'High Conversion Footer',
    category: 'footers',
    previewComponent: 'FooterHighConversion',
    description: 'Results-oriented design with integrated discount box and verified rating cards.',
    tags: ['Conversion', 'Sales', 'Reviews', 'Shopify'],
    liquidCode: `{% schema %}
{
  "name": "Conversion Footer",
  "settings": [
    { "type": "text", "id": "offer", "label": "Offer Text", "default": "15% OFF" }
  ]
}
{% endschema %}

<footer class="conversion-footer py-24 bg-white">
   <div class="container mx-auto px-6">
      <div class="p-20 bg-indigo-600 rounded-[64px] text-white">
         <h2 class="text-6xl font-black italic">Unlock {{ section.settings.offer }}</h2>
      </div>
   </div>
</footer>`,
    isPremium: true
  },
  {
    id: "cart-minimal-clean",
    name: "Minimal Clean Cart",
    category: "cart",
    tags: ["minimal", "clean", "apple-style"],
    description: "White background, thin borders, compact product rows, and a sticky checkout sidebar. Inspired by Apple's minimalist design.",
    previewComponent: "CartMinimalClean",
    liquidCode: `<!-- Minimal Clean Cart Section -->
<section class="cart-minimal">
  <div class="container mx-auto px-6 py-12">
    <h1 class="text-3xl font-bold mb-8">Shopping Bag</h1>
    <!-- Product Loop and Summary Sidebar -->
  </div>
</section>`,
    isPremium: true
  },
  {
    id: "cart-luxury-fashion",
    name: "Luxury Fashion Cart",
    category: "cart",
    tags: ["luxury", "fashion", "dark-theme"],
    description: "Dark elegant theme with gold accents, large product images, and premium typography. Optimized for high-end boutique brands.",
    previewComponent: "CartLuxuryFashion",
    liquidCode: `<!-- Luxury Fashion Cart Section -->
<section class="cart-luxury bg-black text-white">
  <div class="container mx-auto px-12 py-24">
    <h1 class="text-6xl font-light italic mb-12">Your Selection</h1>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: "cart-glassmorphism",
    name: "Glassmorphism Cart",
    category: "cart",
    tags: ["glassmorphism", "modern", "blur"],
    description: "Blurred glass cards, transparent background, neon glow buttons, and a floating checkout summary. Uses cutting-edge UI trends.",
    previewComponent: "CartGlassmorphism",
    liquidCode: `<!-- Glassmorphism Cart Section -->
<section class="cart-glass bg-gradient-to-br from-indigo-500 to-purple-600 p-12">
  <div class="glass-card backdrop-blur-xl bg-white/10 border border-white/20 rounded-[3rem] p-12">
    <h1 class="text-white text-4xl font-bold">Checkout</h1>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: "cart-modern-saas",
    name: "Modern SaaS Cart",
    category: "cart",
    tags: ["saas", "dashboard", "analytics"],
    description: "Dashboard-style layout with progress indicators, trust badges, and clean cards. Perfect for digital products and subscriptions.",
    previewComponent: "CartModernSaaS",
    liquidCode: `<!-- Modern SaaS Cart Section -->
<section class="cart-saas bg-slate-50 py-12">
  <div class="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-sm">
    <h1 class="text-2xl font-bold">Review Order</h1>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: "cart-split-screen",
    name: "Split Screen Cart",
    category: "cart",
    tags: ["split-screen", "desktop-optimized", "conversion"],
    description: "Layout optimized for desktop, separating the product list on the left from an animated checkout summary on the right.",
    previewComponent: "CartSplitScreen",
    liquidCode: `<!-- Split Screen Cart Section -->
<section class="cart-split flex">
  <div class="left-products w-2/3 p-12"></div>
  <div class="right-summary w-1/3 p-12 bg-gray-50 h-screen sticky top-0"></div>
</section>`,
    isPremium: true
  },
  {
    id: "cart-drawer-slide",
    name: "Drawer Slide Cart",
    category: "cart",
    tags: ["drawer", "side-cart", "interactive"],
    description: "Full animated side drawer cart with quick quantity updates, recommended products, and a free shipping progress bar.",
    previewComponent: "CartDrawerSlide",
    liquidCode: `<!-- Drawer Slide Cart Template -->
<div id="CartDrawer" class="cart-drawer fixed right-0 top-0 h-full w-[450px] bg-white shadow-2xl z-[1000]">
  <div class="p-8">
    <h2 class="text-2xl font-bold">Shopping Bag</h2>
  </div>
</div>`,
    isPremium: true
  },
  {
    id: "cart-mobile-first",
    name: "Mobile First Cart",
    category: "cart",
    tags: ["mobile-optimized", "thumb-friendly", "app-like"],
    description: "Thumb-friendly controls with sticky bottom checkout button and vertical stacking. Designed for the majority of Shopify traffic.",
    previewComponent: "CartMobileFirst",
    liquidCode: `<!-- Mobile First Cart Section -->
<section class="cart-mobile md:hidden pb-40">
  <div class="p-4 bg-white border-b">
    <h1 class="text-xl font-bold text-center">Your Bag</h1>
  </div>
  <div class="fixed bottom-0 left-0 w-full p-4 bg-white border-t">
    <button class="w-full bg-black text-white py-4 font-bold rounded-xl">Checkout Now</button>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: "cart-gaming-store",
    name: "Gaming Store Cart",
    category: "cart",
    tags: ["gaming", "cyberpunk", "rgb"],
    description: "Cyberpunk UI with neon gradients, animated borders, glowing buttons, and RGB effects. Ideal for gaming hardware and merch.",
    previewComponent: "CartGamingStore",
    liquidCode: `<!-- Gaming Store Cart Section -->
<section class="cart-gaming bg-[#050505] text-cyan-400 p-8">
  <h1 class="text-6xl font-black italic border-b-4 border-cyan-400 mb-12">LOOT BAG</h1>
</section>`,
    isPremium: true
  },
  {
    id: "cart-eco-organic",
    name: "Eco Organic Cart",
    category: "cart",
    tags: ["eco-friendly", "organic", "sustainability"],
    description: "Earth-toned theme with sustainability impact tracking and eco-mission highlights. Perfect for green and organic brands.",
    previewComponent: "CartEcoOrganic",
    liquidCode: `<!-- Eco Organic Cart Section -->
<section class="cart-eco bg-[#fdfbf7] text-stone-800 p-12">
  <div class="max-w-3xl mx-auto border border-stone-200 p-12 rounded-[3rem]">
    <h1 class="text-4xl font-serif italic mb-8">Green Harvest</h1>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: "cart-one-product-focus",
    name: "One Product Focus Cart",
    category: "cart",
    tags: ["one-product", "hero-image", "conversion"],
    description: "Large hero imagery for single product brands, high-conversion layout, and strategically placed upsell sections.",
    previewComponent: "CartOneProductFocus",
    liquidCode: `<!-- One Product Focus Cart Section -->
<section class="cart-one-product py-24">
  <div class="container mx-auto px-12 flex flex-col items-center">
    <h1 class="text-7xl font-black italic uppercase mb-12">Your Order.</h1>
  </div>
</section>`,
    isPremium: true
  },
  {
    id: "cart-luxury-jewelry",
    name: "Luxury Jewelry Cart",
    category: "cart",
    tags: ["luxury", "jewelry", "gold-accent"],
    description: "Black marble theme with gold accents, premium acquisition-focused UI, and high-fidelity typography for jewelry stores.",
    previewComponent: "CartLuxuryJewelry",
    liquidCode: `<!-- Luxury Jewelry Cart Section -->
<section class="cart-jewelry bg-[#0a0a0a] text-[#d4af37] p-24">
  <h1 class="text-8xl font-light italic text-center mb-24">Your Collection</h1>
</section>`,
    isPremium: true
  },
  {
    id: "cart-streetwear",
    name: "Streetwear Cart",
    category: "cart",
    tags: ["streetwear", "bold", "underground"],
    description: "Bold typography, oversized buttons, edgy animations, and a TikTok-inspired product feed for lifestyle brands.",
    previewComponent: "CartStreetwear",
    liquidCode: `<!-- Streetwear Cart Section -->
<section class="cart-streetwear bg-black text-white p-8">
  <h1 class="text-[12rem] font-black italic leading-[0.8] mb-20">MY BAG.</h1>
</section>`,
    isPremium: true
  },
  {
    id: "cart-ai-smart",
    name: "AI Smart Cart",
    category: "cart",
    tags: ["ai", "smart-recommendations", "dynamic"],
    description: "Neural-themed UI with dynamic discount prediction, AI insights, and automated bundle recommendations.",
    previewComponent: "CartAISmart",
    liquidCode: `<!-- AI Smart Cart Section -->
<section class="cart-ai bg-[#0a0a0f] text-white p-12">
  <h1 class="text-4xl font-black">Smart Cart <span class="text-indigo-400">v2.0</span></h1>
</section>`,
    isPremium: true
  },
  {
    id: "cart-subscription",
    name: "Subscription Cart",
    category: "cart",
    tags: ["subscription", "recurring", "replenishment"],
    description: "Replenishment-focused UI with one-time vs subscription toggles, frequency selectors, and savings indicators.",
    previewComponent: "CartSubscription",
    liquidCode: `<!-- Subscription Cart Section -->
<section class="cart-subscription bg-[#faf9f6] p-12">
  <h1 class="text-4xl font-black">Replenishment Bag</h1>
</section>`,
    isPremium: true
  },
  {
    id: "cart-bento-grid",
    name: "Bento Grid Cart",
    category: "cart",
    tags: ["bento-grid", "modular", "modern"],
    description: "Modern modular layout using bento grid cards for shipping trackers, coupons, rewards, and product lists.",
    previewComponent: "CartBentoGrid",
    liquidCode: `<!-- Bento Grid Cart Section -->
<section class="cart-bento grid grid-cols-12 gap-6 p-12">
  <div class="col-span-12 bg-white p-8 rounded-3xl">Header</div>
</section>`,
    isPremium: true
  },
  {
    id: "cart-marketplace",
    name: "Marketplace Cart",
    category: "cart",
    tags: ["marketplace", "multi-vendor", "shipping-estimates"],
    description: "Multi-vendor layout grouping items by seller with individual shipping estimates and consolidated checkout summary.",
    previewComponent: "CartMarketplace",
    liquidCode: `<!-- Marketplace Cart Section -->
<section class="cart-marketplace bg-gray-50 p-12">
  <h1 class="text-4xl font-black">Marketplace Bag</h1>
</section>`,
    isPremium: true
  },
  {
    id: "cart-animated-interactive",
    name: "Animated Interactive Cart",
    category: "cart",
    tags: ["animated", "interactive", "reward-progress"],
    description: "High-fidelity transitions with micro-animations on quantity changes, reward progress bars, and cinematic product reveals.",
    previewComponent: "CartAnimatedInteractive",
    liquidCode: `<!-- Animated Interactive Cart Section -->
<section class="cart-interactive bg-[#f0f0f5] p-12">
  <h1 class="text-4xl font-black">Interactive Bag</h1>
</section>`,
    isPremium: true
  },
  {
    id: "cart-luxury-perfume",
    name: "Luxury Perfume Cart",
    category: "cart",
    tags: ["perfume", "beauty", "soft-serif"],
    description: "Elegant serif typography, soft cinematic aesthetics, and a premium unboxing experience section for beauty brands.",
    previewComponent: "CartLuxuryPerfume",
    liquidCode: `<!-- Luxury Perfume Cart Section -->
<section class="cart-perfume bg-[#faf8f6] p-24 text-center">
  <h1 class="text-8xl font-light italic">The Scent Journal</h1>
</section>`,
    isPremium: true
  },
  {
    id: "cart-social-commerce",
    name: "Social Commerce Cart",
    category: "cart",
    tags: ["social", "influencer", "tiktok-style"],
    description: "Instagram/TikTok style feed UI with creator recommendations, influencer bundles, and social interaction elements.",
    previewComponent: "CartSocialCommerce",
    liquidCode: `<!-- Social Commerce Cart Section -->
<section class="cart-social max-w-[600px] mx-auto pb-40">
  <h1 class="text-2xl font-black italic text-center p-8">Social Cart.</h1>
</section>`,
    isPremium: true
  },
  {
    id: "cart-advanced-conversion",
    name: "Advanced Conversion Cart",
    category: "cart",
    tags: ["conversion-optimized", "urgency", "trust-badges"],
    description: "Optimized for maximum conversion with urgency timers, stock trackers, shipping progress bars, and trust sections.",
    previewComponent: "CartAdvancedConversion",
    liquidCode: `<!-- Advanced Conversion Cart Section -->
<section class="cart-conversion bg-[#f8f9fa] p-12">
  <div class="bg-indigo-600 text-white p-4 text-center rounded-xl">Inventory Reserved</div>
</section>`,
    isPremium: true
  },
]
