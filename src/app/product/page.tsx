import React from 'react'
import ProductDetail from '../components/ProductDetail'
import ProdDesc from '../components/ProdDesc'
import TopPicks from '../components/toppick'

export default function SingleProduct() {
  return (
    <div>
      <ProductDetail/>
      <ProdDesc/>
      <TopPicks/>
    </div>
  )
}
