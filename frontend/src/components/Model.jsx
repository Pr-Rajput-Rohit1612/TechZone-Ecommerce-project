import React, { useState, useEffect } from "react";
import "../assets/css/Model.css";
import Signin from "./Signin.jsx";
import Signup from "./Signup.jsx";

const Modal = ({ isOpen, onClose, mode }) => {
  const [showSignIn, setShowSignIn] = useState(true);
  const [animate, setAnimate] = useState(false);

  // Animation on open/close
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setAnimate(true), 50);
    } else {
      setAnimate(false);
    }
  }, [isOpen]);

  // Set form based on mode prop
  useEffect(() => {
    setShowSignIn(mode !== "signup");
  }, [mode]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
        animate ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`relative bg-white rounded-2xl shadow-2xl transform transition-all ease-out duration-300 w-[95%] sm:w-[450px] max-h-[90vh] overflow-y-auto p-6 ${
          animate ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ✕ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-rose-600 hover:text-rose-800 text-2xl font-bold transition duration-200"
        >
          ✕
        </button>

        {/* Auth Forms */}
        <div className="mt-4">
          {showSignIn ? (
            <>
              <Signin closeModel={onClose} />
              <p className="text-center mt-4 text-sm text-gray-500">
                Don’t have an account?{" "}
                <button
                  className="text-rose-600 hover:text-rose-800 font-semibold transition duration-200"
                  onClick={() => setShowSignIn(false)}
                >
                  Signup
                </button>
              </p>
            </>
          ) : (
            <>
              <Signup closeModel={onClose} />
              <p className="text-center mt-4 text-sm text-gray-500">
                Already have an account?{" "}
                <button
                  className="text-rose-600 hover:text-rose-800 font-semibold transition duration-200"
                  onClick={() => setShowSignIn(true)}
                >
                  Signin
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
