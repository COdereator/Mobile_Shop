import React from "react";
import CategorySection from "../components/CategorySection";
import BestSellingCarousel from "../components/BestSellingCarousel";
const Home = () => {
  return (
    <div>
      {/* Desktop par 85vh height, Mobile par auto height taaki poori image dikhe */}
      <div className="w-full h-auto md:h-[85vh] bg-black overflow-hidden">
        <img
          src="https://stayclassy.in/wp-content/uploads/2026/02/Arabic-Theme-Main-Banner-Popculturr.jpg"
          alt="Arabic Theme Main Banner"
          className="w-full h-auto md:h-full md:object-cover"
        />
      </div>
      <CategorySection />
      <BestSellingCarousel />
    </div>
  );
};

export default Home;
