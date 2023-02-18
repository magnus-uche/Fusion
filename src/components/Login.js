import React,{useState, useEffect, useReducer, useRef} from 'react';
import { Link } from 'react-router-dom';
import * as AiIcons from "react-icons/ai"
import {FcGoogle} from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'
import './Login.css';

const Login = ({loginbar, showLogin}) => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const {inputField} = useRef(null)

const handleChange = () => {
    const input = inputField.current.value
console.log('input :>> ', input);
setEmail(input)
}

const handleSumbit = (e) =>{
e.preventDefault()

}

  return (
    <section className={loginbar ? 'login active' : 'login'}>
    <div className="login_header">
    <h2>Login</h2>
    <Link className='Login_btn' to='#'>
    <AiIcons.AiOutlineClose onClick={showLogin}/>
    </Link>
    </div>
    <form id='login' className='form_section' method='post' onSubmit={handleSumbit}>
    <div className="email">
    <label htmlFor="" className='login_form_label' >
    Email Address or Phone Number
    </label>
    <input 
    type="text"
    name="email"
     id="email" 
     ref={inputField}
    autoComplete='username'
     onChange={handleChange}/>

    </div>
    <div className="password">
    <label htmlFor="" className='Login_form_label'>Password</label>
    <input 
    type="password"
     name='password' 
      id='password' 
      autoComplete='current-password'
     ref={inputField}
     onChange={handleChange}/>

    </div>

    <button 
    className="login_btn"
     type='submit' 
     value='Login'>Login</button>
     <hr /> 
    </form>
    <div className="login_google">
    <button className='facebook_btn social_btn' >Login with <span><FaFacebook/></span></button>
    <button className='google_btn social_btn'>Login with <span><FcGoogle/></span></button>
    </div>
    </section>
  )
};

export default Login;