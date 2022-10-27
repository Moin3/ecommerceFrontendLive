import React from 'react'
import ShopFilter from '../shopFilter/ShopFilter'
import ShopProducts from '../shopProducts/ShopProducts'
import './shopmainpart.css'

const ShopMainPart = () => {
  return (
    <div className='s-container'>
        <div className="s-row">
            <h2 className="s-title">Shop</h2>
        </div>
        <div className="s-row">
            <div className="s-col">
                <h4 className="s-filters">Filters</h4>
                <div className="s-filterGroups">
                    <ShopFilter />
                   
                </div>
            </div>
            <div className="s-col">
                <ShopProducts />
            </div>
        </div>
    </div>
  )
}

export default ShopMainPart