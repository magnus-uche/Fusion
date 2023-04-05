import React from 'react';
import Product from '../../components/Product';
import "./computer.styles.css";
import { useGlobalContext } from '../../Context';

const Computer= () => {
    const {products} = useGlobalContext()
  return (
    <section className='section'>
    <div className="products-center" id="addTop">
    {products.computer.map((item)=>{
      const {id} = item
      return <Product key={id} {...item}/>
    })}
    </div>
    </section>
  )
}

export default Computer;