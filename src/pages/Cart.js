import React from 'react';
import { Link } from 'react-router-dom';
import CartContainer from '../components/CartContainer';
import { useGlobalContext } from '../Context';

const Cart = () => {
const {cartProduct, total} = useGlobalContext();

console.log(cartProduct);

if(cartProduct.length >= 1){
    return (
        <section className='cart-section'>
        <div className="cart-Container">
        <h1>Item selected</h1>
        {cartProduct.map((selectedItem)=>{
            const {id} = selectedItem;
            return <CartContainer key={id} {...selectedItem} className='cart_item'/>
        })}
        <hr />
        <footer>
        <div className="check_out">
        <h4>total</h4>
        <h6>${total}</h6>
        </div>
        <button className='btn btn-primary'>check out</button>
        </footer>
        </div>
        </section>
    )
} else{
    return (
        <section className='empty'>
        <h1>your cart is empty</h1>
        <Link to='/' className='btn btn-primary'>back home</Link>
        </section>
    )
};
};

export default Cart;