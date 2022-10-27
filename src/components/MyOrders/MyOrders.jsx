import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillEye} from 'react-icons/ai'
import './myOrders.css'

const MyOrders = () => {
  return (
    <div className='mo-container'>
        <div className="mo-row">
            <h2 className="mo-title">My Orders</h2>
        </div>
        <div className="mo-row">
            <div className="mo-groups">
                <div className="mo-group">
                    <h4>Order ID: 23423423434224 </h4>
                    <Link to="/order" className='mo-link'><AiFillEye/></Link>
                </div>
                <div className="mo-group">
                    <h4>Order ID: 23423423434224 </h4>
                    <Link to="/order" className='mo-link'><AiFillEye/></Link>
                </div>
                <div className="mo-group">
                    <h4>Order ID: 23423423434224 </h4>
                    <Link to="/order" className='mo-link'><AiFillEye/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyOrders