import React from 'react'
import ProductDisplayCard from '../component/ProductDisplay/ProductDisplayCard'
import image from "../assets/images/basin/Treno-_1.png"


const Collection = () => {
  return (
    <div className='w-full pt-11'>
        <div className="w-[80%] mx-auto">
        <h1 className='text-5xl mb-5 text-center font-mono'> All Collections</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 py-4">
            {[1,2,3,4,5,6,7].map((item,index)=>{
               return(
                <ProductDisplayCard key={index} title={"basin"} img={image}/>
               )
            })}
            
        </div>
        </div>
      
    </div>
  )
}

export default Collection
