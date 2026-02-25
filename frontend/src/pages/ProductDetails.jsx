import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "./coupleCases";
import phoneModel from "./models.json";

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const singleProduct = products.find((item) => item.id == id);
  const originalPrice = singleProduct.oldPrice;
  const currentPrice = singleProduct.price;
  const discount = Math.round(
    ((originalPrice - currentPrice) / originalPrice) * 100,
  );

  const brands = Object.keys(phoneModel);

  // Left side state
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  // Right side state
  const [rightBrand, setRightBrand] = useState("");
  const [rightModel, setRightModel] = useState("");

  // Add to cart validation
  const handleAddToCart = () => {
    if (!selectedBrand || !selectedModel) {
      alert("Please select Left Side Brand and Model");
      return;
    }
    if (!rightBrand || !rightModel) {
      alert("Please select Right Side Brand and Model");
      return;
    }
    alert(`Added to cart:\n
      Left Side - ${selectedBrand} : ${selectedModel}
      Right Side - ${rightBrand} : ${rightModel}
      Quantity: ${quantity}
    `);
    // Add your cart logic here...
  };

  return (
    <section className="bg-gray-100 py-14 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT - PRODUCT IMAGE */}
        <div className="bg-white rounded-xl shadow-sm flex items-center justify-center">
          <img
            src={singleProduct.image}
            alt={singleProduct.name}
            className="w-full lg:h-130 mb-20 max-w-md object-cover"
          />
        </div>

        {/* RIGHT - PRODUCT INFO */}
        <div>
          {/* Breadcrumb */}
          <p className="text-sm text-gray-500 mb-2">
            Shop / Couple Mobile Cases
          </p>

          {/* Title */}
          <h1 className="text-3xl font-semibold mb-4">{singleProduct.name}</h1>

          {/* Price */}
          <div className="flex items-center gap-3 mb-3">
            <span className="line-through text-gray-400 text-xl">
              ₹{originalPrice}
            </span>
            <span className="text-2xl font-bold text-black">
              ₹{currentPrice}
            </span>
            <span className="text-green-600 font-medium text-sm">
              {discount}% OFF
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="text-yellow-400 text-lg">★★★★★</div>
            <span className="text-sm text-gray-600">(4.6/5) 8949 Reviews</span>
          </div>

          {/* Select Brand - Left Side */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              * Select Brand (Left Side Case)
            </label>
            <select
              value={selectedBrand}
              onChange={(e) => {
                setSelectedBrand(e.target.value);
                setSelectedModel(""); // reset model on brand change
              }}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
            >
              <option value="">Choose Brand</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          {/* Select Model - Left Side */}
          {selectedBrand && (
            <div className="mb-6 transition-all duration-300">
              <label className="block text-sm font-medium mb-2">
                * Select Phone Model
              </label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              >
                <option value="">Choose Model</option>
                {phoneModel[selectedBrand].map((model, index) => (
                  <option key={index} value={model.model}>
                    {model.model}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Select Brand - Right Side */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              * Select Brand (Right Side Case)
            </label>
            <select
              value={rightBrand}
              onChange={(e) => {
                setRightBrand(e.target.value);
                setRightModel(""); // reset model on brand change
              }}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
            >
              <option value="">Choose Brand</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          {/* Select Model - Right Side */}
          {rightBrand && (
            <div className="mb-6 transition-all duration-300">
              <label className="block text-sm font-medium mb-2">
                * Select Phone Model
              </label>
              <select
                value={rightModel}
                onChange={(e) => setRightModel(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              >
                <option value="">Choose Model</option>
                {phoneModel[rightBrand].map((model, index) => (
                  <option key={index} value={model.model}>
                    {model.model}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* WHY TO BUY */}
          <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
            <h3 className="font-semibold mb-4">WHY TO BUY?</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>⭐ Free & Faster Shipping</li>
              <li>⭐ Cash on Delivery available</li>
              <li>⭐ Premium & Designer Cases</li>
              <li>⭐ 550+ Phone Model Supported</li>
              <li>⭐ Easy Replacement</li>
            </ul>
          </div>

          {/* Quantity + Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-4">
            {/* Quantity */}
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={decreaseQty}
                className="px-4 py-2 text-lg hover:bg-gray-200"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={increaseQty}
                className="px-4 py-2 text-lg hover:bg-gray-200"
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-medium transition"
            >
              ADD TO CART
            </button>

            {/* Buy Now */}
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-md font-medium transition">
              BUY NOW
            </button>
          </div>

          {/* Stock Warning */}
          <div className="mt-4">
            <p className="text-sm font-medium">
              HURRY! ONLY <span className="text-red-600">2</span> ITEMS LEFT IN
              STOCK.
            </p>
            <div className="w-full bg-gray-300 h-2 rounded mt-2">
              <div className="bg-red-600 h-2 rounded w-[10%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
