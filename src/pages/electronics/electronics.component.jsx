import React from 'react';
import Product from '../../components/Product';
import { useGlobalContext } from '../../Context';
import './electronics.styles.css'

const Electronics = () => {
    const {products} = useGlobalContext();
  return (
    <section className='section'>
    <div className="products-center" id='addTop'>
    {products.electronics.map((product)=>{
        const {id} = product
        return <Product key={id} {...product}/>
    })}
    </div>
    </section>
    )
};

export default Electronics;