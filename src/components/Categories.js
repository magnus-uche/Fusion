import React from 'react'
import { useState, useRef, useEffect  } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { useGlobalContext } from '../Context';

const Categories = () => {
const currentRoute = useLocation().pathname.toLowerCase();
const { isCategoriesOpen,location } = useGlobalContext();
const container = useRef(null);
console.log(container.current)
useEffect(()=>{
let submenu = container.current
const {botton, center} = location
console.log('location :>> ', location);
submenu.style.left = `${center}px`
submenu.style.right = `${botton}px`
// console.log("vf",submenu)

},[location])

  return (
    <div className={isCategoriesOpen ? 'categories  show' : 'categories'}  ref={container}>

    <ul className={`submenu-center col-2`}>
    <li className={currentRoute.includes("men") ? "tab active" : ""} >
            <Link to="/men">Men</Link>
          </li>

          <li className={currentRoute.includes("come") ? " active" : "tab"}>
            <Link to="/come">Women</Link>
          </li>

          <li
            className={
              currentRoute.includes("electronics") ? "active" : "tab"}>
            <Link to="/electronics">Electronics</Link>
          </li>

          <li className={currentRoute.includes("jewelery") ? "tab active" : "tab"}>
            <Link to="/jewelery">Jewelery</Link>
          </li>

    </ul>
    </div>
  )
}

export default Categories;