import React from 'react'
import './home.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Intro from '../../components/intro/Intro'
import HomeBlog from '../../components/homeBlog/HomeBlog'
import Products from '../../components/products/Products'
import Newsletter from '../../components/newsletter/Newsletter'

const Home = () => {
  return (
    <div className='wrapper'>
        <div className="header">
          <Header />
        </div>
      <main className='main'>
          <Intro />
          <HomeBlog />
          <Products/>
          <Newsletter/>
          
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default Home