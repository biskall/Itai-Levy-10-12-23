import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {  ForecastsInitialState, AllForecastWeatherData } from "../../interfaces/AllInterfaces";
import { forecastsByCityKey} from '../Api/AllApi';
import { localForecasts } from "../../interfaces/exampleData";
import axios from 'axios'

// Define the initial state for the forecasts slice
const initialState: ForecastsInitialState = {
    allForecastWeatherData:{
      Headline: undefined,
      DailyForecasts: undefined,
    },
    isError: false,
    Isloading: true,
};

// Define an asynchronous thunk for fetching forecast data
export const getForecastData = createAsyncThunk(
  'forecasts/getForecastData',
  async (cityKey:string, { getState }) => {
    try {
      //throw new Error('Intentional error for testing getForecastData');
      const response = await axios.get(forecastsByCityKey(cityKey), {headers: { Accept: 'application/json' }})
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
// Create the forecasts slice using createSlice
const forecastsSlice = createSlice({
  name: 'forecasts',
  initialState,
  reducers: {
    check(state) {
      // Your check reducer logic
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getForecastData.fulfilled, (state, action: PayloadAction<AllForecastWeatherData>) => {
        // Update the state with the fetched forecast data on success
        state.allForecastWeatherData = action.payload;
        state.isError = false; 
        state.Isloading = false
      })
      .addCase(getForecastData.rejected, (state) => {
        // Update the state to indicate an error occurred during fetch
        state.isError = true;
        state.Isloading = false;
        state.allForecastWeatherData = localForecasts;
      });
  },
});

export const forecastsActions = {...forecastsSlice.actions, getForecastData}

export default forecastsSlice;