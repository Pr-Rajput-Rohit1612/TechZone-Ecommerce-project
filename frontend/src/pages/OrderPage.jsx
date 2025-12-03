import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/orders', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setOrders(res.data);
      } catch (err) {
        console.error(err);
        toast.error('Failed to fetch orders! ❌');
      }
    };

    fetchOrders();
  }, []);

  if (orders.length === 0) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <p className='text-gray-500 text-lg'>No orders found.</p>
      </div>
    );
  }

  return (
    <div className='max-w-5xl mx-auto px-4 py-12'>
      <h1 className='text-2xl font-bold mb-6'>My Orders</h1>
      <div className='space-y-4'>
        {orders.map(order => (
          <div key={order._id} className='bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-center'>
            <div>
              <p className='font-medium'>Order ID: #{order._id.slice(0, 8)}</p>
              <p className='text-gray-600'>Total: ${order.totalAmount.toFixed(2)}</p>
              <p className='text-gray-600'>Status: {order.status}</p>
            </div>
            <button
              onClick={() => navigate(`/order-success`, { state: { orderId: order._id } })}
              className='bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700 transition'
            >
              View Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
