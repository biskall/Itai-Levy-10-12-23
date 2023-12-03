import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./slice/FavoriteSlice";
import modeSlice from "./slice/modeSlice";

const store = configureStore({
    reducer:{
        favorite: favoriteSlice.reducer,
        mode: modeSlice.reducer
    }
})

export default store;