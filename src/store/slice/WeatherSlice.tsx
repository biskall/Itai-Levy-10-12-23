import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Country, WeatherInitialState } from "../../interfaces/interfaces";

const initialState: WeatherInitialState = {
    options: [],
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers:{
        check(state){
            console.log("check");
            console.log(state.options);
        },
        setAutocompleteOptions(state, action: PayloadAction<{ options: Country[] }>){
            console.log("setAutocompleteOptions");
            console.log(state.options);
            state.options = action.payload.options;
        }
    }
})

export const weatherActions = weatherSlice.actions;

export default weatherSlice;