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
    <div className="flex flex-col items-center">
      <div className="h-[400px] w-[400px] bg-white rounded-4xl flex flex-col items-center p-5">
        <h1 className="text-5xl font-extrabold">{individualData.ProductName}</h1>
        <p className="text-lg">{individualData.Description}</p>
        <p>Category: {individualData.Category}</p>
        <p>Quantity: {individualData.Quantity}</p>
      
        <CusButton
        text='Buy Now'
        btnClass='bg-green-400 text-white w-[80%]'/>

        <CusButton
        text='Add to Cart'
        btnClass='bg-blue-700 text-white w-[80%]'/>
      </div>

      <NavLink 
        className="bg-blue-700 text-white font-bold px-10 py-2 rounded-2xl hover:scale-110 transition-all duration-150 mt-5" 
        to='/allproducts'>
        Back to Products
      </NavLink>
    </div>
  );
}


