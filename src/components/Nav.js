// import React from "react";
// import { useLocation, Link } from "react-router-dom";
// import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
// import { useGlobalContext } from "../Context";
// import Categories from "./Categories";
// import {FaHeart} from 'react-icons/fa';
// import { useState } from "react";
// import SearchForm from "./SearchForm";
// import { useEffect } from "react";
// import { FaBars } from 'react-icons/fa';
// import SideBar from "./SideBar";

// const Nav = () => {
//   const currentRoute = useLocation().pathname.toLowerCase();
//   const [isLogin, setIsLogin] = useState(false);
//   const [active, setActive] = useState(false);
//   const { amount, openCategory, openSidebar, closeCategory } =
//     useGlobalContext();

//   const displayMenu = (e) => {
//     console.log("e :>> ", e);
//     let tempBtn = e.target.getBoundingClientRect();
//     console.log("temp", tempBtn);
//     const center = (tempBtn.left + tempBtn.right) / 2;
//     const bottom = tempBtn.bottom - 1;
//     openCategory({ center, bottom });
//     setActive(true);
//   };

//   const handleCategory = (e) => {
//     if (!e.target.classList.contains("tab")) {
//       closeCategory();
//       setActive(false);
//     }
//   };

//   return (
//     <>
//     <nav className="navbar" onMouseDown={handleCategory}>
//       <div className="nav-center">
//         <div className="nav_header">
//         <button className="btn toggle_btn" onClick={() => openSidebar()}>
//     <FaBars className="hambugar"/>
//         </button>
//             <Link to="/" className="logo">
//               Kundom
//             </Link>
          
//         </div>

//         <ul className="nav-links"> 
//           <div className="nav_center">
//           <SearchForm />
//            <div className="account">
//           {isLogin ? <Link to="/user">
//           <FaUserCircle className="user" />
//           </Link> : <Link to='' >
//           <div className="user_sign">login/ sign up </div>
//           </Link> }
//           </div>
//           </div>
//           <button className='btn_waitlist'><FaHeart className='FaHeart'/></button>
//           </ul>

//         <div className="left-nav">
//           <div className="main_cart">
//             <Link to="/cart">
//               <div className="cart_amount"><p>{amount}</p></div>
//               <FaShoppingCart className="backet" />
//             </Link>
//           </div>
//           </div>
//       </div>
      
//       <div className="media900">
//       <SearchForm/>
// </div>
//       </nav>
//     </>
//   );
// };

// export default Nav;
