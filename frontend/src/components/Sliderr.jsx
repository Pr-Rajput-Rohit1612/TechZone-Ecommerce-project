import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Slider from "react-slick";
import { useNavigate,  } from 'react-router-dom';

const Sliderr = () => {

    const { data , fetchAllData } = useContext(DataContext);
    
   const navigate =useNavigate();

   const gotoProductPage =()=>{
    navigate('/products')
   }


    console.log(data)

    const SamplePrevArrow = (props) => {
      const { className, style, onClick } = props;
      return (
        <div onClick={onClick}  className={` arrow ${className}  `} style={{zIndex:3}}>
        <AiOutlineArrowLeft  className='arrows' style={{ ...style, display: "block",  color:"white", marginLeft:"40px" }}
/>
        </div> 
      );
    }

const SampleNextArrow = (props) => {
      const { className, style, onClick } = props;
      return (
        <div onClick={onClick}  className={` arrow ${className}  `} style={{zIndex:3}}>
        <AiOutlineArrowRight  className='arrows' style={{ ...style, display: "block",  color:"white", marginLeft:"-60px" }}
/>
        </div>           
      );
    }

     var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    pauseOnHover:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />
  };

    useEffect(() => {
        fetchAllData();
    }, [])
  return (
    <>
   <div> 

     <Slider {...settings}>
      {data.slice(0,12)?.map((item,i)=>{
        return <div key={i} className='bg-linear-to-r from-rose-700 via-[#db2546] to-rose-400 -z-10  '>
          <div className='flex gap-10 justify-center h-[600px] items-center px-4'>


            <div className='space-y-6'>
          <h2 className='text-red-100 font-semibold font-sans text-4xl '> "Innovation delivered to your door"</h2>
            <h1 className='text-4xl font-bold uppercase  line-clamp-3 md:w-[500px] text-white'>{item.title}</h1>
            <p className='md:w-[500px] line-clamp-3 text-gray-400 pr-7'>{item.description}</p>
            <button onClick={gotoProductPage} className='bg-linear-to-r hover:scale-105 transition-all shadow-2xl bg-white text-rose-700 hover:bg-gray-900 text-2xl px-3 py-3 rounded-md cursor-pointer mt-2'>shop Now</button>
            </div>
            <div className=' p-8 m-1.5'>
              <img src={item.image} alt={item.title} className='rounded-full  md:w-[400px] md:h-[400px] bg-amber-50 hover:scale-105 transition-all shadow-2xl  shadow-red-100 p-8' />
            </div>
          </div>
        </div>
      })
      }  
    </Slider>
     </div>
    </>
  )
}

export default Sliderr