import React from 'react';
import Product from '../components/Product';
import { useGlobalContext } from '../Context';

const Electronics = () => {
    const {products} = useGlobalContext();
    const electronics = products.filter((item)=> item.category === 'electronics');
    
  return (
    <section className='section'>
    <div className="products-center addTop">
    {electronics.map((product)=>{
        const {id} = product
        return <Product key={id} {...product}/>
    })}
    </div>
    </section>
    )
};

export default Electronics;