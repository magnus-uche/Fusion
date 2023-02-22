import React,{useState, useEffect, useReducer, useRef} from 'react';
import { Link } from 'react-router-dom';
import * as AiIcons from "react-icons/ai"
import {FcGoogle} from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'
import './Login.css';



const Login = ({loginbar, showLogin}) => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [userInfo, setUserInfo] = useState({
  email : '',
  password : ''
});
const inputField = useRef(null)

const handleChange = (event) => {
const input = inputField.current.value
const target = event.target

if(target.type === 'email') {
  console.log('input :>> ', input);
  setEmail(input)
} else {
  setEmail('')
}
}

const handleSumbit = (e) =>{
e.preventDefault()
}

  return (
    <article className={loginbar ? 'login_container active' : 'login_container'}>
    <section className='login'>
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
    value='Login' typeof='submit'>Login</button>
    <hr /> 
    </form>
    <div className="login_google">
    <button className='facebook_btn social_btn' >Login with <span><FaFacebook/></span></button>
    <button className='google_btn social_btn' type='submit'>Login with <span><FcGoogle/></span></button>
    </div>
    </section>
    </article>
  )
};

export default Login;