import React from 'react'
import Hero from '../component/Hero/Hero'
import ProductDisplay from '../component/ProductDisplay/ProductDisplay'
import Testimonial from '../component/Testimonial/Testimonial'
import Map from '../component/Map/Map'

const Home = () => {
  return (
    <div>
      <Hero/>
      <ProductDisplay title={"Art Basin"}/>
      <ProductDisplay title={"Kitchen Stove"}/>
      <ProductDisplay title={"Kitchen Handles"}/>
      <Testimonial/>
      <Map/>
    </div>
  )
}

export default Home
