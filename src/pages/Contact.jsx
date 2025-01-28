import React from 'react'
import { FaInstagram, FaPhone, FaVoicemail, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Map from '../component/Map/Map';
const Contact = () => {
  return (
    <div className='w-full my-20'>
      <div className="w-[90%] md:w-[80%] mx-auto">
        <h1 className='text-3xl my-10 font-bold text-green-800'>Contact</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center justify-between gap-6 hover:text-red-800 py-14 text-xl shadow-lg shadow-black text-green-800 rounded-3xl">
                <FaPhone className='text-5xl'/>
                <h3 >03084808000</h3>
            </div>

            <div className="flex flex-col items-center justify-between gap-6 hover:text-red-800 py-14 text-xl shadow-lg shadow-black text-green-800 rounded-3xl">
                <FaWhatsapp className='text-5xl'/>
                <h3 >03084808000</h3>
            </div>

            <div className="flex flex-col items-center justify-between gap-6 hover:text-red-800 py-14 text-xl shadow-lg shadow-black text-green-800 rounded-3xl">
                <FaInstagram className='text-5xl'/>
                <h3 >03084808000</h3>
            </div>

            <div className="flex flex-col items-center justify-between gap-6 hover:text-red-800 py-14 text-xl shadow-lg shadow-black text-green-800 rounded-3xl">
                <MdEmail className='text-5xl'/>
                <h3 >rox@gmail.com</h3>
            </div>
        </div>

        <div className="w-[100%] mx-auto mt-8">
            <h1 className='text-xl md:text-4xl font-bold text-center mt-20'>Location(Gujranwala)</h1>
            <p className='text-center pt-2 font-medium'>Wali Market Kangani Wala ByPass G T Road Gujranwala</p>
            <Map/>

        </div>
      </div>
    </div>
  )
}

export default Contact
