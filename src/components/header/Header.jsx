import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import {AiOutlineHeart, AiOutlineLogin, AiOutlineShoppingCart} from 'react-icons/ai'


const Header = () => {
  return (
    <div className='h-container'>
        <div className="h-row">
            <div className="h-col1">
                <div className="h-logo">
                    <Link to="/" className='logo'>GadgetHunter</Link>
                </div>
                <div className="h-menu">
                    <ul className='menu-item'>
                        <li>
                            <Link to="/" className='menu-link'>Home</Link>
                        </li>
                        <li>
                            <Link to="/shop" className='menu-link'>Shop</Link>
                        </li>
                        <li>
                            <Link to="/blog" className='menu-link'>Blog</Link>
                        </li>
                        <li>
                            <Link to="/account" className='menu-link'>Account</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="h-col2">
                <div className="h-anotherMenu">
                    <ul className='menu-anotherItem'>
                        <li>
                            <Link to="/login" className='menu-anotherLink'>
                                <div className="menu-div">
                                    <AiOutlineLogin/>
                                </div>
                                {/* <span>Login</span> */}
                            </Link>
                        </li>
                        <li>
                            <Link to="/wish" className='menu-anotherLink'>
                                <div className="menu-div">
                                    <AiOutlineHeart/>
                                    <span className="menu-badge">0</span>
                                </div>
                                {/* <span>Wishlist</span> */}
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart" className='menu-anotherLink'>
                                <div className="menu-div">
                                    <AiOutlineShoppingCart/>
                                    <span className="menu-badge">0</span>
                                </div>
                                {/* <span>Bag</span> */}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header