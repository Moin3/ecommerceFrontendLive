import React from 'react'
import './register.css'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div className='registerContainer'>
        <div className='wrapper'>
            <h1 className='registerTitle'>Register</h1>
            <form>
                <input type='name' placeholder='Username'/>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <input type='password' placeholder='Retype Password'/>
                <div className='aggriment'>Do you have an account?
                    <Link to='/login' className='registerLink'>
                        <div className='aggriment'><span style={{fontWeight:"700"}}>click here</span></div>
                    </Link>
                </div>
                <button>Register</button>
            </form>
        </div>
    </div>
  )
}

export default Register