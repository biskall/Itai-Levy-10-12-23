import React, {useState, useEffect} from 'react';
import {
    Container,
    Grid,
    Typography,
    Box,
  } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import SecondaryPaperWeatherDetails from '../SecondaryPaperWeatherDetails/SecondaryPaperWeatherDetails'; // Make sure to import the correct path
import {forecasts, AllForecastWeatherData} from "../../interfaces/AllInterfaces"
import useStyles from "./Style";

interface ForecastWeatherContainerProps {
  // You can define any additional props you may need
  cityKey: string;
}

const ForecastWeatherContainer: React.FC<ForecastWeatherContainerProps> = (cityKey) => {
  const classes = useStyles();
  //const {dataForecast,  isLoading, isSuccess, isError } = useGetForecastWeatherQuery(cityKey);
  const [data, Data] = useState<AllForecastWeatherData[]>(forecasts); // data equal to data from useGetCurrentWeatherQuery
  const [defultData, setDefultData] = useState<AllForecastWeatherData[]>(forecasts);


  const setData = (data :AllForecastWeatherData[]) =>{
    if(data == undefined){
    // TODO: error function instead of setCurrentWeather(defultData);
    //   setCurrentWeather(defultData);
    }else{
        setDefultData(data);
        console.log(defultData);
    }
  }

  useEffect(() => {
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
    <Box className={classes.box}>
      {/* TODO: map array of next 5 days weather */}
      {defultData[0].DailyForecasts.map((daily) => (
        <SecondaryPaperWeatherDetails 
        key={daily.EpochDate}
        forecast = {daily} />
      ))}
    </Box>
  );
};

export default ForecastWeatherContainer;