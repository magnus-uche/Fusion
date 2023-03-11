import React from 'react';
import { useState } from 'react';
// import Product from '../components/Product';
import Product from '../../components/Product';
import "./adult.styles.css";
// import "./computer.styles.css";

import { useGlobalContext } from '../../Context';

const Adult = () => {
const {products} = useGlobalContext();
const adult = products.filter((item)=> item.category === "men's clothing");

return (
    <section className='section'>
    <div className="products-center" id="addTop">
    {adult.map((product)=>{
        const {id} = product
        return <Product key={id} {...product}/>
    })}
    </div>
    </section>
    );
};

export default Adult;
