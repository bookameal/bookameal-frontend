import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';
import '../../../src/App.css';
import Nav from './Nav'

export default function Orders() {

    const [orders, setOrders] = useState([]);
    const [totals, setTotals] = useState([]);
    const [Todaytotals, setTodaytotals] = useState([]);


// total sales
    useEffect(() => {
        fetch("https://bookameal-backend.herokuapp.com/totals")
            .then((response) => response.json())
            .then((data) => {
                setTotals(data);
                // console.log(data)

            }
            )
    }, []);

// totals sales in a day
    useEffect(() => {
        fetch("https://bookameal-backend.herokuapp.com/Todaytotals")
            .then((response) => response.json())
            .then((data) => {
                setTodaytotals(data);
                // console.log(data)

            }
            )
    }, []);

    //all orders

    useEffect(() => {
        fetch("https://bookameal-backend.herokuapp.com/orders")
            .then((response) => response.json())
            .then((data) => {
                setOrders(data);
                // console.log(data)

            }
            )
    }, []);


    return (
        <div>
        <div className="admin-orders">
        <Nav />
        <h2 className="menutoday" style={{marginTop:"-100px", fontWeight:"600", fontSize:"40px", width:"100%", textAlign:"center"}}><br/><br/>Order List</h2>
        <Table striped bordered hover variant="dark" className='order-table' style={{position:"absolute", top:"200px", width:"65%"}}>
                
                    <th className="thead">Order ID</th>
                    <th className="thead">Date</th>
                    <th className="thead">User Name</th>
                    <th className="thead">Menu Item</th>
                    <th className="thead">Quantity</th>
                    <th className="thead">Totals</th>
            
            {orders.map((item) => (
                <tbody>
                    <tr style={{color:"#002524", textAlign:"center", fontSize:"18px"}}>
                        <td className="tdid">#{item.id}</td>
                        <td>{item.dayTime}</td>
                        <td>{item.user.user_name}</td>
                        <td>{item.menu_item_id}</td>
                        <td>{item.quantity}</td>
                        <td>{item.total}</td>
                    </tr>

                </tbody>
            ))}

        </Table>   
        </div>
        {/* <br/>
        <h2> OVERALL TOTAL SALES MADE: ${totals}</h2>
        <br/>
        <h2>TOTAL SALES FOR TODAY ONLY: ${Todaytotals}</h2> */}
        </div>
    );
}
