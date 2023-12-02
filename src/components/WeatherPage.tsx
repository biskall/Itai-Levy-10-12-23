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
  container: {
    paddingBottom: "10px",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  gridItem: {
    paddingBottom: "10px",
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
}));

const WeatherPage = () => {
  const classes = useStyles();

  React.useEffect(() => {
    // Dispatch action to fetch weather data for default city or Tel Aviv
  }, []);

  return (
    <Box style={{marginTop: "20px"}}>
    <Grid container spacing={3} className={classes.gridItem}>
      <Grid item container direction="column" className={classes.container} >
          <SearchButton />
          {/* Other UI components */}
      </Grid>
      <Container>
        <AdvancedSettings />
      </Container>
      <Grid item xs={12}>
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

