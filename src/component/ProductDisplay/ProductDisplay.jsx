import React from 'react'
import basin1 from "../../assets/images/basin/Treno-_1.png"
import basin2 from "../../assets/images/basin/Della-_1.png"
import basin3 from "../../assets/images/basin/AmsterdamFour_1.png"
import basin4 from "../../assets/images/basin/Alklora_4_1.png"
import testImage from "../../assets/images/wooden.jpg"
import ProductDisplayCard from './ProductDisplayCard'
const ProductDisplay = ({title}) => {
  return (
    <div className='w-full  pt-20 font-Crimson'>
      <div className="w-[80%] mx-auto">
        <h1 className='text-3xl  md:text-5xl font-Crimson'>{title}</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-2'>
            <ProductDisplayCard img={basin1} title={"Treno Basin"}/>
            <ProductDisplayCard img={basin2} title={"Treno Basin"}/>
            <ProductDisplayCard img={basin3} title={"Treno Basin"}/>
            <ProductDisplayCard img={basin4} title={"Treno Basin"}/>
           
        </div>
        <div className="mt-3 flex justify-center items-center">
        <button className='px-7 py-3 bg-black text-white '>View All</button>
        </div>
        

      </div>
    </div>
  )
}

export default ProductDisplay
