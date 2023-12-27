import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const searchProductSlice = createSlice({
  name: "searchProductSlice",
  initialState,
  reducers: {
    addNewSearchFilter: (state, action) => {
      const { stateName, data } = action.payload;
      const index = state.data.findIndex(
        (item) => item.location === data || item.raiting === data || item.discount === data || item.categories === data || item.search === data);
      if (index !== -1) {
        state.data.splice(index, 1);
      } else {
        state.data.push({ [stateName]: data });
      }
    },
    addNewPrice: (state, action) => {
      const { stateName, data } = action.payload;
      const index = state.data.findIndex((item) =>  Object.keys(item)[0] === stateName)
      if (index !== -1) {
        if('minPrice' === stateName || 'maxPrice' === stateName){
          if(data !== ''){
            state.data[index][stateName] = data;
          }else{
            state.data.splice(index, 1);
          }
        }
      } else {
        state.data.push({ [stateName]: data });
      }
    }
  },
});

export const { addNewSearchFilter, addNewPrice } = searchProductSlice.actions;
export default searchProductSlice.reducer;
