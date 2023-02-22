import React,{useState} from 'react';

const form = () => {
const [userInfo, setUserInfo] = useState({email: '', password: '', is: false});
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const inputField = useRef(null);



const handleChange = (event) => {
const input = inputField.current.value;
const target = event.target;
switch (target.type) {
case 'email':
    setEmail(input);
    break;
case 'password':
    setPassword(input);
    break;
   default: console.log(input);
};
// if(target.type === 'email') {
//   setEmail(input)
// }
// if(target.type === 'password'){
// }
}

const handleSumbit = (e) =>{
e.preventDefault();
if(email && password){
    setUserInfo((user) =>{
        return {...user, email:email, password: password, }
    })
} else {
    set
}
  }

  return (
    <>
    <form id='login' className='form_section' method='post' onSubmit={handleSumbit}>
    {userInfo && <h4>incorrect email or password</h4>}
    <div className="email">
    <label htmlFor="" className='login_form_label' >
    Email Address or Phone Number
    </label>
    <input 
    type="text"
    name="email"
    id="email" 
    autoComplete='username'
    value ={email}
    ref={inputField}
    onChange={handleChange}/>
    </div>

    <div className="password">
    <label htmlFor="" className='Login_form_label'>Password</label>
    <input 
    type="password"
    name='password' 
    id='password' 
    autoComplete='current-password'
    value={password}
    ref={inputField}
    onChange={handleChange}/>
    </div>

    <button 
    className="login_btn"
    type='submit' 
    value='Login' typeof='submit'>Login</button>
    <hr /> 
    </form>
    </>
  )
}

export default form;