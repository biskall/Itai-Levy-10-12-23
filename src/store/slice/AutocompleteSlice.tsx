import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Autocomplete, Country } from "../../interfaces/AllInterfaces";
import { autocomplete} from '../Api/FavoriteApi'
import axios from 'axios'

const initialState: Autocomplete = {
    Country:[],
    IsError: false,
    KeyWord:"",
};

export const getAllautocompleteData = createAsyncThunk(
  'autocomplete/getAllautocompleteData',
  async (wordKey:string, { getState }) => {
    try {
        const response = await axios.get(autocomplete(wordKey), {headers: { Accept: 'application/json' }})
        console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  }
);

const autocompleteSlice = createSlice({
  name: 'autocomplete',
  initialState,
  reducers: {
    check(state) {
      // Your check reducer logic
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllautocompleteData.fulfilled, (state, action: PayloadAction<Country[]>) => {
        state.Country = action.payload;
        state.IsError = false; // Reset error state on success
      })
      .addCase(getAllautocompleteData.rejected, (state) => {
        state.IsError = true;
      });
  },
});

export const autocompleteActions = {...autocompleteSlice.actions, getAllautocompleteData}

export default autocompleteSlice;