
import React, { useState } from "react";
// import "./SearchBar.css";
import { FiSearch } from "react-icons/fi";
import { useGetAllProductsQuery } from "./ProductsApi";
import { addToCart } from "./CartSlice";
import { useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';
;

export default function SearchBox({ placeholder}) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetAllProductsQuery();

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
  
    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = data.filter((value) => {
        return value.name.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    };
  
    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    };

    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
      navigate('/cart')
    };
  
    return (
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          />
          {/* <div className="searchIcon">
            {filteredData.length === 0 ? (
             <FiSearch onClick={clearInput} />
            ) : (
              <FiSearch onClick={clearInput} />
            )}
          </div> */}
          
        </div>
        {filteredData.length !== 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((product, key) => {
              return (
                <div key = {product.id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">${product.price}</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Add To Cart
                </button>
              </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
  
 
