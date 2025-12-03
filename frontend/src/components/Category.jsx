import { useContext } from 'react'
import { DataContext } from '../context/DataContext.jsx'
import { useNavigate } from 'react-router-dom'

const Category = () => {
  const { uniqueCategories } = useContext(DataContext);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <>
      <div className='bg-[#eb1342]'>
        <div className='max-w-7xl mx-auto flex gap-4 items-center justify-around py-7 px-4'>
          {uniqueCategories?.map((item, i) => {
            return (
              <div
                key={i}
                className='text-white border-none rounded-full hover:scale-125 cursor-pointer duration-300 transition-all shadow-2xl'
              >
                <button
                  onClick={() => handleCategoryClick(item)}
                  className='uppercase bg-linear-to-r bg-white text-rose-700 hover:bg-gray-900 p-3 rounded-md cursor-pointer'
                >
                  {item}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;