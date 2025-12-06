import React, { useState } from 'react'
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { FaRegTrashAlt } from 'react-icons/fa'
import { LuNotebookText } from 'react-icons/lu'
import { MdDeliveryDining } from 'react-icons/md'
import { GiShoppingBag } from 'react-icons/gi'
import { NavLink as NAVLINK } from 'react-router-dom';

const Cart = () => {
  const { cartItem, removeFromCart, increaseQty, decreaseQty } = useCart();
  const navigate = useNavigate();

  // Delivery Info State
  const [deliveryInfo, setDeliveryInfo] = useState({
    fullName: '',
    address: '',
    state: '',
    postCode: '',
    contact: '',
    country: ''
  });

  // PromoCode State
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  // Loading State
  const [loading, setLoading] = useState(false);

  // Calculate prices
  const itemsTotal = cartItem.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryCharge = 0;
  const handlingCharge = 5;
  const discountAmount = (itemsTotal * discount) / 100;
  const grandTotal = itemsTotal + deliveryCharge + handlingCharge - discountAmount;

  // Handle form input changes
  const handleInputChange = (e) => {
    setDeliveryInfo({
      ...deliveryInfo,
      [e.target.name]: e.target.value
    });
  };

  // Validate delivery info
  const validateForm = () => {
    if (!deliveryInfo.fullName.trim()) {
      toast.error('Please enter your full name');
      return false;
    }
    if (!deliveryInfo.address.trim()) {
      toast.error('Please enter your address');
      return false;
    }
    if (!deliveryInfo.state.trim()) {
      toast.error('Please enter your state');
      return false;
    }
    if (!deliveryInfo.postCode.trim()) {
      toast.error('Please enter your post code');
      return false;
    }
    if (!deliveryInfo.contact.trim()) {
      toast.error('Please enter your contact number');
      return false;
    }
    if (!deliveryInfo.country.trim()) {
      toast.error('Please enter your country');
      return false;
    }
    return true;
  };

  // Apply PromoCode
  const applyPromoCode = () => {
    const promoCodes = {
      'SAVE10': 10,
      'SAVE20': 20,
      'JAIBABAKI': 30,
      'WELCOME': 15,
      'FIRST': 25
    };

    if (promoCodes[promoCode.toUpperCase()]) {
      setDiscount(promoCodes[promoCode.toUpperCase()]);
      setPromoApplied(true);
      toast.success(`${promoCode.toUpperCase()} applied! ${promoCodes[promoCode.toUpperCase()]}% discount! 🎉`);
    } else {
      toast.error('Invalid promo code! ❌');
    }
  };

  // Create Order
  const handleCheckout = async () => {
    if (!validateForm()) return;

    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Please login first! 🔐');
      navigate('/');
      return;
    }

    setLoading(true);

    try {
      const orderData = {
        products: cartItem.map(item => ({
          productId: item.productId,
          quantity: item.quantity
        })),
        totalAmount: grandTotal,
        deliveryInfo: deliveryInfo,
        promoCode: promoApplied ? promoCode : null,
        discount: discount
      };

      const response = await axios.post(
        'http://localhost:5000/api/orders',
        orderData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success('Order placed successfully! 🎉');
      
      navigate('/order-success', { 
        state: { 
          orderId: response.data.order._id,
          orderDetails: response.data.order 
        } 
      });

    } catch (error) {
      console.error('Order error:', error);
      toast.error('Failed to place order! ❌');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='mt-10 max-w-6xl mx-auto mb-6 px-4'>
        {cartItem.length > 0 ? (
          <div>
            <h1 className='font-bold text-2xl mb-6'>My Cart ({cartItem.length})</h1>
            
            {/* Cart Items */}
            <div className='space-y-3'>
              {cartItem.map((item, i) => {
                return (
                  <div key={i} className='bg-gray-100 p-4 rounded-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
                    
                    {/* Product Info */}
                    <div className='flex items-center gap-4 flex-1 min-w-0'>
                      <img src={item.image} alt={item.title} className='h-20 w-20 rounded-md object-contain flex-shrink-0' />
                      <div className='min-w-0 flex-1'>
                        <h1 className='line-clamp-2 text-sm md:text-base'>{item.title}</h1>
                        <p className='font-semibold text-rose-600 text-lg mt-1'>${item.price}</p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className='flex items-center gap-4 flex-shrink-0'>
                      <div className='bg-rose-500 text-white flex gap-3 rounded-md font-bold text-lg px-3 py-1.5'>
                        <button className='cursor-pointer hover:scale-110 transition' onClick={() => decreaseQty(item.productId)}>-</button>
                        <span className='min-w-[20px] text-center'>{item.quantity}</span>
                        <button className='cursor-pointer hover:scale-110 transition' onClick={() => increaseQty(item.productId)}>+</button>
                      </div>

                      {/* Delete Button */}
                      <button
                        className='hover:bg-white/60 transition-all rounded-full p-2 hover:shadow-lg'
                        onClick={() => removeFromCart(item.productId)}
                      >
                        <FaRegTrashAlt className='text-rose-600 text-xl' />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Delivery Info + Billing */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>
              
              {/* Delivery Info Form */}
              <div className='bg-gray-200 rounded-md p-6 space-y-3'>
                <h1 className='text-gray-800 font-bold text-xl mb-4'>Delivery Info</h1>
                
                <div className='flex flex-col space-y-1'>
                  <label className='text-sm font-medium'>Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={deliveryInfo.fullName}
                    onChange={handleInputChange}
                    placeholder='Enter your Name'
                    className='p-2 rounded-md border border-gray-300 focus:outline-none focus:border-rose-500'
                  />
                </div>

                <div className='flex flex-col space-y-1'>
                  <label className='text-sm font-medium'>Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={deliveryInfo.address}
                    onChange={handleInputChange}
                    placeholder='Enter your Address'
                    className='p-2 rounded-md border border-gray-300 focus:outline-none focus:border-rose-500'
                  />
                </div>

                <div className='grid grid-cols-2 gap-3'>
                  <div className='flex flex-col space-y-1'>
                    <label className='text-sm font-medium'>State *</label>
                    <input
                      type="text"
                      name="state"
                      value={deliveryInfo.state}
                      onChange={handleInputChange}
                      placeholder='State'
                      className='p-2 rounded-md border border-gray-300 focus:outline-none focus:border-rose-500 w-full'
                    />
                  </div>
                  <div className='flex flex-col space-y-1'>
                    <label className='text-sm font-medium'>Post Code *</label>
                    <input
                      type="text"
                      name="postCode"
                      value={deliveryInfo.postCode}
                      onChange={handleInputChange}
                      placeholder='Post Code'
                      className='p-2 rounded-md border border-gray-300 focus:outline-none focus:border-rose-500 w-full'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-3'>
                  <div className='flex flex-col space-y-1'>
                    <label className='text-sm font-medium'>Contact *</label>
                    <input
                      type="text"
                      name="contact"
                      value={deliveryInfo.contact}
                      onChange={handleInputChange}
                      placeholder='Contact Number'
                      className='p-2 rounded-md border border-gray-300 focus:outline-none focus:border-rose-500 w-full'
                    />
                  </div>
                  <div className='flex flex-col space-y-1'>
                    <label className='text-sm font-medium'>Country *</label>
                    <input
                      type="text"
                      name="country"
                      value={deliveryInfo.country}
                      onChange={handleInputChange}
                      placeholder='Country'
                      className='p-2 rounded-md border border-gray-300 focus:outline-none focus:border-rose-500 w-full'
                    />
                  </div>
                </div>
              </div>

              {/* Bill Details */}
              <div className='bg-white border border-gray-200 shadow-xl rounded-md p-6 space-y-3 h-max'>
                <h1 className='text-gray-800 text-xl font-bold mb-4'>Bill Details</h1>
                
                <div className='flex justify-between items-center text-sm'>
                  <h1 className='flex gap-1 items-center text-gray-700'>
                    <LuNotebookText /> Items Total
                  </h1>
                  <p className='font-semibold'>${itemsTotal.toFixed(2)}</p>
                </div>

                <div className='flex justify-between items-center text-sm'>
                  <h1 className='flex gap-1 items-center text-gray-700'>
                    <MdDeliveryDining /> Delivery Charge
                  </h1>
                  <p className='font-semibold text-rose-600'>
                    <span className='text-gray-500 line-through text-xs'>$25</span> Free
                  </p>
                </div>

                <div className='flex justify-between items-center text-sm'>
                  <h1 className='flex gap-1 items-center text-gray-700'>
                    <GiShoppingBag /> Handling Charge
                  </h1>
                  <p className='font-semibold text-rose-600'>$5</p>
                </div>

                {promoApplied && (
                  <div className='flex justify-between items-center text-sm bg-green-50 p-2 rounded-md'>
                    <h1 className='text-green-600 font-medium'>Discount ({discount}%)</h1>
                    <p className='text-green-600 font-semibold'>-${discountAmount.toFixed(2)}</p>
                  </div>
                )}

                <hr className='border-gray-200 my-3' />

                <div className='flex justify-between items-center pt-2'>
                  <h1 className='font-bold text-lg'>Grand Total</h1>
                  <p className='font-bold text-xl text-rose-600'>${grandTotal.toFixed(2)}</p>
                </div>

                {/* PromoCode */}
                <div className='pt-4 border-t border-gray-200 mt-4'>
                  <h1 className='font-semibold text-gray-700 mb-3 text-sm'>Apply Promo Code</h1>
                  <div className='flex gap-2'>
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                      placeholder='Enter Code'
                      disabled={promoApplied}
                      className='flex-1 p-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:border-rose-500 disabled:bg-gray-100'
                    />
                    <button
                      onClick={applyPromoCode}
                      disabled={promoApplied}
                      className={`px-4 py-2 text-sm rounded-md transition font-medium ${
                        promoApplied
                          ? 'bg-green-500 text-white cursor-not-allowed'
                          : 'bg-rose-600 text-white hover:bg-rose-700'
                      }`}
                    >
                      {promoApplied ? '✓ Applied' : 'Apply'}
                    </button>
                  </div>
                  <p className='text-xs text-gray-500 mt-2'>
                    💡 for promoCodes you can just email us , we'll help you for Sure <span className='px-3 py-1 text-sm bg-pink-600 text-white rounded-md hover:bg-pink-700 transition'> <NAVLINK  to='/contact' > Email Us  </NAVLINK> </span>
                  </p>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  disabled={loading}
                  className='bg-rose-600 hover:bg-rose-700 text-white px-4 py-3 rounded-md w-full cursor-pointer mt-4 font-semibold text-base transition disabled:bg-gray-400 disabled:cursor-not-allowed'
                >
                  {loading ? '⏳ Processing...' : '🛒 Proceed to Checkout'}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className='text-center py-20'>
            <h2 className='text-2xl font-semibold text-gray-600'>Your cart is empty 🛒</h2>
            <button
              onClick={() => navigate('/products')}
              className='mt-4 bg-rose-600 text-white px-6 py-2 rounded-md hover:bg-rose-700 transition'
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Cart