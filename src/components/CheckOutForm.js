import React from 'react'

import React, { useState } from 'react';

const CheckOutForm = ({ cart, handleCheckout }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCheckout({ name, email, address, zipCode, phone, cart });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div>
        <label htmlFor="zipCode">Zip Code:</label>
        <input type="text" id="zipCode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <button type="submit">Place Order</button>
    </form>
  );
};

export default CheckOutForm;
