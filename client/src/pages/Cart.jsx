import CartItem from "../components/CartItem";


export default function Cart(){
    return (
        <div className="flex ">
            <div className="h-screen  w-8/12">
            {/* empty Container */}
            </div>
            <div className="h-full w-4/12 bg-white rounded-4xl mr-3">
            <h1 className="text-5xl font-extrabold text-center my-3">Cart</h1>
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
        </div>
    )
}