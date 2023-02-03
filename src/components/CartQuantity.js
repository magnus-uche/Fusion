import React from 'react';
import { useGlobalContext } from '../Context';

const CartQuantity = () => {
const {increase, decrease} = useGlobalContext()
return (
    <div className="cart-quantity">
        <div className="minu" onClick={decrease}>-</div>
        <div className="plus" onClick={increase}>+</div>
        </div>
)
};

export default CartQuantity;