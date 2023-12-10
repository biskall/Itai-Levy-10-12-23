import React, {useEffect} from 'react';
import {Box} from "@mui/material";
import SecondaryPaperWeatherDetails from '../SecondaryPaperWeatherDetails/SecondaryPaperWeatherDetails'; // Make sure to import the correct path
import useStyles from "./Style";
import { useAppDispatch, useAppSelector } from '../../store/Hook';
import { forecastsActions } from '../../store/slice/ForecastsSlice';


interface ForecastWeatherContainerProps {
  cityKey: string;
}

const ForecastWeatherContainer: React.FC<ForecastWeatherContainerProps> = ({cityKey}) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const forecastsData = useAppSelector((state) => state.forecasts.allForecastWeatherData);

  // Function to initialize the component state based on favorites
  const initialStep = async () => {
    try {
      await dispatch(forecastsActions.getForecastData(cityKey));
    } catch (error) {
      console.error("Error dispatching action", error);
    }
  }

  useEffect(() => {
    initialStep();
  }, [cityKey]);

  return (
    <Box className={classes.box}>
      {forecastsData?.DailyForecasts?.map((daily) => (
        <SecondaryPaperWeatherDetails 
        key={daily.EpochDate}
        forecast = {daily} />
      ))}
    </Box>
  );
};

export default ForecastWeatherContainer;