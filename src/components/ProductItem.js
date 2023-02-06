import React from 'react';
import Product from './Product';
import { useGlobalContext } from '../Context';


const ProductItem = () => {
const { products } = useGlobalContext();
return (
    <section className='section'>
    <div className="section-title">
    <h2>our products</h2>
    </div>
    <div className="products-center">
    {products.map((productItem)=>{
      const {id} = productItem;
      return <Product key={id} {...productItem}/>
    })}
    </div>
    </section>
  )
};

export default ProductItem;