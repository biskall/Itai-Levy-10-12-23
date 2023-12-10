import { Favorite } from "@mui/icons-material";
import { createSlice, PayloadAction, createAsyncThunk,} from "@reduxjs/toolkit";
import { Favorites, FavoritesIntialState } from "../../interfaces/AllInterfaces";
const FavoritesSessionStorageKey = "FavoritesSessionStorageKey"

const initialState: FavoritesIntialState = {
    Favorites: [],
    IsError: false,
    IsFavorite: false,
    FirstRun: true,
}


export const checkIfCityInFavorites = createAsyncThunk(
    'favorite/checkIfCityInFavorites',
    async (cityKey: string, { getState }) => {
      const state = getState() as { favorite: FavoritesIntialState };
      const favorite = state.favorite.Favorites.find((favor) => favor.cityKey === cityKey) ?? null;
      const isFavoriteExists = favorite != null ? true : false;
      return isFavoriteExists; 
    }
  );


const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers:{
        check(state){
        },
        SetCityInFavorite(state, action: PayloadAction<{ favorites: Favorites }>){
            const isFavoriteExists = state.Favorites.find((favor) => favor.cityKey == action.payload.favorites.cityKey);
            if(!isFavoriteExists){
                state.Favorites.push(action.payload.favorites);
                try{
                    let json = JSON.stringify(state.Favorites);
                    localStorage.setItem(FavoritesSessionStorageKey, json);
                }catch (e){
                    state.IsError = true;
                }
            }
        },
        DeleteCityFromFavorite(state, action: PayloadAction<{ cityKey: string }>){
            state.Favorites = state.Favorites.filter((favor) => favor.cityKey !== action.payload.cityKey);
            try{
                let json = JSON.stringify(state.Favorites);
                localStorage.setItem(FavoritesSessionStorageKey, json);
            }catch (e){
                state.IsError = true;
            }
        },
        initialLocalStorage(state){
            try{
                if(state.FirstRun){
                    const favoritesLocalStorage = localStorage.getItem(FavoritesSessionStorageKey);
                    if(favoritesLocalStorage){
                        state.Favorites =  JSON.parse(favoritesLocalStorage);
                    }
                }
            }catch{}
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(checkIfCityInFavorites.fulfilled, (state, action: PayloadAction<boolean>) => {
            state.IsFavorite = action.payload;
          })
          .addCase(checkIfCityInFavorites.rejected, (state) => {
            state.IsError = true;
          });
      },
})

export const favoriteActions = {...favoriteSlice.actions, checkIfCityInFavorites};

export default favoriteSlice;
