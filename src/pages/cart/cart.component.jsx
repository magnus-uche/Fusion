import React from "react";
import { Link } from "react-router-dom";
import CartContainer from "../../components/CartContainer";
import { useGlobalContext } from "../../Context";
import "./cart.styles.css";

const Cart = () => {
  const { cartProduct, total } = useGlobalContext();

  console.log(cartProduct);

  if (cartProduct.length >= 1) {
    return (
      <section className="cart-section">
        <div className="cart-Container">
          <h1>Item selected</h1>
          {cartProduct.map((selectedItem) => {
            const { id } = selectedItem;
            return (
              <CartContainer key={id} {...selectedItem} className="cart_item" />
            );
          })}
          <hr />
          <section className=" ">
            <div className="check_out">
              <h4>total</h4>
              <h4>${total}</h4>
            </div>
            <button className="btn btn-primary">check out</button>
          </section>
        </div>
      </section>
    );
  } else {
    return (
      <section className="empty">
        <div className="empty_container">
          <svg
            height="58"
            width="60"
            aria-label="empty-cart"
            className=""
            name="empty-cart"
          >
            <g fill="none">
              <path
                d="M46.85 58a6.26 6.26 0 0 1-6.26-6.26 6.26 6.26 0 0 1 6.26-6.25 6.26 6.26 0 0 1 6.26 6.25A6.26 6.26 0 0 1 46.85 58zm0-10.01a3.76 3.76 0 0 0-3.75 3.75 3.76 3.76 0 0 0 3.75 3.76 3.76 3.76 0 0 0 3.76-3.76A3.76 3.76 0 0 0 46.85 48zM21.82 58a6.26 6.26 0 0 1-6.26-6.26 6.26 6.26 0 0 1 6.26-6.25 6.26 6.26 0 0 1 6.26 6.25A6.26 6.26 0 0 1 21.82 58zm0-10.01a3.76 3.76 0 0 0-3.75 3.75 3.76 3.76 0 0 0 3.75 3.76 3.76 3.76 0 0 0 3.75-3.76A3.76 3.76 0 0 0 21.82 48zm30.04-5H22.97a8.79 8.79 0 0 1-8.6-7.05l-6.1-30.5H1.8a1.25 1.25 0 0 1 0-2.5H9.3c.6 0 1.11.42 1.23 1l6.3 31.51a6.27 6.27 0 0 0 6.14 5.03h28.89a1.25 1.25 0 0 1 0 2.5z"
                fill="#ed017f"
              ></path>
              <path
                d="M17.25 37.86a1.25 1.25 0 0 1-1.24-1.08 1.25 1.25 0 0 1 1.08-1.4l36.7-4.9 3.54-19.53a1.24 1.24 0 0 1 1.52-.91c.67.16 1.08.84.91 1.51l-3.74 20.36c-.13.5-.54.87-1.05.94l-37.55 5-.17.01zm3.06-24.9h-8.5a1.25 1.25 0 0 1-1.26-1.26c0-.69.56-1.25 1.25-1.25h8.5a1.25 1.25 0 0 1 0 2.5z"
                fill="#ed017f"
              ></path>
              <path
                d="M57.78 12.5h-8.53a1.25 1.25 0 0 1 0-2.5h8.53a1.25 1.25 0 0 1 0 2.5z"
                fill="#ed017f"
              ></path>
              <g fill="#FAB8DB">
                <path d="M34.37 19.77A10 10 0 0 1 24.3 9.88 10 10 0 0 1 34.37 0a10 10 0 0 1 10.08 9.88 10 10 0 0 1-10.08 9.88zm0-17.3a7.5 7.5 0 0 0-7.56 7.41 7.5 7.5 0 0 0 7.56 7.41 7.5 7.5 0 0 0 7.56-7.4 7.5 7.5 0 0 0-7.56-7.42z"></path>
                <path
                  d="M34.24 10.88l-2.34 2.33a.72.72 0 0 1-1 0 .7.7 0 0 1 0-1l2.34-2.33-2.34-2.32a.7.7 0 0 1 0-1 .71.71 0 0 1 1 0l2.34 2.32 2.34-2.32a.71.71 0 0 1 1 0 .7.7 0 0 1 0 1l-2.33 2.32 2.34 2.33a.7.7 0 0 1-.5 1.2.72.72 0 0 1-.5-.2l-2.35-2.33z"
                  stroke="#FAB8DB"
                ></path>
              </g>
            </g>
          </svg>
          <div>
            <h3>your cart is empty</h3>
          </div>
          <Link to="/" className="btn btn-primary">
            back home
          </Link>
          <p>you have not add anything in your cart</p>
        </div>
      </section>
    );
  }
};

export default Cart;
