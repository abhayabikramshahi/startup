import React, { useState } from "react";

function UploadPage() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploaded Product:", product);
    alert("✅ Product uploaded successfully!");
    // Send product to backend API here
  };

  return (
    <div className="w-full min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Upload New Product</h1>

      <div className="flex gap-8">
        {/* Left: Product Preview */}
        <div className="w-1/2 bg-zinc-900 p-6 rounded-2xl shadow-lg flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">Preview</h2>

          {/* Image Preview */}
          <div className="w-64 h-64 bg-gray-800 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
            {product.image ? (
              <img
                src={URL.createObjectURL(product.image)}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-400">No Image</span>
            )}
          </div>

          {/* Product Info */}
          <div className="text-left w-full">
            <p className="mb-2">
              <span className="font-semibold">Name:</span>{" "}
              {product.name || "-"}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Price:</span>{" "}
              {product.price ? `$${product.price}` : "-"}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Category:</span>{" "}
              {product.category || "-"}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Description:</span>{" "}
              {product.description || "-"}
            </p>
          </div>
        </div>

        {/* Right: Upload Form */}
        <form
          onSubmit={handleSubmit}
          className="w-1/2 bg-zinc-900 p-8 rounded-2xl shadow-lg"
        >
          {/* Product Name */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-300">Product Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter product name"
              required
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-300">Price ($)</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter price"
              required
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-300">Category</label>
            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            >
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home</option>
              <option value="toys">Toys</option>
            </select>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-300">Description</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows="4"
              placeholder="Enter product description"
              required
            />
          </div>

          {/* Image Upload */}
          <div className="mb-6">
            <label className="block mb-2 text-gray-300">Product Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 rounded-lg bg-black border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition font-medium shadow-md"
          >
            Upload Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default UploadPage;
