import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-fade"
import { Autoplay,EffectFade } from 'swiper/modules';
import kitchenhero from "../../assets/images/kitchenhero.jpg"
import bathroom from "../../assets/images/bathroommain.jpg"
import cardimage from "../../assets/images/wooden.jpg"

const Hero = () => {
  return (
    <div className='w-[100%] h-[80vh]  bg-[#FFDBAC] '>
      <Swiper
    spaceBetween={30}
    speed={3000}
    autoplay={{delay: 4000, disableOnInteraction: false}}
    effect={"fade"}
    fadeEffect={{crossFade: true}}
    modules={[Autoplay, EffectFade]}
    className="mySwiper "
   >
      <SwiperSlide className='w-full   px-4'>
        <div className="flex  items-center justify-between flex-col lg:flex-row mx-auto gap-4 w-[90%] h-[80vh] ">
            <div className="left w-full lg:w-1/2 flex items-start  lg:items-center justify-center   h-full ">
                <div className="flex flex-col gap-5 px-7 ">
                    <h1 className='text-3xl lg:text-5xl font-bold '>We Deal In <span className='text-green-600'>Kitchen Accessories !</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ab!</p>
                    <button className='px-3 py-2 rounded-xl bg-green-400 mb-7 lg:w-36'>Learn More</button>
                </div>
            </div>
            <div className="right w-[80%] h-full lg:w-1/2 flex items-start  lg:items-center justify-center  ">
                <img src={kitchenhero} alt=""  className='w-full h-[70%] rounded-2xl rotate-[10deg] shadow-2xl shadow-black ding'/>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='w-full   '>
        <div className="flex  items-center justify-between gap-4 flex-col lg:flex-row mx-auto w-[90%] h-[80vh] ">
            <div className="left w-full lg:w-1/2 flex items-start  lg:items-center justify-center   h-full ">
                <div className="flex flex-col gap-5 px-7">
                    <h1 className='text-3xl lg:text-5xl font-bold'>We Deal In <span className='text-green-600'>Bathroom Accessories !</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ab!</p>
                    <button className='px-3 py-2 rounded-xl bg-green-400 lg:w-36'>Learn More</button>
                </div>
            </div>
            <div className="right w-[80%] h-full lg:w-1/2 flex items-start  lg:items-center justify-center  ">
                <img src={bathroom} alt=""  className='w-full h-[70%] rounded-2xl shadow-2xl shadow-black rotate-[10deg]'/>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='w-full   '>
        <div className="flex  items-center justify-between flex-col gap-4 lg:flex-row mx-auto w-[90%] h-[80vh] ">
            <div className="left w-full lg:w-1/2 flex items-start  lg:items-center justify-center   h-full ">
                <div className="flex flex-col gap-5 px-7">
                    <h1 className='text-3xl lg:text-5xl font-bold'>We Deal In <span className='text-green-600'>Wooden Accessories !</span></h1>
                    <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ab!</p>
                    <button className='px-3 py-2 rounded-xl bg-green-400 lg:w-36 text-white'>Learn More</button>
                </div>
            </div>
            <div className="right w-[80%] h-full lg:w-1/2 flex   items-center justify-center px-4 ">
                <img src={cardimage} alt=""  className='w-full h-[70%] rounded-2xl rotate-[10deg] shadow-2xl shadow-black  object-cover object-center'/>
            </div>
        </div>
      </SwiperSlide>
     
      
   </Swiper>
    </div>
  )
}

export default Hero
