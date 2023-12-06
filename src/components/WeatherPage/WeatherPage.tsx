import React, {useEffect, useState} from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import useStyles from "./Style";
import SearchButton from "../SearchButton/SearchButton";
import MainPaperWeatherDetails from "../MainPaperWeatherDetails/MainPaperWeatherDetails";
import SecondaryPaperWeatherDetails from "../SecondaryPaperWeatherDetails/SecondaryPaperWeatherDetails";
import AdvancedSettings from "../AdvancedSettings/AdvancedSettings";
import OthersWeatherContainer from "../ForecastWeatherContainer/ForecastWeatherContainer";
import { useAppDispatch, useAppSelector } from '../../store/Hook';
import { useGetCurrentWeatherQuery, useGetForecastWeatherQuery } from "../../store/action/autocomplete-api-slice";
import { MainPaperWeatherDetailsProps, WeatherData, weatherData, ParamsForecastQuery } from "../../interfaces/AllInterfaces";


const WeatherPage = () => {
  const classes = useStyles();
  const currentWeatherData = useAppSelector((state) => state.weather.currentWeatherData);
  const [defultData, setDefultData] = useState<WeatherData[]>(weatherData);
  const defultCityKey = useAppSelector((state) => state.weather.defultCityKey);
  const [currentWeather, setCurrentWeather] = useState<WeatherData[]>(weatherData); // // data example response of useGetCurrentWeatherQuery
  const [isCelsius, setIsCelsius] = useState<boolean>(true); // TODO: change to useSelector when AdvancedSettings will be ready
  const [data, Data] = useState<WeatherData[]>(weatherData); // data equal to data from useGetCurrentWeatherQuery
  const [paramsForecastQuery,setParamsForecastQuery] = useState<ParamsForecastQuery>();
  // TODO: check if first useGetCurrentWeatherQuery work
  //useGetCurrentWeatherQuery(currentWeatherData.cityKey != null ? currentWeatherData.cityKey : defultCityKey); // check it
  //const {data,  isLoading, isSuccess, isError } = useGetCurrentWeatherQuery(cityKey); // its working
  //const {dataForecast,  isLoading, isSuccess, isError } = useGetForecastWeatherQuery(cityKey);

  const setData = (data :WeatherData[]) =>{
    if(data == undefined){
      // TODO: error function instead of setCurrentWeather(defultData);
      setCurrentWeather(defultData);
    }else{
      setCurrentWeather(data);
    }
  }
  
  useEffect(() => {
    // Dispatch action to fetch weather data for default city or Tel Aviv
    // for dynamic data
    // if (isSuccess && data) {
    //   console.log(data);
    //   setTimeout(() => setDate(data), 500); // Assuming LocalObservationDateTime is a property in your data
    // }
    if (data) {
      console.log(data);
      setTimeout(() => setData(data), 500); // Assuming LocalObservationDateTime is a property in your data
    }
  }, [data]);

  return (
    <Box style={{marginTop: "20px"}}>
    <Grid container spacing={3} className={classes.gridItem}>
      <Grid item container direction="column" className={classes.gridSearchButton} >
          <SearchButton />
      </Grid>
      <Container>
        <AdvancedSettings />
      </Container>
      <Grid item xs={12} className={classes.gridMainPaperWeatherDetails}>
      <Typography variant="h5" className={classes.cityTitle} >
       {currentWeatherData.cityName ? currentWeatherData.cityName : "tel aviv"}  {/*TODO: insert defult data */}
      </Typography>
        <MainPaperWeatherDetails 
        date = {currentWeather[0].LocalObservationDateTime}
        temperature = {currentWeather[0].Temperature}
        />
      </Grid>
      <Grid item xs={12}>
          {/* TODO: map array of next 5 days weather */}
          <OthersWeatherContainer
           cityKey = {currentWeatherData.cityKey ? currentWeatherData.cityKey : "1111"}// TODO: insert defult data
           ></OthersWeatherContainer>
      </Grid>
    </Grid>
    </Box>
  );
};

export default WeatherPage;

