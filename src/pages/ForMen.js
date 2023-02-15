import React from 'react';
import Product from '../components/Product';
import { useState } from 'react';
import { useGlobalContext } from '../Context';

const ForMen = () => {
const {products} = useGlobalContext();
const forMen = products.filter((item)=> item.category === "men's clothing");

return (
    <section className='section'>
    <div className="products-center addTop">
    {forMen.map((product)=>{
        const {id} = product
        return <Product key={id} {...product}/>
    })}
    </div>
    </section>
    );
};

export default ForMen;

