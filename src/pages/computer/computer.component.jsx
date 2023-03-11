import React from 'react';
// import Product from '../components/Product';
import Product from '../../components/Product';
import "./computer.styles.css";
import { useGlobalContext } from '../../Context';

const Computer= () => {
    const {products} = useGlobalContext()
    const items = products.filter((items)=> items.category === 'computer')

  return (
    <section className='section'>
    <div className="products-center" id="addTop">
    {items.map((item)=>{
      const {id} = item
      return <Product key={id} {...item}/>
    })}
    </div>
    </section>
  )
}

export default Computer;