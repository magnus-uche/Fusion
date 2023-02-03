import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='navbar'>
    <div className="nav-center">
    <Link to='/'><img src={logo} alt="" /></Link>
    <ul className='nav-links'>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/men'>Men</Link></li>
    <li><Link to='/women'>Women</Link></li>
    </ul>
    
    <div><Link to='/cart'>cart</Link></div>
    </div>
    </nav>
    )
};

export default Nav;
