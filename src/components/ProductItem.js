import React from 'react';
import Product from './Product';
import { useGlobalContext } from '../Context';
import Carosel from './Carosel';


const ProductItem = () => {
const { products } = useGlobalContext();
return (
    <section className='section'>
    <div className="hero-title">
    <Carosel/>
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