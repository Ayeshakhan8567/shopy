import store from "../store/store";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const showSidebar = store((state) => state.showSidebar);
    const toggleSidebar = store((state) => state.toggleSidebar);
  return (
    showSidebar && (
      <div className="bg-white w-70 h-screen fixed top-0 left-0 z-30 p-4 shadow-lg">

        <div className="flex justify-between">
        <div>
        <h1 className="font-bold fixed z-20 mt-4 tracking-wider text-2xl" >SAPPHIRE</h1>
        </div>
        <div className="flex justify-around mt-4 mr-2 ">
        <X className="text-black fixed z-20" size={30} onClick={toggleSidebar} />
        </div>
        </div>

        <div className="mt-20 flex flex-col gap-4">

      <div className="flex flex-row gap-4 text-lg font-semibold tracking-wider">
        <a  className="hover:underline" href="#">Women</a>
        <a className="hover:underline" href="#">Men</a>
        <a className="hover:underline" href="#">Fragrances</a>
      </div>

       <div className="flex flex-col gap-4 text-lg font-semibold">
        <Link className="hover:underline" to="/unstitch" >Unstitch</Link>
        <Link className="hover:underline" to="/ready-to-wear" >Ready to wear</Link>
        <Link className="hover:underline" to="/new-in" >New in</Link>
      </div>
      
      </div>
    </div>
    )
  )
}

export default Sidebar
