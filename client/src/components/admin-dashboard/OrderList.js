import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';
import '../../../src/App.css';
import Nav from './Nav'

export default function Orders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/orders")
            .then((response) => response.json())
            .then((data) => {
                setOrders(data);
                // console.log(data)

            }
            )
        // .then((data) => {
        //     console.log(data)
        // })
    }, []);

    return (
        <div className="admin-orders">
        <Nav />
        <h2 className="menutoday" style={{marginTop:"-100px", fontWeight:"600", fontSize:"40px", width:"100%", textAlign:"center"}}><br/><br/>Order List</h2>
        <Table striped bordered hover variant="dark" className='order-table' style={{position:"absolute", top:"200px", width:"65%"}}>
                
                    <th className="thead">Order ID</th>
                    <th className="thead">Date</th>
                    <th className="thead">User Name</th>
                    <th className="thead">Menu Item</th>
                    <th className="thead">Quantity</th>
                    <th className="thead">Total</th>

            
            {orders.map((item) => (
                <tbody>
                    <tr style={{color:"#002524", textAlign:"center", fontSize:"18px"}}>
                        <td className="tdid">#{item.id}</td>
                        <td>{item.dayTime}</td>
                        <td>{item.user.user_name}</td>
                        <td>{item.menu_item_id}</td>
                        <td>{item.quantity}</td>
                        <td>{item.total * item.quantity}</td>
                        

                    </tr>

                </tbody>
            ))}

        </Table>
        {/* <Card className='totalsale' border="primary" style={{ width: '18rem' }}>
        <Card.Header>Total Sales</Card.Header>
        <Card.Body>

          <Card.Title>End of day total sales</Card.Title>
          {orders.map((item) => (

          <Card.Text>
            <p>{item.total * item.quantity}</p>
          </Card.Text>
                      ))}

        </Card.Body>
      </Card> */}
        </div>
    );
}
