/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

export const CartContext = createContext();

// API Base URL - Works for both local and production
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  // Get token from localStorage
  const getToken = () => localStorage.getItem("token");

  // Fetch cart from database (on page load)
  const fetchCart = async () => {
    const token = getToken();
    if (!token) return;

    try {
      const response = await axios.get(`${API_URL}/api/cart`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCartItem(response.data.items || []);
    } catch (error) {
      console.error("Fetch cart error:", error);
    }
  };

  // Load cart when app starts
  useEffect(() => {
    fetchCart();
  }, []);

  // Add to cart (duplicate check + quantity)
  const AddToCart = async (item) => {
    const token = getToken();

    if (!token) {
      toast.error("Please login first! 🔐");
      return;
    }

    const existingItem = cartItem.find((i) => i.productId === item.id);

    try {
      console.log("AddToCart payload:", item, "token:", token);
      const response = await axios.post(
        `${API_URL}/api/cart/add`,
        { product: item },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCartItem(response.data.items);

      if (existingItem) {
        toast.success("Quantity updated! 🛒");
      } else {
        toast.success("Added to cart! 🛒");
      }
    } catch (error) {
      console.error("Add to cart error:", error);
      const serverMessage = error?.response?.data?.message;
      const errorMessage = serverMessage || error?.message || "Failed to add item! ❌";
      toast.error(errorMessage);
    }
  };

  // Remove from cart
  const removeFromCart = async (id) => {
    const token = getToken();

    try {
      const response = await axios.post(
        `${API_URL}/api/cart/remove`,
        { productId: id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCartItem(response.data.items);
      toast.success("Item removed! 🗑️");
    } catch (error) {
      console.error("Remove from cart error:", error);
      toast.error("Failed to remove item! ❌");
    }
  };

  // Increase quantity
  const increaseQty = async (id) => {
    const token = getToken();

    try {
      const response = await axios.post(
        `${API_URL}/api/cart/update`,
        { productId: id, action: "increase" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCartItem(response.data.items);
    } catch (error) {
      console.error("Increase qty error:", error);
    }
  };

  // Decrease quantity
  const decreaseQty = async (id) => {
    const token = getToken();

    try {
      const response = await axios.post(
        `${API_URL}/api/cart/update`,
        { productId: id, action: "decrease" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCartItem(response.data.items);
      toast.loading("1 Item removed! 🗑️", { duration: 2000 });
    } catch (error) {
      console.error("Decrease qty error:", error);
    }
  };

  // Clear cart
  const clearCart = async () => {
    const token = getToken();
    if (!token) return;

    try {
      await axios.delete(`${API_URL}/api/cart/clear`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCartItem([]);
    } catch (error) {
      console.error("Clear cart error:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItem,
        setCartItem,
        AddToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        fetchCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
