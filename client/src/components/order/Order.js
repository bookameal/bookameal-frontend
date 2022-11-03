import React,{useState, useEffect} from 'react'
import { useNavigate, useParams} from "react-router-dom"
import { clearCart } from '../homeuser/CartSlice';
import { useDispatch, useSelector } from "react-redux"
import './order.css';
import {getUser} from '../homeuser/UserSclice'
 
const orderAPI = "https://bookameal-backend.herokuapp.com/orders"

export default function Order() {
  const navigate = useNavigate();

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
  const logged =  (user.user.body.id)
  
  
  // ✅ Format a date to YYYY-MM-DD (or any other format)
  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function formatDate(date) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-');
  }
  
  // 👇️ 2022-01-18 (yyyy-mm-dd)
  console.log(formatDate(new Date()));
  
  //  👇️️ 2025-05-09 (yyyy-mm-dd)
  console.log(formatDate(new Date(2025, 4, 9)));
  



const user_id = logged  
const menu_item_id= (cart.cartItems[0].id)
const quantity = cart.cartTotalQuantity
const dayTime = (formatDate(new Date()))
const total = cart.cartTotalAmount


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
        total,
        }),
      })
        .then((r) =>console.log( r.json()))
        .then((newOrder) => addOrder(newOrder));
        handleClearCart()
      navigate("/placed");
}



  return (
    <div className="bookmeal">
      <div>
        <button className="getStarted" style={{padding:"7px", backgroundColor:"#002524", fontSize:"22px", fontWeight:"600", borderBottomRightRadius:"15px", borderBottomLeftRadius:"15px"}} onClick={handleSubmit}>Place Order</button>
      </div>
    </div>
  )
}
