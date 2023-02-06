import React from 'react'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'
import { useGlobalContext } from '../Context';
const Nav = () => {
const {total, amount } = useGlobalContext()
console.log('amount :>> ', amount);
  return (
    <nav className='navbar'>
    <div className="nav-center">
    <Link to='/'><img src='' alt="" className='logo'/><h1 className='logo'>Kundom</h1></Link>
    <ul className='nav-links'>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    
    </ul>
    
    <div className='main_cart'><Link to='/cart'><div className='cart_amount'>
    {amount}
    </div><FaShoppingCart/>
    </Link>
    </div>
    </div>
    </nav>
    )
};

export default Nav;
