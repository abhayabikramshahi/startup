import React from "react";
import Product from "../pages/Products";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative bg-black overflow-hidden">
      {/* Overlay for subtle depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black opacity-90 z-0"></div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center max-w-5xl space-y-6 py-32">
        {/* Gradient Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-[#C382CC] via-[#8236D9] to-[#3A0763] bg-clip-text text-transparent drop-shadow-2xl leading-tight">
          Welcome to <span className="text-white">AXZone</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Explore our curated products and services. Discover innovation, style, 
          and quality — all in one place designed for you.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          {/* Gradient button */}
          <a
            href="/products"
            className="px-8 py-3 bg-gradient-to-r from-[#3A0763] to-[#C382CC] rounded-full font-semibold text-white shadow-lg hover:scale-105 hover:shadow-purple-900/50 transition-transform duration-300"
          >
            Shop Now
          </a>

          {/* Outline button */}
          <a
            href="/about"
            className="px-8 py-3 border border-[#C382CC] rounded-full font-semibold text-[#C382CC] hover:bg-[#C382CC] hover:text-white transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Product Section */}
      <section className="w-full relative z-10 mt-20 pb-20">
        <Product />
      </section>
    </div>
  );
}

export default Home;
