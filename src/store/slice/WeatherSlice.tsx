import { createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";
import { Country, WeatherInitialState, CurrentWeatherDataDetails, AllForecastWeatherData } from "../../interfaces/AllInterfaces";
import { weatherByKey } from '../Api/AllApi'
import { localCurrentWeatherDataDetails } from "../../interfaces/exampleData";
import axios from 'axios'

// Define the initial state for the weather slice
const initialState: WeatherInitialState = {
    options: [],
    defultWeatherDataKeys:{
        isFavorite: false,
        cityKey: "215854",
        cityName: "TEL AVIV",
    },
    currentWeatherDatakeys: {
        isFavorite: false,
        cityKey: "",
        cityName: "",
    },
    allForecastWeatherData: [],
    currentWeatherDataDetails: undefined,
    IsError: false,
    IsLoading: true,
}
// Define an asynchronous thunk for fetching weather data by city key
export const getWeatherDataByKey = createAsyncThunk(
    'weather/getWeatherDataByKey',
    async (cityKey : string) => {
      try{
        const res = await axios.get(weatherByKey(cityKey), {headers: { Accept: 'application/json' }});
        return res.data[0] as CurrentWeatherDataDetails; 
      }catch(error){
        console.error("Error fetching Weather data:", error);
        throw error;
      }
    }
  );

// Create the weather slice using createSlice
const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers:{
        // Reducer for setting the current weather data keys from search
        setCurrentWeatherDataKeysFromSearch(state, action: PayloadAction<{ country: Country }>){
            state.currentWeatherDatakeys.cityKey = action.payload.country.Key;
            state.currentWeatherDatakeys.cityName = action.payload.country.LocalizedName;
        },
        // Reducer for setting the current weather data by details
        setCurrentWeatherDataByDetails(state, action: PayloadAction<{ currentWeatherDataDetails :CurrentWeatherDataDetails,  isFavorite: boolean }>){
            state.currentWeatherDataDetails = action.payload.currentWeatherDataDetails;
            if(action.payload.isFavorite !== state.currentWeatherDatakeys.isFavorite){
                state.currentWeatherDatakeys.isFavorite = action.payload.isFavorite; 
            }
        },
        // Reducer for setting the forecast weather data
        setForecastWeatherData(state, action: PayloadAction<{allForecastWeatherData : AllForecastWeatherData[]}>) {
            if(action.payload.allForecastWeatherData !== undefined){
                state.allForecastWeatherData = action.payload.allForecastWeatherData;
            } 
        },  
    },
    extraReducers: (builder) => {
        builder
          .addCase(getWeatherDataByKey.fulfilled, (state, action: PayloadAction<CurrentWeatherDataDetails | undefined>) => {
            // Update the state with the fetched current weather data on success
            if(action.payload !== undefined){
                state.currentWeatherDataDetails = action.payload;
                state.IsError = false; 
                state.IsLoading = false;
            }
          })
          // Update the state to indicate an error occurred during fetch
          .addCase(getWeatherDataByKey.rejected, (state) => {
            state.IsLoading = false;
            state.IsError = true;
            state.currentWeatherDataDetails = localCurrentWeatherDataDetails;
          });
      },
})

export const weatherActions = {...weatherSlice.actions, getWeatherDataByKey};

export default weatherSlice;