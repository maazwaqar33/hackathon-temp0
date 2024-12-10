import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import HeroSection from '../components/HeroSection'
import Offer from '../components/Offer'
import Article from '../components/Article'

export default function Blog() {
  return (
    <div>
      <Header/>
      <HeroSection heading="Blog"
        subheading="Home Blog"
      />
      <Article/>
      <Offer/>
      <Footer/>
    </div>
  )
}
