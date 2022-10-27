import React from 'react'
import './wish.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import WishList from '../../components/wishlist/WishList'

const Wish = () => {
  return (
    <div className='wrapper'>
      <header className='header'>
        <Header />
      </header>
      <main className='w-main'>
        <WishList />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default Wish