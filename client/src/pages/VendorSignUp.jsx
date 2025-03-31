import Axios from 'axios'
import Input from '../components/Input'
import CusButton from '../components/cusButton'
import { useState } from 'react'

export default function VendorSignUp() {

  const [formData, setFormData] = useState({ 
    VendorName:'',
    CompanyName:'',
    Address:'',
    Email:'',
    Contact:''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const response = await Axios.post('/api/vendor-registration', formData, {
        headers: { 'content-type': 'application/json' },
      });
      console.log('Server Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
    setFormData({ 
      VendorName:'',
      CompanyName:'',
      Address:'',
      Email:'',
      Contact:''
    })
  };

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <h1 className='text-7xl'>Vendor registration </h1>
      {/* <div className="flex flex-col items-center justify-center"> */}
        <form onSubmit={handleSubmit} className='flex flex-col justify-center w-[70%]'>
          <Input
            label='Name of the vendor'
            type='text'
            name='VendorName'
            id='VendorName'
            placeholder='vendor-name'
            labelClass='text-xl'
            inputClass='w-[60%]'
            value={formData.VendorName}
            eventHandler={handleChange}
          />

          <Input
            label='Name of the Company'
            type='text'
            name='CompanyName'
            id='CompanyName'
            placeholder='company-name'
            labelClass='text-xl'
            inputClass='w-[60%]'
            value={formData.CompanyName}
            eventHandler={handleChange}
          />

          <Input
            label='Address'
            type='text'
            name='Address'
            id='Address'
            placeholder='Address'
            labelClass='text-xl'
            inputClass='w-[60%]'
            value={formData.Address}
            eventHandler={handleChange}
          />

          <Input
            label='Email'
            type='email'
            name='Email'
            id='Email'
            placeholder='Email'
            labelClass='text-xl'
            inputClass='w-[60%]'
            value={formData.Email}
            eventHandler={handleChange}
          />

          <Input
            label='Contact'
            type='number'
            name='Contact'
            id='Contact'
            placeholder='+91 -'
            labelClass='text-xl'
            inputClass='w-[60%]'
            value={formData.Contact}
            eventHandler={handleChange}
          />

          <CusButton 
            text='Create Vendor'
            btnClass='bg-blue-500'
            onClick={handleSubmit}
          />
        </form>
      </div>
    // </div>
  )
}


// import Axios from 'axios'
// import Input from '../components/Input'
// import CusButton from '../components/cusButton'
// import { useState } from 'react'

// export default function VendorSignUp {

//   const [formData, setFormData] = useState({ 
//     VendorName:'',
//     CompanyName:'',
//     Address:'',
//     Email:'',
//     Contact:''
//   }
// )

// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setFormData((prev) => ({ ...prev, [name]: value }));
// };

// // const handleSubmit = async(evt)=>{
// //   evt.preventDefault();
// //   try {
// //     const response = Axios.post('/api/vendor-registration', formData, 
// //       {headers : {'content-type' : 'application/json'}})
// //     console.log('server Response', response.data)
// //     alert('Form Submitted')
// //   } catch(error){
// //     console.log('error', error)
// //   }
// // }

// const handleSumbit = async (evt) => {
//   evt.preventDefault();
//   try {
//     const response = await Axios.post('/api/vendor-registration', formData, {
//       headers: { 'content-type': 'application/json' },
//     });
//     console.log('Server Response:', response.data);
//     alert('Form Submitted');
//   } catch (error) {
//     console.error('Error:', error);
//     alert('Failed to submit the form');
//   }

  
//   return (
//     <div className='w-full'>
//       <h1 className='text-7xl text-center'>Vendor registration </h1>
//         <div className=" flex flex-col items-center ">
//           <form action="submit" className='flex flex-col w-[60%]'>

//           <Input
//             label='Name of the vendor'
//             type='text'
//             name='VendorName'
//             id='VendorName'
//             placeholder='vendor-name'
//             labelClass='text-xl'
//             inputClass='w-[60%]'
//             value={formData.VendorName}
//             eventHandler={handleChange}
//             />

//           <Input
//             label='Name of the Company'
//             type='text'
//             name='CompanyName'
//             id='CompanyName'
//             placeholder='company-name'
//             labelClass='text-xl'
//             inputClass='w-[60%]'
//             value={formData.CompanyName}
//             eventHandler={handleChange}
//             />

//           <Input
//             label='Address'
//             type='text'
//             name='Address'
//             id='Address'
//             placeholder='Address'
//             labelClass='text-xl'
//             inputClass='w-[60%]'
//             value = {formData.Address}
//             eventHandler={handleChange}
//             />

//           <Input
//             label='Email'
//             type='email'
//             name='Email'
//             id='Email'
//             placeholder='Email'
//             labelClass='text-xl'
//             inputClass='w-[60%]'
//             value={formData.Email}
//             eventHandler={handleChange}
//             />

//           <Input
//             label='Contact'
//             type='number'
//             name='Contact'
//             id='Contact'
//             placeholder='+91 -'
//             labelClass='text-xl'
//             inputClass='w-[60%]'
//             value={formData.Contact}
//             eventHandler={handleChange}
//             />

//             {/* <CusButton 
//             text='Create Vendor'
//             btnClass='bg-blue-500 '
//             onClick={handleSumbit}
//             /> */}
//             <button onSubmit={handleSubmit}> Submit</button>
//           </form>

//       </div>

//     </div>
//   )
// }



