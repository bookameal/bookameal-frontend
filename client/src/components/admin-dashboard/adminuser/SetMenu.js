import React, { useEffect, useState } from "react";
import { useGetAllMenu_itemsQuery } from "../../homeuser/ProductsApi";
import { Link } from "react-router-dom";

export default function SetMenu() {
  // const[menu_items, setmenu_items] = useState([])
  const [image_url, setImage_url] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const { data, error, isLoading } = useGetAllMenu_itemsQuery();
  const [menuItem, setMenuItem] =useState([])

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
    let url = "https://bookameal-backend.herokuapp.com/menu_items";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const menu_item = data[2];

        setName(menu_item.name);
        setPrice(menu_item.price);
        setDescription(menu_item.description);
        setImage_url(menu_item.image_url);
      });
  }, []);
  

  function handleDelete(deleteItem) {
    setItems(Items.filter((Item) => Item.id !== deleteItem.id));
  }

  function handleClickDelete(e) {
    let id = e.target.id;
    fetch(`https://bookameal-backend.herokuapp.com/menu_items/${id}`, {
      method: "DELETE",
    });
    // .then((r) => r.json())
    // .then((deleteItem) => handleDelete(deleteItem));
    // console.log(Items.id)
    handleDelete(Items);
  }

  return (
    <div>
      <center>
        <div>
          <div
            className="products"
            style={{ display: "flex", flexWrap: "wrap", gap: "50px", height: "750px"}}
          >
            {data &&
              data?.map((menu_item) => (
                <div
                  key={menu_item.id}
                  className="product"
                  style={{
                    marginTop: "50px",
                    height: "750px",
                    width: "20%",
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
                    border: "0.1px solid #875d2c",
                    boxShadow: "0px 5px 5px 0px",
                    marginTop: "50px",
                  }}
                >
                  <h3
                    style={{
                      color: "#002524",
                      fontWeight: "600",
                      textAlign: "center",
                    }}
                  >
                    {menu_item.name}
                  </h3>
                  <img
                    src={menu_item.image_url}
                    alt={menu_item.name}
                    style={{ width: "100%", height: "250px" }}
                  />
                  <div
                    className="details"
                    style={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "22px",
                      textAlign: "center",
                    }}
                  >
                    <span>
                      {menu_item.description}
                      <br />
                      <br />${menu_item.price}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "block", }}
                  >
                    <button
                      style={{
                        backgroundColor: "#002524",
                        width: "150px",
                        height: "60px",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        margin: "20px",
                        fontSize: "18px",
                        fontWeight: "600",
                        borderBottomLeftRadius: "15px",
                        borderTopRightRadius: "15px",
                        textAlign: "center",
                      }}
                    >
                      Set to Menu
                    </button>
                    <Link id={menu_item.id} to={`/EditMenu/${menu_item.id}`}>
                      <button
                        id={menu_item.id}
                        style={{
                          backgroundColor: "#002524",
                          width: "150px",
                          height: "60px",
                          paddingTop: "15px",
                          paddingBottom: "15px",
                          fontSize: "18px",
                          fontWeight: "600",
                          borderBottomLeftRadius: "15px",
                          borderTopRightRadius: "15px",
                          textAlign: "center",
                        }}
                      >
                        Edit Item
                      </button>
                    </Link>
                    <button
                      id={menu_item.id}
                      onClick={handleClickDelete}
                      style={{
                        backgroundColor: "#875d2c",
                        color: "#fff",
                        width: "150px",
                        height: "60px",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        fontSize: "18px",
                        fontWeight: "600",
                        borderBottomLeftRadius: "15px",
                        borderTopRightRadius: "15px",
                        textAlign: "center",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </center>
    </div>
  );
}
