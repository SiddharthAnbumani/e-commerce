import { useState } from "react";

export default function CartItem() {
  const [num, setNum] = useState(0);

  const handlePlus = () => setNum((prevNum) => prevNum + 1);
  const handleMinus = () => setNum((prevNum) => (prevNum > 0 ? prevNum - 1 : 0));

  return (
    <div className="flex flex-col items-center">
      <div className="w-[95%] h-[80px] bg-blue-600 rounded-xl my-2">
        <div className="flex w-full h-full justify-between items-center">
          <div className="w-3/12 h-[90%] flex justify-center items-center bg-blue-200 rounded-4xl">
            <img className="w-[60px] h-[60px]" src="image.png" alt="Product" />
          </div>

          <div className="flex items-center justify-center">

          <p className="w-6/12 h-full text-white font-extrabold">Product Name</p>
          </div>

          <div className="w-3/12 flex items-center ">
            <button
              className="bg-white font-extrabold px-2 py-1 m-2 rounded-2xl"
              onClick={handlePlus}
            >
              +
            </button>

            <input
              type="number"
              className="w-[40px] text-center bg-white rounded-3xl"
              value={num}
              onChange={(evt) =>
                setNum(evt.target.value === "" ? 0 : parseInt(evt.target.value))
              }
            />

            <button
              className="bg-white font-extrabold px-2 py-1 m-2 rounded-2xl"
              onClick={handleMinus}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


// import { useState } from "react";

// export default function CartItem(){

// const [num,setNum] = useState(0);

// const handlePlus = (evt)=>{ setNum(evt += 1)}
// const handleMinus = (evt)=>{ setNum(evt -= 1)}

//     return (
//         <div className="flex flex-col items-center">
//             <div className="w-[95%] h-[80px] bg-blue-600 rounded-xl my-2">
//                 <div className="flex w-full">
//                     <div className="w-4/12">
//                     <img className="w-[60px] h-[60px]" src="image.png" alt="" />
//                     </div>

//                     <p className="w-4/12"> Product Name</p>
//                     <div className="w-4/12 flex items-center">
//                         <button className="bg-white font-extrabold px-2 py-1 m-2 rounded-2xl " onClick={handlePlus}>+</button>
//                             <input 
//                             type="number"
//                              placeholder="" 
//                              className="w-[30px] text-center bg-white rounded-3xl " 
//                              value={num}
//                              onChange={(evt)=>{evt.target.value}} />
                             
//                               {/* <>{num}</> */}
//                         <button className="bg-white font-extrabold px-2 py-1 m-2 rounded-2xl" onClick={handleMinus} >-</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }