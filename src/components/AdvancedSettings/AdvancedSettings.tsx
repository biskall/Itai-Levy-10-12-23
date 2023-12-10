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


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

interface AdvancedSettingsProps {
  cityKey: string;
  cityName: string;
}

const AdvancedSettings: React.FC<AdvancedSettingsProps> = ({cityKey, cityName}) => {
  const [selected, setSelected] = React.useState<boolean>(); // false = not in favorite
  const isFavorite = useAppSelector((state) => state.favorite.IsFavorite);
  const dispatch = useAppDispatch();
  const [radioGroupValue, setRadioGroupValue] = React.useState<boolean>(true);
  const isCelsius = useAppSelector((state) => state.mode.isCelsius);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.checked){
      dispatch(favoriteActions.SetCityInFavorite({favorites:{cityKey, cityName}}));
    }
    else{
      dispatch(favoriteActions.DeleteCityFromFavorite({cityKey: cityKey}));
    }
    setSelected(event.target.checked);
  };

  const handleRadioChange = (value : boolean) => {
    const newValue = value;
    dispatch(modeActions.changeIsCelsius({isCelsius : newValue}));
    setRadioGroupValue(newValue);
  };

  const initialStep = async () => {
    try {
      await dispatch(favoriteActions.checkIfCityInFavorites(cityKey));
      setSelected(isFavorite);
    } catch (error) {
      console.error("Error dispatching action", error);
    }
  }

  useEffect(() => {
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
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
      value={radioGroupValue ? "Celsius" : "Fahrenheit"}
      onChange={(event) => handleRadioChange(!radioGroupValue)}
    >
      <FormControlLabel value="Celsius" control={<Radio />} label="Celsius" checked={radioGroupValue}/>
      <FormControlLabel value="Fahrenheit" control={<Radio />} label="Fahrenheit"  checked={!radioGroupValue}/>
    </RadioGroup>
  </FormControl>
  </Box>
  );
}

export default AdvancedSettings;