import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Landing from "./pages/Landing"
import AllProducts from "./pages/AllProducts"
import VendorLogin from "./pages/VendorLogin"
import VendorSignUp from "./pages/VendorSignUp"
import BuyerSignUp from "./pages/BuyerSignUp"
import BuyerLogin from "./pages/BuyerLogin"
import Navbar from "./components/Navbar"
import './index.css'
import MakeProduct from "./pages/MakeProduct"
import EditProduct from "./pages/EditProduct"
import IndividualProduct from "./pages/IndividualProduct"
import Cart from './components/Cart'
import SignMain from "./pages/SignMain"
import RegisterMain from "./pages/RegisterMain"
import { useState } from "react"

export default function App(){
  const [isActive,setIsActive] = useState(true);


  return (
    <div className="">
    <BrowserRouter className=''>
    <Navbar
     isActive={isActive}
     setIsActive={setIsActive}/>
    <Cart 
    isActive={isActive}
    setIsActive={setIsActive}/>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/makeproduct" element={<MakeProduct/>} />
        <Route path="/editproduct" element={<EditProduct/>} />
        <Route path="/allproducts" element={<AllProducts/>} />
        <Route path="/allproducts/:productId" element={<IndividualProduct/>} />
        <Route path="/allproducts" element={<AllProducts/>} />

        <Route path="/vendor-sign" element={<VendorSignUp/>} />
        <Route path="/vendor-login" element={<VendorLogin/>} />

        <Route path="/buyer-sign" element={<BuyerSignUp/>} />
        <Route path="/buyer-login" element={<BuyerLogin/>} />

        <Route path="/login-main" element={<SignMain/>} />
        <Route path="/sign-main" element={<RegisterMain/>} />
        
        {/* <Route path="/cart" element={<Cart/>} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  )
}

