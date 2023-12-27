import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: '',
}

export const product = createSlice({
    name: 'product',
    initialState,
    reducers: {
        ProductCall: (state, action) => {
            const { stateName, data } = action.payload;
            state.data = {[stateName]: data}
        }
    }
})

export const { ProductCall } = product.actions;
export default product.reducer;