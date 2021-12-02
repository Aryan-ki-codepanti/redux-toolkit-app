import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const themeSlice = createSlice({
    name: "theme",
    initialState: { value: initialState },
    reducers:{
        changeColor: (state , action) => {
            state.value = action.payload.color
        },
        clearColor: (state, action) => {
            state.value =  initialState
        }
    } 
});

export const { changeColor , clearColor } = themeSlice.actions;

export default themeSlice.reducer;