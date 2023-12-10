import React, {useState, useEffect} from 'react';
import { Paper, Typography, Grid, Box } from '@material-ui/core';
import { MainPaperWeatherDetailsProps } from "../../interfaces/AllInterfaces";
import { useAppSelector } from '../../store/Hook';
import useStyles from "./Style";

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const MainPaperWeatherDetails: React.FC<MainPaperWeatherDetailsProps> = ({WeatherData}) => {
  const classes = useStyles();
  const [formattedDate, setFormattedDate] = useState<string>();
  const [temperatureValue, setTemperatureValue] = useState<number>();
  const isCelsius = useAppSelector((state) => state.mode.isCelsius);
  const currentWeatherDataDetails = useAppSelector((state) => state.weather.currentWeatherDataDetails);
  const isLoading = useAppSelector((state) => state.weather.IsLoading); 
  

  // Get day and date in the desired format
  const setDate = () => {
    const observationDate = new Date(WeatherData.LocalObservationDateTime ?? Date.now())
    const ConvertFormattWeakday = observationDate.toLocaleDateString('en-US', {
      weekday: 'long',
    });
    const convertedFormattedYear = observationDate.toLocaleDateString('en-US', {
      year: 'numeric',
    });
    const convertedFormattedDay = observationDate.toLocaleDateString('en-US', {
      day: '2-digit',
    });
    const convertedFormattedMonth = observationDate.toLocaleDateString('en-US', {
      month: '2-digit',
    });
    setFormattedDate(`${ConvertFormattWeakday} ${convertedFormattedDay}/${convertedFormattedMonth}/${convertedFormattedYear}`);
  }

  const set = async() => {
    console.log("WeatherData.Temperature.Metric.Value")
    console.log(WeatherData.Temperature.Metric.Value)
    console.log("WeatherData.Temperature.Imperial.Value")
    console.log(WeatherData.Temperature.Imperial.Value)
    await sleep(1e3);
    console.log("WeatherData.Temperature.Metric.Value")
    console.log(WeatherData.Temperature.Metric.Value)
    console.log("WeatherData.Temperature.Imperial.Value")
    console.log(WeatherData.Temperature.Imperial.Value)
  }

  useEffect(() => {
    //set();
  }, [isCelsius]);

  useEffect(() => {
    console.log(WeatherData)
    setDate();
    console.log("set")
    set();
  }, [currentWeatherDataDetails]);

  return (
    <Box className={classes.mainBox}>
      <Paper className={classes.paper}>
      <Typography variant="h6" gutterBottom>
       {formattedDate}
      </Typography>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Typography variant="h4" className={classes.gridContainerTypography}>
            {isCelsius ? WeatherData.Temperature.Metric.Value : WeatherData.Temperature.Imperial.Value} 
            <span className={classes.degreeSign}>°</span>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" className={classes.gridContainerTypography}>
           {WeatherData ? WeatherData.WeatherText : 'N/A'}
          </Typography>
        </Grid>
      </Grid>
      </Paper>
    </Box>
  );
}

export default MainPaperWeatherDetails;