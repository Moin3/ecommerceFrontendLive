import React from 'react'
import Category from '../filterOption/category/Category'
import Price from '../filterOption/price/Price'
import Search from '../filterOption/search/Search'
import Star from '../filterOption/star/Star'
import Subcategory from '../filterOption/subcategory/Subcategory'
import './shopfilter.css'

const ShopFilter = () => {
  return (
    <>
        <div className='f-group'>
            <span className="f-groupTitle">Search</span>
            <Search />
        </div>
        <div className='f-group'>
            <span className="f-groupTitle">Category</span>
            <Category />
        </div>
        <div className='f-group'>
            <span className="f-groupTitle">SubCategory</span>
            <Subcategory />
        </div>
        <div className='f-group'>
            <span className="f-groupTitle">Price</span>
            <Price />
        </div>
        <div className='f-group'>
            <span className="f-groupTitle">Star Rating</span>
            <Star />
        </div>
    </>
  )
}

export default ShopFilter