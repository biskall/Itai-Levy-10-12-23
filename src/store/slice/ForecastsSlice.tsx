import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import {  ForecastsInitialState, AllForecastWeatherData } from "../../interfaces/AllInterfaces";
import { forecastsByCityKey} from '../Api/FavoriteApi'
import axios from 'axios'

const initialState: ForecastsInitialState = {
    allForecastWeatherData:{
      Headline: undefined,
      DailyForecasts: undefined,
    },
    isError: false,
};

export const getForecastData = createAsyncThunk(
  'forecasts/getForecastData',
  async (cityKey:string, { getState }) => {
    try {
        const response = await axios.get(forecastsByCityKey(cityKey), {headers: { Accept: 'application/json' }})
        console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  }
);

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
        state.allForecastWeatherData = action.payload;
        state.isError = false; // Reset error state on success
      })
      .addCase(getForecastData.rejected, (state) => {
        state.isError = true;
      });
  },
});

export const forecastsActions = {...forecastsSlice.actions, getForecastData}

export default forecastsSlice;