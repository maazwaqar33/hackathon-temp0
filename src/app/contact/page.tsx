import React from 'react'
import HeroSection from '../components/HeroSection'
import Offer from '../components/Offer'
import GetInTouch from '../components/GetInTouch'

export default function Contact() {
  return (
    <div>
      <HeroSection heading="Contact"
        subheading="Home Contact"
      />
      <GetInTouch/>
      <Offer/>
    </div>
  )
}
