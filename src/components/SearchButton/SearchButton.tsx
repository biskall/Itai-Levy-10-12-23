import React , {useState, useEffect} from 'react';
import {Paper, 
  InputBase,
  IconButton,
  Autocomplete,
  TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch, useAppSelector } from '../../store/Hook';
import {useGetAutocompleteQuery} from "../../store/action/autocomplete-api-slice";
import {Country} from "../../interfaces/AllInterfaces";
import {weatherActions} from '../../store/slice/WeatherSlice';
import useStyles from "./Style";
// import { getAutoOptions } from "../store/action/WeatherAction";


function SearchButton() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState<string>('');
  const [Value, setValue] = useState<string>();
  const options = useAppSelector((state) => state.weather.options);
  const [country, setCountry] = useState<Country[]>([]);
  // const {data: todos,  isLoading, isSuccess, isError } = useGetTodoQuery(); //its working 
  // const [addTodo] = useAddTodoMutation();


  const isInputValid = (input: string | undefined): boolean => {
    // Regular expression pattern for English letters
    const englishLettersPattern = /^[a-zA-Z\s]*$/;
    if(input != undefined){
      return englishLettersPattern.test(input);
    }
    return true;
  };

  const checkValid = () => {
    console.log("check");
    if (!isInputValid(Value) && Number(Value) !== 0) {
      alert('Please enter text in English only.'); //TODO: Error message
    }if(Value != null && Value != ''){
      console.log("2 if check");
      console.log(Value);
      //addTodo(Value);
      //let temp: any = JSON.stringify(todos);
      //console.log(todos?.length);
      //TODO: load auto options with value
      //dispatch(getAutoOptions(value));
    }

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newInputValue = e.target.value;
    console.log(newInputValue);
    setValue(newInputValue);
  };

  const handleClick = (value: any): void => {
    console.log(value);
    const currentWeather = options.find((option) => option.LocalizedName == value);
    console.log(currentWeather);
    if(typeof currentWeather !== undefined) { 
      dispatch(weatherActions.setCurrentWeatherData({country: currentWeather}));
    }
  };

  useEffect(() => {
    //const timer = setTimeout(() => checkValid(), 500);
  }, []);

  return (
    // TODO: Autocomplete in search button from Material-UI
    <Paper component="form" className={classes.paper}>
    {(
        <Autocomplete
          className={classes.input}
          freeSolo
          options={options.map((temp: any) => temp.LocalizedName)} 
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