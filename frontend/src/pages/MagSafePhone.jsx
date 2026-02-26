import React from "react";

const products = [
  {
    id: 1,
    title: "Magsafe iPhone Cases With Black Grip",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/09/Black-Magsafe-Case-1-510x510.jpg",
    oldPrice: 598,
    price: 299,
  },
  {
    id: 2,
    title: "Magsafe iPhone Cases With Transparent Grip",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/08/0000_12-510x510.jpg",
    oldPrice: 598,
    price: 299,
  },
];

const MagSafePhone = () => {
  return (
    <div className="min-h-screen bg-white px-6 md:px-16 py-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">
            Magsafe iPhone Cases
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Shop / <span className="text-black">Magsafe iPhone Cases</span>
          </p>
        </div>

        {/* Sort Dropdown */}
        <div className="mt-4 md:mt-0">
          <select className="border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-black">
            <option>Sort by popularity</option>
            <option>Sort by latest</option>
            <option>Sort by price: low to high</option>
            <option>Sort by price: high to low</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-5 border border-gray-100"
          >
            {/* Image */}
            <div className="rounded-md overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[300px] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Category */}
            <p className="text-xs text-center tracking-widest text-gray-400 uppercase mt-4">
              Magsafe iPhone Cases
            </p>

            {/* Title */}
            <h3 className="text-md text-center font-medium text-gray-900 mt-2">
              {product.title}
            </h3>

            {/* Pricing */}
            <div className="flex items-center justify-center gap-3 mt-2">
              <span className="text-gray-400  line-through text-sm">
                ₹{product.oldPrice}
              </span>
              <span className="text-black font-semibold text-lg">
                ₹{product.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MagSafePhone;
