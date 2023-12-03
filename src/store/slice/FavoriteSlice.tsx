import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {favorite: true},
    reducers:{
        check(state){
            console.log("check");
            console.log(state.favorite);
        },
        moreFunctions(state){
            console.log("moreFunctions");
            console.log(state.favorite);
        }
    }
})

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice;