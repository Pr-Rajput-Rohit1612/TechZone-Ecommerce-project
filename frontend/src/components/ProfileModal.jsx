import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  // localStorage se user data lo
  const userData = localStorage.getItem("user");
//   const user = userData ? JSON.parse(userData) : {};
    console.log("userData:", userData);
 let user = {};
  try {
    if (userData && userData !== "undefined" && userData !== "null") {
      user = JSON.parse(userData);
    }
  } catch (e) {
    console.log(e)
    user = {};
  }

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    onClose();
    navigate("/");
    window.location.reload();  
  };

  // Agar modal band hai toh kuch mat dikhao
  if (!isOpen) return null;

  return (
    <div
    onClick={onClose}
      className="absolute top-12 right-0 bg-white rounded-xl shadow-2xl p-4 w-64 z-50 border border-gray-100"
    >
      {/* Profile Photo */}
      <div  className="flex justify-center mb-3">
        <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
          {user?.firstName ? user.firstName.charAt(0).toUpperCase() : "U"}
        </div>
      </div>

      {/* User Info */}
      <div onClick={(e) => e.stopPropagation()}  className="text-center mb-4">
        <h2 className="text-lg font-bold text-gray-800">
          {user?.firstName || "User"} {user?.lastName || ""}
        </h2>
        <p className="text-gray-500 text-sm">{user?.email || "No email"}</p>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="w-full py-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-lg transition"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileModal;