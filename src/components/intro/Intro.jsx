import React from 'react'
import './intro.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom'

const Intro = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='i-container'>

      <Slider {...settings}>
          <div className="imgDiv">
              <p>20% Discount in all Product
                <Link to='/shop'>
                   <button>Shop Now</button>
                </Link>
                </p>  
              <img src="https://images.unsplash.com/photo-1589070127509-ea788341cc5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="" />
          </div>
          <div className="imgDiv">
              <p className='secondSlide'>20% Discount in all Product
                <Link to='/shop'>
                   <button>Shop Now</button>
                </Link>
              </p>
              <img src="https://images.unsplash.com/photo-1580943943004-6a4697b70059?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          </div>
          <div className="imgDiv">
              <p>20% Discount in all Product
                <Link to='/shop'>
                   <button>Shop Now</button>
                </Link>
              </p>
              <img src="https://images.unsplash.com/photo-1507804935366-720e78633272?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" />
          </div>
      </Slider>

    </div>
  )
}

export default Intro