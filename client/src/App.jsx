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

export default function App(){
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/allproducts" element={<AllProducts/>} />
        <Route path="/vendor-sign" element={<VendorSignUp/>} />
        <Route path="/vendor-login" element={<VendorLogin/>} />
        <Route path="/buyer-sign" element={<BuyerSignUp/>} />
        <Route path="/buyer-login" element={<BuyerLogin/>} />
      </Routes>
    </BrowserRouter>
    
  )
}