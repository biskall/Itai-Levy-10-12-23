import React, {useState, useEffect} from 'react';
import { Paper, Typography, Grid, Box } from '@material-ui/core';
import { MainPaperWeatherDetailsProps, WeatherData, weatherData } from "../../interfaces/AllInterfaces";
import { useGetCurrentWeatherQuery } from "../../store/action/autocomplete-api-slice";
import useStyles from "./Style";


const MainPaperWeatherDetails: React.FC<MainPaperWeatherDetailsProps> = ({date, temperature }) => {
  const classes = useStyles();
  const [formattedDate, setFormattedDate] = useState<string>();
  const [isCelsius, setIsCelsius] = useState<boolean>(true); // TODO: change to useSelector or props
  

  const setDate = (date: string) => {

    console.log("setDate");
    console.log(date)
    const observationDate = new Date(date);
  
    // Get day and date in the desired format
    // TODO: change format
    const ConvertFormattDate = `${observationDate.toLocaleDateString('en-US', {
      weekday: 'long',
    })} ${observationDate.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })}`;

    setFormattedDate(ConvertFormattDate);
  }

  useEffect(() => {
    // TODO: convert date 
    setDate(date);
  }, [date]);

  return (
    <Box className={classes.mainBox}>
      <Paper className={classes.paper}>
      <Typography variant="h6" gutterBottom>
       {formattedDate}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h4" >
            {isCelsius ? temperature.Metric.Value : temperature.Imperial.Value} 
            <span className={classes.degreeSign}>°</span>
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>Min</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4">
            {isCelsius ? temperature.Metric.Value : temperature.Imperial.Value}
            <span className={classes.degreeSign}>°</span>
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>Max</Typography>
        </Grid>
      </Grid>
      </Paper>
    </Box>
  );
}

export default MainPaperWeatherDetails;