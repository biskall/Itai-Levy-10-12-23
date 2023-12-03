import { createSlice } from "@reduxjs/toolkit";
import { Mode } from "../../interfaces/mode-interface";

const initialState: Mode = {
    value: "dark"
}

const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers:{
        check(state){
            console.log("check");
            console.log(state.value);
        },
        changeMode(state){
            if(state.value === "light"){
                state.value = "dark"
            }else{
                state.value = "light"
            }
            console.log(state.value);
        }
    }
})

export const modeActions = modeSlice.actions;

export default modeSlice;