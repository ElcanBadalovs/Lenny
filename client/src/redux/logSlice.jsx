import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    logPage: ''
}

export const logSlice = createSlice({
    name: 'locationSlice',
    initialState,
    reducers: {
        addLog: (state, action) => {
            const { log } = action.payload;
            state.logPage = log
        }
    }
})

export const { addLog } = logSlice.actions;
export default logSlice.reducer;