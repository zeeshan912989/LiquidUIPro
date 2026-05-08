"use client"

import { Globe, Share2, Send, Mail } from 'lucide-react'

export default function Footer01() {
  return (
    <footer className="w-full border-t border-gray-100 bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-8">
          {/* Shop */}
          <div className="text-center sm:text-left">
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-900">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="transition-colors hover:text-black">New Arrivals</a></li>
              <li><a href="#" className="transition-colors hover:text-black">Best Sellers</a></li>
              <li><a href="#" className="transition-colors hover:text-black">Sale</a></li>
            </ul>
          </div>
          {/* Support */}
          <div className="text-center sm:text-left">
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-900">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="transition-colors hover:text-black">Shipping Policy</a></li>
              <li><a href="#" className="transition-colors hover:text-black">Returns & Exchanges</a></li>
              <li><a href="#" className="transition-colors hover:text-black">FAQs</a></li>
            </ul>
          </div>
          {/* Company */}
          <div className="text-center sm:text-left">
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-900">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="transition-colors hover:text-black">Our Story</a></li>
              <li><a href="#" className="transition-colors hover:text-black">Sustainability</a></li>
              <li><a href="#" className="transition-colors hover:text-black">Careers</a></li>
            </ul>
          </div>
          {/* Social */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-900">Follow Us</h4>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 transition-colors hover:text-black"><Globe className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 transition-colors hover:text-black"><Share2 className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 transition-colors hover:text-black"><Send className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 transition-colors hover:text-black"><Mail className="h-5 w-5" /></a>
            </div>
            <div className="mt-8 hidden lg:block">
              <p className="text-xs text-gray-400 italic">Stay updated with our newsletter.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-gray-50 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-xs text-gray-400 sm:text-left">
              &copy; 2026 LiquidUI Pro. All rights reserved.
            </p>
            <div className="flex gap-6 text-[10px] font-medium uppercase tracking-tighter text-gray-400">
              <a href="#" className="hover:text-black">Privacy Policy</a>
              <a href="#" className="hover:text-black">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
