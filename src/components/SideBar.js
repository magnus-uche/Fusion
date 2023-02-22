import React, {useState,useEffect} from "react";
import { useGlobalContext } from "../Context";
import sublink from "../data";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import './Sidebar.css'
import SearchForm from "./SearchForm";
import Login from "./Login";
import { useLocation } from "react-router-dom";
import Categories from "./Categories";

const SideBar = () => {
const {amount, openCategory} = useGlobalContext();
const [sidebar, setSidebar] = useState(false);
const [loginbar, setLoginBar] = useState(false);

const currentRouter = useLocation().pathname.toLowerCase();
const showSidebar = () => setSidebar(!sidebar);
const showLogin = () => setLoginBar(!loginbar);

return (
    <section className='nav_header'>
    {/* main nav start */}
    <div className="nav_center">
    <div className="hambugar_container">  
    <Link to='#' className="menu-bars">
    <FaIcons.FaBars onClick={showSidebar} className='hambugar'/>
    </Link>
    <Link to='/' className="logo">Kundum</Link>
    </div>
    <div className="nav_form">
    <SearchForm/>
    </div>
    <Link className="account" onClick={showLogin} to='#'>log in</Link>
    <div className="cart_section">
    <Link to='/cart' className="cart_link">
    <FaIcons.FaShoppingCart className="cart" />
    </Link>
    <div className="cart_amount">{amount}</div>
    </div>
    </div>
 
    <div className="searchmedia">
    {currentRouter.includes('cart') ? null : <SearchForm /> }
    </div>
    
    <div className="nav_categories">
    <div ><Link to='/#' className="nav_cat_list">Computer and Accessories</Link></div>
    <div><Link to='/#' className="nav_cat_list">phones and Tablets</Link></div>
    <div><Link to='/#' className="nav_cat_list">Electronics</Link></div>
    <div><Link to='/#' className="nav_cat_list">Home and Kitchen</Link></div>
    <div><Link to='/#' className="nav_cat_list">Baby, Kids and Toys</Link></div>
    </div>

    {/* left sidebar */}
    <nav className={sidebar ? 'nav-menu active-nav' : 'nav-menu'}>
    <ul className="nav-menu-items">
    <li className="navbar-toggle">
    <Link to='#' className="menu-bars">
    <AiIcons.AiOutlineClose onClick={showSidebar} />
    </Link>
    </li>
    {sublink.map((item,index)=> {
        return  (
            <li key={index} className={item.cName}>
            <Link to={item.url}className='link-text'>
        <span >{item.page}</span>
            </Link>
            </li>
        )
    })}
    </ul>
    </nav>
    {/* right sidebar at big screen */}
    <Login loginbar={loginbar} showLogin={showLogin} className='login'/>
    </section>
    )
};

export default SideBar;
