import React, {useEffect} from 'react';
import {FavoriteBorder, Favorite} from '@mui/icons-material';
import {Radio, 
RadioGroup,
FormControlLabel,  
FormControl, 
Checkbox,
Box} from '@material-ui/core';
import {favoriteActions} from '../../store/slice/FavoriteSlice';
import { useAppDispatch, useAppSelector } from '../../store/Hook';
import { modeActions } from '../../store/slice/modeSlice';
import useStyles from "./Style";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

interface AdvancedSettingsProps {
  cityKey: string;
  cityName: string;
}

const AdvancedSettings: React.FC<AdvancedSettingsProps> = ({cityKey, cityName}) => {
  const classes = useStyles();
  const [selected, setSelected] = React.useState<boolean>(); // false = not in favorite
  const isFavorite = useAppSelector((state) => state.favorite.IsFavorite);
  const dispatch = useAppDispatch();
  const isCelsius = useAppSelector((state) => state.mode.isCelsius);

  // Function to handle checkbox change (add/remove from favorites)
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.checked){
      dispatch(favoriteActions.SetCityInFavorite({favorites:{cityKey, cityName}}));
    }
    else{
      dispatch(favoriteActions.DeleteCityFromFavorite({cityKey: cityKey}));
    }
    setSelected(event.target.checked);
  };

  // Function to handle radio button change (toggle temperature mode)
  const handleRadioChange = (value : boolean) => {
    const newValue = value;
    dispatch(modeActions.changeIsCelsius({isCelsius : newValue}));
  };

  // Function to initialize the component state based on favorites
  const initialStep = async () => {
    try {
      await dispatch(favoriteActions.checkIfCityInFavorites(cityKey));
      setSelected(isFavorite);
    } catch (error) {
      console.error("Error dispatching action", error);
    }
  }

  useEffect(() => {
    console.log("AdvancedSettings") 
    initialStep();
  }, [cityKey, isFavorite, isCelsius]);

  return (
    <Box
    style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        marginTop: -10,
        marginLeft: '1%',
        }}>
    {selected != null && <Checkbox  style={{
        marginRight: '1%', 
      }} 
      {...label} 
      icon={<FavoriteBorder />} 
      checkedIcon={<Favorite />}
      checked={selected}
      onChange={handleCheckboxChange}
      />}
    <FormControl style={{
          marginLeft: '1%', 
        }}>
    <RadioGroup
      color="primary"
      className={classes.Radio}
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
      value={isCelsius ? "Celsius" : "Fahrenheit"}
      onChange={(event) => handleRadioChange(!isCelsius)}
    >
      <FormControlLabel 
      value="Celsius" 
      control={<Radio />} 
      label="Celsius" 
      checked={isCelsius}/>
      <FormControlLabel 
      value="Fahrenheit" 
      control={<Radio />} 
      label="Fahrenheit"  
      checked={!isCelsius}/>
    </RadioGroup>
  </FormControl>
  </Box>
  );
}

export default AdvancedSettings;