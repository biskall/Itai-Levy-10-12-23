import { createSlice, PayloadAction, createAsyncThunk} from "@reduxjs/toolkit";
import { Country, WeatherInitialState, CurrentWeatherDataDetails, AllForecastWeatherData } from "../../interfaces/AllInterfaces";
import { weatherByKey } from '../Api/FavoriteApi'
import axios from 'axios'

const initialState: WeatherInitialState = {
    options: [],
    defultWeatherDataKeys:{
        isFavorite: false,
        cityKey: "1111",
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
}

export const getWeatherDataByKey = createAsyncThunk(
    'weather/getWeatherDataByKey',
    async (cityKey : string) => {
      try{
        const res = await axios.get(weatherByKey(cityKey), {headers: { Accept: 'application/json' }});
        return res.data[0] as CurrentWeatherDataDetails;
      }catch(e: any){
        console.log(e.message);
        console.log("22222222")
        return undefined;
      }
    }
  );

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers:{
        check(state){
        },
        setAutocompleteOptions(state, action: PayloadAction<{ options: Country[] }>){
            //state.options = action.payload.options;
        },
        setCurrentWeatherDataKeysFromSearch(state, action: PayloadAction<{ country: Country }>){
            console.log( action.payload.country);
            state.currentWeatherDatakeys.cityKey = action.payload.country.Key;
            state.currentWeatherDatakeys.cityName = action.payload.country.LocalizedName;
            // TODO: function checkIsFavorite
            //state.currentWeatherData.isFavorite = checkIsFavorite(action.payload.country[0].Key);
        },
        setCurrentWeatherDataByDetails(state, action: PayloadAction<{ currentWeatherDataDetails :CurrentWeatherDataDetails,  isFavorite: boolean }>){
            state.currentWeatherDataDetails = action.payload.currentWeatherDataDetails;
            if(action.payload.isFavorite !== state.currentWeatherDatakeys.isFavorite){
                state.currentWeatherDatakeys.isFavorite = action.payload.isFavorite; 
            }
        },
        setForecastWeatherData(state, action: PayloadAction<{allForecastWeatherData : AllForecastWeatherData[]}>) {
            if(action.payload.allForecastWeatherData !== undefined){
                state.allForecastWeatherData = action.payload.allForecastWeatherData;
            } 
        },  //TODO pull the data of tel-aviv from localstorage or from server or hardcode
    },
    extraReducers: (builder) => {
        builder
          .addCase(getWeatherDataByKey.fulfilled, (state, action: PayloadAction<CurrentWeatherDataDetails | undefined>) => {
            if(action.payload != undefined){
                state.currentWeatherDataDetails = action.payload;
                state.IsError = false; // Reset error state on success
            }
          })
          .addCase(getWeatherDataByKey.rejected, (state) => {
            state.IsError = true;
          });
      },
})

export const weatherActions = {...weatherSlice.actions, getWeatherDataByKey};

export default weatherSlice;