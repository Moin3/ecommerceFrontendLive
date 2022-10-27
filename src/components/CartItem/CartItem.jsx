import React from 'react'
import './cartitem.css'
import {Link} from 'react-router-dom'
import {AiOutlineEye,AiOutlineHeart,AiOutlineShoppingCart,AiOutlineDelete} from 'react-icons/ai'

const CartItem = () => {
  return (
    <div className='ci-container'>
        <div className="imgContainer">
            <Link to='/product:1233455'>
            <img className='productImg' src="https://images.unsplash.com/photo-1611004061856-ccc3cbe944b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVsbWV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
            </Link>
            <div className="iconDiv">
                <Link to='/product:1233455'>
                    <AiOutlineEye className='icon'/>
                </Link>
                <AiOutlineHeart className='icon'/>
                <AiOutlineShoppingCart className='icon'/>
            </div>
            <button className='d-btn'><AiOutlineDelete/></button>
        </div>
        
        <div className="information">
            <div className="category">Helmet</div>
            <div className="infoTitle">Fitness Watch</div>
        </div>
        <div className="ratePrice">
                <div className="price">$400</div>
                <div className="ratting">4★</div>
        </div>
        <div className="ci-quantityDiv">
                <button className='c-minus'>-</button>
                <span className='c-quantity'>1</span>
                <button className='c-plus'>+</button>
            </div>
    </div>
  )
}

export default CartItem