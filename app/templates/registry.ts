import FashionLuxuryTemplate from '@/components/templates/FashionLuxury';
import TechMinimalTemplate from '@/components/templates/TechMinimal';
import BeautyHeroTemplate from '@/components/templates/BeautyHero';
import ProductGridTemplate from '@/components/templates/ProductGrid';

export const templateRegistry = [
  {
    id: 'fashion-luxury',
    title: 'Fashion Luxury Pro',
    category: 'Luxury Fashion',
    component: FashionLuxuryTemplate,
    react: `"use client"
import React from 'react';
export default function Template() { return <div>Fashion Luxury</div> }`,
    liquid: `{% comment %} Luxury Hero Section {% endcomment %}
<section class="luxury-hero">
  <h1>{{ section.settings.title }}</h1>
</section>`,
    snippets: {
      'icon-luxury': '<svg>...</svg>'
    }
  },
  {
    id: 'tech-minimal',
    title: 'Tech Minimal Pro',
    category: 'SaaS / Tech',
    component: TechMinimalTemplate,
    react: ``,
    liquid: ``
  },
  {
    id: 'beauty-hero',
    title: 'Beauty Hero Split',
    category: 'Beauty / Cosmetics',
    component: BeautyHeroTemplate,
    react: ``,
    liquid: ``
  },
  {
    id: 'product-grid',
    title: 'Product Grid - Clean',
    category: 'E-commerce',
    component: ProductGridTemplate,
    react: ``,
    liquid: ``
  }
];
