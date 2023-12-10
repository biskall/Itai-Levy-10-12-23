import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { CardFavoritesIntialState, CurrentWeatherDataDetails, Favorites, WeatherDataWithKeyAndName } from "../../interfaces/AllInterfaces";
import { weatherByKey } from '../Api/AllApi'
import axios from 'axios'

// Define the localStorage key for storing favorites
const FavoritesLocalStorageKey = "FavoritesLocalStorageKey";

// Define the initial state for the cardFavorite slice
const initialState: CardFavoritesIntialState = {
  WeatherDataWithKeyAndName: [],
  Favorites: [],
  IsError: false,
};

// Define an asynchronous thunk for fetching all favorites' weather data
export const getAllFavoritesWeatherData = createAsyncThunk(
    'cardFavorite/getAllFavoritesWeatherData',
    async (_, { getState }) => {
      try {
        // Get the favorites from localStorage
        const favoritesLocalStorage = localStorage.getItem(FavoritesLocalStorageKey);
        var weatherDataWithKeyAndName: WeatherDataWithKeyAndName[] = []
        
        if (favoritesLocalStorage) {
          var state = getState() as { favorite: CardFavoritesIntialState };
          const listFavorites: Favorites[] = JSON.parse(favoritesLocalStorage) as Favorites[];
          
          // Loop through each favorite to fetch weather data
          for (let favorite of listFavorites) {
            // Make an API request using Axios to fetch weather data by key
            const response = await axios.get(weatherByKey(favorite.cityKey), {headers: { Accept: 'application/json' }})
            const currentWeatherDataDetails: CurrentWeatherDataDetails = await response.data;
            // Create a WeatherDataWithKeyAndName object and add it to the array
            const weatherDataItem: WeatherDataWithKeyAndName = {
              currentWeatherDataDetails,
              cityKey: favorite.cityKey,
              cityName: favorite.cityName,
            };
        
            weatherDataWithKeyAndName.push(weatherDataItem);
          }
        }
        // Return the array of weather data with key and name
        return weatherDataWithKeyAndName;
      } catch (error) {
        console.log("Error fetching weather data:", error);
        throw error;
      }
    }
  );

const cardFavoriteSlice = createSlice({
  name: 'cardFavorite',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllFavoritesWeatherData.fulfilled, (state, action: PayloadAction<WeatherDataWithKeyAndName[] | undefined>) => {
        if(action.payload){
            state.WeatherDataWithKeyAndName = action.payload; 
            state.IsError = false;
        }else{
            state.IsError = true;
        }
      })
      .addCase(getAllFavoritesWeatherData.rejected, (state) => {
        state.IsError = true;
      });
  },
});

export const cardFavoriteActions = {...cardFavoriteSlice.actions, getAllFavoritesWeatherData}

export default cardFavoriteSlice;