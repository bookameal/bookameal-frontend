import React, {useEffect, useState} from 'react'

export default function SetMenu() {
 
    // const[menu_items, setmenu_items] = useState([])
    const [image_url, setImage_url] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

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

  return (
    <div>
        <center>
            <h2>Today's Special delicacy</h2>
                <img src={image_url} style={{height: 200 + 'px', width: 200 + 'px',}} alt="name" />
                <p><strong>Name:</strong>{name}</p>
                <p><strong>Price:</strong>{price}</p>
                <p><strong>Description:</strong>{description}</p>
            </center>
    </div>
  )
}
