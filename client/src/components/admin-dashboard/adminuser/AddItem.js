import React from 'react';
import { useState } from "react";
import axios from "axios";
import Nav from '../Nav';
import './addItem.css'; 

function AddItem() {
  const [Items, setItems] = useState({
    name: "",
    price: "",
    description: "",
    image_url: "",
    on_menu: true,
    category_id: 1,
    user_type: 1,
  });

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("https://bookameal-backend.herokuapp.com/menu_items", {
      name: Items.name,
      price: Items.price,
      description: Items.description,
      image_url: Items.image_url,
      on_menu: Items.on_menu,
      category_id: Items.category_id,
      user_type: Items.user_type,
    });
    
  }
  
  function handleChange(e) {
    setItems({ ...Items, [e.target.name]: e.target.value });
  }

  // function handleClickDelete(e) {
  //   fetch(`https://bookameal-backend.herokuapp.com/menu_items/${e.target.id}`, {
  //     method: "DELETE",
  //   })
  //     .then((r) => r.json())
  //     .then((deleteItem) => handleDelete(deleteItem));
  // }
  // function handleDelete(deleteItem) {
  //   let newItems = Items.filter((Items) => Items.id !== deleteItem.id);
  //   setItems(newItems);
  // }

  return (
    <div className="add-menu-item">
      <div><Nav /></div>
        <div>
          <h2 className="menutoday" style={{marginTop:"-100px", fontWeight:"600", fontSize:"40px", width:"100%", textAlign:"center"}}><br/><br/>Add to Menu</h2>
          <form className="add-item-form" id="addItem" onSubmit={handleSubmit}>
            <br />
            <label htmlFor="name">Name :</label>
            <input
              placeholder="Enter Meal Name"
              type="text"
              name="name"
              value={Items.name}
              onChange={handleChange}
              />
            <br />
            <label htmlFor="price">
              {""}
              Price :</label>
            <input
              placeholder="Enter the Meal's Price"
              type="text"
              name="price"
              value={Items.price}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="description">
              Meal Description :</label>
            <input
              placeholder="Enter the Meal's Description"
              type="text"
              name="description"
              value={Items.description}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="image">Image URL:</label>
            <input
              placeholder="Enter the Meal's Image Link"
              type="text"
              name="image_url"
              id="image"
              value={Items.image_url}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="onmenu">Is Item on Today's Menu ?</label>
            <input
              placeholder="Is Item on Today's Menu?"
              type="text"
              name="on-menu"
              input="true"
              value= {Items.on_menu}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="category">Menu Category :</label>
            <input
              placeholder="enter the category_id"
              type="text"
              name="category_id"
              value={Items.category_id}
              onChange={handleChange}
              />
            <br />
            <label htmlFor="usertype">User_Type :</label>
            <input
              placeholder="enter the user_type"
              type="text"
              name="user_type"
              value={Items.user_type}
              onChange={handleChange}
            />
          <button className='add-button'>Add to Menu</button>
          {/* <button id={Items.id} className="button" onClick={handleClickDelete}>
                Clear
          </button> */}
        </form>
      </div>
    </div>
  );
}

export default AddItem;