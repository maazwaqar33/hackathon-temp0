import React from 'react'
import HeroSection from '../components/HeroSection'
import Offer from '../components/Offer'
import Article from '../components/Article'

export default function Blog() {
  return (
    <div>
      <HeroSection heading="Blog"
        subheading="Home Blog"
      />
      <Article/>
      <Offer/>
    </div>
  )
}
