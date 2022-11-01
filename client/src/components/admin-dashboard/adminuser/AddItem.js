import React from 'react';
import { useState } from "react";
import axios from "axios";
<<<<<<< HEAD:client/src/components/admin-dashboard/AddItem.js
import '../admin-dashboard/adminuser/AddItem.css'; 
=======
// import './addItem.css'; 
>>>>>>> 535f5809f978db1421e27988ca844f381bc34db3:client/src/components/admin-dashboard/adminuser/AddItem.js

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

  function handleClickDelete(e) {
    fetch(`https://bookameal-backend.herokuapp.com/menu_items/${e.target.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deleteItem) => handleDelete(deleteItem));
  }
  function handleDelete(deleteItem) {
    let newItems = Items.filter((Items) => Items.id !== deleteItem.id);
    setItems(newItems);
  }

  return (
    <div >
      <form id="addItem" onSubmit={handleSubmit}>
        <h3>Add meal </h3>
        
        <br />
        <label htmlFor="name">Name</label>
        <input
          placeholder="enter the name"
          type="text"
          name="name"
          value={Items.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="price">
          {""}
          price</label>
        <input
          placeholder="enter the price"
          type="text"
          name="price"
          value={Items.price}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description">description</label>
        <input
          placeholder="enter the description"
          type="text"
          name="description"
          value={Items.description}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="image">Image</label>
        <input
          placeholder="enter the image_url"
          type="text"
          name="image_url"
          id="image"
          value={Items.image_url}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="onmenu">on_menu</label>
        <input
          placeholder="enter the menu"
          type="text"
          name="on-menu"
          input="true"
          value= {Items.on_menu}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="category">Category</label>
        <input
          placeholder="enter the category_id"
          type="text"
          name="category_id"
          value={Items.category_id}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="usertype">user_type</label>
        <input
          placeholder="enter the user_type"
          type="text"
          name="user_type"
          value={Items.user_type}
          onChange={handleChange}
        />
         <button className='button'>submit</button>
        <button id={Items.id} className="button" onClick={handleClickDelete}>
              Remove
            </button>
      </form>
    </div>
  );
}

export default AddItem;