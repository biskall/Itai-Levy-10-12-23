import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { CardFavoritesIntialState, CurrentWeatherDataDetails, Favorites, WeatherDataWithKeyAndName } from "../../interfaces/AllInterfaces";
import { weatherByKey } from '../Api/FavoriteApi'
import axios from 'axios'

const FavoritesLocalStorageKey = "FavoritesSessionStorageKey";

const initialState: CardFavoritesIntialState = {
    WeatherDataWithKeyAndName: [],
  Favorites: [],
  IsError: false,
};

export const getAllFavoritesWeatherData = createAsyncThunk(
    'cardFavorite/getAllFavoritesWeatherData',
    async (_, { getState }) => {
      try {
        const favoritesLocalStorage = localStorage.getItem(FavoritesLocalStorageKey);
        var weatherDataWithKeyAndName: WeatherDataWithKeyAndName[] = []
        
        if (favoritesLocalStorage) {
          var state = getState() as { favorite: CardFavoritesIntialState };
          const listFavorites: Favorites[] = JSON.parse(favoritesLocalStorage) as Favorites[];
          
          for (let favorite of listFavorites) {
            const response = await axios.get(weatherByKey(favorite.cityKey), {headers: { Accept: 'application/json' }})
            const currentWeatherDataDetails: CurrentWeatherDataDetails = await response.data;
  
            // Create an object with the required structure
            const weatherDataItem: WeatherDataWithKeyAndName = {
              currentWeatherDataDetails,
              cityKey: favorite.cityKey,
              cityName: favorite.cityName,
            };
  
            // Push the object into the array
            weatherDataWithKeyAndName.push(weatherDataItem);
          }
        }
  
        console.log("check 5555");
        console.log(weatherDataWithKeyAndName);
        // You might want to return the complete array
        return weatherDataWithKeyAndName;
      } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
      }
    }
  );

const cardFavoriteSlice = createSlice({
  name: 'cardFavorite',
  initialState,
  reducers: {
    check(state) {
      // Your check reducer logic
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllFavoritesWeatherData.fulfilled, (state, action: PayloadAction<WeatherDataWithKeyAndName[] | undefined>) => {
        if(action.payload){
            state.WeatherDataWithKeyAndName = action.payload;
            state.IsError = false; // Reset error state on success
        }
        else{
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