import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import "../../../src/App.css";

function OrderGet() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://bookameal-backend.herokuapp.com/orders")
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <Table striped bordered hover className="order-table">
        <th>Order ID</th>
        <th>Date</th>
        <th>User Name</th>
        <th>Menu Item</th>
        <th>Quantity</th>

        {orders.map((item) => (
          <tbody>
            <tr>
              <td>#{item.id}</td>
              <td>{item.dayTime}</td>
              <td>{item.user.user_name}</td>
              <td>{item.menu_item_id}</td>
              <td>{item.quantity}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}

export default OrderGet;
