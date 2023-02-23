import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../Context";
import sublink from "../data";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./Sidebar.css";
import SearchForm from "./SearchForm";
import Login from "./Login";
import { useLocation } from "react-router-dom";
import Categories from "./Categories";
import { FaChevronRight } from "react-icons/fa";
import { MdHome,MdOutlineSell,MdPending,MdRoom } from "react-icons/md";



const SideBar = () => {
  const { amount, openCategory } = useGlobalContext();
  const [sidebar, setSidebar] = useState(false);
  const [loginbar, setLoginBar] = useState(false);

  const currentRouter = useLocation().pathname.toLowerCase();
  const showSidebar = () => setSidebar(!sidebar);
  const showLogin = () => setLoginBar(!loginbar);

  return (
    <section className="nav_header">
      {/* main nav start */}
      <div className="nav_center">
        <div className="hambugar_container">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} className="hambugar" />
          </Link>
          <Link to="/" className="logo">
            Kundum
          </Link>
        </div>
        <div className="nav_form">
          <SearchForm />
        </div>
        <Link className="account" onClick={showLogin} to="#">
          log in
        </Link>
        <div className="cart_section media">
          <div>
            <Link to="/cart" className="cart_link">
              <FaIcons.FaShoppingCart className="cart" />
            </Link>
          </div>
          <div className="cart_amount circle ">{amount}</div>
        </div>
      </div>

      <div className="searchmedia">
        {currentRouter.includes("cart") ? null : <SearchForm />}
      </div>
    
<div className="nav_categories">
        <div>
        <Link to="/#" className="nav_cat_list">
            Computer and Accessories
</Link>
        </div>
        <div>
          <Link to="/#" className="nav_cat_list">
            phones and Tablets
          </Link>
        </div>
        <div>
          <Link to="/#" className="nav_cat_list">
            Electronics
          </Link>
        </div>
        <div>
          <Link to="/#" className="nav_cat_list">
            Home and Kitchen
          </Link>
        </div>
        <div>
          <Link to="/#" className="nav_cat_list">
            Baby, Kids and Toys
          </Link>
        </div>
      </div>


      {/* left sidebar */}
<nav className={sidebar ? "nav-menu active-nav" : "nav-menu"}>
        <div className="login-signup">
        <button className="nav_menu_btn">
        <Link to="/login" className="login_link">Login</Link>
        </button>
        <button className="nav_menu_btn">
        <Link to="/sign_Up" className="login_link">Signup</Link>
        </button>
        </div>

        <section className="tracking">
            <Link to="#" className="order_track">
            <MdRoom className='track_icons'/>
            <div className="desc">
            <span className="order_track_title">Track Orders</span>
            <span className='order_track_paragraph'>view order status</span>
            </div>
            </Link>
     
            <Link to="#" className='order_track'>
            <MdOutlineSell className='track_icons'/>
            <div className='desc'>
            <span className="order_track_title">Sell on Konga</span>
            <span className='order_track_paragraph'>join the merchants</span>
            </div>
            </Link>
     
            <Link to="#" className='order_track'>
            <MdPending className='track_icons'/>
            <div className='desc'>
            <span className="order_track_title">Pending Items</span>
            </div>
            </Link>
            
            <Link to="#" className='order_track'>
              <MdHome className='track_icons'/>
              <div className='desc' >
              <span className="order_track_title">Physical Stores</span>
              <span className='order_track_paragraph'>Stores around you</span>
              </div>
            </Link>
    
        </section>

        <ul className="nav-menu-items">
          <p>Categories</p>
          {sublink.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.url} className="link-text">
                  <span>{item.page}</span>
                </Link>
                <FaChevronRight />
              </li>
            );
          })}

          </ul>
          <footer  className="footer">
          <Link to='#' className="contact_us">Contacts us</Link>
          </footer>
      </nav>

      {/* right sidebar at big screen */}
      <div>
        <Login loginbar={loginbar} showLogin={showLogin} className="login" />
      </div>
    </section>
  );
};

export default SideBar;

// <li className="navbar-toggle">
// <Link to="#" className="menu-bars">
//   <AiIcons.AiOutlineClose onClick={showSidebar} />
// </Link>
// </li>