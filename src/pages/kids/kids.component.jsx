import React from 'react';
import Product from '../../components/Product';
import "./kids.styles.css";
import { useGlobalContext } from '../../Context';

const Kids = () => {
    const {products} = useGlobalContext();
    const items = products.filter((item)=> item.category === "kids");

  return (
    <section className='section'>
    <div className="products-center" id="addTop">
    {items.map((product)=>{
        const {id} = product
        return <Product key={id} {...product}/>
    })}
    </div>
    </section>
    )
}

export default Kids;