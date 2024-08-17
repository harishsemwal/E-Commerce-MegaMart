import React from 'react'
import './CSS/LoginSignUp.css';
function LoginSignUp() {
  return (
    <div className='loginSignup'>
        <div className='loginSignUp-Container'>
            <h1>Sign Up</h1>
            <div className="loginSignUp-fields">
                <input type="text" placeholder='Enter Your Name' />
                <input src="email" placeholder = 'Email Address' alt="" />
                <input type="password" placeholder='Password' name="" id="" />
            </div>
            <button>Continue</button>
            <p className='loginsignup-login'>
                Already have an account? <span>Login Here </span>
            </p>
            <div className='loginsignUp-agree'>
                <input type="checkbox" name='' id='' />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
        </div>

    </div>
  )
}

export default LoginSignUp