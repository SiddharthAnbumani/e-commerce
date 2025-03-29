export default function CusButton({text , btnClass, onClick, onSubmit }){
    return (
        <button className= 
        { `${btnClass} text-lg font-extrabold w-[30%] my-5 self-center p-3 rounded-3xl transition-all duration-200 hover:scale-110`}
         onClick={onClick} 
         onSubmit={onSubmit}
         >
              {text}
        </button>
    )
}