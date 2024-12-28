import React from 'react'
import HeroSection from '../components/HeroSection'
import AuthSection from '../components/AuthSection'
import Offer from '../components/Offer'

export default function Profile() {
  return (
    <div>
     <HeroSection
        heading="My Account"
        subheading="Home Account"
      />
      <AuthSection/>
      <Offer/>
    </div>
  )
}
