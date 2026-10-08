import { useEffect } from "react";
import matching_separates from "../assets/matching_separates.webp";
import styled_by_sahr from "../assets/styled_by_sahr.webp";
import sukoon from "../assets/sukoon.webp";
import modest_wear from "../assets/modest_wear.webp";
import sweaters_d from "../assets/sweaters_d.webp";
import useStore from "../store/store";

const NewinSection = () => {

 const currentIndex2 = useStore((state) => state.currentIndex2);
 const handleSecondSlideshow = useStore((state) => state.handleSecondSlideshow);

  const images = [
    matching_separates,
    styled_by_sahr,
    sukoon,
    sweaters_d,
    modest_wear
  ];

 ;

  // Automatic slide
  useEffect(() => {
    const interval = setInterval(() => {
        handleSecondSlideshow();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-[500px] flex items-center bg-gray-100 overflow-hidden">

      {/* LEFT SIDE */}
      <div className="w-1/3 px-8">
        <p className="text-sm tracking-widest text-gray-500">
          750+ ITEMS
        </p>

        <h1 className="text-5xl font-bold mt-3">
          NEW IN
        </h1>

        <p className="text-gray-600 mt-5 leading-7">
          Discover our latest collection and find something
          perfect for your style.
        </p>

        <button className="mt-6 bg-black text-white px-6 py-3 hover:bg-gray-800 transition">
          <a href="#" className="no-underline">
            SHOP NOW
          </a>
        </button>
      </div>


      {/* RIGHT SIDE - CAROUSEL */}
      <div className="w-2/3 overflow-hidden">

        {/* IMAGE TRACK */}
        <div
          className="flex gap-4 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex2 * 33.33}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[calc(33.33%-11px)] flex-shrink-0"
            >
              <img
                src={image}
                alt={`product ${index + 1}`}
                className="w-full h-[450px] object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewinSection;
