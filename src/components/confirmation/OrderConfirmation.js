import React from 'react';

const OrderConfirmation = ({ order }) => {
  return (
    <div className='orderConfirmation'>
      <h2>Order Confirmation</h2>
      <p>Thank you for your order! Your order details are as follows:</p>
      <ul className='order_customer_details' >
        <li>Order Number: {order.orderNumber}</li>
        <li>Name: {order.name}</li>
        <li>Email: {order.email}</li>
        <li>Address: {order.address}</li>
        <li>Zip Code: {order.zipCode}</li>
        <li>Phone: {order.phone}</li>
        <li>Items:
          <ul >
            {order.cart.map(item => (
              <li key={item.id}>{item.name} - {item.quantity} x ${item.price}</li>
            ))}
          </ul>
        </li>
        <li>Total: ${order.total}</li>
      </ul>
      <p className='order_shipping'>Your order will be shipped to the provided address within the next 5 business days. You will receive a shipment confirmation email with a tracking number once your order has shipped.</p>
      <p className='order_greatings'>Thank you for choosing our company. We hope you enjoy your purchase!</p>
    </div>
  );
};

export default OrderConfirmation;
