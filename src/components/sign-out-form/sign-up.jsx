import React,{useState} from 'react';
import { createUserDocumentFromAuth, createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.util';
import FormInput from '../form/form';
import './sign-up.css'


const defaultFormInput = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    is: false
}

const SignUp = () => {
const [userInfo, setUserInfo] = useState(defaultFormInput);
const [checkInput, setCheckInput] = useState(false)
const { displayName, email, password, confirmPassword, is} = userInfo;

// const inputField = useRef(null);

const handleChange = (event) => {
const { name, value } = event.target;
setUserInfo({...userInfo, [name]: value});
};

const handleSumbit = async (e) =>{
e.preventDefault();
if(!email || !password || !displayName) return;
console.log('went through');
if(password !== confirmPassword) {setTimeout(()=>{
    setCheckInput(true);
}, 2000)}
try{
const res = await createAuthUserWithEmailAndPassword(email, password)
console.log('res :>> ', res);
} catch (error) {
    console.log('error.code', error.code)
}

  }

  return (
    <>
    <form id='login' className='form_section'  onSubmit={handleSumbit}>
    {checkInput && <h4>incorrect email or password</h4>}
    <h3>I don't have an account?</h3>
    <span className='form_title'>Sign up with your email and password</span>
    <br/>
    <FormInput
    label='Name'
    type="text"
    name="displayName"
    id="displayName" 
    value ={displayName}
    onChange={handleChange}/>

    <FormInput
    label='Email Address'
    type="email"
    name="email"
    id="email" 
    value ={email}
    onChange={handleChange}/>

    <FormInput 
    label='Password'
    type="password"
    name='password' 
    id='password' 
    value={password}
    onChange={handleChange}/>

    <FormInput
    label='Confirm Password'
    type="password"
    name='confirmPassword' 
    id='confirmPassword' 
    value={confirmPassword}
    onChange={handleChange}/>
<div className="log-container">
<button 
className="login_btn"
value='Login' 
type='submit'>Sign Up</button>
</div>
    </form>
    </>
  )
}

export default SignUp;