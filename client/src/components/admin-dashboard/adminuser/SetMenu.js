import React, {useEffect, useState} from 'react';
import { useGetAllMenu_itemsQuery } from "../../homeuser/ProductsApi";
import { Link } from "react-router-dom";



export default function SetMenu() {
 
    // const[menu_items, setmenu_items] = useState([])
    const [image_url, setImage_url] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const { data, error, isLoading } = useGetAllMenu_itemsQuery();

    const [Items, setItems] = useState({
      name: "",
      price: "",
      description: "",
      image_url: "",
      on_menu: true,
      category_id: 1,
      user_type: 1,
    });
  


	useEffect(() => {
		let url = "https://bookameal-backend.herokuapp.com/menu_items"
		fetch(url)
			.then( res => res.json())
			.then(data => {
                const menu_item = data[2]

                setName(menu_item.name)
                setPrice(menu_item.price)
                setDescription(menu_item.description)
                setImage_url(menu_item.image_url)
            })
	},[])

  function handleClickDelete(e) {
    let id = e.target.id
    fetch(`https://bookameal-backend.herokuapp.com/menu_items/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deleteItem) => handleDelete(deleteItem));
      console.log(Items.id)
  }
  function handleDelete(deleteItem) {
    let newItems = Items.filter((Items) => Items.id !== deleteItem.id);
    setItems(newItems);
  }

  return (
    <div>
        <center>
        <div>
      {/* <h2>Orders of the Day</h2> */}
          <div className="products" style={{display:"flex", flexWrap:"wrap", gap:"50px"}}>
            {data &&
              data?.map((menu_item) => (
                <div key={menu_item.id} className="product" style={{marginTop:"50px", height:"600px", width:"20%", backgroundImage: 'url(https://images.unsplash.com/photo-1521193089946-7aa29d1fe776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)', border:"0.1px solid #875d2c", boxShadow:"0px 5px 5px 0px", marginTop: "50px"}}>
                  <h3 style={{color:"#002524", fontWeight:"600", textAlign:"center"}}>{menu_item.name}</h3>
                  <img src={menu_item.image_url} alt={menu_item.name} style={{width:"100%", height:"250px",}} />
                  <div className="details" style={{color:"black", fontWeight:"600", fontSize:"25px", textAlign:"center"}}>
                    <span>{menu_item.description}
                    <br />
                    <br />
                    ${menu_item.price}</span>
                  </div>
                  <div style={{display:"flex", justifyContent:"center", alignItems: "center"}}>
                    <button style={{backgroundColor: "#002524", width:"150px", height:"60px", paddingTop: "15px", paddingBottom: "15px" , fontSize:"18px", fontWeight: "600", borderBottomLeftRadius: "15px", borderTopRightRadius: "15px", textAlign: "center"}}>
                      Set to Menu
                    </button>
                    <button style={{backgroundColor: "#002524", width:"150px", height:"60px", paddingTop: "15px", paddingBottom: "15px" , fontSize:"18px", fontWeight: "600", borderBottomLeftRadius: "15px", borderTopRightRadius: "15px", textAlign: "center"}}>
                      <Link className="link" to="/EditMenu">Edit</Link>
                    </button>
                    <button onClick={handleClickDelete} style={{backgroundColor: "#002524", width:"150px", height:"60px", paddingTop: "15px", paddingBottom: "15px" , fontSize:"18px", fontWeight: "600", borderBottomLeftRadius: "15px", borderTopRightRadius: "15px", textAlign: "center"}}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
            {/* <h2>Today's Special delicacy</h2>
                <img src={image_url} style={{height: 200 + 'px', width: 200 + 'px',}} alt="name" />
                <p><strong>Name:</strong>{name}</p>
                <p><strong>Price:</strong>{price}</p>
                <p><strong>Description:</strong>{description}</p> */}
            </center>
    </div>
  )
}
