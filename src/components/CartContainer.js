import React from 'react';
import { useGlobalContext } from '../Context';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";



const CartContainer = ({image, title, price, id, amount }) => {
const {increase, decrease, remove} = useGlobalContext();
console.log('amount :>> ', amount);
  return (
    <section className="cart_item">
    <img src={image} className='cart-image' alt={title} style={{width :60}}/>
    <div className="cart-desc">
    <h4>{title}</h4>
    <h3>${price}</h3>
    <div className="cart-quantity">
    <div className='cart_control'>
    <button className="minus" onClick={()=>decrease(id)}><MdKeyboardArrowLeft/></button>
    <div>{amount}</div>
    <button className="plus" onClick={()=>increase(id)}><MdKeyboardArrowRight/></button>
    </div>
      <button className='btn btn_remove' onClick={()=>remove(id)}>remove</button>
    </div>
    </div>
    </section>
  )
}

export default CartContainer;