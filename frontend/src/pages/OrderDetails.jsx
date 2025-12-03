import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchOrder = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Please login first!');
      navigate('/');
      return;
    }

    try {
      const { data } = await axios.get(`http://localhost:5000/api/orders/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrder(data);
    } catch (error) {
      console.error(error);
      toast.error('Failed to fetch order!');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, [id]);

  if (loading) return <h2 className="text-center mt-20">Loading order details...</h2>;
  if (!order) return <p className="text-center mt-20">Order not found!</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Order Details</h1>

      <div className="border p-4 rounded-md space-y-4">
        <p><strong>Order ID:</strong> {order._id}</p>
        <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>
        <p><strong>Status:</strong> {order.deliveryStatus}</p>
        <p><strong>Total Amount:</strong> ${order.totalAmount.toFixed(2)}</p>
        <p><strong>Discount:</strong> {order.discount}%</p>
        <p><strong>Promo Code:</strong> {order.promoCode || 'N/A'}</p>

        <h2 className="text-xl font-semibold mt-4">Delivery Info</h2>
        <p><strong>Name:</strong> {order.shippingAddress.fullName}</p>
        <p><strong>Address:</strong> {order.shippingAddress.address}, {order.shippingAddress.state} - {order.shippingAddress.postCode}</p>
        <p><strong>Country:</strong> {order.shippingAddress.country}</p>
        <p><strong>Contact:</strong> {order.shippingAddress.contact}</p>

        <h2 className="text-xl font-semibold mt-4">Products</h2>
        <div className="space-y-2">
          {order.orderItems.map((item) => (
            <div key={item.product._id} className="flex items-center gap-4 border p-2 rounded-md">
              <img src={item.product.image} alt={item.product.title} className="w-20 h-20 object-contain" />
              <div>
                <p><strong>{item.product.title}</strong></p>
                <p>Quantity: {item.qty}</p>
                <p>Price: ${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
