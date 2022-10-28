import React,{useState} from 'react';
import './order.css';


const orderAPI = "https://bookameal-backend.herokuapp.com/orders"

export default function Order() {

  // const [quantity] = useState()
  // const [users_id] = useState()
  const quantity = 3
  const dayTime = "10/11/2022"
  const user_id = 2
  const menu_item_id = 1
  
  const [orders, setOrders] = useState([]);

  function addOrder(newOrder) {
    setOrders([...orders, newOrder]);
  }


  function handleSubmit(e) {
    e.preventDefault();
    fetch(orderAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      quantity,
      dayTime,
      user_id,
      menu_item_id,
      }),
    })
      .then((r) => r.json())
      .then((newOrder) => addOrder(newOrder));
  }

  return (
    <div>
      <button className="getStarted" onClick={handleSubmit}>Book</button>
      {/* You have successfully placed your order */}
      </div>
  )
}
