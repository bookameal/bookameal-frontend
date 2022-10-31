import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "./OrderAction";
// import './orders.css'
// import formatCurrency from "../util";

class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }
  render() {
    const { orders } = this.props;
    return !orders ? (
      <div><h2>No Orders have been made</h2></div>
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