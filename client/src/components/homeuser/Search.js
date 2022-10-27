
// import React, { useState } from "react";
// // import "./SearchBar.css";
// import { FiSearch } from "react-icons/fi";
// import { useGetAllMenu_itemsQuery } from "./ProductsApi";
// import { addToCart } from "./CartSlice";
// import { useDispatch} from "react-redux";
// import { useNavigate } from 'react-router-dom';
// import { GrFormClose } from "react-icons/gr";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

// export default function SearchBox({ placeholder}) {

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { data, error, isLoading } = useGetAllMenu_itemsQuery();

//     const [filteredData, setFilteredData] = useState([]);
//     const [wordEntered, setWordEntered] = useState("");
  
//     const handleFilter = (event) => {
//       const searchWord = event.target.value;
//       setWordEntered(searchWord);
//       const newFilter = data.filter((value) => {
//         return value.name.toLowerCase().includes(searchWord.toLowerCase());
//       });
  
//       if (searchWord === "") {
//         setFilteredData([]);
//       } else {
//         setFilteredData(newFilter);
//       }
//     };
  
//     const clearInput = () => {
//       setFilteredData([]);
//       setWordEntered("");
//     };

//     const handleAddToCart = (product) => {
//       dispatch(addToCart(product));
//       navigate('/cart')
//     };
  
//     return (
//       <div className="search">
//         <div className="searchInputs">
//         <div className="d-flex">
//             <input
//               type="search"
//               placeholder="Search for food"
//               className="me-2"
//               aria-label="Search"
//               value={wordEntered}
//               onChange={handleFilter}
//             />
//             <div className="searchIcon">
//               {filteredData.length === 0 ? (
//                 <Button variant="outline-succss" className="search">
//                   <FiSearch />
//                 </Button>
//               ) : (
//                 <GrFormClose id="clearBtn" onClick={clearInput} />
//               )}
//             </div>
//           </div>
//           <div className="dataResult">
//           {filteredData.length !== 0 && (
//             <div className="dataResult">
//               {filteredData.slice(0, 15).map((product, key) => {
//                 return (
//                   <div key={product.id} className="product">
//                     <h3>{product.name}</h3>
//                     <img src={product.image_url} alt={product.name} />
//                     <div className="details">
//                       <span>{product.description}</span>
//                       <span className="price">${product.price}</span>
//                     </div>
//                     <button onClick={() => handleAddToCart(product)}>
//                       Add To Cart
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//           </div>
          
//         </div>
//         {/* {filteredData.length !== 0 && (
//           <div className="dataResult">
//             {filteredData.slice(0, 15).map((product, key) => {
//               return (
//                 <div key = {product.id} className="product">
//                 <h3>{product.name}</h3>
//                 <img src={product.image} alt={product.name} />
//                 <div className="details">
//                   <span>{product.desc}</span>
//                   <span className="price">${product.price}</span>
//                 </div>
//                 <button onClick={() => handleAddToCart(product)}>
//                   Add To Cart
//                 </button>
//               </div>
//               );
//             })}
//           </div>
//         )} */}
//       </div>
//     );
//   }
  
 
