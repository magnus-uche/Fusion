import React from "react";
import { useGlobalContext } from "../Context";
import sublink from "../data";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import './Sidebar.css'
import SearchForm from "./SearchForm";

const SideBar = () => {
const {amount, openCategory} = useGlobalContext();
const [sidebar, setSidebar] = useState(false);
const showSidebar = () => setSidebar(!sidebar);

return (
    <div>
    <div className="navBar"> 
    <Link to='#' className="menu-bars">
    <FaIcons.FaBars onClick={showSidebar} className='hambugar'/>
    </Link>
    <div className="nav_center">
    <Link to='/' className="logo">Kundum</Link>
    <div className="nav-center" >
    <SearchForm/>
    <div className="account" >log in</div>

    <div className="cart_section">
    <Link to='/cart' className="cart_link">
    <FaIcons.FaShoppingCart className="cart" />
    </Link>
    <div className="cart_amount">{amount}</div>
    </div>

    </div>
    </div>
   
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
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
    </div>
)
};

export default SideBar;
