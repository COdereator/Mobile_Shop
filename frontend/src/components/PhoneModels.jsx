import { NavLink, useParams } from "react-router-dom";

import modelsData from "../pages/models.json";

export default function PhoneModels() {
  const { model } = useParams();

  const modelName = model.split("-").join(" ");
  const name = modelName.split(" ")[0];
  const product = modelsData[name].map((item) => item);
  const products = product.find((item) => item.model == modelName);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb + Sort */}
      <div className="flex items-center justify-between mb-6 text-sm text-black">
        <h1 className="text-2xl font-semibold mb-1">{modelName}</h1>
        <select className="border rounded-md px-2 py-1 text-sm">
          <option>Sort by popularity</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      {/* Description */}
      <p className="mb-8 text-sm text-gray-600 max-w-3xl">
        {modelName} Customized Mobile Covers – Premium & Personalized Phone
        Cases with Your Own Picture, Text or Designs!
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.products.length === 0 && <h1>no product is there</h1>}
        {products.products.map((product) => (
          <div key={product.id} className="group">
            <NavLink
              to={`/category/custom/${model}/${product.title.split(" ").join("-")}`}
            >
              {/* Image Card */}
              <div
                className={`relative rounded-sm bg-gradient-to-br ${product.bg} h-75 overflow-hidden`}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="mt-3 text-center">
                <p className="text-[11px] uppercase tracking-wide text-gray-500">
                  {product.smallTitle}
                </p>
                <h3 className="text-sm font-medium mt-1 mb-1 line-clamp-2">
                  {product.title}
                </h3>

                <div className="flex justify-center gap-2 items-center">
                  <span className="line-through text-gray-400 text-xs">
                    ₹{product.oldPrice}
                  </span>
                  <span className="font-semibold text-base">
                    ₹{product.price}
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
