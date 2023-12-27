import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const buyProductCount = createSlice({
  name: "category",
  initialState,
  reducers: {
    addProductID: (state, action) => {
      const { id } = action.payload;
      if (!state.includes(id)) {
        state.push(id);
      }
    },
    deleteProductID: (state, action) => {
      const { id } = action.payload;
      const index = state.indexOf(id);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addProductID, deleteProductID } = buyProductCount.actions;
export default buyProductCount.reducer;
