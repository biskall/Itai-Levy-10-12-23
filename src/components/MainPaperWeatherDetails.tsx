import React from 'react';
import Box from '@mui/material/Box';
import { Paper, Typography, Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainBox: {
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
    textAlign: 'center',
    backgroundColor: "#fff",
    color: "#000",
    opacity: .6
  },
  degreeSign: {
    fontSize: '0.5 em', 
    verticalAlign: 'small',
    position: 'relative',
    top: -5, 
    marginRight: -5,
    marginLeft: -5,
  },
  subtitle: {
    marginLeft: -7, 
  },
}));

function MainPaperWeatherDetails() {
  const classes = useStyles();

  return (
    <Box className={classes.mainBox}>
      <Paper className={classes.paper}>
      <Typography variant="h6" gutterBottom>
       sunday 13/12/24
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h4" >
            42.23 
            <span className={classes.degreeSign}>°</span>
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>Min</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4">
            78.31
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