import React , {useState} from 'react';
import {Paper, 
  Autocomplete,
  TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/Hook';
import {weatherActions} from '../../store/slice/WeatherSlice';
import useStyles from "./Style";
import { autocompleteActions } from '../../store/slice/AutocompleteSlice';


// Function to simulate sleep
function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function SearchButton() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchValue, setSearchValue] = useState<any>([]);
  const optionsAutocomplete = useAppSelector((state) => state.autocomplete.Country);

  // Function to check if the input contains valid English letters
  const isInputValid = (input: string | undefined): boolean => {
    const englishLettersPattern = /^[a-zA-Z\s]*$/;
    if(input !== undefined){
      return englishLettersPattern.test(input);
    }
    return false;
  };

  // Event handler for input change
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = e.target.value;
    if(newInputValue.length >= 1){
      // Dispatch autocomplete action to get matching options
      await dispatch(autocompleteActions.getAllautocompleteData(newInputValue));
      await sleep(1e3);
    }
  };

  // Event handler for selecting an option from autocomplete
  const handleClick = (value: any): void => { 
    const currentWeather = optionsAutocomplete?.find((option) => option.LocalizedName === value) ?? null;
    if(currentWeather != null && isInputValid(value)) { 
      dispatch(weatherActions.setCurrentWeatherDataKeysFromSearch({country: currentWeather}));
    }
  };


  return (
    <Paper component="form" className={classes.paper}>
    {(
        <Autocomplete
          className={classes.input}
          freeSolo
          options={optionsAutocomplete.map((temp: any) => temp.LocalizedName)} 
          value={searchValue}
          onChange={(e, value: any) => handleClick(value)}
          renderInput={(params) => (
            <TextField {...params} 
              placeholder="Search City"
              onChange={handleChange}
            />
          )}
        />
      )}
    </Paper>
  );
}


export default SearchButton; 