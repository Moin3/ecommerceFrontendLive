import React from 'react'
import BlogSingleMainPage from '../../components/BlogMainSinglePage/BlogSingleMainPage'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'



const BlogSinglePage = () => {
  return (
    <div className='wrapper'>
      <header className='header'>
        <Header />
      </header>
      <main className='bs-main'>
        <BlogSingleMainPage />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}


export default BlogSinglePage