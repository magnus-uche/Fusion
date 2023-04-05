import React from 'react';
import Product from '../../components/Product';
import "./adult.styles.css";
import { useGlobalContext } from '../../Context';

const Adult = () => {
const {products} = useGlobalContext();
return (
    <section className='section'>
    <div className="products-center" id="addTop">
    {products["men's clothing"].map((product)=>{
        const {id} = product
        return <Product key={id} {...product}/>
    })}
    </div>
    </section>
    );
};

export default Adult;
