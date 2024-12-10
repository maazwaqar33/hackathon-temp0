import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import HeroSection from '../components/HeroSection'
import Offer from '../components/Offer'
import GetInTouch from '../components/GetInTouch'

export default function Contact() {
  return (
    <div>
      <Header/>
      <HeroSection heading="Contact"
        subheading="Home Contact"
      />
      <GetInTouch/>
      <Offer/>
      <Footer/>
    </div>
  )
}
