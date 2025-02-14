import React from 'react'
import './Login.css';


function Login() {
  return (
    <>
    <div className='border'>
      <div className='login'>
        <h3>Login:  <input type="text" placeholder='enter username'/></h3>
        <h3>Password:  <input type="password" placeholder='enter password'/></h3>
        <button>Login</button>
        <button>Signup</button>
        <a href='' >Forgot password</a>
        <p>Remember me</p>
      </div>
    </div>
    </>
  )
}

export default Login