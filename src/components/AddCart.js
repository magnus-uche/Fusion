import React from 'react'
import { useGlobalContext } from '../Context';
const AddCart = ({id}) => {
const {addCart} = useGlobalContext();
  return (
         <button className="btn-cart" onClick={()=>addCart(id)}>Add to Cart</button> 
  )
}

export default AddCart;