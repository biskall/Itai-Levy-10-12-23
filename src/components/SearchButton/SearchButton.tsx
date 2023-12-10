import React , {useState, useEffect} from 'react';
import {Paper, 
  InputBase,
  IconButton,
  Autocomplete,
  TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch, useAppSelector } from '../../store/Hook';
import {weatherActions} from '../../store/slice/WeatherSlice';
import useStyles from "./Style";
import { autocompleteActions } from '../../store/slice/AutocompleteSlice';
import { Country } from '../../interfaces/AllInterfaces';

// Function to simulate sleep
function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function SearchButton() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState<any>([]);
  const [lastValue, setLastValue] = useState<string>();
  const optionsAutocomplete = useAppSelector((state) => state.autocomplete.Country);

  // Function to check if the input contains valid English letters
  const isInputValid = (input: string | undefined): boolean => {
    const englishLettersPattern = /^[a-zA-Z\s]*$/;
    if(input != undefined){
      return englishLettersPattern.test(input);
    }
    return false;
  };

  // Event handler for input change
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = e.target.value;
    console.log(newInputValue);
    console.log(optionsAutocomplete);
    if(newInputValue.length >= 1){
      // Dispatch autocomplete action to get matching options
      await dispatch(autocompleteActions.getAllautocompleteData(newInputValue));
      await sleep(1e3);
    }
  };

  // Event handler for selecting an option from autocomplete
  const handleClick = (value: any): void => { 
    console.log(value);
    const currentWeather = optionsAutocomplete?.find((option) => option.LocalizedName === value) ?? null;
    console.log(currentWeather?.Country); 
    if(currentWeather != null && isInputValid(value)) { 
      dispatch(weatherActions.setCurrentWeatherDataKeysFromSearch({country: currentWeather}));
    }
  };

  useEffect(() => {
  }, []);

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