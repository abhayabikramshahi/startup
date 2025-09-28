import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- ADD THIS
import Cookie from '../assets/cookie.png';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Simulated products
        const dummyProducts = [
          {
            id: 1,
            name: 'cookie stealer',
            description: 'High quality Software boom.',
            price: '$0.90',
            image: Cookie,
            path: '/product/cookie-stealer',
          },
        ];
        // Simulate network delay
        setTimeout(() => {
          setProducts(dummyProducts);
          setLoading(false);
        }, 1500); // 1.5 seconds
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setProducts([]);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const SkeletonCard = () => (
    <div className="border border-[#1b1b1b] rounded-lg p-4 animate-pulse bg-gray-800 h-80">
      <div className="w-full h-48 bg-gray-700 rounded-md mb-4"></div>
      <div className="h-6 bg-gray-700 rounded mb-2"></div>
      <div className="h-4 bg-gray-700 rounded mb-2"></div>
      <div className="h-5 w-1/3 bg-gray-700 rounded mt-2"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 relative">
      <h2 className="text-3xl font-bold mb-6">Our Products</h2>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : products.length === 0 ? (
        <p className="text-gray-400 text-xl">No products available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-[#1b1b1b] rounded-lg p-4 text-white shadow-md transform transition hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-300">{product.description}</p>
              <p className="mt-2 font-bold">{product.price}</p>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={product.path ? () => navigate(product.path) : null}
                  className="bg-white rounded-full cursor-pointer hover:text-gray-700 text-black px-4 py-2 transition"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
