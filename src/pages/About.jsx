import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          About <span className="text-black">A Zone</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
          We craft innovative products and services that combine quality, style, and efficiency to empower our clients and create lasting value.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide top-quality products and services that inspire creativity, simplify workflows, and deliver real value to our customers.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To become a trusted leader in innovation and service excellence, creating meaningful experiences for our clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline / Story */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <div className="relative border-l border-gray-300">
          <div className="mb-10 ml-6">
            <span className="absolute -left-3 top-0 bg-black w-6 h-6 rounded-full"></span>
            <h3 className="text-xl font-semibold mb-1">Founded in 2025</h3>
            <p className="text-gray-600">A Zone was born with a vision to redefine quality and service in the market.</p>
          </div>
          <div className="mb-10 ml-6">
            <span className="absolute -left-3 top-0 bg-black w-6 h-6 rounded-full"></span>
            <h3 className="text-xl font-semibold mb-1">First Milestone</h3>
            <p className="text-gray-600">Successfully launched our first product line, gaining trust and recognition.</p>
          </div>
          <div className="mb-10 ml-6">
            <span className="absolute -left-3 top-0 bg-black w-6 h-6 rounded-full"></span>
            <h3 className="text-xl font-semibold mb-1">Growth & Expansion</h3>
            <p className="text-gray-600">Expanded our services and team to reach more clients and improve efficiency.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 px-6 md:px-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold">Alex R.</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="p-6">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold">Priya S.</h3>
            <p className="text-gray-600">Head of Product</p>
          </div>
          <div className="p-6">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold">John D.</h3>
            <p className="text-gray-600">Lead Designer</p>
          </div>
        </div>
      </section> */}

      {/* Call-to-Action Banner */}
      <section className="py-20 px-6 md:px-12 bg-black text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Journey</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Explore our products and services designed to elevate your experience. Let’s create something amazing together.
        </p>
        <Link
          to="/products"
          className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition duration-300"
        >
          Explore Now
        </Link>
      </section>

    </div>
  );
}

export default About;
