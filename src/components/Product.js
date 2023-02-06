import React from 'react';
import AddCart from './AddCart';
import { Link } from 'react-router-dom';

const Product = ({image, title, category, price, id, amount }) => {
    
  return (
    <section className='product-material'>
    <div className="img-container">
    <img src={image} alt={title}/>
    </div>
    <article className='product-material-footer' >
    <h3>{title}</h3>
    <h6>{category}</h6>
    <p>${price}</p>
    <AddCart id={id}/>
    <Link to={`/products/${id}`} className='btn btn-primary btn-details'>
    details
    </Link>
    </article>
    </section>
  )
}

export default Product;