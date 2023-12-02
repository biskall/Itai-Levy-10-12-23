import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./FavoriteSlice";

const store = configureStore({
    reducer:{
        favorite: favoriteSlice.reducer
    }
})

export default store;