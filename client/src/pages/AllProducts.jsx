import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductProfile from "../components/ProductProfile";
import Axios from 'axios'

export default function AllProducts(){

    const [allProducts,setAllProducts] = useState([])

    const fetchAllProducts = async(evt)=>{
        try {
            const response = await Axios.get('/api/all-products', {timeout : 5000})
            console.log(response.data)
            setAllProducts(response.data);
        }catch(error){
            console.log('Error :',error)
        }
    }

    useEffect(()=>{
        fetchAllProducts()
    },[])

    return (
        <div className="my-20">
            {/* <h1 className="text-7xl">
            This is all Products
            </h1> */}

            <div className="m-10 flex justify-center ">
            <NavLink  
            className='bg-blue-600 p-3 
            rounded-2xl text-white font-bold mx-3' 
            to='/makeproduct'>
            Add New Products
            </NavLink>

            <NavLink  
            className='bg-yellow-400 p-3 mx-3 
            rounded-2xl text-white font-bold' 
            to='/editproduct'>
            Edit Products
            </NavLink>
                </div>
            
            <div className="flex justify-center flex-wrap gap-4">
                {allProducts.length > 0 ? (
                    allProducts.map((product) => (
                    <ProductProfile 
                    key={product._id}
                    id = {product._id} 
                    title={product.ProductName} 
                    description={product.Description} 
                    />

                    ))
                ) : (
                    <p>No products available</p>
                )}
                </div>

        </div>
    )
}

