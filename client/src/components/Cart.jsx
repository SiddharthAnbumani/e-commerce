import CartItem from "./CartItem";

export default function Cart({ isActive, setIsActive }) {
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[500px] bg-white shadow-lg rounded-l-2xl p-5 transition-transform duration-300 ${
        isActive ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ zIndex: 1000 }} // Ensure it's above other content
    >
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Cart</h1>
        <button
          onClick={handleToggle}
          className="text-2xl font-bold hover:scale-125 transition-all duration-200"
        >
          ✖
        </button>
      </div>

      <div className="flex flex-col overflow-y-auto max-h-[80vh] mt-4">
        {[...Array(11)].map((_, index) => (
          <CartItem key={index} />
        ))}
      </div>
    </div>
  );
}


// import CartItem from "./CartItem";

// import { useState } from "react";


// export default function Cart({isActive,setIsActive}){

//         const handleToggle = ()=> {
//         setIsActive(!isActive)
//     }

//     return (
//          isActive ? <div className="flex flex-row-reverse">
//             <div className="w-[500px] bg-white rounded-4xl mr-3">
//             <div className="flex justify-evenly"> 
//             <h1 className="w-2/3 text-5xl font-extrabold text-center my-3">Cart</h1>
//             <button onClick={handleToggle} className="w-1/3 text-xl font-extrabold hover:scale-125 transition-all duration-200">X </button>
//             </div>

//             <div className="flex flex-col">
//             <CartItem/>
//             <CartItem/>
//             <CartItem/>
//             <CartItem/>
//             <CartItem/>
//             <CartItem/>
//             <CartItem/>
//             <CartItem/>
//             <CartItem/>
//             <CartItem/>
//             <CartItem/>
//             </div>
//             </div>
//         </div> : null
        
//     )
// }

