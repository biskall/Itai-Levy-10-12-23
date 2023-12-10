import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Autocomplete, Country } from "../../interfaces/AllInterfaces";
import { autocomplete} from '../Api/AllApi'
import axios from 'axios'

// Define the initial state for the autocomplete slice
const initialState: Autocomplete = {
    Country:[],
    IsError: false,
    KeyWord:"",
};

// Define an asynchronous thunk for fetching autocomplete data
export const getAllautocompleteData = createAsyncThunk(
  'autocomplete/getAllautocompleteData',
  async (wordKey:string, { getState }) => {
    try {
        const response = await axios.get(autocomplete(wordKey), {headers: { Accept: 'application/json' }})
      return response.data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  }
);

// Create the autocomplete slice using createSlice
const autocompleteSlice = createSlice({
  name: 'autocomplete',
  initialState,
  reducers: {
  },
  // Handle the fulfilled and rejected cases for the async thunk
  extraReducers: (builder) => {
    builder
      .addCase(getAllautocompleteData.fulfilled, (state, action: PayloadAction<Country[]>) => {
        state.Country = action.payload;
        state.IsError = false; 
      })
      .addCase(getAllautocompleteData.rejected, (state) => {
        state.IsError = true;
      });
  },
});

export const autocompleteActions = {...autocompleteSlice.actions, getAllautocompleteData}

export default autocompleteSlice;