import React from "react";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center max-w-3xl space-y-6 py-32">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Welcome to <span className="text-purple-600">AXZone</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
          Discover curated products and services crafted for innovation, style, and quality — all in one place.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          {/* Primary button */}
          <a
            href="/products"
            className="px-8 py-3 bg-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Shop Now
          </a>

          {/* Secondary button */}
          <a
            href="/about"
            className="px-8 py-3 border border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Subtle decorative accents */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-purple-100 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-pink-100 rounded-full blur-[120px] opacity-15"></div>
    </div>
  );
}

export default Home;
