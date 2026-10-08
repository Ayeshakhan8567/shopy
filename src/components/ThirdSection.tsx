import useStore from '../store/store' 
import { useEffect } from 'react' 
import unstitch from '../assets/unstitch.webp' 
import readyToWear from '../assets/readyToWear.webp' 
import modest_wear from '../assets/modest_wear.webp' 
 
const ThirdSection = () => { 
  const images = [unstitch, readyToWear, modest_wear]; 

  const currentIndex3 = useStore((state) => state.currentIndex3); 
  const handleThirdSlideshow = useStore((state) => state.handleThirdSlideshow); 

  useEffect(() => { 
    const interval = setInterval(() => { 
      handleThirdSlideshow(); 
    }, 3000);  

    return () => clearInterval(interval); 
  }, [handleThirdSlideshow]); 

  return ( 
    <section className="w-full min-h-[900px] flex items-center bg-gray-100 overflow-hidden"> 

      {/* LEFT SIDE - CAROUSEL CONTAINER */} 
      <div className="w-2/3 h-[500px] overflow-hidden relative"> 

        {/* IMAGE TRACK */} 
        <div 
          className="w-full h-full flex flex-col transition-transform duration-700 ease-in-out" 
          style={{ 
            transform: `translateY(-${currentIndex3 * 100}%)`, 
          }} 
        > 
          {images.map((imgSrc, index) => ( 
            <div 
              key={index} 
              className="w-full h-[500px] flex-shrink-0" 
            > 
              <img 
                src={imgSrc} 
                alt={`product ${index + 1}`} 
                className="w-full h-full object-contain" 
              /> 
            </div> 
          ))} 
        </div> 

      </div> 

      {/* RIGHT SIDE */} 
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

    </section> 
  ) 
} 

export default ThirdSection