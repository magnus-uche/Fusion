import React from 'react';
import Product from '../../components/Product';
// import "./Kids.css";
import { useGlobalContext } from '../../Context';

const Phone = () => {
    const {products} = useGlobalContext();
    const items = products.filter((item)=> item.category === "phone");

  return (
    <section className='section'>
    <div className="products-center" id='addTop'>
    {items.map((product)=>{
        const {id} = product
        return <Product key={id} {...product}/>
    })}
    </div>
    </section>
    )
}

export default Phone;