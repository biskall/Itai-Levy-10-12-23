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


function SearchButton() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState<string>('');
  const [Value, setValue] = useState<string>();
  const optionsAutocomplete = useAppSelector((state) => state.autocomplete.Country);

  const isInputValid = (input: string | undefined): boolean => {
    // Regular expression pattern for English letters
    const englishLettersPattern = /^[a-zA-Z\s]*$/;
    if(input != undefined){
      return englishLettersPattern.test(input);
    }
    return true;
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = e.target.value;
    console.log(newInputValue);
    await dispatch(autocompleteActions.getAllautocompleteData(newInputValue));
    setValue(newInputValue);
  };

  const handleClick = (value: any): void => { 
    console.log(value);
    const currentWeather = optionsAutocomplete.find((option) => option.LocalizedName === value) ?? null;
    console.log(currentWeather?.Country); 
    if(currentWeather != null && isInputValid(value)) { 
      dispatch(weatherActions.setCurrentWeatherDataKeysFromSearch({country: currentWeather}));
    }
  };

  useEffect(() => {
  }, []);

  return (
    // TODO: Autocomplete in search button from Material-UI
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
      <IconButton
       type="button" 
       className={classes.iconButton} 
       aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}


export default SearchButton; 