import { Favorite } from "@mui/icons-material";
import { createSlice, PayloadAction, createAsyncThunk,} from "@reduxjs/toolkit";
import { Favorites, FavoritesIntialState } from "../../interfaces/AllInterfaces";
const FavoritesLocalStorageKey = "FavoritesLocalStorageKey"

// Define the initial state for the favorite slice
const initialState: FavoritesIntialState = {
    Favorites: [],
    IsError: false,
    IsFavorite: false,
    FirstRun: true,
}

// Define an asynchronous thunk for checking if a city is in favorites
export const checkIfCityInFavorites = createAsyncThunk(
    'favorite/checkIfCityInFavorites',
    async (cityKey: string, { getState }) => {
      const state = getState() as { favorite: FavoritesIntialState };
      const favorite = state.favorite.Favorites.find((favor) => favor.cityKey === cityKey) ?? null;
      const isFavoriteExists = favorite != null ? true : false;
      return isFavoriteExists; 
    }
  );

// Create the favorite slice using createSlice
const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers:{
        // Reducer for setting a city as a favorite
        SetCityInFavorite(state, action: PayloadAction<{ favorites: Favorites }>){
            const isFavoriteExists = state.Favorites.find((favor) => favor.cityKey == action.payload.favorites.cityKey);
            if(!isFavoriteExists){
                state.Favorites.push(action.payload.favorites);
                try{
                    let json = JSON.stringify(state.Favorites);
                    localStorage.setItem(FavoritesLocalStorageKey, json);
                    state.IsError = false;
                }catch (e){
                    state.IsError = true;
                }
            }
        },
        // Reducer for deleting a city from favorites
        DeleteCityFromFavorite(state, action: PayloadAction<{ cityKey: string }>){
            state.Favorites = state.Favorites.filter((favor) => favor.cityKey !== action.payload.cityKey);
            try{
                let json = JSON.stringify(state.Favorites);
                localStorage.setItem(FavoritesLocalStorageKey, json);
                state.IsError = false;
            }catch (e){
                state.IsError = true;
            }
        },
         // Reducer for initializing favorites from localStorage
        initialLocalStorage(state){
            try{
                if(state.FirstRun){
                    const favoritesLocalStorage = localStorage.getItem(FavoritesLocalStorageKey);
                    if(favoritesLocalStorage){
                        state.Favorites =  JSON.parse(favoritesLocalStorage);
                    }
                }
                state.IsError = false;
            }catch(e){
                state.IsError = true;
            }
        }
    },
    extraReducers: (builder) => {
        // Handle the fulfilled and rejected cases for the async thunk
        builder
          .addCase(checkIfCityInFavorites.fulfilled, (state, action: PayloadAction<boolean>) => {
            state.IsFavorite = action.payload;
            state.IsError = false;
          })
          .addCase(checkIfCityInFavorites.rejected, (state) => {
            state.IsError = true;
          });
      },
})

export const favoriteActions = {...favoriteSlice.actions, checkIfCityInFavorites};

export default favoriteSlice;
