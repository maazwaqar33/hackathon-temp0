import React from 'react'
import Offer from '../components/Offer'

import BillingDetails from '../components/BillingDetails'
import HeroSection from '../components/HeroSection'

export default function Checkout() {
  return (
    <div>
      <HeroSection
        heading="Checkout"
        subheading="Home Checkout"
      />
      <BillingDetails/>
      <Offer/>
    </div>
  )
}
