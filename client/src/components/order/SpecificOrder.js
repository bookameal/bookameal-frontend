import React from 'react'
import {useEffect,useState} from "react";

function SpecificOrder() {
    const [getUsers, setGetUser] = useState([]);

     useEffect(() => {
        fetch("https://bookameal-backend.herokuapp.com/orders")
         .then((response) => response.json())
        .then((getUser) => setGetUser(getUser));
    
     },[]);




  return (
    <div>
        <h3>SpecificOrder</h3>

        {getUsers.filter().map((getUser)=> (
            <div key={getUser.id}>
                <p>Quantity: {getUser.quantity}</p>
                <p>DayTime: {getUser.dayTime}</p>
                <p>UserId: {getUser.user_id}</p>
                <p>MenuItemId: {getUser.menu_item_id}</p>
                </div>
        )
        )}
    </div>
  )
}

export default SpecificOrder