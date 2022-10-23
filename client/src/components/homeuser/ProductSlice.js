import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//initial state
const initialState = {
  items: [],
  status: null,
};

// params action/payload creator
export const productsFetch = createAsyncThunk(
  "products/productsFetch",


//   payload creator
  async () => {
    try {
      const response = await axios.get(
        "https://chaoo-online-shop.herokuapp.com/products"
      );
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

//   generate action creator and handle action creator
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
        // check immer
      state.status = "pending";
      
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default productsSlice.reducer;