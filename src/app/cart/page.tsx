import React from 'react'
import HeroSection from '../components/HeroSection'
import Checkout from '../components/Checkout'
import Offer from '../components/Offer'

export default function Cart() {
  return (
    <div>
      <HeroSection heading="Cart"
        subheading="Home Cart"
      />
      <Checkout/>
      <Offer/>
    </div>
  )
}
