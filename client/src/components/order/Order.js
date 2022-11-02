import React,{useState, useEffect} from 'react'
import { useNavigate, useParams} from "react-router-dom"
import { clearCart } from '../homeuser/CartSlice';
import { useDispatch, useSelector } from "react-redux"
import './order.css';
import {getUser} from '../homeuser/UserSclice'
 
const orderAPI = "http://127.0.0.1:3000/orders"

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
  

  console.log(cart.cartItems)
  console.log(user)

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const logged =  (user.user.body.id)
  
const user_id = logged  
// const menu_item_id= (cart.cartItems[0].id)
const cart_items = cart.cartItems.map((item)=>{return(item.name,item.cartQuantity)})
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
        quantity,
        dayTime,
        user_id,
        cart_items,
        }),
      })
        .then((r) => r.json())
        .then((newOrder) => addOrder(newOrder));
        handleClearCart()
      navigate("/placed");
}



  return (
    <div className="bookmeal">
      <div>
        <button className="getStarted" style={{padding:"7px", backgroundColor:"#002524", fontSize:"22px", fontWeight:"600", borderBottomRightRadius:"15px", borderBottomLeftRadius:"15px"}} onClick={handleSubmit}>Place Order</button>
      </div>
      {/* You have successfully placed your order */}
    </div>
  )
}
