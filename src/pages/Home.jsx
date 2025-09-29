import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const testimonialHooks = [
    "Loved by Professionals. Trusted by You.",
    "Hear From Those Who Know Us Best",
    "Success Stories From Our Clients",
    "Real Feedback. Real Results.",
    "Why Our Clients Keep Coming Back",
  ];
  const hook =
    testimonialHooks[Math.floor(Math.random() * testimonialHooks.length)];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-28 px-6 sm:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold leading-snug">
          Welcome to <span className="text-black">A Zone</span>
        </h1>
        <p className="mt-6 text-lg sm:text-base text-gray-600 max-w-xl">
          Discover curated products and services crafted for innovation, style,
          and quality — all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
          <Link
            to="/products"
            className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-semibold text-lg sm:text-base hover:bg-gray-800 transition"
          >
            Shop Now
          </Link>
          <Link
            to="/about"
            className="w-full sm:w-auto px-8 py-4 border border-black text-black rounded-full font-semibold text-lg sm:text-base hover:bg-black hover:text-white transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 sm:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-xl sm:text-lg font-semibold mb-3">
              Innovative Products
            </h3>
            <p className="text-gray-600 text-base sm:text-sm">
              High-quality products designed to simplify and enhance your
              lifestyle.
            </p>
          </div>
          <div>
            <h3 className="text-xl sm:text-lg font-semibold mb-3">
              Reliable Services
            </h3>
            <p className="text-gray-600 text-base sm:text-sm">
              Professional services with attention to detail and customer
              satisfaction.
            </p>
          </div>
          <div>
            <h3 className="text-xl sm:text-lg font-semibold mb-3">
              Expert Support
            </h3>
            <p className="text-gray-600 text-base sm:text-sm">
              Friendly and knowledgeable team ready to assist whenever you need.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 sm:px-10 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-2xl font-bold text-center mb-12">
          {hook}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-8 border rounded-xl shadow-sm hover:shadow-md transition">
            <p className="text-gray-600 mb-5 text-base sm:text-sm">
              "A Zone transformed our workflow! Amazing quality and service."
            </p>
            <p className="font-semibold text-base sm:text-sm">- Nabin Tiwari</p>
          </div>
          <div className="p-8 border rounded-xl shadow-sm hover:shadow-md transition">
            <p className="text-gray-600 mb-5 text-base sm:text-sm">
              "Professional and reliable. Highly recommend to anyone."
            </p>
            <p className="font-semibold text-base sm:text-sm">
              - Mandip Kstheri
            </p>
          </div>
          <div className="p-8 border rounded-xl shadow-sm hover:shadow-md transition">
            <p className="text-gray-600 mb-5 text-base sm:text-sm">
              "Exceptional products and seamless experience every time."
            </p>
            <p className="font-semibold text-base sm:text-sm">- Riya Rana</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section className="py-20 px-6 sm:px-10 bg-black text-white text-center">
        <h2 className="text-3xl sm:text-2xl font-bold mb-5">
          Ready to Explore?
        </h2>
        <p className="text-lg sm:text-base mb-8 max-w-xl mx-auto">
          Join thousands of happy customers and experience the best in products
          and services.
        </p>
        <Link
          to="/products"
          className="w-full sm:w-auto px-10 py-4 bg-white text-black font-semibold rounded-full text-lg sm:text-base hover:bg-gray-200 transition"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}

export default Home;
