import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: {}
}

export const amountSlice = createSlice({
    name: 'amountSlice',
    initialState,
    reducers: {
        buyProduct: (state, action) => {
            const { productName, price, count, discount } = action.payload;
            if(productName in state.products){
                delete state.products[productName]
            }else{
                state.products[productName] = {price: price, count: count, discount: discount};
            }
        },
        addNewCount: (state, action) => {
            const { productName, newCount } = action.payload;
            if(state.products[productName]){
                state.products[productName].count = newCount;
            }
        },
        deletePrice: (state, action) => {
            const { productName } = action.payload;
            delete state.products[productName]
        } 
    }
})

export const { buyProduct, addNewCount, deletePrice } = amountSlice.actions;
export default amountSlice.reducer;