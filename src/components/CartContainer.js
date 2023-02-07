import React from 'react';
import { useGlobalContext } from '../Context';
import { FaMinus } from "react-icons/fa";
import { FaPlus} from "react-icons/fa";

// FaPlus

const CartContainer = ({image, title, price, id, amount }) => {
const {increase, decrease, remove} = useGlobalContext();
  return (
    <section className="cart_item">
    <img src={image} className='cart-image' alt={title} style={{width :60}}/>
    <div className="cart-desc">
    <h4>{title}</h4>
    <h3>${price}</h3>
    <div className="cart-quantity">
    <div className='cart_control'>
    <button className="minus" onClick={()=>decrease(id)}><FaMinus/></button>
    <div className='amount'>{amount}</div>
    <button className="plus" onClick={()=>increase(id)}><FaPlus/></button>
    </div>
      <button className='btn btn_remove' onClick={()=>remove(id)}>remove</button>
    </div>
    </div>
    </section>
  )
}

export default CartContainer;