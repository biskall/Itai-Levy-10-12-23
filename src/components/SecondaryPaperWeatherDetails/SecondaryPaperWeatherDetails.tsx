import  React , {useEffect, useState} from 'react';
import { Paper, Typography, Box, Grid} from '@material-ui/core';
import { Forecast } from "../../interfaces/AllInterfaces"
import useStyles from "./Style";

interface SecondaryPaperWeatherDetailsProps {
  // You can define any additional props you may need
  forecast: Forecast;
}

const SecondaryPaperWeatherDetails: React.FC<SecondaryPaperWeatherDetailsProps> = ({forecast}) => {
  const classes = useStyles();
  const [dayString, setDayString] = useState<string>();
  const [dateString, setDateString] = useState<string>();

  const setDayAndDate = (date: string) => {
    const observationDate = new Date(date);

    // Get day
    const dayOfWeek = observationDate.toLocaleDateString('en-US', {
      weekday: 'long',
    });

    // Get "dd/mm" format
    // TODO: change format 
    const convertedFormattedDate = observationDate.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
    });

    setDayString(`${dayOfWeek}`);
    setDateString(`${convertedFormattedDate}`);
  }

  useEffect(() => {
    setDayAndDate(forecast.Date);
  }, [forecast]);

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
      <Grid item xs={6}>
        <Typography variant="h5" className={classes.temperature}>
          25
          <span className={classes.degreeSign}>°</span>
        </Typography>
      </Grid>
      </Grid>
    </Paper>
    </Box>
  );
}

export default SecondaryPaperWeatherDetails;