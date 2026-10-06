import ecommerceLogo from "../assets/ecomerceLogo.png"
const Navbar = () => {
  return (
    <>
    <div className="fixed z-20 w-full" >
        {/*upper part of navbar*/}
        <div className="flex justify-between bg-gray-100">
            {/*logo*/}
            <div > 
                <a href="#" className="flex items-center" >
                    <img src={ecommerceLogo} alt="logo" className="w-10 h-10 object-contain" />
                </a>
            </div>
            <div>Shopy</div>
            <div>
                <input type="text" placeholder="Search..." />
            </div>
        </div>
        {/*lower part of navbar*/}
        <div className="flex justify-between items-center px-4 py-2 bg-gray-200 shadow-xl">
            {/*navigation links*/}
            <div>
                <ul className="flex space-x-4">
                    <li><a href="#" className="text-gray-700 hover:text-blue-500">Home</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-blue-500">Products</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-blue-500">About</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-blue-500">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>    
    
    </>
  )
}

export default Navbar
