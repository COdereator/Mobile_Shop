import React, { useEffect, useState } from "react";
import CategorySection from "../components/CategorySection";
import BestSellingCarousel from "../components/BestSellingCarousel";
import axios from "axios";

const Home = () => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);

  const getImage = async () => {
    try {
      const response = await axios.get("http://localhost:3000/admin/getImage");
      setImage(response.data.imageUrl);
    } catch (error) {
      console.error("Error fetching background image:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <div className="w-full h-auto md:h-[85vh] bg-black overflow-hidden flex items-center justify-center">
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : (
          image && (
            <img
              src={image}
              alt="Arabic Theme Main Banner"
              className="w-full h-auto md:h-full md:object-cover"
            />
          )
        )}
      </div>

      <CategorySection />
      <BestSellingCarousel />
    </div>
  );
};

export default Home;
