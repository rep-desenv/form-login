import React from 'react'
import './style.css'
import { FaUser, FaLock } from "react-icons/fa";


const LoginForm = () => {
    return (
        <div className='wrapper'>
            
            <form action="">            
                <div className="login-logo" />  
                {/* <h1>Login</h1>            */}
                <div className="input-box">
                    <input type="text" placeholder='' required/>
                    <span>Username</span>
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='' required/>
                    <span>Password</span>
                    <FaLock className='icon'/>
                </div>
                <div className="remember-forgot">
                    <label> <input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type='submit'>Login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="#">Resgiter</a></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm