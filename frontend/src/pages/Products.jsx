import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/DataContext.jsx'
import { useSearchParams } from 'react-router-dom'
import FilterSidebar from '../components/FilterSidebar.jsx'
import Loading2 from "../assets/Loading2.mp4"
import ProductCard from '../components/ProductCard.jsx'
import Pagination from '../components/Pagination.jsx'

const Products = () => {
  const { data, fetchAllData } = useContext(DataContext);
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();

  // Get filters from URL
  const categoryFromURL = searchParams.get('category');
  const searchFromURL = searchParams.get('search');
  const brandFromURL = searchParams.get('brand');
  const maxPriceFromURL = searchParams.get('maxPrice');

  useEffect(() => {
    fetchAllData();
    window.scrollTo(0, 0);
  }, []);

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [categoryFromURL, searchFromURL, brandFromURL, maxPriceFromURL]);

  const pageHandler = (pageNumber) => {
    setPage(pageNumber);
  }

  // Apply all filters
  let filteredData = data;

  // Category filter
  if (categoryFromURL) {
    filteredData = filteredData?.filter(
      item => item.category?.toLowerCase() === categoryFromURL.toLowerCase()
    );
  }

  // Search filter
  if (searchFromURL) {
    filteredData = filteredData?.filter(
      item => item.title?.toLowerCase().includes(searchFromURL.toLowerCase())
    );
  }

  // Brand filter
  if (brandFromURL) {
    filteredData = filteredData?.filter(
      item => item.brand?.toLowerCase() === brandFromURL.toLowerCase()
    );
  }

  // Price filter
  if (maxPriceFromURL) {
    filteredData = filteredData?.filter(
      item => item.price <= Number(maxPriceFromURL)
    );
  }

  const dynamicData = Math.ceil(filteredData?.length / 8);

  // Check if any filter is active
  const hasActiveFilter = categoryFromURL || searchFromURL || brandFromURL || maxPriceFromURL;

  return (
    <>
      <div className='max-w-6xl mx-auto px-4 mb-10'>

        {/* Show active filters */}
        {hasActiveFilter && (
          <div className='mt-4 flex items-center gap-2 flex-wrap'>
            <span className='text-gray-600'>Filters:</span>
            
            {categoryFromURL && (
              <span className='bg-rose-600 text-white px-3 py-1 rounded-full text-sm uppercase'>
                {categoryFromURL}
              </span>
            )}
            
            {searchFromURL && (
              <span className='bg-blue-600 text-white px-3 py-1 rounded-full text-sm'>
                Search: {searchFromURL}
              </span>
            )}
            
            {brandFromURL && (
              <span className='bg-green-600 text-white px-3 py-1 rounded-full text-sm'>
                Brand: {brandFromURL}
              </span>
            )}
            
            {maxPriceFromURL && (
              <span className='bg-purple-600 text-white px-3 py-1 rounded-full text-sm'>
                Max: ${maxPriceFromURL}
              </span>
            )}
            
            <button
              onClick={() => window.location.href = '/products'}
              className='text-rose-600 hover:underline text-sm ml-2'
            >
              Clear All
            </button>
          </div>
        )}

        {filteredData?.length > 0 ? (
          <div className='flex gap-8'>
            <FilterSidebar />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1 mt-10'>
              {filteredData?.slice(page * 8 - 8, page * 8).map((item, i) => {
                return <ProductCard key={i} item={item} />
              })}
            </div>
          </div>
        ) : (
          <div className='flex gap-8'>
            <FilterSidebar />
            <div className='flex-1 flex flex-col items-center justify-center h-[400px]'>
              {data?.length > 0 ? (
                <div className='text-center'>
                  <p className='text-xl text-gray-500'>No products found 😕</p>
                  <button
                    onClick={() => window.location.href = '/products'}
                    className='mt-4 bg-rose-600 text-white px-4 py-2 rounded-lg'
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <video muted autoPlay loop className='h-60 w-60'>
                  <source src={Loading2} type="video/mp4" />
                </video>
              )}
            </div>
          </div>
        )}

        {filteredData?.length > 0 && (
          <Pagination pageHandler={pageHandler} page={page} dynamicData={dynamicData} />
        )}
      </div>
    </>
  )
}

export default Products