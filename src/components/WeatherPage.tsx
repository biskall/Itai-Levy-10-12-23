// import {
//   fetchWeather,
//   addToFavorites,
//   removeFromFavorites,
// } from "../actions/weatherActions";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from "@mui/material";
import { makeStyles } from "@material-ui/core"; 

import SearchButton from "./SearchButton";
import MainPaperWeatherDetails from "./MainPaperWeatherDetails";
import OthersPaperWeatherDetails from "./OthersPaperWeatherDetails";
import AdvancedSettings from "./AdvancedSettings";

const useStyles = makeStyles((theme) => ({
  gridSearchButton: {
    paddingBottom: "10px",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  gridItem: {
    paddingBottom: "0px",
  },
  gridMainPaperWeatherDetails:{
  },
  box: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    "& > :not(style)": {
      margin: theme.spacing(2),
      width: 128,
      height: 128,
    },
  },
  cityTitle: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
    paddingBottom: "5px",
    color: theme.palette.info.dark, // Use the primary color of your theme (assumed to be blue)
    fontSize: '1.5em', // Adjust the font size as needed
    fontWeight: 'bold', // Adjust the font weight as needed
    textTransform: 'uppercase', // Optional: Convert text to uppercase
  },
}));

const WeatherPage = () => {
  const classes = useStyles();

  React.useEffect(() => {
    // Dispatch action to fetch weather data for default city or Tel Aviv
  }, []);

  return (
    <Box style={{marginTop: "20px"}}>
    <Grid container spacing={3} className={classes.gridItem}>
      <Grid item container direction="column" className={classes.gridSearchButton} >
          <SearchButton />
          {/* Other UI components */}
      </Grid>
      <Container>
        <AdvancedSettings />
      </Container>
      <Grid item xs={12} className={classes.gridMainPaperWeatherDetails}>
      <Typography variant="h5" className={classes.cityTitle} >
       Tel Aviv
      </Typography>
        <MainPaperWeatherDetails />
      </Grid>
      <Grid item xs={12}>
        <Box className={classes.box}>
          {/* TODO: map array of next 5 days weather */}
          <OthersPaperWeatherDetails />
          <OthersPaperWeatherDetails />
          <OthersPaperWeatherDetails />
          <OthersPaperWeatherDetails />
          <OthersPaperWeatherDetails />
        </Box>
      </Grid>
    </Grid>
    </Box>
  );
};

export default WeatherPage;

