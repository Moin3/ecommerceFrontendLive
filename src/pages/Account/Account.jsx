import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MyAccount from '../../components/myAccount/MyAccount'

const Account = () => {
  return (
    <div className='wrapper'>
      <header className='header'>
        <Header />
      </header>
      <main className='a-main'>
        <MyAccount />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default Account