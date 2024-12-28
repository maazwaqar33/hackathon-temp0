import React from 'react'
import HeroSection from '../components/HeroSection'
import Filter from '../components/Filter'
import Product from '../components/Product'
import Offer from '../components/Offer'

export default function Shop() {
  return (
    <div>
      <HeroSection
        heading="Shop"
        subheading="Home Shop"
      />
      <Filter/>
      <Product/>
      <Offer/>
    </div>
  )
}
