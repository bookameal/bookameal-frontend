import React,{useState} from 'react'
import { useNavigate } from "react-router-dom"
import { clearCart } from '../homeuser/CartSlice';
import { useDispatch, useSelector } from "react-redux"
import './order.css';


const orderAPI = "https://bookameal-backend.herokuapp.com/orders"

export default function Order() {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  
const user_id = 2
const menu_item_id= 6
const quantity = 4
const day = 11/11/2022

  // const [users_id] = useState()

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
      day,
      user_id,
      menu_item_id,
      }),
    })
      .then((r) => r.json())
      .then((newOrder) => addOrder(newOrder));
      handleClearCart()
      navigate("/placed");
  }

  return (
    <div>
      <button className="getStarted" onClick={handleSubmit}>Book</button>
      {/* You have successfully placed your order */}
      </div>
  )
}
