import React from 'react'
import './productDetails.css'
import SliderImage from 'react-zoom-slider';



const data = [
    {
      image: 'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-1-org.jpg',
      text: 'img1'
    },
    {
      image: 'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-4-org.jpg',
      text: 'img2'
    },
    {
      image: 'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-10-org.jpg',
      text: 'img3'
    }
  ];

const ProductDetails = () => {
  return (
    <div className='pd-container'>
    <div className="pd-row">
        <div className="pd-col">
            <div className="pd-imageDiv">
                <SliderImage 
                    data={data} 
                    width="400px" 
                    showDescription={false} 
                    direction="right" 
                />
            </div>
        </div>
        <div className="pd-col">
            <div className="pd-groups">
                <div className="pd-group">
                    <h3 className="pd-title">Product One</h3>
                </div>
                <div className="pd-group">
                    <span className="pd-category">Women</span>
                    <span className="pd-subcategory">Dresses</span>
                </div>
                <div className="pd-group">
                    <p className="pd-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione saepe eius modi adipisci rem, dolorum sint neque in repellat tempore accusantium quas doloremque laborum ut magni corrupti deserunt odio earum.</p>
                </div>
                <div className="pd-group">
                    <p className="pd-quantity">Quantity: <span className='pd-quantityNumber'>1</span></p>
                </div>
                <div className="pd-group">
                    <div className="pd-otherAction">
                        <div className="pd-size">
                            <h4 className="pd-sizeTitle">Sizes:</h4>
                            <div className="pd-sizeDiv">
                                <input type="radio" id="s" name="size" value="S" />
                                <label htmlFor="s">S</label>
                                <input type="radio" id="l" name="size" value="L" />
                                <label htmlFor="l">L</label>  
                                <input type="radio" id="xl" name="size" value="XL" />
                                <label htmlFor="xl">XL</label>
                            </div>
                        </div>
                        <div className="pd-color">
                            <h4 className="pd-sizeTitle">Colors:</h4>
                            <div className="pd-sizeDiv">
                                <input type="radio" id="blue" name="color" value="Blue" />
                                <label htmlFor="blue">Blue</label>
                                <input type="radio" id="silver" name="color" value="Silver" />
                                <label htmlFor="silver">Silver</label>  
                                <input type="radio" id="white" name="color" value="White" />
                                <label htmlFor="white">White</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pd-group">
                    <div className="pd-buttonsgroup">
                        <button className='pd-wish'>Add to Wish</button>
                        <button className='pd-cart'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ProductDetails