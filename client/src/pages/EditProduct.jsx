import { FaHandFist } from "react-icons/fa6";
import CusButton from "../components/cusButton";
import Axios from 'axios'
import { useState,useEffect } from "react";
import Input from "../components/Input";



export default function EditProduct(){
   
    const [productData, setProductData] = useState({
        ProductName: '',
        Description: '',
        Category: '',
        Image: '',
        Quantity: '',
        InStock: '',
    })

    const productId = '67e8b61149febfa85d9f4caf'

    const handleSubmit = async(evt)=>{
        // evt.preventDefault()
        try{
            const response = await Axios.get(`/api/fetch-edit-product/${productId}`,{
                timeout:5000
            })
            setProductData(response.data)
            // console.log('State Updated:', productData)
        } catch(error){
            console.log("error", error)
        }
    }


    useEffect(() => {
        if (productId){
            handleSubmit();
        }
      }, [productId]);

    useEffect(() => {
    console.log('State Updated:', productData);
    }, [productData]);
    


    return(
        <div className='w-full flex flex-col justify-center items-center'>
        <h1 className='text-7xl'>User- registration </h1>
             <div className="flex flex-col items-center justify-center">
                 <form onSubmit='' className=' w-full '>
                    
                    <Input
                    // eventHandler={handleChange}
                    name='ProductName'
                    value={productData.ProductName}
                    id=' ProductName'
                    label='Product'
                    labelClass='text-lg'
                    inputClass=''
                    placeholder='name of the product'
                    />

                    <div className="flex space-x-5">
                        <div className="w-1/3">
                        <label htmlFor="Description" className="text-lg font-bold">Description :</label>
                        </div>
                        <div className="w-2/3">
                            <textarea
                            // onChange={handleChange}
                            value={productData.Description}
                            name="Description" 
                            id="Description" 
                            cols='30' rows='4'
                            placeholder="provide descriptions" 
                            className="bg-white rounded-2xl"/>
                        </div>
                    </div>


                    <div className="flex items-center space-x-5 my-5">
                        <div className="w-1/3">
                            <label htmlFor="category" className="text-lg font-bold">
                                Category :
                            </label>
                        </div>
                        <div className="w-2/3">
                            <select
                            // onChange={handleChange}
                            value={productData.Category}
                            className="bg-white px-10 py-2 rounded-2xl" 
                            name="Category"
                            id="category">
                                <option value="-">Choose Type</option>
                                <option value="type1">Type 1</option>
                                <option value="type2">Type 2</option>
                                <option value="type3">Type 3</option>
                                <option value="type4">Type 4</option>
                            </select>
                        </div>
                    </div>

                    <Input
                    value={productData.Image}
                    name='Image'
                    id='Image'
                    type='text'
                    label='Image'
                    labelClass='text-lg'
                    inputClass=''
                    placeholder='Provide Url as of now'
                    // eventHandler={handleChange}
                    />

                    <Input
                    value={productData.Quantity}
                    name='Quantity'
                    id='Quantity'
                    label='Quantity'
                    labelClass='text-lg'
                    inputClass=''
                    placeholder='Quatity'
                    // eventHandler={handleChange}
                    />

                    <CusButton
                    text='Add Product'
                    btnClass='bg-white w-full'
                    />
            </form>
            {/* <NavLink className='bg-red-500 px-10 py-2 text-lg font-bold rounded-2xl' to='/allproducts'> Back </NavLink> */}
        </div>
    </div>
    )
}