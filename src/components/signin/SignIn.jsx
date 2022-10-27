import React from 'react'
import './signin.css'
import {Link} from 'react-router-dom'

const SignIn = () => {
  return (
    <div className='signInContainer'>
        <div className='wrapper'>
            <h1 className='signInTitle'>SIGN IN</h1>
            <form>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <div className='aggriment'>Can't Remember Password?<span style={{fontWeight:"700"}}>click here</span></div>
                <Link to='/register' className='registerLink'>
                    <div className='aggriment'><span style={{fontWeight:"600",fontSize:"11px"}}>CREATE A NEW ACCOUNT</span></div>
                </Link>
                <button>Login</button>
            </form>
        </div>
    </div>
  )
}

export default SignIn