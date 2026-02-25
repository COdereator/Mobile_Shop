import React, { useMemo, useState } from "react";
import { products } from "./coupleCases";
import { NavLink } from "react-router-dom";

const CoupleMobileCases = () => {
  const [sortOption, setSortOption] = useState("popularity");
  const [search, setSearch] = useState("");

  // Sorting + Filtering Logic
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );

    switch (sortOption) {
      case "priceLow":
        return filtered.sort((a, b) => a.price - b.price);
      case "priceHigh":
        return filtered.sort((a, b) => b.price - a.price);
      case "name":
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return filtered;
    }
  }, [products, sortOption, search]);

  return (
    <section className="bg-gray-100 py-14 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-10">
          {/* Left - Title & Breadcrumb */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
              Couple Mobile Cases
            </h1>
            <p className="text-sm text-gray-500">
              Shop /{" "}
              <span className="font-medium text-gray-800 hover:text-black cursor-pointer transition-colors duration-200">
                Couple Mobile Cases
              </span>
            </p>
          </div>

          {/* Right - Search & Sort */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto items-stretch">
            {/* Search Box */}
            <div className="relative w-full sm:w-64">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                🔍
              </span>
              <input
                type="text"
                placeholder="Search designs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none shadow-sm hover:shadow-md transition duration-300 text-sm"
              />
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-black hover:shadow-sm transition duration-300"
            >
              <option value="popularity">Sort by popularity</option>
              <option value="name">Sort by name</option>
              <option value="priceLow">Price: low to high</option>
              <option value="priceHigh">Price: high to low</option>
            </select>
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-8 text-gray-700 space-y-3 max-w-3xl">
          <p className="text-sm md:text-base">
            Love a design? Head to the product page to choose your brand and
            device – we’ve got you covered with{" "}
            <span className="font-semibold text-gray-900">
              550+ Android and iOS Phone Models
            </span>
            .
          </p>
          <p className="text-sm md:text-base">
            <span className="font-semibold text-gray-900">
              All images are for preview only.
            </span>{" "}
            Actual product will be delivered as per your selected phone model.
            <span className="font-semibold text-black cursor-pointer hover:underline ml-1">
              [Select Your Device Inside]
            </span>
          </p>
        </div>

        {/* Result Count */}
        <div className="mb-6 text-sm md:text-base text-gray-600">
          Showing{" "}
          <span className="font-semibold text-gray-900">
            {filteredProducts.length}
          </span>{" "}
          products
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => {
            const discount = Math.round(
              ((product.oldPrice - product.price) / product.oldPrice) * 100,
            );

            return (
              <NavLink
                to={`/products/${product.id}`}
                key={product.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 p-4 text-center group relative"
              >
                {/* Discount Badge */}
                <span className="absolute top-3 z-10 left-3 bg-black text-white text-xs px-2 py-1 rounded">
                  -{discount}%
                </span>

                {/* Image */}
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover rounded-lg mb-4 transform group-hover:scale-105 transition duration-300"
                  />
                </div>

                <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">
                  Couple Mobile Cases
                </p>

                <h3 className="text-sm font-medium mb-2 group-hover:text-black transition">
                  {product.name}
                </h3>

                <div className="flex justify-center items-center gap-2 mb-3">
                  <span className="line-through text-gray-400 text-sm">
                    ₹{product.oldPrice}
                  </span>
                  <span className="font-semibold text-black">
                    ₹{product.price}
                  </span>
                </div>

                {/* CTA Button */}
                {/* <button className="w-full bg-black text-white py-2 rounded-md text-sm group-hover:opacity-100 transition duration-300">
                  View Product
                </button> */}
              </NavLink>
            );
          })}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            No products found.
          </div>
        )}
      </div>
    </section>
  );
};

export default CoupleMobileCases;
