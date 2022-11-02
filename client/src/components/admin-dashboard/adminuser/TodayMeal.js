import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

function TodayMeal({menu_item}) {
 
  const [menu_items, setMenu_items] = useState([]);
  const [onMenu, setOnMenu] = useState(false)

  let {id} = useParams()
  // function handleOnMenu(){
  //   setOnMenu((onMenu) => !onMenu)
  // }
 
  

  useEffect(() => {
    fetch("https://bookameal-backend.herokuapp.com/menu_items")
      .then((r) => r.json())
      .then((menu_items) => setMenu_items(menu_items));
  }, []);

  function handleUpdateItem(updatedItem) {
		const updatedItems = menu_items.map((menu_item) => {
		  if (menu_item.id === updatedItem.id) {
			return updatedItem;
		  } else {
			return menu_item;
		  }
		});
		setMenu_items (updatedItems);
	  }


  function handleAddOnMenu() {
    
    fetch(`https://bookameal-backend.herokuapp.com/menu_items/${menu_item.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        onMenu: !menu_item.onMenu,
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => handleUpdateItem(updatedItem));
  }





  return (
    <div>
      <div className="sidebar">
     
			<button className='edit'  onClick={handleAddOnMenu}>{onMenu? "Today Special" : "Not Today special"}</button>
      </div>
    </div>
  );
}

export default TodayMeal;

