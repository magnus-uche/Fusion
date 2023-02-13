import React from 'react';
import AddCart from './AddCart';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context';

const Product = ({image, title, category, price, id, amount }) => {
  const {addCart} = useGlobalContext();

  const t_Slice = title.slice(0, 30)
  
  return (
    <section className='product-material'>
    <Link to={`/products/${id}`} >
    <div className="img-container">
    <img src={image} alt={title} style={{width: 120}}  className='product_image'/>
    </div>
    <div className="detail">
    <div>{t_Slice}...</div>
    <div className="prices">
    <div className="price new">${price}</div>
    <div className='price old'>${price}</div>
    <div className="discount">-10%</div>
    </div>
    </div>
    <button className="btn-cart" onClick={()=>addCart(id)}>Add to Cart</button>
    </Link>
    </section>
    )
  }
  
  // details
export default Product;