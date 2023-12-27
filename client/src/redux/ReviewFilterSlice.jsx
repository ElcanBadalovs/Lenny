import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const ReviewFilter = createSlice({
  name: "ReviewFilter",
  initialState,
  reducers: {
    ReviewFilterAdd: (state, action) => {
      const { stateName, data } = action.payload;
      const index = state.data.findIndex((item) => item.raiting === data || item.topics === data);
      if (index !== -1) {
        state.data.splice(index, 1);
      } else {
        state.data.push({ [stateName]: data });
      }
    },
  },
});

export const { ReviewFilterAdd } = ReviewFilter.actions;
export default ReviewFilter.reducer;
