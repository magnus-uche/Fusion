import React from "react";
import { useLocation, Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useGlobalContext } from "../Context";
import Categories from "./Categories";
import { useState } from "react";

const Nav = () => {
  const currentRoute = useLocation().pathname.toLowerCase();
  const [isLogin, setIsLogin] = useState(false)
  const [active, setActive] = useState(false)
  const { amount, openCategory, openSideBar, closeCategory } = useGlobalContext();
  
  const displayMenu = (e) => {
    console.log('e :>> ', e);
   let tempBtn = e.target.getBoundingClientRect();
   console.log("temp",tempBtn)
   const center = (tempBtn.left + tempBtn.right) / 2;
   const bottom = tempBtn.bottom - 1;
   openCategory({center, bottom});
   setActive(true)
  };

const handleCategory = (e) => {
  if(!e.target.classList.contains('tab')){
    closeCategory();
    setActive(false)
   }
  };

  

  return (
    <nav className="navbar" onMouseDown={handleCategory}> 
      <div className="nav-center">
      <div className="nav_header">
        <li>
          <Link to="/" className="logo">
            Kundom
          </Link>
        <button className="btn toggle_btn" onClick={()=> openSideBar()}>hambugar</button>
        </li>
        </div>

        <ul className="nav-links">
          <li className={currentRoute.includes("home") ? "tab active" : "tab"}>
            <Link to="/">Home</Link>
          </li>
          <li className={currentRoute.includes("about") ? "tab active" : "tab"}>
            <Link to="/about">About</Link>
          </li>  
         <li className={active ? 'tab active' : 'tab'} onClick={displayMenu} >Categories</li>
        </ul>

        <div className="left-nav">
        <div className="main_cart">
          <Link to="/cart">
            <div className="cart_amount">{amount}</div>
            <FaShoppingCart />
          </Link>
        </div>
        <li><Link to='/user'><FaUserCircle className="user" /></Link></li>
      </div>
      </div>
    </nav>
  );
};

export default Nav;
