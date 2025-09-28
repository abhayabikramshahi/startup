import React from "react";
import { CheckCircle, ShoppingBag, Star } from "lucide-react";

function Profile() {
  return (
    <div className="w-full bg-black min-h-screen">
      {/* Banner */}
      <div className="h-40 w-full bg-gradient-to-r from-blue-600 to-indigo-700 relative">
        <div className="absolute -bottom-16 left-8">
          <img
            src="https://via.placeholder.com/150"
            alt="Shop Logo"
            className="w-32 h-32 rounded-full border-4 border-black shadow-lg"
          />
        </div>
      </div>

      {/* Content */}
      <div className="mt-20 px-8">
        {/* Shop name + verified */}
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold text-white">AZONE Store</h1>
          <CheckCircle className="w-6 h-6 text-blue-500" />
        </div>
        <p className="text-gray-400 mt-1">Trusted E-Commerce Seller</p>

        {/* Shop description */}
        <p className="mt-4 text-gray-300 max-w-2xl leading-relaxed">
          Welcome to <span className="font-semibold">AZONE Store</span> 🛍️ — 
          your one-stop shop for modern gadgets, clothing, and lifestyle 
          products. Quality guaranteed, fast shipping, and customer-first 
          service.
        </p>

        {/* Stats */}
        <div className="flex gap-10 mt-6 text-gray-300">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-blue-400" />
            <p>
              <span className="font-bold text-white">240</span> Products
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <p>
              <span className="font-bold text-white">4.8</span> Rating
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold text-white">18.2k</span> Followers
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 mt-8">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow-md">
            Follow Store
          </button>
          <button className="px-6 py-2 border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition font-medium">
            Message Seller
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
