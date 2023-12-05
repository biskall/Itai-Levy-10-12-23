import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./slice/FavoriteSlice";
import modeSlice from "./slice/modeSlice";
import weatherSlice from "./slice/WeatherSlice";
import {autocompleteSlice} from "./action/autocomplete-api-slice";


const store = configureStore({
    reducer:{
        favorite: favoriteSlice.reducer,
        mode: modeSlice.reducer,
        weather: weatherSlice.reducer,
        [autocompleteSlice.reducerPath]: autocompleteSlice.reducer
    },
    middleware:(getDefaultMiddleware) =>{
        return getDefaultMiddleware().concat(autocompleteSlice.middleware);
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;