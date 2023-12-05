import React , {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {Autocomplete, TextField} from '@mui/material';
import { makeStyles } from "@material-ui/core";
import { useAppDispatch, useAppSelector } from '../store/Hook';
import {useFetchCountriesQuery} from "../store/action/autocomplete-api-slice";
// import { getAutoOptions } from "../store/action/WeatherAction";


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '2px 14px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    backgroundColor: "#fff",
    color: "#000",
    opacity: .8
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: '10px',
  },
}));

function SearchButton() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState<string>('');
  const options = useAppSelector((state) => state.weather.options);

  // const {data = [], isFetching } = useFetchCountriesQuery("lon"); its working 

  const isInputValid = (input: string): boolean => {
    // Regular expression pattern for English letters
    const englishLettersPattern = /^[a-zA-Z\s]*$/;
    return englishLettersPattern.test(input);
  };

  const handleSearchChange = (event:any) => {
    const newInputValue = event.target.value;

    if (!isInputValid(newInputValue) && newInputValue !== 0) {
      console.log(newInputValue)
      alert('Please enter text in English only.'); //TODO: Error message
      setSearchValue('');
    }else{
      setSearchValue(newInputValue);
      console.log(newInputValue);
      //TODO: load auto options with value
      //dispatch(getAutoOptions(value));
    }
  };

  // useEffect(() => {

  // }, []);

  return (
    // TODO: Autocomplete in search button from Material-UI
    <Paper component="form" className={classes.paper}>
     <Autocomplete className={classes.input}
     freeSolo
     options={countries.map((country) => country.LocalizedName)} 
     value={searchValue}
     onChange={handleSearchChange}
     renderInput={(params)=>
       <TextField {...params} 
       placeholder="Search City"
     />}
     ></Autocomplete>
      <IconButton type="button" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

interface Country {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  Country: {
    ID: string;
    LocalizedName: string;
  };
  AdministrativeArea: {
    ID: string;
    LocalizedName: string;
  };
}

const countries: Country[] = [
  {
      "Version": 1,
      "Key": "328328",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "London",
      "Country": {
          "ID": "GB",
          "LocalizedName": "United Kingdom"
      },
      "AdministrativeArea": {
          "ID": "LND",
          "LocalizedName": "London"
      }
  },
  {
      "Version": 1,
      "Key": "59411",
      "Type": "City",
      "Rank": 13,
      "LocalizedName": "Loudi",
      "Country": {
          "ID": "CN",
          "LocalizedName": "China"
      },
      "AdministrativeArea": {
          "ID": "HN",
          "LocalizedName": "Hunan"
      }
  },
  {
      "Version": 1,
      "Key": "347625",
      "Type": "City",
      "Rank": 15,
      "LocalizedName": "Los Angeles",
      "Country": {
          "ID": "US",
          "LocalizedName": "United States"
      },
      "AdministrativeArea": {
          "ID": "CA",
          "LocalizedName": "California"
      }
  },
  {
      "Version": 1,
      "Key": "319242",
      "Type": "City",
      "Rank": 20,
      "LocalizedName": "Lome",
      "Country": {
          "ID": "TG",
          "LocalizedName": "Togo"
      },
      "AdministrativeArea": {
          "ID": "M",
          "LocalizedName": "Maritime"
      }
  },
  {
      "Version": 1,
      "Key": "57911",
      "Type": "City",
      "Rank": 23,
      "LocalizedName": "Longyan",
      "Country": {
          "ID": "CN",
          "LocalizedName": "China"
      },
      "AdministrativeArea": {
          "ID": "FJ",
          "LocalizedName": "Fujian"
      }
  },
  {
      "Version": 1,
      "Key": "77666",
      "Type": "City",
      "Rank": 25,
      "LocalizedName": "Longgang District",
      "Country": {
          "ID": "CN",
          "LocalizedName": "China"
      },
      "AdministrativeArea": {
          "ID": "GD",
          "LocalizedName": "Guangdong"
      }
  },
  {
      "Version": 1,
      "Key": "2580116",
      "Type": "City",
      "Rank": 25,
      "LocalizedName": "Longhua District",
      "Country": {
          "ID": "CN",
          "LocalizedName": "China"
      },
      "AdministrativeArea": {
          "ID": "GD",
          "LocalizedName": "Guangdong"
      }
  },
  {
      "Version": 1,
      "Key": "2332564",
      "Type": "City",
      "Rank": 25,
      "LocalizedName": "Longnan",
      "Country": {
          "ID": "CN",
          "LocalizedName": "China"
      },
      "AdministrativeArea": {
          "ID": "GS",
          "LocalizedName": "Gansu"
      }
  },
  {
      "Version": 1,
      "Key": "2332955",
      "Type": "City",
      "Rank": 25,
      "LocalizedName": "Longhui County",
      "Country": {
          "ID": "CN",
          "LocalizedName": "China"
      },
      "AdministrativeArea": {
          "ID": "HN",
          "LocalizedName": "Hunan"
      }
  },
  {
      "Version": 1,
      "Key": "2333548",
      "Type": "City",
      "Rank": 25,
      "LocalizedName": "Longyang District",
      "Country": {
          "ID": "CN",
          "LocalizedName": "China"
      },
      "AdministrativeArea": {
          "ID": "YN",
          "LocalizedName": "Yunnan"
      }
  }
]

export default SearchButton; 