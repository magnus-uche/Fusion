import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import * as AiIcons from "react-icons/ai"
import { useGlobalContext } from "../Context";
import SignIn from './sign-in-form/sign-in';
import SignUp from './sign-out-form/sign-up';

const Login = ({loginbar, showLogin}) => {
  const {currentUser} = useGlobalContext();
 
  
  const display = () => {
    showLogin();
    return
  }

  return (
    <article className={ currentUser ? 'login_container ' : loginbar ? 'login_container active' : 'login_container'}>
    <section className='login'>
    <div className="login_header">
    <h2>account</h2>
    <Link className='Login_btn' to='#'>
    <AiIcons.AiOutlineClose onClick={display} />
    </Link>
    </div>
    <div className='form-container'>
    <SignIn/>
    <SignUp/>
    </div>
    </section>
    </article>
  )
};

export default Login;