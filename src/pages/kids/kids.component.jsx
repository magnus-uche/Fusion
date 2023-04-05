import React from 'react';
import Product from '../../components/Product';
import { useParams } from "react-router-dom";
import "./kids.styles.css";
import { useGlobalContext } from '../../Context';

const Kids = () => {
    const {products} = useGlobalContext();
    const { id } = useParams();
    console.log('id', id)
  return (
    <section className='section'>
    <div className="products-center" id="addTop">
    {products.kids.map((product)=>{
        return <Product key={product.id} {...product}/>
    })}
    </div>
    </section>
    )
}

export default Kids;