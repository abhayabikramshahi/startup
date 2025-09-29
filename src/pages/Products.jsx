import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookie from "../assets/cookie.png";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const dummyProducts = [
          {
            id: 1,
            name: "Cookie Stealer",
            description: "High-quality software for your digital needs.",
            price: "$0.90",
            image: Cookie,
            path: "/product/cookie-stealer",
          },
        ];
        setTimeout(() => {
          setProducts(dummyProducts);
          setLoading(false);
        }, 1500);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProducts([]);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const SkeletonCard = () => (
    <div className="border border-gray-200 rounded-xl p-4 animate-pulse bg-gray-100 h-80 shadow-md">
      <div className="w-full h-44 bg-gray-200 rounded-md mb-4"></div>
      <div className="h-6 bg-gray-200 rounded mb-3"></div>
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-5 w-1/4 bg-gray-200 rounded mt-3"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center tracking-tight text-gray-900">
          Our Products
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : products.length === 0 ? (
          <p className="text-gray-500 text-lg text-center">
            No products available at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="border border-gray-300 rounded-xl p-6 bg-white shadow hover:shadow-lg hover:border-purple-300 transition duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-44 object-cover rounded-lg mb-5"
                />
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{product.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {product.description}
                </p>
                <p className="text-lg font-semibold text-gray-600 mb-4">
                  {product.price}
                </p>

                <button
                  onClick={product.path ? () => navigate(product.path) : null}
                  className="w-full bg-[#1b1b1b] text-white font-medium rounded-lg px-4 py-2 hover:bg-black curosr-pointer transition"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
