// import React, {useState} from 'react'



// export default function EditForm({menu_item, onEditMenu_item, isEditing, setisEditing}) {
 
//     const[mealdata, setMealData] = useState(menu_item)


//     function handleChange(e){
//         setMealData({...mealdata, [e.target.name]: e.target.value})
//     }

// function handleSubmit(e){
//     e.preventDefault()
//     fetch(`https://bookameal-backend.herokuapp.com/menu_items/${menu_item.id}`,{
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             name: mealdata.name,
//             image_url: mealdata.image_url,
//             price: mealdata.price,
//             description: mealdata.description
//         })
//     })
//         .then(r => r.json())
//         .then(editedMenu_item => onEditMenu_item(editedMenu_item))
//         setisEditing(()=> !isEditing)

//         setMealData({})
//         // Navigate("/menu_items")
// }
// return (
//     <form onSubmit={handleSubmit} className="editform">
//         <br />
//         <input type="text" 
//             value={mealdata.name}
//             name="name"
//             onChange={handleChange}
//              />
//         <br />
//         <label/>
//         <textarea 
//             type="text" 
//             value={mealdata.image_url}
//             name="image_url"
//             onChange={handleChange}
//         />
//         <label/>
//         <textarea 
//             type="number" 
//             value={mealdata.price}
//             name="price"
//             onChange={handleChange}
//         />
//         <label/>
//         <textarea 
//             type="text" 
//             value={mealdata.description}
//             name="description"
//             onChange={handleChange}
//         />
//         <br />
//         <button type="submit" className='edit'>Update</button>
//     </form>
// )
// }
