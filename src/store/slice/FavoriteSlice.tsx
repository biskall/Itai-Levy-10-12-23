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
            // TODO: manage the array favorites in local storage
            // try {
            //     // example for set
            //     let json = JSON.stringify(passangersObj);
            //     sessionStorage.setItem(PassangersDetailsSessionStorageKey, json);
            //     //example for get 
            //     let passangerDataWithOptionListSessionStorage = sessionStorage.getItem(PassangerDataWithOptionListSessionStorageKey);
            //     if (sessionStorageData) {
            //         sessionStorageData = JSON.parse(sessionStorageData);
            //         setPassangersObj(sessionStorageData);
            // }catch (e) {}
        }
    }
})

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice;