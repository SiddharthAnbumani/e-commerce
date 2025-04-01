import { NavLink } from "react-router-dom";

export default function Navbar({isActive,setIsActive}) {
    const handleToggle = ()=> {
    setIsActive(!isActive)
    }

  return (
    <div className="sticky my-2 bg-black/80 text-white backdrop-blur-3xl p-3 rounded-3xl flex justify-between">  

      <ul className="font-extrabold w-4/12 flex justify-center">
        <li className="transition-all duration-200 hover:scale-110">
          <NavLink to='/'>
            E-commerce
          </NavLink>
        </li>
      </ul>

      <ul className="flex font-extrabold w-8/12 justify-evenly">
        <li className="hover:scale-110">
          <NavLink to='/home'>
            Home
          </NavLink>
        </li>

        <li className="hover:scale-110">
          <NavLink to='/allproducts'>
            Products
          </NavLink>
        </li>

        <li className="relative group hover:scale-110">
          <NavLink to='/sign-main'>
            Login
          </NavLink>
          <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <li className="hover:bg-gray-200 px-4 py-2">
              <NavLink to='/buyer-login'>Buyer Login</NavLink>
            </li>
            <li className="hover:bg-gray-200 px-4 py-2">
              <NavLink to='/vendor-login'>Vendor Login</NavLink>
            </li>
          </ul>
        </li>

        <li className="relative group hover:scale-110">
          <NavLink to='/login-main'>
            Register
          </NavLink>
          <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <li className="hover:bg-gray-200 px-4 py-2">
              <NavLink to='/buyer-sign'>Buyer Register</NavLink>
            </li>
            <li className="hover:bg-gray-200 px-4 py-2">
              <NavLink to='/vendor-sign'>Vendor Register</NavLink>
            </li>
          </ul>
        </li>
        <li className="hover:scale-110">
          <button className="rounded-4xl" onClick={handleToggle}>
          <img src="cart2.jpeg" alt="" className="w-[30px] h-[30px] rounded-4xl"/>
          </button>
        </li>
      </ul>
    </div>
  )
}
