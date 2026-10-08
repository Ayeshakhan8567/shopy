import React from 'react'
import Embroidered_elegance from '../assets/Embroidered_elegance.webp'
import Regal_reds from '../assets/Regal_reds.webp'

const FourthSection = () => {
  return (
    <section className="w-full min-h-[500px] flex bg-gray-100 overflow-hidden">

     {/*fisrt image*/}
    <div className="w-1/2 h-[550px] overflow-hidden relative">   
        <img
                src={Embroidered_elegance}
                alt={"Embroidered Elegance"}
                className="w-full h-full object-cover"
              />
     <div className='absolute inset-0 flex flex-col items-center justify-center p-4'>
          <h2 className="text-2xl font-bold text-white">Embroidered Elegance</h2>
          <a href="#" className="mt-2 text-2xl text-white">
            Shop the Trend
          </a>
        </div>
    </div>

    {/*second image*/}
    <div className="w-1/2 h-[550px] overflow-hidden relative">
        <img
                src={Regal_reds}
                alt={"Regal Reds"}
                className="w-full h-full object-cover"
              />
         <div className='absolute inset-0 flex flex-col items-center justify-center p-4'>
          <h2 className="text-2xl font-bold text-white ">Regal Reds</h2>
          <a href="#" className="mt-2 text-2xl  text-white">
            Shop the Trend
          </a>
        </div>
         </div>

    </section>
  )
}

export default FourthSection
