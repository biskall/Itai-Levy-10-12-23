import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Mode } from "../../interfaces/AllInterfaces";

const initialState: Mode = {
    value: "light",
    isCelsius: true
}

const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers:{
        changeIsCelsius(state, action: PayloadAction<{ isCelsius: boolean }>){
            state.isCelsius = action.payload.isCelsius;
        },
        changeMode(state){
            if(state.value === "light"){
                state.value = "dark"
            }else{
                state.value = "light"
            }
        }
    }
})

export const modeActions = modeSlice.actions;

export default modeSlice;