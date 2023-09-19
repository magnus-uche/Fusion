import React from 'react';
import { useGlobalContext } from '../Context';
import { FaMinus } from "react-icons/fa";
import { FaPlus} from "react-icons/fa";
import './CartContainer.css'


const CartContainer = ({image, title, price, id, amount }) => {
const {increase, decrease, remove} = useGlobalContext();

  return (
    <section className="cart_item">
    <img src={image} className='cart-image' alt={title} style={{width :100}}/>
    <div className="cart-desc">
    <p>{title}</p>
    <p className='cart_item_price'>${price}</p>
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