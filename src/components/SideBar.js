import React from 'react';
import { useGlobalContext } from '../Context';
import sublink from '../data';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const {isCategoriesOpen} = useGlobalContext();

return (
    <div className={isCategoriesOpen ? 'sidebar show' : 'hide'}>
    <div className="close-hambugar">
    X
    </div>
    {sublink.map((item, index)=>{
        const {url, page} = item
        return (
         <ul key={index} className='sidebar_list'>
        
         </ul>
        )
    })}
    </div>
)
};

export default SideBar;



