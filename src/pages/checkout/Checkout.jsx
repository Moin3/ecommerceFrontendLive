import React from 'react'
import './checkout.css'

const Checkout = ({setOpen}) => {
  return (
    <div className='co-container'>
        <form>
            <h5 className='co-title'> You will pay after delivery! </h5>
            <div className="close-form" onClick={() => setOpen(false)}>X</div>
            <div className="form-group">
                <label htmlFor="name" className='labels'>Name</label>
                <input required type="text" id='name'/>
            </div>
            <div className="form-group">
                <label htmlFor="email" className='labels'>Email</label>
                <input required type="text" id='email'/>
            </div>
            <div className="form-group">
                <label htmlFor="address" className='labels'>Address</label>
                <input required type="text" id='address'/>
            </div>
            <div className="form-group">
                <label htmlFor="phone" className='labels'>Phone</label>
                <input required type="text" id='phone'/>
            </div>
            <div className="co-btn">
                <button type='submit' className='labels'>Order </button>
            </div>
        </form>
    </div>
  )
}

export default Checkout