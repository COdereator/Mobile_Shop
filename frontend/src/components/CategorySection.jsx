const categories = [
  {
    title: "CUSTOM CASE",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/09/Custom-Case-New-Mockup-Banner-1024x1024.jpg",
  },
  {
    title: "GLASS CASE",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/09/Glass-Case-New-Mockup-Banner-1024x1024.jpg",
  },
  {
    title: "SILICONE CASE",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/09/Silicone-Case-New-Mockup-Banner-1024x1024.jpg",
  },
  {
    title: "CLEAR CASE",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/09/Clear-Case-New-Mockup-Banner-1024x1024.jpg",
  },
  {
    title: "COUPLE CASE",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/10/Couple-Case-New-Mockup-Banner-1024x1024.jpg",
  },
  {
    title: "NAME CASE",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/10/Name-Case-New-Mockup-Banner-1024x1024.jpg",
  },
  {
    title: "Z FLIP PHONE CASE",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/10/Samsung-Z-Filp-Mockup-Banner-1024x1024.jpg",
  },
  {
    title: "Z FOLD PHONE CASE",
    image:
      "https://stayclassy.in/wp-content/uploads/2025/10/Samsung-Z-Fold-Mockup-Banner-1024x1024.jpg",
  },
];

export default function CategorySection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      {/* Heading */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-8 sm:mb-12 px-4 sm:px-6">
        <span className="flex-1 h-px bg-gray-300" />
        <h2 className="text-xs sm:text-sm md:text-base font-semibold tracking-widest text-black whitespace-nowrap">
          SHOP BY CATEGORIES
        </h2>
        <span className="flex-1 h-px bg-gray-300" />
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group cursor-pointer transition-all duration-300"
            >
              {/* Image Card */}
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-b from-sky-50 to-sky-100 h-56 sm:h-60 md:h-70 flex items-center justify-center group-hover:-translate-y-1 group-hover:shadow-2xl transition-all duration-300">
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className="h-full object-contain transition-transform duration-500 ease-out "
                />

                {/* subtle hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>

              {/* Title */}
              <div className="mt-4 bg-black/95 text-center py-2.5 transition-all duration-300 ease-in-out backdrop-blur-sm border border-neutral-800/50 group-hover:bg-black hover:scale-105  hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400/60 cursor-pointer active:scale-95 active:rotate-0 active:shadow-xl transform-gpu">
                <span className="text-sm sm:text-base font-medium tracking-[0.18em] text-white group-hover:text-white hover:text-cyan-400 transition-all duration-200">
                  {cat.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
