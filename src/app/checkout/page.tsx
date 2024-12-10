import React from 'react'
import Header from '../components/header'
import Offer from '../components/Offer'
import Footer from '../components/footer'
import BillingDetails from '../components/BillingDetails'
import HeroSection from '../components/HeroSection'

export default function Checkout() {
  return (
    <div>
      <Header/>
      <HeroSection
        heading="Checkout"
        subheading="Home Checkout"
      />
      <BillingDetails/>
      <Offer/>
      <Footer/>
    </div>
  )
}
