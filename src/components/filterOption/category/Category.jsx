import React from 'react'
import './category.css'

const Category = () => {
  return (
    <div className='fc-filterDiv'>
        <div className="fc-buttons">
            <button className='fc-button'>All</button>
            <button className='fc-button'>Men</button>
            <button className='fc-button'>Women</button>
            <button className='fc-button'>Kids</button>
        </div>
    </div>
  )
}

export default Category