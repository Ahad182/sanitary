import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-black text-gray-300 '>
      <div className="w-[80%] mx-auto py-10 grid grid-cols-1 md:grid-cols-2  gap-8">
        <div className="left ">
          <h2 className=' text-xl'>Showroom Address</h2>
          <div className='pt-4'>
          <h3 className='pt-2'>Rox Sanitary ware</h3>
          <h3 className='pt-2'>Wali Market Kangani Wala ByPass G T Road Gujranwala</h3>
          <h3 className='pt-2'>0302-2665557</h3>
          </div>
          
        </div>
        <div className="right">
        <h2 className=' text-xl'>Contact Info</h2>
        <div className="pt-4">
          <ul className='flex flex-col gap-3'>
            <li>Refund Policy</li>
            <li>Shipping Policy</li>
          </ul>
        </div>
        
        </div>
      </div>

      <div className="w-full my-10 flex flex-col justify-center items-center gap-5 text-3xl">
                <h2>Social Links</h2>
                <div className="flex gap-6">
                    <FaFacebook className='text-blue-900'/>
                    <FaInstagram className='text-red-800'/>
                    <FaWhatsapp className='text-green-800'/>
                </div>
              </div>


      <hr />
      <div className="w-[80%] mx-auto py-6 flex items-center justify-center">
        <div className="">
          © 2025, Rox Sanitary ware. All rights reserved
        </div>
      
      </div>
     
    </div>
  )
}

export default Footer
