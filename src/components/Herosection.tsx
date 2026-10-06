import { useEffect, useState } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.webp";

const Herosection = () => {
  const images = [image1, image2];

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
        className="w-full mt-20 object-contain"
      />
    </div>
  );
};

export default Herosection;

