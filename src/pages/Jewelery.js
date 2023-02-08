import React from 'react';
import Product from '../components/Product';
import { useGlobalContext } from '../Context';

const Jewelery = () => {
    const {products} = useGlobalContext()
    const jewelery = products.filter((items)=> items.category === 'jewelery')

  return (
    <section>
    <div className="section-title">
    <h1>Jewelery</h1>
    </div>
    <div className="products-center">
    {jewelery.map((item)=>{
      const {id} = item
      return <Product key={id} {...item}/>
    })}
    </div>
    </section>
  )
}

export default Jewelery