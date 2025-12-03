import React from "react";
import midbanner from "../assets/midbanner.jpg";
import { useNavigate } from "react-router-dom";

const MidBanner = () => {

  const navigate = useNavigate();
  const gotoProductPage=()=>{
    navigate("/products")
  }
  return (
    <>  
      <div className=" md:py-24 ml-20  mr-24 ">
        <div
          className="reletive max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px]"
          style={{
            backgroundImage: `url(${midbanner})`,
            backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="relative p-16 inset-0 h-150 w-292 -mt-28    bg-black/60 md:rounded-2xl bg-opacity-50 flex items-start justify-center  ">
            <div className="text-center text-white p-24  ">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                {" "}
                Next-Gen fashion at your fingertips
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Disover the latest fashion free shipping on all order{" "}
              </p>
              <button onClick={gotoProductPage} className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300">
                {" "}
                shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MidBanner;
