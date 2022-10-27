import React from 'react'
import './star.css'

const Star = () => {
  return (
    <div className='sf-filterDiv'>
        <div className="sf-buttons">
            <button className='sf-button star'>1★</button>
            <button className='sf-button star'>2★</button>
            <button className='sf-button star'>3★</button>
            <button className='sf-button star'>4★</button>
            <button className='sf-button star'>5★</button>
        </div>
    </div>
  )
}

export default Star