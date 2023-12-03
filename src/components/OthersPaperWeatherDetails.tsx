import * as React from 'react';
import { Paper, Typography, Box, Grid} from '@material-ui/core';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    '& > :not(style)': {
      margin: theme.spacing(0),
      width: 128,
      height: 128,
    },
  },
  paper: {
    elevation: 3,
    textAlign: 'center',
    backgroundColor: "#fff",
    color: "#000",
    opacity: .4
  },
  degreeSign: {
    fontSize: '0.5 em', 
    verticalAlign: 'small',
    position: 'relative',
    top: -5, 
    marginRight: -5,
    marginLeft: -3,
  },
  temperature: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -65, 
    marginBottom: -20,
  },
  sunImage: {
    width: '50px', 
    height: '50px', 
  },
}));

function OthersPaperWeatherDetails() {
  const classes = useStyles();
  return (
    <Box className={classes.mainBox}>
      <Paper className={classes.paper}>
      <Typography variant="h6" gutterBottom>
        Day
      </Typography>
      <Grid spacing={2}>
      <Typography variant="h6" gutterBottom>14/12</Typography>
      <Grid item xs={6}>
          {/* <img src="sun.png" alt="Sun" className={classes.sunImage} /> */}
        </Grid>
      <Grid item xs={6}>
        <Typography variant="h5" className={classes.temperature}>
          42.23 
          <span className={classes.degreeSign}>°</span>
        </Typography>
      </Grid>
      </Grid>
    </Paper>
    </Box>
  );
}

export default OthersPaperWeatherDetails;