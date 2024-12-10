import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import HeroSection from '../components/HeroSection'
import AuthSection from '../components/AuthSection'
import Offer from '../components/Offer'

export default function Profile() {
  return (
    <div>
     <Header/>
     <HeroSection
        heading="My Account"
        subheading="Home Account"
      />
      <AuthSection/>
      <Offer/>
      <Footer/>
    </div>
  )
}
