import React from 'react'
import './cartitems.css'
import { useState } from 'react'
import CartItem from '../CartItem/CartItem'
import Checkout from '../../pages/checkout/Checkout'

const CartItems = () => {

    const [open, setOpen] = useState(false);
            
  return (
    <div className='cis-container'>
        <div className="cis-row">
            <h2 className="cis-title">Your Cart</h2>
        </div>
        <div className="cis-row">
            <div className="cis-col">
                <div className="cis-groups">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />


                </div>
            </div>
            <div className="cis-col">
                <div className="cart-bill">
                    <h2 className="bill-title">My Bill</h2>
                    <div className="bill-groups">
                        <div className="bill-group">
                            <span>Product 1</span>
                            <span>$400.00</span>
                        </div>
                        <div className="bill-group">
                            <span>Product 1</span>
                            <span>$400.00</span>
                        </div>
                    </div>
                    <div className="bill-total">
                        <div className="bill-group">
                            <span>SubTotal:</span>
                            <span>$400.00</span>
                        </div>
                        <div className="bill-group">
                            <span>Tax 20%:</span>
                            <span>$80.00</span>
                        </div>
                        <div className="bill-group">
                            <h3>Total:</h3>
                            <h3>$480.00</h3>
                        </div>
                    </div>
                    <div className="bill-btn">
                        <button onClick={() => setOpen(true)}>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
        {open && <Checkout setOpen={setOpen} />}
    </div>
  )
}

export default CartItems