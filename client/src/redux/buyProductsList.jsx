import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const buyProductsList = createSlice({
  name: "buyProductsList",
  initialState,
  reducers: {
    newProductID: (state, action) => {
      const { companyName, product, id } = action.payload;
      if (!state.hasOwnProperty(companyName)) {
        state[companyName] = { [id]: product };
      } else {
        state[companyName][id] = product;
      }
    },
    deleteProduct: (state, action) => {
      const { companyName, id } = action.payload;
      if (Object.keys(state[companyName]).length > 1) {
        delete state[companyName][id];
      } else {
        delete state[companyName];
      }
    },
  },
});

export const { newProductID, deleteProduct } = buyProductsList.actions;
export default buyProductsList.reducer;
