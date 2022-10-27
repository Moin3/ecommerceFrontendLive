import React from 'react'
import './shopproducts.css'
import ProductItem from '../productitem/ProductItem'


const ShopProducts = () => {
  return (
    <div className='spr-container'>
        <div className="spr-row">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />

        </div>
    </div>
  )
}

export default ShopProducts