import React from "react";

const products = [
  {
    id: 1,
    title: "Porsche Legacy Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/206-1536x1536.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 2,
    title: "Blue Persian Carpet Art Glass Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0011_Group-1-copy-3-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 3,
    title: "Batman Artwork Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/16-8-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 4,
    title: "Marvel Comics Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/160-768x768.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 5,
    title: "The Dark Knight Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/270-300x300.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 6,
    title: "Spider-Man’s Theme Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/254-300x300.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 7,
    title: "Vintage Carpet Glass Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0001_Group-1-copy-27-300x300.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 8,
    title: "Sabr Floral Tapestry Glass Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0010_3-300x300.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 9,
    title: "Defender Trails Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/80-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 10,
    title: "Infinite Sabr Glass Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0009_Group-1-copy-4-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 11,
    title: "Amazing Spider Man Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/6-8-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 12,
    title: "Red Wave Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/223-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 13,
    title: "Black Persian Rug Pattern Glass Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0001_12-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 14,
    title: "Urban Spidey Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/285-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 15,
    title: "Spider Girl Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/249-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 16,
    title: "Porsche GT3 Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/205-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 17,
    title: "Gold Abstract Pattern Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/12/0005_8.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 18,
    title: "Persian Rug Patchwork Glass Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0003_Group-1-copy-11.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 19,
    title: "Sabr Monochrome Glass Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0002_Group-1-copy-11.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 20,
    title: "992 Porsche Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/3-8.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 21,
    title: "Black Spider-Man Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/26-8.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 22,
    title: "Charminar Rug Collage Glass Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0010_Group-1-copy-4.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 23,
    title: "Zootopia Duo Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/302.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 24,
    title: "Shinchan Crayon Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/238.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 25,
    title: "Spider Man Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/250.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 26,
    title: "Off-Road Adventure Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/184.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 27,
    title: "Mercedes F1 Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/166.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 28,
    title: "Racing Bulls Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/218.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 25,
    title: "Spider-Man’s Web Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/253-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 26,
    title: "Black Persian Carpet Glass Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0027_Group-1-copy-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 27,
    title: "Islamic Red Carpet Glass Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0017_Group-1-copy-11-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 28,
    title: "Andromeda Galaxy Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/7-8-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 29,
    title: "McLaren 81 Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/164-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 30,
    title: "Sunshine Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/265-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 31,
    title: "Batman Comic Book Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/11/3-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 32,
    title: "Black Porsche Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/25-8-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 33,
    title: "Persian Horse Rug Glass Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0014_Group-1-copy-14-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 34,
    title: "Marvel Edition Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/161-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 35,
    title: "GT3 Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/114-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 36,
    title: "Generated Marble Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/101-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 37,
    title: "Joyboy Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/131-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 38,
    title: "Teal Classic Medallion Glass Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0012_1-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 39,
    title: "Karna Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/135-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 40,
    title: "Orange Moon Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/187-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 41,
    title: "Monochrome Garden Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/173-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 42,
    title: "Sculpted Petals Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/233-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 43,
    title: "Make Money Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/155-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 44,
    title: "Islamic Collage Glass Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0018_Group-1-copy-10-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 45,
    title: "Tik Tok Girl Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/275-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 46,
    title: "The Royal Ride Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/273-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 47,
    title: "Dual Spirit Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/86-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 48,
    title: "Anime Road Trip Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/9-8-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 49,
    title: "Gilded Bloom Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/104-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 50,
    title: "Black Dodge Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/24-8-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 51,
    title: "Forza Ferrari Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/98-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    id: 52,
    title: "Emerald Galaxy Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/88-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
];

const GlassCase = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header Section */}
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Glass Case</h1>
            <p className="text-sm text-gray-500 mb-4">
              Shop / <span className="text-black font-medium">Glass Case</span>
            </p>

            <p className="text-gray-700 max-w-3xl">
              Love a designs? Head to the product page to choose your brand and
              device – we’ve got you covered with{" "}
              <span className="font-semibold">
                550+ Android and iOS Phone Models.
              </span>
            </p>

            <p className="mt-3 text-gray-800">
              <span className="font-semibold">
                All images are for preview only.
              </span>{" "}
              Actual product will be delivered as per your selected phone model.
              <span className="font-semibold">
                {" "}
                [Select Your Device Inside]
              </span>
            </p>
          </div>

          {/* Sort Dropdown */}
          <div>
            <select className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black">
              <option>Sort by popularity</option>
              <option>Sort by latest</option>
              <option>Sort by price: low to high</option>
              <option>Sort by price: high to low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 p-4 text-center"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="mx-auto h-72 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <p className="text-xs uppercase tracking-wide text-gray-400 mt-4">
                Glass Case
              </p>

              <h3 className="text-sm font-medium mt-1 line-clamp-2">
                {product.title}
              </h3>

              <div className="mt-2 flex justify-center items-center gap-2">
                <span className="text-gray-400 line-through text-sm">
                  ₹{product.oldPrice}
                </span>
                <span className="text-black font-semibold text-sm">
                  ₹ {product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlassCase;
