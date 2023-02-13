import React from 'react'
import { useState } from 'react'


const User = () => {
  const [userInformation, setUserInformation] = useState({
    name: "uche",
    email: "devmagnusuche@gmail.com",
    address: "14 E-capitol st, asaba Nig",
    paymentMethod: "mastercard **** **** **** 2222",
    orders: [
      {id: 1, date: "01/01/2022", items:["item 1","items 2"], total: "$100"},
      {id:2, date: "02/01/2022", items: ["item 3"],  total: "$50"},
    ],
    wishlist: ["items 4", "item 5"],
  });

const [showOrders, setShowOrders] = useState(false);
const [showWishlist, setShowWishlist] = useState(false);

const toggleOrders = () => setShowOrders(!showOrders);
const toggleWishlist = () => setShowWishlist(!showWishlist);


return (
 <div className="user_page">
 <div className="user_container">
 <h2>user Information</h2>
 <p>Name: {userInformation.name}</p>
 <p>Email: {userInformation.email}</p>
 <p>Address: {userInformation.address}</p>
 <p>payment Method: {userInformation.paymentMethod}</p>

 <h2>Orders</h2>
 <button onClick={toggleOrders}  className='btn'>{showOrders ? "Hide" : "Show"} Order</button>
 {showOrders && (
   <ul>
   {userInformation.orders.map((order)=> (
     <li key={order.id}>
     <p>Order Date:{order.date}</p>
     <p>Items: {order.items.join(',')}</p>
     <p>Total: {order.total}</p>
     </li>
   ))}
   </ul>
 )}

 <h2>Wishlist</h2>
 <button onClick={toggleWishlist} className='btn'>{showWishlist ? 'Hide' : 'show'}Wishlist</button>
{showWishlist && (
<ul>
{userInformation.wishlist.map((item)=> (
  <li key={item}>{item}</li>
))}
</ul>
)}
 </div>
 </div>
);
};

export default User;