import React from 'react'
import { FaShippingFast, FaLock, FaUndo, FaHeadset, FaTruck } from 'react-icons/fa';



const features = [
    {icon:  FaTruck, title: "Free Shipping", description: "Enjoy free shipping on all orders over $50."},
    {icon:  FaLock, title: "Secure Payment", description: "Your payment information is processed securely."},
    {icon: FaUndo , title: "Easy Returns", description: "Hassle-free returns within 30 days of purchase."},
    {icon: FaHeadset , title: "24/7 Support", description: "Our support team is here to help you anytime."},
]
const Features = () => {

  return (
    <>
    <div className='bg-gray-100 py-8 px-4 sm:px-6  lg:px-8'>
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 gap-y-8  sm:grid-cols-4 lg:gap-x-8'>
                    {features.map((feature, index)=>{
                        return <div key={index} className='flex items-center justify-center text-center sm:text-left'>
                            <feature.icon  className=' shrink-0 h-10 w-10 text-gray-600' aria-hidden="true" />
                            <div className='ml-4'>
                                <p className='text-base font-medium text-gray-900'> {feature.title}</p>
                                <p className='mt-1 text-sm text-gray-500'> {feature.description}</p>
                            </div>
                           
                        </div>
                    })}
            </div>

        </div>

    </div>
    </>
  )
}

export default Features