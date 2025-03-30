import { NavLink } from "react-router-dom";

export default function AllProducts(){
    return (
        <div className="">
            <h1 className="text-7xl">This is all Products</h1>
            <NavLink  className='bg-blue-600 p-3 rounded-2xl text-white font-bold' to='/makeproduct'>Add New Products</NavLink>
            <NavLink  className='bg-green-400 p-3 rounded-2xl text-white font-bold' to='/editproduct'>Edit Products</NavLink>
        </div>
    )
}