import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">AXZone</h2>
          <p className="text-gray-400">
            Explore our products and services. Innovation, style, and quality in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-[#C382CC] transition">Home</a></li>
            <li><a href="/products" className="hover:text-[#C382CC] transition">Products</a></li>
            <li><a href="/about" className="hover:text-[#C382CC] transition">About</a></li>
            <li><a href="/contact" className="hover:text-[#C382CC] transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#C382CC] transition"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-[#C382CC] transition"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-[#C382CC] transition"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-[#C382CC] transition"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center border-t border-gray-700 pt-6 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} AXZone. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
