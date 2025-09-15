import React from 'react';
import Product from '../pages/Products';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center max-w-4xl space-y-6 py-32">
        {/* Gradient Headline */}
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#090621] via-[#240745] via-[#3A0763] to-[#3A0763] bg-clip-text text-transparent">
          Welcome to AXZone
        </h1>

        {/* Subtext */}
        <p className="text-gray-200 text-lg md:text-xl">
          Explore our products and services. Discover innovation, style, and quality all in one place.
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          {/* Gradient button */}
          <a
            href="/products"
            className="px-6 py-3 bg-gradient-to-r from-[#090621] via-[#240745] to-[#3A0763] rounded-full font-semibold text-white hover:opacity-90 transition"
          >
            Shop Now
          </a>

          {/* Outline button */}
          <a
            href="/about"
            className="px-6 py-3 border border-[#C382CC] rounded-full font-semibold text-[#C382CC] hover:bg-[#C382CC] hover:text-white transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Product Section */}
      <section className="w-full">
        <Product />
      </section>

    </div>
  );
}

export default Home;
