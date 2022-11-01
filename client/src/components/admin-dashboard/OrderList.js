import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';
import '../../../src/App.css';
import Nav from './Nav'

export default function Orders() {

    const [orders, setOrders] = useState([]);


    useEffect(() => {
        fetch("https://bookameal-backend.herokuapp.com/orders")
            .then((response) => response.json())
            .then((data) => {
                setOrders(data);
                console.log(data)

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
            
            {orders.map((item) => (
                <tbody>
                    <tr style={{color:"#002524", textAlign:"center", fontSize:"18px"}}>
                        <td className="tdid">#{item.id}</td>
                        <td>{item.day}</td>
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
