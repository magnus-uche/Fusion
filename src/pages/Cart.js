import React from 'react';
import CartQuantity from '../components/CartQuantity';
import { useGlobalContext } from '../Context';

const Cart = () => {
const {cartProduct} = useGlobalContext();

return (
    <section>
    <div className="cart-CartContainer">
    <h1>Cart</h1>
    <div className="cart-item">
    <img src="" alt="" />
    <div className="cart-desc">
    

    <CartQuantity/>
    </div>
    </div>
    </div>
    </section>
)
}

export default Cart;