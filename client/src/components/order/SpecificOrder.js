import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table';
import '../../../src/App.css';
// import Nav from './Nav'
import Navbar from '../homeuser/Navbar';
import {getUser} from '../homeuser/UserSclice'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams} from "react-router-dom"
import UserOrders from './UserOrders';

export default function SpecificOrders() {

    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(getUser());
    }, [user, dispatch]);
  
     

     
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

    const logged =  (user.user.body.id)
    const ordersToDisplay = orders.filter((item) =>(item.user.id === logged));
  
    return (
        <div>
          {(ordersToDisplay.length === 0) ? (
              <>
              <UserOrders/>
              </>

              
            ): (
        <div className="admin-orders">
        <Navbar />
        <h2 className="menutoday" style={{marginTop:"-100px", fontWeight:"600", fontSize:"40px", width:"100%", textAlign:"center"}}><br/><br/>Order List</h2>
        <Table striped bordered hover variant="dark" className='order-table' style={{position:"absolute", top:"200px", width:"65%"}}>               
                    <th className="thead">Order ID</th>
                    <th className="thead">Date</th>
                    <th className="thead">User Name</th>
                    <th className="thead">Menu Item</th>
                    <th className="thead">Quantity</th>
                    <th className="thead">Totals</th>
            
            {ordersToDisplay.map((item) => (
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
)}
        </div>
    );
}
