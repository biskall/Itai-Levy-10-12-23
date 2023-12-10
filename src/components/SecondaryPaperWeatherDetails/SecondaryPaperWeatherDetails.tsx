import  React , {useEffect, useState} from 'react';
import { Paper, Typography, Box, Grid} from '@material-ui/core';
import { Forecast } from "../../interfaces/AllInterfaces"
import { useAppDispatch, useAppSelector } from '../../store/Hook';
import useStyles from "./Style";

interface SecondaryPaperWeatherDetailsProps {
  // You can define any additional props you may need
  forecast: Forecast;
  
}

const SecondaryPaperWeatherDetails: React.FC<SecondaryPaperWeatherDetailsProps> = ({forecast}) => {
  const classes = useStyles();
  const [dayString, setDayString] = useState<string>();
  const [dateString, setDateString] = useState<string>();
  const [maxTemperatureValue, setMaxTemperatureValue] = useState<number>();
  const [minTemperatureValue, setMinTemperatureValue] = useState<number>();
  const isCelsius = useAppSelector((state) => state.mode.isCelsius);

  const setDayAndDate = (date: string) => {
    const observationDate = new Date(date);
    // Get day
    const dayOfWeek = observationDate.toLocaleDateString('en-US', {
      weekday: 'long',
    });
    // Get "dd/mm" format
    const convertedFormattedDay = observationDate.toLocaleDateString('en-US', {
      day: '2-digit',
    });

    const convertedFormattedMonth = observationDate.toLocaleDateString('en-US', {
      month: '2-digit',
    });
    setDayString(`${dayOfWeek}`);
    setDateString(`${convertedFormattedDay}/${convertedFormattedMonth}`);
  }

  const convertTemperatureValue = (isCelsius: boolean) => {
    if(isCelsius === undefined)
    {
      return;
    }
    if(isCelsius){
      setMaxTemperatureValue(forecast.Temperature.Maximum.Value);
      setMinTemperatureValue(forecast.Temperature.Minimum.Value);
    }else{
      const toFahrenheit = (celsius: any) => (celsius * 9/5) + 32;

      // Using toFixed to round to one decimal place and converting back to a number
      const maxFahrenheit = Number(toFahrenheit(forecast.Temperature.Maximum.Value).toFixed(1));
      const minFahrenheit = Number(toFahrenheit(forecast.Temperature.Minimum.Value).toFixed(1));
  
      setMaxTemperatureValue(maxFahrenheit);
      setMinTemperatureValue(minFahrenheit);
    }
  }

  useEffect(() => {
    // TODO: convert TemperatureValue 
    convertTemperatureValue(isCelsius);
  }, [isCelsius]);

  useEffect(() => {
    if (forecast) {
      setTimeout(() =>setDayAndDate(forecast.Date), 200);
      convertTemperatureValue(isCelsius);
    }
  }, [forecast, isCelsius]);

  return (
    <Box className={classes.mainBox}>
      <Paper className={classes.paper}>
      <Typography variant="h6" gutterBottom>
        {dayString}
      </Typography>
      <Grid spacing={2}>
      <Typography variant="h6" gutterBottom>
        {dateString}
      </Typography>
      <Grid item xs={6}>
          {/* <img src="sun.png" alt="Sun" className={classes.sunImage} /> */}
        </Grid>
      <Grid item xs={6} className={classes.temperature}>
        <Typography variant="h5" className={classes.typoMin}>
        {minTemperatureValue} 
        <span className={classes.degreeSign1}>°</span>
        </Typography>
        <Typography variant="h5" className={classes.typoMid}>
          -
        </Typography>
        <Typography variant="h5" className={classes.typoMax}>
        {maxTemperatureValue}
        <span className={classes.degreeSign2}>°</span>
        </Typography>
      </Grid>
      </Grid>
    </Paper>
    </Box>
  );
}

export default SecondaryPaperWeatherDetails;