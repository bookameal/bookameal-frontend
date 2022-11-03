import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "./OrderAction";
import Navbar from '../homeuser/Navbar';
import '../homeuser/cart.css';
// import './orders.css'
// import formatCurrency from "../util";

class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }
  render() {
    const { orders } = this.props;
    return !orders ? (
      <div className="cart-container">
        <Navbar />
        <h2 className="menutoday" style={{marginTop:"-100px", fontWeight:"600", fontSize:"40px", width:"100%", textAlign:"center"}}><br/><br/>My Orders</h2>
        <p className="cart-empty" style={{color:"#002524", fontWeight:"500", fontSize:"28px", marginTop:"30px"}}>No Orders have been made &#129335;&#127998;</p>
      </div>
    ) : (
      <div className="orders">
        <h2>Orders</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              {/* <th>TOTAL</th> */}
              <th>NAME</th>
              <th>EMAIL</th>
              {/* <th>ADDRESS</th> */}
              <th>ITEMS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr>
                <td>{order.id}</td>
                <td>{order.createdAt}</td>
                {/* <td> {formatCurrency(order.total)}</td> */}
                <td>{order.user.name}</td>
                <td>{order.menu_item_id}</td>
                {/* <td>{order.address}</td> */}
                <td>
                  {order.cartItems.map((item) => (
                    <div>
                      {item.count} {" x "} {item.title}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default connect(
  (state) => ({
    orders: state.order,
  }),
  {
    fetchOrders,
  }
)(Orders);