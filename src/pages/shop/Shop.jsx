import React from 'react'
import './shop.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ShopMainPart from '../../components/shopMainPart/ShopMainPart'


const Shop = () => {
  return (
    <div className='wrapper'>
      <header className='header'>
        <Header/>
      </header>
      <main className='main'>
        <ShopMainPart />
      </main>
      <footer className='footer'>
        <Footer/>
      </footer>
    </div>
  )
}

export default Shop