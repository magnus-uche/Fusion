import React,{useState, useEffect, useReducer, useRef} from 'react';
import { Link } from 'react-router-dom';
import * as AiIcons from "react-icons/ai"
import {FcGoogle} from 'react-icons/fc'
import FormInput from '../form/form';
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.util';


const userDefault = {
  email: '',
  password: ''
}

const SignIn = ({loginbar, showLogin}) => {
const [userInfo, setUserInfo] = useState({userDefault});
const { email, password } = userInfo;

const loginWithGoogle = async () =>{
await signInWithGooglePopup();
}

const handleChange = (event) => {
const {name, value} = event.target;
setUserInfo({...userInfo, [name]:value});
}

const handleSumbit = async (event) =>{
event.preventDefault();
try {
  const response = await signInAuthUserWithEmailAndPassword(email, password);
  console.log('response', response)
} catch (error) {
  console.log('error.code', error.code)
}
setUserInfo(userDefault);
}

  return (
    <>
    <form id='login' className='form_section' method='post' onSubmit={handleSumbit}>
    <h3>Already have an account?</h3>
    <span className='form_title'>Sign in with your email and password</span>
    <FormInput
    label='Email'
    type="email"
    name="email"
    id="email" 
    value ={email}
    onChange={handleChange}/>

    <FormInput
    label='Password'
    type="password"
    name="password"
    id="password" 
    value ={password}
    onChange={handleChange}/>

    <div className="log-container">
    <button 
    className="login_btn"
    type='submit' 
    value='Login'>Login</button>
    <button className='google_btn social_btn' type='submit' onClick={loginWithGoogle}>Login with<span><FcGoogle className='google'/></span></button>
    </div>
    <hr /> 
    </form>
    </>

  )
};

export default SignIn;