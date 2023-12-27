import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: '',
};

export const category = createSlice({
    name: 'category',
    initialState,
    reducers: {
        newCategoryCall: (state, action) => {
            const { stateName, data } = action.payload;
            state.data = {[stateName]: data}
        }
    }
})

export const { newCategoryCall } = category.actions;
export default category.reducer;