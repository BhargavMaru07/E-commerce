import React from 'react'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Layout from '../../components/layout/Layout'

function AllProducts() {
  return (
    <Layout>

      <Filter/>
      <ProductCard/>
    
    </Layout>
  )
}

export default AllProducts