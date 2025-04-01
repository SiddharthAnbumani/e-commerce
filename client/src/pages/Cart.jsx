import CartItem from "../components/CartItem";

import { useState } from "react";


export default function Cart({isActive,setIsActive}){

        const handleToggle = ()=> {
        setIsActive(!isActive)
    }

    return (
         isActive ? <div className="flex flex-row-reverse">
            <div className="w-4/12 bg-white rounded-4xl mr-3">
            <div className="flex justify-evenly"> 
            <h1 className="w-2/3 text-5xl font-extrabold text-center my-3">Cart</h1>
            <button onClick={handleToggle} className="w-1/3 text-xl font-extrabold hover:scale-125 transition-all duration-200">X </button>
            </div>

            <div className="flex flex-col">
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            </div>
            </div>
        </div> : null
        
    )
}

