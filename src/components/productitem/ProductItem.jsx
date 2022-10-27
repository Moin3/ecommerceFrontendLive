import React from 'react'
import './productitem.css'
import {Link} from 'react-router-dom'
import {AiOutlineEye,AiOutlineHeart,AiOutlineShoppingCart} from 'react-icons/ai'

const ProductItem = () => {
  return (
    <div className='container'>
        <div className="imgContainer">
            <Link to='/product:38990540'>
            <img className='productImg' src="https://images.unsplash.com/photo-1611004061856-ccc3cbe944b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVsbWV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
            </Link>
        <div className="iconDiv">
            <Link to='/product:38990540'>
                <AiOutlineEye className='icon'/>
            </Link>
            <AiOutlineHeart className='icon'/>
            <AiOutlineShoppingCart className='icon'/>
        </div>
        </div>
        
        <div className="information">
            <div className="category">Helmet</div>
            <div className="infoTitle">Fitness Watch</div>
        </div>
        <div className="ratePrice">
                <div className="price">$400</div>
                <div className="ratting">4★</div>
        </div>
    </div>
  )
}

export default ProductItem