import React from 'react'
import BlogList from '../../components/BlogList/BlogList'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const Blog = () => {
  return (
    <div className='wrapper'>
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
        <BlogList />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default Blog