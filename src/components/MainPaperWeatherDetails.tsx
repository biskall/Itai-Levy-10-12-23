import React from 'react';
import Box from '@mui/material/Box';
import { Paper, Typography, Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    '& > :not(style)': {
      margin: theme.spacing(0),
      width: 328,
      height: 128,
    },
  },
  paper: {
    elevation: 3,
    textAlign: 'center'
  },
}));

function MainPaperWeatherDetails() {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Paper className={classes.paper}>
        {/* Upper Part */}
      <Typography variant="h6" gutterBottom>
        sunday 13/12/24
      </Typography>
      {/* Middle Part */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h3" color="primary">
            {/* Left Number */}
            42 {/* Replace with your dynamic data */}
          </Typography>
          <Typography variant="subtitle2">Minimum</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h3" color="secondary">
            {/* Right Number */}
            78 {/* Replace with your dynamic data */}
          </Typography>
          <Typography variant="subtitle2">Maximum</Typography>
        </Grid>
      </Grid>
      </Paper>
    </Box>
  );
}

export default MainPaperWeatherDetails;