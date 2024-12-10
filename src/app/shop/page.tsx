import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import HeroSection from '../components/HeroSection'
import Filter from '../components/Filter'
import Product from '../components/Product'
import Offer from '../components/Offer'

export default function Shop() {
  return (
    <div>
      <Header/>
      <HeroSection
        heading="Shop"
        subheading="Home Shop"
      />
      <Filter/>
      <Product/>
      <Offer/>
      <Footer/>
    </div>
  )
}
