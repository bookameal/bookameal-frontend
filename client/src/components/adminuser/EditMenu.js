import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

 const menuApi = "https://bookameal-backend.herokuapp.com/menu_items";

export default function EditMenu(){

    const [menuItem, setMenuItem] = useState({})
    let { id } = useParams()
    let menuItem_url = `/https://bookameal-backend.herokuapp.com/menu_items/${id}`;
    
    useEffect(()=>{
        fetch(menuItem_url)
        .then(response=>response.json())
        .then(data=>setMenuItem(data))
    },[menuItem_url])
    //  let navigate = useNavigate();
      console.log(menuItem)

      const handleSubmit = (e) =>{
        e.preventDefault()
          fetch(`${menuApi}/${id}`, {
              method: "PATCH",
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify({
                  name: menuItem.name,
                  price: menuItem.price,
                  image_url: menuItem.image_url,
                  description: menuItem.description,
                  on_menu: menuItem.on_menu,
                  category_id: menuItem.category_id,
                  user_type: menuItem.user_type
              })
            })
            .then(response=>response.json())
            .then(data=>{
              // console.log(data)
            })
           
          };
   
        const handleFormChange = (e) => {
            setMenuItem({...menuItem,[e.target.name]:e.target.value
                ,[e.target.price]:e.target.value
                ,[e.target.image_url]:e.target.value
                ,[e.target.description]:e.target.value
                ,[e.target.on_menu]:e.target.value
                ,[e.target.category_id]:e.target.value
                ,[e.target.user_type]:e.target.value});
        };
      

  return (
    <div className='container py-5'>
      <center>
          <form onSubmit={handleSubmit} >
            <div className='py-4'>
            <input placeholder="name" name='name'value={menuItem.name} type = "text"
              onChange={handleFormChange}/>
               <input placeholder="price" name='price'value={menuItem.price} type = "text"
              onChange={handleFormChange}/>
               <input placeholder="image_url" name='image_url'value={menuItem.image_url} type = "text"
              onChange={handleFormChange}/>
               <input placeholder="description" name='description'value={menuItem.description} type = "text"
              onChange={handleFormChange}/>
               <input placeholder="on_menu" name='on_menu'value={menuItem.on_menu} type = "text"
              onChange={handleFormChange}/>
               <input placeholder="category_id" name='category_id'value={menuItem.category_id} type = "text"
              onChange={handleFormChange}/>
               <input placeholder="user_type" name='user_type'value={menuItem.user_type} type = "text"
              onChange={handleFormChange}/>
            </div>
            <button className='btn btn-primary' type="submit" value="Update"> Update Menu Item</button>
          </form>
      </center>
    </div>
  )
}

