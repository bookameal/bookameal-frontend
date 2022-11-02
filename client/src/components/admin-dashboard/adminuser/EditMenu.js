import React, {useState, useEffect} from 'react'
import { useNavigate, useParams} from "react-router-dom"



export default function EditForm() {
    
    const[menu_item,setMenuItem] = useState({})
    const navigate = useNavigate();
    
    let { id } = useParams()
    

    useEffect(() => {

		let url = `https://bookameal-backend.herokuapp.com/menu_items/${id}`
		fetch(url)
			.then( res => res.json())
			.then(data =>setMenuItem(data) )
	},[])


    function addItem(newItem) {
        setMenuItem([...menu_item, newItem]);
      }
   
      function handleUpdateItem(updatedItem) {
        const updatedItems = menu_item.map((item) => {
          if (item.id === updatedItem.id) {
            return updatedItem;
          } else {
            return item;
          }
        });
        setMenuItem(updatedItems);
      }

function handleSubmit(e){
    e.preventDefault()
    fetch(`https://bookameal-backend.herokuapp.com/menu_items/${id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: menu_item.name,
            image_url: menu_item.image_url,
            price: menu_item.price,
            description: menu_item.description,

        })
    })
    .then((r) => r.json())
    .then((updatedItem) => handleUpdateItem(updatedItem));

        navigate("/admin");
}

     
const handleChange = (e) => {
    setMenuItem({...menu_item,[e.target.name]:e.target.value});
};


return (
    <form onSubmit={handleSubmit} className="editform">
        <label htmlFor="title"><strong style={{color:"white"}}>Update Meal name</strong></label>
        <br />
        <input type="text"
            value={menu_item.name}
            name="name"
            placeholder='name'
            onChange={handleChange}
             />
        <br />
        <label htmlFor='image_url' />
        <textarea
            type="text"
            rows="10"
            columns="100"
            value={menu_item.image_url}
            name="image_url"
            onChange={handleChange}
        />
        <label htmlFor='price' />
        <textarea
            type="number"
            rows="10"
            columns="100"
            value={menu_item.price}
            name="price"
            onChange={handleChange}
        />
        <label htmlFor='body' />
        <textarea
            type="text"
            rows="10"
            columns="100"
            value={menu_item.description}
            name="description"
            onChange={handleChange}
        />
        <br />
        <button type="submit" className='edit' >Update</button>
    </form>
)
}
