import React, { useState } from 'react';
import './CSS/LoginSignUp.css';

function LoginSignUp() {
    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
    });

    const login = async () => {
        console.log("Login Function Executed...", formData);
        let responseData;
        await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => responseData = data);

        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            alert("Login Successful.");
            window.location.replace("/");
        } else {
            alert(responseData.errors);
            alert("Login Failed. Please try again");
        }
    };

    const signup = async () => {
        console.log("Signup Function Executed...", formData);
        let responseData;
        await fetch('http://localhost:4000/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => responseData = data);

        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            alert("Registration Successful. You can now Login");
            window.location.replace("/");
        } else {
            alert(responseData.errors);
            alert("Registration Failed. Please try again");
        }
    };

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    };

    return (
        <div className='loginSignup'>
            <div className='loginSignUp-Container'>
                <h1>{state}</h1>
                <div className="loginSignUp-fields">
                    {state === "Sign Up" && (
                        <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Enter Your Name' />
                    )}
                    <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
                    <input type="password" name='password' value={formData.password} onChange={changeHandler} placeholder='Password' />
                </div>
                <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>
                {state === "Sign Up" ? (
                    <p className='loginsignup-login'>Already have an account? <span onClick={() => setState("Login")}>Login Here</span></p>
                ) : (
                    <p className='loginsignup-login'>Don't have an account? <span onClick={() => setState("Sign Up")}>Sign Up Here</span></p>
                )}
                <div className='loginsignUp-agree'>
                    <input type="checkbox" />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    );
}

export default LoginSignUp;
