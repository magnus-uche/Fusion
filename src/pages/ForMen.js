import React from 'react';
import Product from '../components/Product';
import { useGlobalContext } from '../Context';

const ForMen = () => {

const {products} = useGlobalContext();
const forMen = products.filter((item)=> item.category === "men's clothing");

return (
    <section className='section'>
    <div className="section-title">
    <h1>mens wears</h1>
    </div>
    <div className="products-center">
    {forMen.map((product)=>{
        const {id} = product
        return <Product key={id} {...product}/>
    })}
    </div>
    </section>
    );
};

export default ForMen;

