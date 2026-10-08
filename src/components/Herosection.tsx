import { useEffect} from "react";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import useStore from "../store/store";

const Herosection = () => {
  const images = [hero1, hero2];

  const currentIndex = useStore((state) => state.currentIndex);
  const handleFirstSlideshow = useStore((state) => state.handleFirstSlideshow);

  useEffect(() => {
    const interval = setInterval(() => {
      handleFirstSlideshow();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 relative">
      <img
        src={images[currentIndex]}
        alt="product"
        className="w-full object-contain"
      />
    
     {/*3rd div for the line*/}

    {currentIndex === 0 && (<div className="flex flex-col  justify-center items-center gap-5 bg-transparent text-white  text-lg font-semibold ml-6 mt-50">

        <div className="text-4xl" >Fall Winter '26</div>
        <div className="text-4xl animate-pulse" >Live Now</div>

        <div className="flex justify-center items-center gap-5 bg-transparent text-white text-lg font-semibold ml-6 mt-2">
        <a className="text-2xl" href="#">Unstitched</a>
        <a className="text-2xl" href="#">Ready to Wear</a>
        </div>

    </div>
    )
}
    
    {currentIndex === 1 && (<div className="flex flex-col  justify-center items-center gap-5 bg-transparent text-white text-lg font-semibold ml-6 mt-50">

        <div className="text-4xl" >Fall Winter '26</div>
        <div className="text-2xl" >West</div>

        <div className="flex justify-center items-center gap-5 bg-transparent text-white text-lg font-semibold ml-6 mt-2">
        <a className="text-4xl" href="#">Shop Now</a>
        </div>

    </div>
    )
}



    </div>
  );
};

export default Herosection;

