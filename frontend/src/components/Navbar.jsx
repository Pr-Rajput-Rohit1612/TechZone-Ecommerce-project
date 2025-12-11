import React, { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { MdMyLocation } from "react-icons/md";
import Modal from "./Model.jsx";
import { useCart } from "../context/CartContext.jsx";
import { useLocation } from "react-router-dom";
import ProfileModal from "./ProfileModal.jsx";
import axios from "axios";

const Navbar = () => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { cartItem } = useCart();
  const locations = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    const handleAuthChange = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  window.addEventListener("authChange", handleAuthChange);
  return () => window.removeEventListener("authChange", handleAuthChange);
}, []);
  

  

  useEffect(() => {
    getCurrentLocation();
  }, []);

  // IP-based location with multiple fallbacks
  const getLocationByIP = async () => {
    const APIs = [
      {
        url: "https://ipapi.co/json/",
        parser: (data) => ({
          city: data.city || "Unknown",
          state: data.region || "",
          country: data.country_name || "",
          full: `${data.city}, ${data.region}, ${data.country_name}`
        })
      },
      {
        url: "https://ipwho.is/",
        parser: (data) => ({
          city: data.city || "Unknown",
          state: data.region || "",
          country: data.country || "",
          full: `${data.city}, ${data.region}, ${data.country}`
        })
      },
      {
        url: "https://get.geojs.io/v1/ip/geo.json",
        parser: (data) => ({
          city: data.city || "Unknown",
          state: data.region || "",
          country: data.country || "",
          full: `${data.city}, ${data.region}, ${data.country}`
        })
      }
    ];

    for (let api of APIs) {
      try {
        const response = await axios.get(api.url, { timeout: 5000 });
        if (response.data && response.data.city) {
          setLocation(api.parser(response.data));
          setLoading(false);
          return true;
        }
      } catch (error) {
        console.log(error)
        console.log(`API ${api.url} failed, trying next...`);
        continue;
      }
    }

    // All APIs failed - set default location
    setLocation({
      city: "Delhi",
      state: "Delhi",
      country: "India",
      full: "Delhi, India"
    });
    setLoading(false);
    return false;
  };

  // Get current location using GPS (with IP fallback)
  const getCurrentLocation = async () => {
    setLoading(true);

    // Check if geolocation is supported
    if (!navigator.geolocation) {
      console.log("Geolocation not supported, using IP location");
      await getLocationByIP();
      return;
    }

    // Try GPS first with timeout
    const gpsTimeout = setTimeout(async () => {
      console.log("GPS timeout, switching to IP location");
      await getLocationByIP();
    }, 10000); // 10 second timeout

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        clearTimeout(gpsTimeout);
        const { latitude, longitude } = position.coords;

        try {
          const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
            {
              timeout: 8000,
              
            }
          );

          const address = response.data.address;
          setLocation({
            city: address.city || address.town || address.village || address.suburb || address.municipality ||  address.state_district ||  address.county ||  "Unknown",
            state: address.state || "",
            country: address.country || "",
            full: response.data.display_name
          });
          setLoading(false);
        } catch (error) {
          console.error("Reverse geocoding error:", error);
          await getLocationByIP();
        }
      },
      async (error) => {
        clearTimeout(gpsTimeout);
        console.log("GPS denied or failed:", error.message);
        // GPS failed - Use IP based location
        await getLocationByIP();
      },
      {
        timeout: 10000,
        enableHighAccuracy: false,
        maximumAge: 300000 // Cache for 5 minutes
      }
    );
  };

  // Search location by query
  const searchLocation = async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          searchQuery
        )}&format=json&limit=5`,
        {
          timeout: 8000,
          headers: {
            "User-Agent": "TechZone-App/1.0"
          }
        }
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error("Search error:", error);
      alert("Search failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Select location from search results
  const selectLocation = (result) => {
    setLocation({
      city: result.name || searchQuery,
      state: result.display_name.split(",")[1]?.trim() || "",
      country: result.display_name.split(",").pop()?.trim() || "",
      full: result.display_name
    });
    setSearchQuery("");
    setSearchResults([]);
    setOpenDropDown(false);
  };

  const toggleDropDown = () => {
    setOpenDropDown(!openDropDown);
    setSearchResults([]);
    setSearchQuery("");
  };

  if (locations.pathname === "/") {
    return null;
  }

  return (
    <>
      <div className="bg-white py-4 shadow-2xl">
        <div className="max-w-6xl mx-auto flex justify-around items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-7">
            <Link to={"/home"}>
              <h1 className="font-bold text-3xl">
                TECH<span className="text-red-500 font-serif text-4xl">Z</span>
                ONE
              </h1>
            </Link>

            {/* Location Section */}
            <div className="relative">
              <div
                className="flex gap-1 cursor-pointer text-gray-700 items-center"
                onClick={toggleDropDown}
              >
                <MapPin className="text-rose-600" />
                <span className="font-semibold">
                  {loading ? (
                    "Detecting..."
                  ) : location ? (
                    <div className="-space-y-1">
                      <p className="text-sm">{location.city}</p>
                      <p className="text-xs text-gray-500">{location.state}</p>
                    </div>
                  ) : (
                    "Add Address"
                  )}
                </span>
                <FaCaretDown />
              </div>

              {/* Location Dropdown */}
              {openDropDown && (
                <div className="w-[300px] shadow-2xl z-50 bg-white absolute top-12 left-0 border border-gray-200 rounded-lg p-4">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold">Change Location</h2>
                    <CgClose
                      className="text-xl cursor-pointer hover:text-rose-600"
                      onClick={toggleDropDown}
                    />
                  </div>

                  {/* Auto Detect Button */}
                  <button
                    onClick={getCurrentLocation}
                    disabled={loading}
                    className="w-full flex items-center gap-2 p-3 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg mb-3 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <MdMyLocation className="text-xl" />
                    <span className="font-medium">
                      {loading ? "Detecting..." : "Use Current Location"}
                    </span>
                  </button>

                  {/* Search Input */}
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      placeholder="Search city, area..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && searchLocation()}
                      className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-500"
                    />
                    <button
                      onClick={searchLocation}
                      disabled={loading || !searchQuery.trim()}
                      className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Search
                    </button>
                  </div>

                  {/* Search Results */}
                  {searchResults.length > 0 && (
                    <div className="max-h-48 overflow-y-auto">
                      {searchResults.map((result, index) => (
                        <div
                          key={index}
                          onClick={() => selectLocation(result)}
                          className="p-2 hover:bg-gray-100 cursor-pointer rounded-lg text-sm border-b last:border-b-0"
                        >
                          <p className="font-medium">{result.name}</p>
                          <p className="text-gray-500 text-xs truncate">
                            {result.display_name}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Current Location Display */}
                  {location && !searchResults.length && (
                    <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500">Current Location:</p>
                      <p className="text-sm font-medium">{location.full}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Menu Section */}
          <nav className="flex gap-11 items-center">
            <ul className="flex gap-9 font-semibold text-gray-700 items-center">
              <NavLink
                to={"/home"}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-3 transition-all border-rose-700"
                      : "text-black"
                  } cursor-pointer`
                }
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to={"/products"}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-3 transition-all border-rose-700"
                      : "text-black"
                  } cursor-pointer`
                }
              >
                <li>Products</li>
              </NavLink>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-3 transition-all border-rose-700"
                      : "text-black"
                  } cursor-pointer`
                }
              >
                <li>About</li>
              </NavLink>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-3 transition-all border-rose-700"
                      : "text-black"
                  } cursor-pointer`
                }
              >
                <li>Contact</li>
              </NavLink>
            </ul>

            {/* Cart */}
            <Link to={"/cart"} className="relative">
              <IoCartOutline className="h-7 w-7" />
              <span className="bg-rose-700 px-2 rounded-full absolute -top-3 -right-3 text-white">
                {cartItem.length}
              </span>
            </Link>
          </nav>

          {/* Profile/Sign in Button */}
          <button
            className="bg-rose-600 text-white px-3 py-1 rounded-md cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            {isLoggedIn ? "Profile" : "Sign in"}
          </button>

          {/* Modal */}
          {isLoggedIn ? (
            <ProfileModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          ) : (
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;