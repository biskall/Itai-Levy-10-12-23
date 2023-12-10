import React, {useEffect, useState} from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import useStyles from "./Style";
import SearchButton from "../SearchButton/SearchButton";
import MainPaperWeatherDetails from "../MainPaperWeatherDetails/MainPaperWeatherDetails";
import AdvancedSettings from "../AdvancedSettings/AdvancedSettings";
import ForecastWeatherContainer from "../ForecastWeatherContainer/ForecastWeatherContainer";
import { useAppDispatch, useAppSelector } from '../../store/Hook';
import {favoriteActions} from "../../store/slice/FavoriteSlice"
import {weatherActions} from "../../store/slice/WeatherSlice";


const WeatherPage = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const currentWeatherDatakeys = useAppSelector((state) => state.weather.currentWeatherDatakeys);
  const defultWeatherDataKeys = useAppSelector((state) => state.weather.defultWeatherDataKeys);
  const currentWeatherDataDetails = useAppSelector((state) => state.weather.currentWeatherDataDetails);
  const isError = useAppSelector((state) => state.weather.IsError);
  const isCelsius = useAppSelector((state) => state.mode.isCelsius); 
  const [defultData, setDefultData] = useState<any>(currentWeatherDataDetails);


  const initialStep = async () => {
    try{
      if(currentWeatherDatakeys.cityKey != null && currentWeatherDatakeys.cityKey != "" ){
        await dispatch(weatherActions.getWeatherDataByKey(currentWeatherDatakeys.cityKey));
      }else{
        await dispatch(weatherActions.getWeatherDataByKey(defultWeatherDataKeys.cityKey));
      }
    }catch{
      console.log("isError");
    }
  };
  
  useEffect(() => {
    initialStep();
  }, [currentWeatherDatakeys, currentWeatherDataDetails]);

  useEffect(() => {
    initialStep();
    dispatch(favoriteActions.initialLocalStorage());
  }, []);

  return (
    <Box style={{marginTop: "20px"}}>
    <Grid container spacing={3} className={classes.gridItem}>
      <Grid item container direction="column" className={classes.gridSearchButton} >
          {/* <NewSearchButton /> */}
          <SearchButton/>
      </Grid>
      <Container>
        <AdvancedSettings 
        cityKey ={currentWeatherDatakeys.cityKey ? currentWeatherDatakeys.cityKey : defultWeatherDataKeys.cityKey}
        cityName = {currentWeatherDatakeys.cityName ? currentWeatherDatakeys.cityName : defultWeatherDataKeys.cityName}/>
      </Container>
      <Grid item xs={12} className={classes.gridMainPaperWeatherDetails}>
      <Typography variant="h5" className={classes.cityTitle} >
       {currentWeatherDatakeys.cityName ? currentWeatherDatakeys.cityName : defultWeatherDataKeys.cityName}
      </Typography>
      {currentWeatherDataDetails ? (
            <MainPaperWeatherDetails WeatherData={currentWeatherDataDetails} />
          ) : (
            <CircularProgress/>
          )}
      </Grid>
      <Grid item xs={12}>
          <ForecastWeatherContainer
           cityKey = {currentWeatherDatakeys.cityKey ? currentWeatherDatakeys.cityKey : defultWeatherDataKeys.cityKey}
           ></ForecastWeatherContainer>
      </Grid>
    </Grid>
    </Box>
  );
};

export default WeatherPage;

