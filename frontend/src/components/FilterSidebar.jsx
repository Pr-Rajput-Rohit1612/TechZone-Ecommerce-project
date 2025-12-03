import React, { useState, useContext } from 'react'
import { DataContext } from '../context/DataContext.jsx'
import { useNavigate, useSearchParams } from 'react-router-dom'

const FilterSidebar = () => {
  const { uniqueCategories, brandData, } = useContext(DataContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // States for filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [priceRange, setPriceRange] = useState(5000);
  
  // Get current category from URL
  const currentCategory = searchParams.get('category') || '';

  // Category click handler
  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category}`);
  };

  // Search handler
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value) {
      navigate(`/products?search=${e.target.value}`);
    } else {
      navigate('/products');
    }
  };

  // Brand filter handler
  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    if (e.target.value) {
      navigate(`/products?brand=${e.target.value}`);
    } else {
      navigate('/products');
    }
  };

  // Price range handler
  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
    navigate(`/products?maxPrice=${e.target.value}`);
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedBrand('');
    setPriceRange(5000);
    navigate('/products');
  };

  return (
    <>
      <div className='bg-gray-100 mt-10 rounded-md h-max p-4 w-56'>
        
        {/* Search */}
        <input 
          type="text" 
          placeholder='Search products...' 
          value={searchQuery}
          onChange={handleSearch}
          className='bg-white p-2 rounded-md border-gray-400 border-2 w-full' 
        />

        {/* Category */}
        <h1 className='mt-5 font-semibold text-xl'>Category</h1>
        <div className='flex flex-col gap-2 mt-3'>
          {uniqueCategories?.map((item, i) => {
            return (
              <button 
                key={i} 
                onClick={() => handleCategoryClick(item)}
                className={`text-left p-2 rounded-md border-gray-400 border-2 transition-all 
                  ${currentCategory.toLowerCase() === item.toLowerCase() 
                    ? 'bg-rose-500 text-white' 
                    : 'bg-white hover:bg-rose-500 hover:text-white'
                  }`}
              >
                {item}
              </button>
            )
          })}
        </div>

        {/* Brand */}
        <h1 className='mt-5 font-semibold text-xl'>Brand</h1>
        <select 
          value={selectedBrand}
          onChange={handleBrandChange}
          className='bg-white p-2 rounded-md border-gray-400 border-2 w-full mt-3 mb-5'
        >
          <option value="">All Brands</option>
          {brandData?.map((item, i) => {
            return <option key={i} value={item}>{item}</option>
          })}
        </select>

        {/* Price Range */}
        <h1 className='mt-5 font-semibold text-xl'>Price Range</h1>
        <div className='flex flex-col mt-3 gap-2'>
          <label>Max Price: ${priceRange}</label>
          <input 
            type="range" 
            min="0" 
            max="5000" 
            value={priceRange}
            onChange={handlePriceChange}
            className='accent-rose-500'
          />
          <div className='flex justify-between text-xs text-gray-500'>
            <span>$0</span>
            <span>$5000</span>
          </div>
        </div>

        {/* Reset Button */}
        <button 
          onClick={resetFilters}
          className='bg-rose-500 text-white rounded-md px-3 py-2 mt-5 cursor-pointer w-full hover:bg-rose-600 transition'
        >
          Reset Filters
        </button>
      </div>
    </>
  )
}

export default FilterSidebar