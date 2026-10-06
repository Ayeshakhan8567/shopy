import { Menu } from "lucide-react";
import { Search } from "lucide-react";
import { User } from "lucide-react";
import { ShoppingBag } from "lucide-react";

const Navbar = () => {
  return (
    <>
    <div className="bg-transparent flex gap-4 flex-col w-full fixed z-20  ">

    <div className=" px-5 flex justify-between  w-full bg-transparent" >
        {/*upper part of navbar*/}
        <div className="flex justify-center items-center gap-5 bg-transparent mt-4 ">
            {/*Menu icon*/}
            <div className="alige-center pt-2" > 
                 <Menu className="text-white align-center" size={50} />
            </div>
            {/*brandName*/}
            <div className="text-6xl font-bold text-white align-center">SAPPHIRE</div>
        </div>
         
         <div className="flex justify-center items-center gap-6 bg-transparent pt-7">
            {/*search icon*/}
           <div>
            <Search className="text-white" size={30} />
           </div>
            {/*user icon*/}
           <div>
            <User className="text-white" size={30} />
           </div>
            {/*shopping bag icon*/}
           <div>
            <ShoppingBag className="text-white" size={30} />
           </div>
         </div>
      </div>  

     {/*lower part of navbar*/}

     <div className="flex gap-5 bg-transparent text-white text-lg font-semibold ml-6">
     <a className="text-xl" href="#">Women</a>
     <a className="text-xl" href="#">Fragrances</a>
     </div>

     {/*3rd div for the line*/}

    <div className="flex flex-col  justify-center items-center gap-5 bg-transparent text-white text-lg font-semibold ml-6 mt-50">

        <div className="text-4xl" >Fall Winter '26</div>
        <div className="text-4xl animate-pulse" >Live Now</div>

        <div className="flex justify-center items-center gap-5 bg-transparent text-white text-lg font-semibold ml-6 mt-2">
        <a className="text-2xl" href="#">Unstitched</a>
        <a className="text-2xl" href="#">Ready to Wear</a>
        </div>

    </div>






    </div>
    </>
  )
}

export default Navbar
