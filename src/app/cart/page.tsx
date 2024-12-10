import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import HeroSection from '../components/HeroSection'
import Checkout from '../components/Checkout'
import Offer from '../components/Offer'

export default function Cart() {
  return (
    <div>
      <Header/>
      <HeroSection heading="Cart"
        subheading="Home Cart"
      />
      <Checkout/>
      <Offer/>
      <Footer/>
    </div>
  )
}
