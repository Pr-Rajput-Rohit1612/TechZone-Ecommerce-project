import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Contacts from "./pages/Contacts.jsx";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";
import Navbar from "./components/Navbar.jsx";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer.jsx";
import SingleProductPage from "./pages/SingleProductPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import OrderSuccess from "./pages/OrderSuccess.jsx";
import OrderPage from "./pages/OrderPage.jsx";
import OrderDetails from "./pages/OrderDetails.jsx";


const App = () => {
  const [location, setLocation] = useState();

  

  const getLocation  = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        try {
          const url =`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
          const response = await axios.get(url);
          const city = response.data.address.city || response.data.address.town || response.data.address.village;
          setLocation(city);
        } catch (error) {
          console.error("Error fetching location data:", error);
        }
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

        
  return (
    <>
     <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            borderRadius: "10px",
            // background: "#1e293b", // custom dark bg
            background: "#fff",
            color: "#000",
            padding: "12px 20px",
            fontSize: "16px",
          },
          success: {
            duration: 1000,
            icon: "✅🎉",
          },
          error: {
            duration: 3000,
            icon: "❌",
          },
        }}
        />
      <BrowserRouter>
      <Navbar location= {location} getLocation={getLocation}  />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:id" element={<SingleProductPage />}></Route>
          <Route path="/contact" element={<Contacts />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/order/:id" element={<OrderDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
