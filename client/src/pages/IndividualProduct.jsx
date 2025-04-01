import Axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import CusButton from '../components/cusButton';

export default function IndividualProduct() {
  const { productId } = useParams(); // Ensure consistency with backend route parameter name

  const [individualData, setIndividualData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchIndividualData = async () => {
    if (!productId) return;

    try {
      const response = await Axios.get(`/api/all-products/${productId}`);
      setIndividualData(response.data);
    } catch (error) {
      console.log('Error:', error);
      setError('Failed to fetch product details');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIndividualData();
  }, [productId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!individualData) return <p>No product found</p>;

  return (
    <div className="flex justify-center items-center h-screen mt-10">
    <div className="flex flex-col items-center justify-center my-20">

      <div className="h-[700px] w-[700px] bg-white rounded-4xl flex flex-col items-center  justify-between p-5">

        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-extrabold">{individualData.ProductName}</h1>
          <p className="text-lg font-bold text-center my-3">{individualData.Description}</p>
          <p className='text-lg font-semibold text-start my-0 mx-2'>Category: {individualData.Category}</p>
          <p className='text-lg font-semibold text-start my-0 mx-2'>Quantity: {individualData.Quantity}</p>
        </div>

        <div className="flex bg-black h-[250px] w-[250px] rounded-4xl mt-5">
          <img src="/landing.avif" alt="" className='h-[250px] w-[300px] rounded-4xl' />

        </div>
      
      <div className="w-full flex flex-col justify-center items-center space-y-3">
        <CusButton
        text='Buy Now'
        btnClass='bg-green-400 text-white w-[80%]'/>
        <CusButton
        text='Add to Cart'
        btnClass='bg-blue-700 text-white w-[80%]'/>
      </div>

      </div>

      <NavLink 
        className="bg-blue-700 text-white font-bold px-10 py-2 rounded-2xl hover:scale-110 transition-all duration-150 mt-5" 
        to='/allproducts'>
        Back to Products
      </NavLink>
    </div>
    </div>
  );
}




