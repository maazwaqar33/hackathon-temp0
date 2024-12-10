import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import ProductDetail from '../components/ProductDetail'
import ProdDesc from '../components/ProdDesc'
import TopPicks from '../components/toppick'

export default function SingleProduct() {
  return (
    <div>
      <Header/>
      <ProductDetail/>
      <ProdDesc/>
      <TopPicks/>
      <Footer/>
    </div>
  )
}
