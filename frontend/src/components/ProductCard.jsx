import React from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';




const ProductCard = ({item}) => {
    console.log(item)
    const navigate = useNavigate();

    const {AddToCart,CartItem} = useCart();
    console.log(CartItem)

  return (
    <>
    <div className='border relative  border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max' >
<img src={item.image} alt={item.title} className='bg-gray-100 aspect-square ' onClick={()=>navigate(`/products/${item.id}`)} />
<h1 className='line-clamp-2 p-1 font-semibold' onClick={()=>navigate(`/products/${item.id}`)}>{item.title}</h1>
<p className='my-1 text-lg  text-gray-800 font-bold' onClick={()=>navigate(`/products/${item.id}`)}>${item.price}</p>
<button onClick={()=>{AddToCart(item);}} className=' bg-rose-500 px-3 text-lg rounded-md text-white w-full cursor-pointer flex gap-1 items-center justify-center font-semibold'><IoCartOutline className='m-2' />Add to cart</button>
    </div>
    </>
  )
}

export default ProductCard