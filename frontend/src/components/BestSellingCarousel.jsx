import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    category: "NAME CASES",
    title: "Charcoal Floral Rug Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0017_Group-1-copy-4-1-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "NAME CASES",
    title: "Black & Gold Patchwork Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0008_Group-1-copy-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "NAME CASES",
    title: "Black Vintage Carpet Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0006_Group-1-copy-3-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "NAME CASES",
    title: "Ruby Devotion Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0006_Group-1-copy-15-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "NAME CASES",
    title: "Persian Horse Rug Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0008_Group-1-copy-10-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "NAME CASES",
    title: "Custom Gaze Eyes Rug Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0004_Group-1-copy-9-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "GLASS CASE",
    title: "Porsche Legacy Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/206-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "NAME CASES",
    title: "Black & Silver Horse Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0020_Group-1-copy-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "NAME CASES",
    title: "Black & Gold Woman Rug Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0021_Group-1-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "NAME CASES",
    title: "Golden Persian Night Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/Glass-Case-New-Mockup-2.0-Final-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "NAME CASES",
    title: "Fatimah Red Rug Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0008_Group-1-copy-4-2-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "NAME CASES",
    title: "Lavender Lattice Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0010_Group-1-copy-8-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "NAME CASES",
    title: "Black Persian Carpet Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0007_Group-1-copy-2-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "NAME CASES",
    title: "Midnight Mosaic Rug Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0012_Group-1-copy-9-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "NAME CASES",
    title: "Quranic Blue Rug Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0001_Group-1-copy-8-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "NAME CASES",
    title: "Blue Persian Carpet Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0010_Group-1-copy-2-2-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "NAME CASES",
    title: "Vintage Hijabi Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0000_Group-1-copy-18-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "NAME CASES",
    title: "Maroon Pattern Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0003_Group-1-copy-6-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "NAME CASES",
    title: "Blue Sapphire Moon Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0019_Group-1-copy-2-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "NAME CASES",
    title: "Black & Gold Rug Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0012_Group-1-2-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "NAME CASES",
    title: "Midnight Horse Ride Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0013_Group-1-copy-8-1-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "GLASS CASE",
    title: "Marvel Comics Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/160-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "GLASS CASE",
    title: "Batman Artwork Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/16-8-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "Name Cases",
    title: "Amber Shadow Glass Name Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/12/16-1-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "Name Cases",
    title: "Blush Devotion Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0016_Group-1-copy-2-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "Name Cases",
    title: "Red Leopard Carpet Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0005_Group-1-copy-13-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "Name Cases",
    title: "Red Shan Rug Collage Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0003_Group-1-copy-9-2-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "Name Cases",
    title: "Red Velvet Bloom Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0004_Group-1-copy-14-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "Name Cases",
    title: "Silver Medallion Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0002_Group-1-copy-19-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "Name Cases",
    title: "Violet Morpho Butterfly Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0000_Group-1-copy-21-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "GLASS CASE",
    title: "The Dark Knight Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/270-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "Name Cases",
    title: "Selfie Couple Rug Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0005_Group-1-copy-16-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "Glass Case",
    title: "Spider-Man’s Theme Glass Case",
    image: "https://stayclassy.in/wp-content/uploads/2025/09/254-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "Name Cases",
    title: "Butterfly Floral Rug Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0009_Group-1-copy-3-4-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "Name Cases",
    title: "The Royal Ride Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0000_Group-1-copy-12-3-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "Name Cases",
    title: "Sienna Silk Mosaic Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0003_Group-1-copy-18-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "Glass Case",
    title: "Vintage Carpet Glass Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0001_Group-1-copy-27-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "Name Cases",
    title: "Princess Dream Velvet Rug Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/12/0009_Group-1-copy-12-2-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
  {
    category: "Name Cases",
    title: "Horses Meetup Vintage Rug Glass Name Case",
    image:
      "https://stayclassy.in/wp-content/uploads/2026/01/Horses-Meetup-Vintage-Rug-2-510x510.jpg",
    oldPrice: 698,
    price: 349,
  },
];

export default function BestSellingCarousel() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(4);
  const [containerWidth, setContainerWidth] = useState(0);

  const GAP = 24;

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      if (width < 640)
        setVisible(1.2); // Mobile par 1.2 taaki agla card dikhe
      else if (width < 1024) setVisible(2);
      else setVisible(4);

      // Get the actual width of the container
      const container = document.getElementById("carousel-viewport");
      if (container) setContainerWidth(container.offsetWidth);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // Card Width Calculation
  const cardWidth =
    (containerWidth - (Math.floor(visible) - 1) * GAP) / Math.floor(visible);
  const slideStep = cardWidth + GAP;
  const maxIndex = products.length - Math.floor(visible);

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      {/* Heading */}
      <div className="flex items-center justify-center gap-4 mb-10 px-6 max-w-7xl mx-auto">
        <span className="flex-1 h-px bg-gray-200" />
        <h2 className="text-xs md:text-sm font-black tracking-[0.3em] text-gray-800 whitespace-nowrap">
          BEST SELLING
        </h2>
        <span className="flex-1 h-px bg-gray-200" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-12">
        {/* Navigation - Always visible but disabled if at end */}
        <button
          onClick={() => setIndex((i) => Math.max(i - 1, 0))}
          disabled={index === 0}
          className="absolute left-1 md:left-2 top-[35%] -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 rounded-full border border-gray-100 bg-white shadow-xl z-20 flex items-center justify-center disabled:opacity-20 transition-all hover:bg-black hover:text-white"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Viewport */}
        <div id="carousel-viewport" className="overflow-hidden">
          {/* Track */}
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(-${index * slideStep}px)`,
            }}
          >
            {products.map((p, i) => (
              <div
                key={i}
                className="flex-shrink-0 text-center group"
                style={{ width: cardWidth }}
              >
                {/* Image Wrap */}
                <div className="bg-[#f8f8f8] rounded-2xl p-6 mb-4 relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-[290px] md:h-[350px] w-full mx-auto object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>

                {/* Text Info */}
                <p className="text-[10px] text-blue-600 font-bold tracking-widest uppercase mb-1">
                  {p.category}
                </p>
                <h3 className="text-sm font-bold text-gray-900 leading-tight px-2 line-clamp-1">
                  {p.title}
                </h3>
                <div className="flex justify-center items-center gap-3 mt-2">
                  <span className="line-through text-gray-400 text-xs md:text-sm">
                    ₹{p.oldPrice}
                  </span>
                  <span className="font-black text-gray-900">₹{p.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIndex((i) => Math.min(i + 1, maxIndex))}
          disabled={index >= maxIndex}
          className="absolute right-1 md:right-2 top-[35%] -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 rounded-full border border-gray-100 bg-white shadow-xl z-20 flex items-center justify-center disabled:opacity-20 transition-all hover:bg-black hover:text-white"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
