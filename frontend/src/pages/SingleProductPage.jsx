import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useCart } from '../context/CartContext';



const SingleProductPage =({item}) => {   
  console.log(item) 
   const [SingleProduct ,setSingleProduct]= useState("");
   const {AddToCart}= useCart();
  //  console.log(cartItem)

   const params= useParams();
   console.log(params)

 const getSingleProduct = async () => {
   try {
    const res = await axios.get(`http://localhost:5000/api/products/${params.id}`);
    console.log(res)
    // const data = await response.json();

    const product = res.data;
    setSingleProduct(product);
    console.log(product)

   } catch (error) {
    console.log(error)
    
   }
}

useEffect(() => {
  getSingleProduct();
}, []);

  return (
    <>
    {SingleProduct && (
      <div className='max-w-6xl mx-auto px-4 mb-10 mt-10'>
        <div className='flex flex-col md:flex-row gap-8'>   
            <div className='flex-1'>
                <img src={SingleProduct.image} alt={SingleProduct.title}  className='w-full h-112 object-contain shadow-6xl rounded-2xl hover:bg-rose-600' />
            </div>
            <div className='flex-1'>
                <h1 className='text-3xl font-bold mb-4'>{SingleProduct.title?.toUpperCase()} </h1>
                <p className='text-gray-700 mb-4'> {SingleProduct.category?.toUpperCase()}</p>
                <p className='text-gray-700 mb-4'>{SingleProduct.description}</p>
                <p className='text-2xl font-semibold mb-4 text-rose-700'>${SingleProduct.price}</p>
                <p className='text-gray-700 mb-1'>{SingleProduct?.rating.count} left</p>
                <p className='text-gray-900 mb-4'> rating: {SingleProduct?.rating.rate}</p>
                <button className='bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300' onClick={()=>{AddToCart(SingleProduct);}}>Add to Cart</button>
                
            </div>
        </div>
      </div>
    )}
    </>
  )
}

export default SingleProductPage