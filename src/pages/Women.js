import React from 'react';
import Product from '../components/Product';
import { useGlobalContext } from '../Context';

const Women = () => {
    const {products} = useGlobalContext();
    const forWomen = products.filter((item)=> item.category === "women's clothing");

  return (
    <section className='section'>
    <div className="women">
    {forWomen.map((product)=>{
        const {id} = product
        return <Product key={id} {...product}/>
    })}
    </div>
    </section>
    )
}

export default Women;