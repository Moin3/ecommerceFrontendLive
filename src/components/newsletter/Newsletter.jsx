import React from 'react'
import './newsletter.css'
import {AiOutlineSend} from 'react-icons/ai'

const Newsletter = () => {
  return (
    <div className='newsletterContainer'>
        <h1 className='newstitle'>Newsletter</h1>
        <div className='disc'>Email us to know about any product</div>
        <div className='emailContainer'>
            <input placeholder='Your Email'/>
            <button><AiOutlineSend className='icon'/></button>
        </div>
    </div>
  )
}

export default Newsletter