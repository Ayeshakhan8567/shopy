import { useEffect, useState } from "react";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";

const Herosection = () => {
  const images = [hero1, hero2];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100">
      <img
        src={images[currentIndex]}
        alt="product"
        className="w-full object-contain"
      />
    
    </div>
  );
};

export default Herosection;

