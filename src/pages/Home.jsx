import React from 'react'
import Hero from '../component/Hero/Hero'
import ProductDisplay from '../component/ProductDisplay/ProductDisplay'
import Testimonial from '../component/Testimonial/Testimonial'

const Home = () => {
  return (
    <div>
      <Hero/>
      <ProductDisplay title={"Art Basin"}/>
      <ProductDisplay title={"Art Basin"}/>
      <ProductDisplay title={"Art Basin"}/>
      <Testimonial/>
    </div>
  )
}

export default Home
