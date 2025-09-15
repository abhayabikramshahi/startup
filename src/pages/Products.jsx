import React, { useEffect, useState } from 'react';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake API call simulation
    const fetchProducts = async () => {
      try {
        // Uncomment and replace with real API later
        // const response = await fetch('https://your-api.com/products');
        // const data = await response.json();
        // setProducts(data);

        // For now, no products available
        setProducts([]);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-white mb-6">Our Products</h2>

      {loading ? (
        <p className="text-gray-300">Loading products...</p>
      ) : products.length === 0 ? (
        <p className="text-gray-400 text-xl">No products available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-800 rounded-lg p-4 text-white shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-300">{product.description}</p>
              <p className="mt-2 font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
