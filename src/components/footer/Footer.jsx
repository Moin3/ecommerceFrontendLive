import React from 'react'
import './footer.css'
import {FiInstagram,FiTwitter} from 'react-icons/fi'
import {ImPinterest2,ImFacebook} from 'react-icons/im'
import {GoLocation} from 'react-icons/go'
import {ImPhone} from 'react-icons/im'
import {GrMail} from 'react-icons/gr'


const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className='left'>
            <div className='logo'>GadgetHunter</div>
            <hr />
            <div className='desc'>E-commerce Website. A website that allows people to buy and sell physical goods, services, and digital products over the 
            internet rather than at a brick-and-mortar location. 
            </div>
            <div className='socialIcons'>
                <div className='socialIcon' style={{backgroundColor:"#4267B2"}}>
                  <ImFacebook/>
                </div>
                <div className='socialIcon' style={{backgroundColor:"#C13584"}}>
                    <FiInstagram/>
                </div>
                <div className='socialIcon' style={{backgroundColor:"#1DA1F2"}} >
                    <FiTwitter/>
                </div>
                <div className='socialIcon' style={{backgroundColor:"#E60023"}} >
                    <ImPinterest2/>
                </div>
            </div>
        </div>
        
        <div className='middle'>
            <div className='midTitle'>Usefull links</div>
            <hr />
            <div className='list'>
                <div className='listItem'>Home</div>
                <div className='listItem'>Electronics</div>
                <div className='listItem'>Cloths</div>
                <div className='listItem'>Medicine</div>
                <div className='listItem'>White List</div>
                <div className='listItem'>Order traking</div>
                <div className='listItem'>Cart</div>
                <div className='listItem'>My Accounts</div>
                <div className='listItem'>Terms</div>
                <div className='listItem'>Registration</div>
                <div className='listItem'>About us</div>

            </div>

        </div>
        <div className='right'>
            <div className='hedding'>Contact</div>
            <hr />
            <div className='contactInfo'>
                <div className='address'>
                    <GoLocation/> <span>Kurigram,Rangpur</span>
                </div>
                <div className='phoneNumber'>
                    <ImPhone/><span>+880 160000001 </span>
                </div>
                <div className='mail'>
                    <GrMail/><span>moinislalm667@gmail.com</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer