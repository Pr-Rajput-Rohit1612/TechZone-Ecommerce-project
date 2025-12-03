import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useCart();

  // Get order data from location.state (passed from checkout)
  const { orderId, orderDetails } = location.state || {};

  useEffect(() => {
    if (orderId) {
      clearCart(); // Clear cart after order success
    }
  }, [orderId]);

  // Redirect if no order data
  if (!orderId || !orderDetails) {
    navigate('/products'); // safe redirect
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
          Order Placed Successfully! 🎉
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Thank you for your purchase. Your order has been received.
        </p>

        {/* Order Details */}
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h2 className="font-semibold text-lg mb-4 text-gray-800">Order Details</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Order ID:</span>
              <span className="font-semibold text-gray-800">#{orderId.slice(0, 8)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Total Amount:</span>
              <span className="font-semibold text-rose-600">${orderDetails.totalAmount.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                {orderDetails.status || 'Pending'}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Payment:</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Demo Mode
              </span>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-blue-800 mb-2">📧 What's Next?</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Order confirmation email sent</li>
            <li>• We'll notify you when your order ships</li>
            <li>• Track your order anytime from your account</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => navigate('/products')}
            className="flex-1 bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => navigate('/orders')}
            className="flex-1 border-2 border-rose-600 text-rose-600 hover:bg-rose-50 px-6 py-3 rounded-lg font-semibold transition"
          >
            View Orders
          </button>
        </div>

        {/* Support */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Need help? <a href="/contact" className="text-rose-600 hover:underline">Contact Support</a>
        </p>
      </div>
    </div>
  );
};

export default OrderSuccess;
