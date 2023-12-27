import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: '',
};

export const userInfo = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        addUserData: (state, action) => {
            const { stateName, data } = action.payload;
            state.data = {[stateName]: data}
        }
    }
})

export const { addUserData } = userInfo.actions;
export default userInfo.reducer;