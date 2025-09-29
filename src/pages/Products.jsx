import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookie from "../assets/cookie.png";
import DOS from "../assets/dos.png";

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
            description:
              "Premium-grade tool crafted to help you explore digital security and testing needs.",
            price: "$12.99",
            image: Cookie,
            path: "/product/cookie-stealer",
          },
          {
            id: 2,
            name: "DOS Attack Tool",
            description: 
              "Robust application designed for network testing and educational purposes.",
              price: "$19.99",
              image: DOS,
              path: "/product/dos-attack-tool",
          }
        ];
        setTimeout(() => {
          setProducts(dummyProducts);
          setLoading(false);
        }, 1200);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProducts([]);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const SkeletonCard = () => (
    <div className="border border-gray-200 rounded-xl p-6 animate-pulse bg-gray-50 h-80 shadow-sm">
      <div className="w-full h-40 bg-gray-200 rounded-md mb-4"></div>
      <div className="h-6 bg-gray-200 rounded mb-3"></div>
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-5 w-1/4 bg-gray-200 rounded mt-3"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Our Products
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of high-quality digital products designed to
            make your work easier, smarter, and more secure.
          </p>
        </div>

        {/* Product Grid */}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {products.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md hover:border-gray-300 transition duration-300 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full object-contain p-4"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                    {product.description}
                  </p>

                  {/* Price + Button */}
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-lg font-bold text-gray-800">
                      {product.price}
                    </p>
                    <button
                      onClick={product.path ? () => navigate(product.path) : null}
                      className="px-5 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
