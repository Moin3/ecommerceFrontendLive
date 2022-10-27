import React from 'react'
import './products.css'
import ProductItem from '../productitem/ProductItem'

const Products = () => {
  return (
    <div className="Container">
        <div className="titleSec">
            <div className="title"><h1>New Arrivals</h1></div>
        </div>
        <div className="productSec">
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
        </div>

    </div>
  )
}

export default Products