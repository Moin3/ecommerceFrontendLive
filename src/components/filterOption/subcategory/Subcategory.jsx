import React from 'react'
import './subcategory.css'

const Subcategory = () => {
  return (
    <div className='fsc-filterDiv'>
        <div className="fsc-checkboxes">
            <div className="fsc-checkbox">
                <label htmlFor="dresses" className='fsc-filterLabel'>Dresses</label>
                <input type="checkbox" className='fsc-check' name="" id="dresses" />
            </div>
            <div className="fsc-checkbox">
                <label htmlFor="jeans" className='fsc-filterLabel'>Jeans</label>
                <input type="checkbox" className='fsc-check' name="" id="jeans" />
            </div>
            <div className="fsc-checkbox">
                <label htmlFor="t-shirt" className='fsc-filterLabel'>T-Shirt</label>
                <input type="checkbox" className='fsc-check' name="" id="t-shirt" />
            </div>
        </div>
    </div>
  )
}

export default Subcategory