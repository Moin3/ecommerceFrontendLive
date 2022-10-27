import React from 'react'
import './cart.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import CartItems from '../../components/CartItems/CartItems'


const Cart = () => {
  return (
    <div className='wrapper'>
      <header className='header'>
        <Header />
      </header>
      <main className='cart-main'>
        <CartItems />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}
export default Cart