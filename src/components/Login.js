import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import * as AiIcons from "react-icons/ai"
import SignIn from './sign-in-form/sign-in';
import SignUp from './sign-out-form/sign-up';

const Login = ({loginbar, showLogin}) => {

  return (
    <article className={loginbar ? 'login_container active' : 'login_container'}>
    <section className='login'>
    <div className="login_header">
    <h2>account</h2>
    <Link className='Login_btn' to='#'>
    <AiIcons.AiOutlineClose onClick={showLogin}/>
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