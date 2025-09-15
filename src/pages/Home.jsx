import React from 'react';
import Product from '../pages/Products';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center max-w-4xl space-y-6 py-32">
        {/* Gradient Headline */}
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#C382CC] via-[#3A0763] to-[#240745] bg-clip-text text-transparent drop-shadow-lg">
          Welcome to AXZone
        </h1>

        {/* Subtext */}
        <p className="text-gray-100 text-lg md:text-xl drop-shadow-md">
          Explore our products and services. Discover innovation, style, and quality all in one place.
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          {/* Gradient button */}
          <a
            href="/products"
            className="px-6 py-3 bg-gradient-to-r from-[#090621] via-[#240745] to-[#3A0763] rounded-full font-semibold text-white shadow-lg hover:opacity-90 transition"
          >
            Shop Now
          </a>

          {/* Outline button */}
          <a
            href="/about"
            className="px-6 py-3 border border-[#C382CC] rounded-full font-semibold text-[#C382CC] shadow hover:bg-[#C382CC] hover:text-white transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Product Section */}
      <section className="w-full relative z-10 mt-10">
        <Product />
      </section>
    </div>
  );
}

export default Home;
