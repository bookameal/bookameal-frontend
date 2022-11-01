import React, {useState} from 'react'
export default function EditForm({menu_item, onEditMenu_item,isEditing,setisEditing}) {
    const[mealdata, setMealData] = useState(menu_item)
    // let { id } = useParams()
    function handleChange(e){
        setMealData({...mealdata, [e.target.name]: e.target.value})
    }
function handleSubmit(e){
    e.preventDefault()
    fetch(`https://bookameal-backend.herokuapp.com/menu_items/${menu_item.id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(mealdata)
    })
        .then(r => r.json())
        .then(editedMenu_item => onEditMenu_item(editedMenu_item))
        setisEditing(()=> !isEditing)
        setMealData({})
}
return (
    <form onSubmit={handleSubmit} className="editform">
        <label htmlFor="title"><strong style={{color:"white"}}>Update Meal name</strong></label>
        <br />
        <input type="text"
            defaultValue={mealdata.name}
            name="name"
            onChange={handleChange}
             />
        <br />
        <label htmlFor='image_url' />
        <textarea
            type="text"
            rows="10"
            columns="100"
            defaultValue={mealdata.image_url}
            name="image_url"
            onChange={handleChange}
        />
        <label htmlFor='price' />
        <textarea
            type="number"
            rows="10"
            columns="100"
            defaultValue={mealdata.price}
            name="price"
            onChange={handleChange}
        />
        <label htmlFor='body' />
        <textarea
            type="text"
            rows="10"
            columns="100"
            defaultValue={mealdata.description}
            name="description"
            onChange={handleChange}
        />
        <br />
        <button type="submit" className='edit'>Update</button>
    </form>
)
}