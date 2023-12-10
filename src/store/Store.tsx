import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./slice/FavoriteSlice";
import modeSlice from "./slice/modeSlice";
import weatherSlice from "./slice/WeatherSlice";
import cardFavoriteSlice from "./slice/CardFavorite";
import autocompleteSlice from "./slice/AutocompleteSlice";
import forecastsSlice from "./slice/ForecastsSlice";


const store = configureStore({
    reducer: {
        forecasts: forecastsSlice.reducer,
        autocomplete: autocompleteSlice.reducer,
        cardFavorite: cardFavoriteSlice.reducer,
        favorite: favoriteSlice.reducer,
        mode: modeSlice.reducer,
        weather: weatherSlice.reducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;