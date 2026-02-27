import React, { useState } from "react";
import modelsData from "./models.json";
import { NavLink } from "react-router-dom";

const CustomPhone = () => {
  const brands = [
    {
      name: "iPhone",
      logo: "https://cdn.shopify.com/s/files/1/3013/8034/files/apple.png?17775114685844973942",
    },
    {
      name: "OnePlus",
      logo: "https://cdn.shopify.com/s/files/1/3013/8034/files/1.png?17775114685844973942",
    },
    {
      name: "Nothing",
      logo: "https://stayclassy.in/wp-content/uploads/2024/09/nothing-1.png",
    },
    {
      name: "Xiaomi",
      logo: "https://cdn.shopify.com/s/files/1/3013/8034/files/mi.png?17775114685844973942",
    },
    {
      name: "Poco",
      logo: "https://cdn.shopify.com/s/files/1/3013/8034/files/mi.png?17775114685844973942",
    },
    {
      name: "Samsung",
      logo: "https://cdn.shopify.com/s/files/1/3013/8034/files/sam.png?17775114685844973942",
    },
    {
      name: "Google",
      logo: "https://cdn.shopify.com/s/files/1/3013/8034/files/google.png?17775114685844973942",
    },
    {
      name: "Vivo",
      logo: "https://cdn.shopify.com/s/files/1/3013/8034/files/vivo.png?17775114685844973942",
    },
    {
      name: "Oppo",
      logo: "https://cdn.shopify.com/s/files/1/3013/8034/files/oppo.png?17775114685844973942",
    },
    {
      name: "Realme",
      logo: "https://cdn.shopify.com/s/files/1/0052/0228/0566/files/RealMe_Logo.png?78872",
    },
    {
      name: "iQOO",
      logo: "https://cdn.shopify.com/s/files/1/0812/5068/1126/files/IQOO_Color.png?v=1707743032",
    },
    {
      name: "Motorola",
      logo: "https://stayclassy.in/wp-content/uploads/2024/10/Motorola-Color-1.png",
    },
  ];

  const [selectedBrand, setSelectedBrand] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredModels =
    selectedBrand && modelsData[selectedBrand]
      ? modelsData[selectedBrand].filter((item) =>
          item.model.toLowerCase().includes(searchTerm.toLowerCase()),
        )
      : [];

  return (
    <section className="w-full py-12 pt-0 bg-white">
      <div className="w-full h-auto md:h-[85vh] mb-8 overflow-hidden p-4 pb-0">
        <img
          src="https://stayclassy.in/wp-content/uploads/2025/11/Custom-Main-Banner-2.jpg"
          alt="Arabic Theme Main Banner"
          className="w-full h-auto md:h-full md:object-cover"
        />
      </div>
      {/* Title */}
      <div className="flex items-center justify-center mb-10">
        <span className="hidden sm:block flex-1 h-px bg-gray-300" />
        <h2 className="px-6 text-base md:text-lg font-semibold tracking-widest text-gray-900 uppercase">
          Shop by Brand
        </h2>
        <span className="hidden sm:block flex-1 h-px bg-gray-300" />
      </div>

      {/* Brand Grid */}
      <div className="max-w-6xl mx-auto px-4">
        {selectedBrand && (
          <section className="mt-10 max-w-6xl mx-auto px-4 mb-10">
            {/* Section Header */}
            <div className="mb-5 flex flex-col sm:flex-col sm:items-start sm:justify-between gap-3">
              <h3 className="text-lg font-semibold text-gray-900">
                {selectedBrand} Models
              </h3>

              {/* Search Box */}
              <input
                type="text"
                placeholder="Search models..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-full px-3 py-2 border border-gray-600 rounded-md text-sm
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Models Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {filteredModels.length > 0 ? (
                filteredModels.map((item, index) => {
                  const name = item.model.split(" ").join("-");
                  return (
                    <NavLink to={`/category/${name}`} key={index}>
                      <div
                        className="
                          p-3 rounded-md border border-gray-600 text-center
                          bg-white text-gray-700 text-sm font-medium
                          cursor-pointer transition-all duration-200
                          hover:bg-gray-900 hover:text-white hover:border-gray-900
                          hover:shadow-md
                        "
                      >
                        {item.model}
                      </div>
                    </NavLink>
                  );
                })
              ) : (
                <div className="col-span-full py-8 text-center text-gray-500 text-sm">
                  No models found.
                </div>
              )}
            </div>
          </section>
        )}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-10 gap-x-6 place-items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              onClick={() =>
                setSelectedBrand(
                  selectedBrand === brand.name ? null : brand.name,
                )
              }
              className="flex flex-col items-center justify-center cursor-pointer transition hover:scale-105"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-10 object-contain grayscale hover:grayscale-0 transition"
              />
              <p className="mt-3 text-base font-medium text-gray-900">
                {brand.name}
              </p>
            </div>
          ))}
        </div>

        {/* Models List */}
      </div>
      {/* Compact Premium Phone Covers Section */}
      <section className="mt-16 w-full py-6 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30">
          <div className="absolute top-16 right-16 w-48 h-48 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-16 left-16 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Compact Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-3 h-10 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full shadow-lg"></div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent tracking-tight">
                Perfect Covers
                <br className="hidden md:block" />
                <span className="text-xl md:text-2xl">For Your Phone</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Premium protection with style. Custom designs & fast delivery.
            </p>
          </div>

          {/* Smaller Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Card 1: Protection */}
            <div className="group relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer overflow-hidden hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50">
              <div className="absolute top-0 -right-32 w-32 h-32 bg-gradient-to-l from-white/30 to-transparent rounded-full group-hover:-translate-x-16 transition-transform duration-700" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 transition-transform duration-400">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75h-.007M7.5 15H5.25M17.25 15h2.25M8.25 15h6.75"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Ultimate Protection
                </h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Military-grade drop protection in matte, glossy & leather
                  finishes.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-sm rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:from-blue-600 group-hover:to-purple-700">
                  <span>Explore</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 2: Customize */}
            <div className="group relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer overflow-hidden hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50">
              <div className="absolute top-0 -left-32 w-32 h-32 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-full group-hover:translate-x-16 transition-transform duration-700" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 transition-transform duration-400">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.5h3m1 2H4a1 1 0 01-1-1v-5a1 1 0 011-1h5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  Personalize Your Style
                </h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Upload photos or artwork to create unique covers that reflect
                  you.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-sm rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group-hover:from-emerald-600 group-hover:to-teal-700">
                  <span>Customize</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 3: Fast Delivery */}
            <div className="group relative bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl hover:-translate-y-3 transition-all duration-500 cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 -right-32 w-32 h-32 bg-gradient-to-b from-yellow-400/40 to-orange-400/40 rounded-full group-hover:-translate-x-16 transition-transform duration-700" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 transition-transform duration-400">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 drop-shadow-lg">
                  Lightning Fast
                </h3>
                <p className="text-sm opacity-90 mb-6 leading-relaxed drop-shadow-md">
                  Same-day processing. 2-3 day delivery across India.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-xl font-semibold text-sm rounded-xl shadow-xl hover:shadow-2xl hover:bg-white/30 transition-all duration-300 group-hover:-translate-y-1">
                  <span>Shop Now</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Compact Offer Banner */}
          <div className="group relative bg-gradient-to-r from-blue-500 via-purple-600 to-blue-600 rounded-3xl p-10 text-white text-center shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden cursor-pointer">
            {/* Animated Light Pattern */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-xl px-5 py-2 rounded-2xl mb-4 shadow-xl ">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span className="font-bold text-sm drop-shadow-md">
                  LIMITED OFFER
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black mb-6 drop-shadow-2xl leading-tight">
                Buy 2 Covers
                <br />
                <span className="text-xl md:text-2xl drop-shadow-lg">
                  Get 50% OFF 2nd!
                </span>
              </h3>

              <div className="inline-flex items-center gap-2 px-8 py-3 bg-white/90 backdrop-blur-xl font-black text-blue-900 rounded-2xl shadow-2xl hover:shadow-3xl hover:bg-white hover:-translate-y-1 hover:scale-105 transition-all duration-400 group-hover:ring-4 group-hover:ring-white/50">
                <span className="tracking-wide text-lg drop-shadow-md">
                  Claim Offer
                </span>
                <svg
                  className="w-5 h-5 drop-shadow-md"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>

              {/* Bottom Shine Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity delay-300 blur-sm rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CustomPhone;
