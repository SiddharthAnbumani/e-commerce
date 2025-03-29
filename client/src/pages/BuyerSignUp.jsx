import Axios from 'axios'
import Input from "../components/Input";
import { useState } from "react";
import CusButton from '../components/cusButton';
import { json } from 'react-router-dom';

export default function BuyerSignUp(){
  const [buyerFormData, setBuyerFormData] = useState({
    BuyerName: '',
    Email: '',
    Age: '',
    Contact: '',
    Address: ''
  })

  const handleSubmit =  async (evt)=>{
    evt.preventDefault()
    try{
      const response = await Axios.post('/api/user-registration',buyerFormData, {
        headers: {"content-type" : 'application/json'}
      })
      console.log('Response:',response.data)
    }catch(error){
      console.log("error", error)
    }
    setBuyerFormData({
      BuyerName: '',
      Email: '',
      Age: '',
      Contact: '',
      Address: ''
    })
  }


  const handleChange = (e)=>{
    const {name,value} = e.target;
    setBuyerFormData((prev)=>({... prev, [name]:value}))
  }


  return (
    <div className='w-full'>
    <h1 className='text-7xl text-center'>User- registration </h1>
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className='flex flex-col w-full justify-center items-center'>
          <Input 
          label= 'Username'
          type='text'
          labelClass='text-lg font-bold'
          name='BuyerName'
          id='BuyerName'
          placeholder='username'
          value={buyerFormData.BuyerName}
          eventHandler= {handleChange}
          />

          <Input 
          label= 'Email'
          type='text'
          labelClass='text-lg font-bold'
          name='Email'
          id='Email'
          placeholder='email'
          value={buyerFormData.Email}
          eventHandler= {handleChange}
          />

          <Input 
          label= 'Age'
          type='number'
          labelClass='text-lg font-bold'
          name='Age'
          id='Age'
          placeholder='age'
          value={buyerFormData.Age}
          eventHandler= {handleChange}
          />

          <Input 
          label= 'Contact'
          type='number'
          labelClass='text-lg font-bold'
          name='Contact'
          id='Contact'
          placeholder='Contact'
          value={buyerFormData.Contact}
          eventHandler= {handleChange}
          />

          <Input 
          label= 'Address'
          type='string'
          labelClass='text-lg font-bold'
          name='Address'
          id='Address'
          placeholder='Address'
          value={buyerFormData.Address}
          eventHandler= {handleChange}
          />

          <CusButton 
          text='Create User'
          btnClass='bg-white'
          onClick={handleSubmit}
          />

      </form>
      </div>
    </div>
    
  )
}

