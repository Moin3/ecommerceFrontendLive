import React from 'react'
import './aboutMe.css'

const AboutMe = () => {
  return (
    <div className='am-container'>
        <div className="am-row">
            <h2 className="f-title">About Me</h2>
        </div>
        <div className="am-row">
            <div className="am-left">
                <img className='my-img' src="https://thumbs.dreamstime.com/b/faceless-businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-85824471.jpg" alt="" />
            </div>
            <div className="am-right">
                <h3 className="am-fullName">Moin</h3>
            </div>
        </div>
    </div>
  )
}

export default AboutMe