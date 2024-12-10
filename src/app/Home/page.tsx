import React from 'react'
import Hero from '../components/hero'
import ProductSection from '../components/section'
import TopPicks from '../components/toppick'
import NewArrivals from '../components/NewArrivals'
import Blogs from '../components/blogs'
import InstaSEC from '../components/instaSEC'

export default function Home() {
  return (
    <div>
      <Hero/>
      <ProductSection/>
      <TopPicks/>
      <NewArrivals/>
      <Blogs/>
      <InstaSEC/>
    </div>
  )
}
