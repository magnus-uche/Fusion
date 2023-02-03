import React from 'react';
import CartQuantity from './CartQuantity';
import { useGlobalContext } from '../Context';

const AddCart = () => {
const {addCart} = useGlobalContext();

  return (
    <section className="addcart-section">
         <button className="btn btn-primary" onClick={addCart}>Add to Cart</button>
         <CartQuantity/>
         </section>
  )
}

export default AddCart;