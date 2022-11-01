import React,{useState, useEffect} from 'react'
import { useNavigate, useParams} from "react-router-dom"
import { clearCart } from '../homeuser/CartSlice';
import { useDispatch, useSelector } from "react-redux"
import './order.css';
import {getUser} from '../homeuser/UserSclice'
 
const orderAPI = "http://localhost:3000/orders"

export default function Order() {
  const navigate = useNavigate();
 
  // const [currentUser] = useState(Parse.User.current());
  // console.log(currentUser)

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser());
  }, [user, dispatch]);
  

  console.log(cart)
  console.log(user)

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  
  
  // const logged =  (user.user.body.id)
  
  const user_id = 13
  const menu_item_id= (cart.cartItems[0].id)
  const total = cart.cartTotalAmount
  const quantity = cart.cartTotalQuantity
  const dayTime = new Date()

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
      total,
      quantity,
      dayTime,
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
