import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Country, WeatherInitialState, countries, CurrentWeatherData } from "../../interfaces/AllInterfaces";

const initialState: WeatherInitialState = {
    options: countries,
    defultIsFavorite: false,
    defultCityKey: "",
    defultCityName: "",
    currentWeatherData: {
        isFavorite: false,
        cityKey: "",
        cityName: "",
    },
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
            //state.options = action.payload.options;
        },
        setCurrentWeatherData(state, action: PayloadAction<{ country?: Country }>){
            console.log("setCurrentWeatherData");
            if(action.payload.country != undefined){
                state.currentWeatherData.cityKey = action.payload.country.Key;
                state.currentWeatherData.cityName = action.payload.country.LocalizedName;
                console.log(state.currentWeatherData);
            }
            // TODO: function checkIsFavorite
            //state.currentWeatherData.isFavorite = checkIsFavorite(action.payload.country[0].Key);
        },
        getDefultWeatherData(state){
            //TODO pull the data of tel-aviv from localstorage or from server or hardcode
        }
    }
})

export const weatherActions = weatherSlice.actions;

export default weatherSlice;