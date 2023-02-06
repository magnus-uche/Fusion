import React from 'react'
import { useGlobalContext } from '../Context';
const AddCart = ({id, amount}) => {
const {addCart, increase, decrease,price, products, searchTerm} = useGlobalContext();
  return (
    <section className="addcart_section">
         <button className="btn btn-primary" onClick={()=>addCart(id)}>Add to Cart</button> 
         </section>
  )
}

export default AddCart;