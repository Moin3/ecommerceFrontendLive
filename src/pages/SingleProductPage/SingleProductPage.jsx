import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import ProductDetails from '../../components/productDetails/ProductDetails'


const SingleProductPage = () => {
  return (
    <div className='wrapper'>
      <header className='header'>
        <Header />
      </header>
      <main className='sp-main'>
        <ProductDetails />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}
export default SingleProductPage