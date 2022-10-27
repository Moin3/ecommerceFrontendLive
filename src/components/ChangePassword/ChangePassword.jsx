import React from 'react'
import './changePassword.css'
import {Link} from 'react-router-dom'

const ChangePassword = () => {
  return (
    <div className='signInContainer'>
        <div className='wrapper'>
            <h1 className='signInTitle'>Change Password</h1>
            <form>
                <input type='password' placeholder=' Old Password'/>
                <input type='password' placeholder='New Password'/>
                <input type='password' placeholder='Retype New password'/>
                <button>Update</button>
            </form>
        </div>
    </div>
  )
}

export default ChangePassword