import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
// import {
//   fetchWeather,
//   addToFavorites,
//   removeFromFavorites,
// } from "../actions/weatherActions";
import { Container, Grid, TextField, Button, Box, Paper } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import SearchButton from "./SearchButton";
import MainPaperWeatherDetails from "./MainPaperWeatherDetails";
import OthersPaperWeatherDetails from "./OthersPaperWeatherDetails";
import AdvancedSettings from "./AdvancedSettings";

const useStyles = makeStyles((theme) => ({
  boxOthersPaper: {
},
}));

const WeatherPage = () => {
  const classes = useStyles();
  // Use useSelector to get data from Redux state
  // Use useDispatch to dispatch actions

  React.useEffect(() => {
    // Dispatch action to fetch weather data for default city or Tel Aviv
  }, []);

  return (
    <Grid
      container
      spacing={3}
      style={{ height: "33.33%", overflow: "hidden" }}
    >
      <Grid item xs={12}>
        <Container
          style={{
            marginTop: "5%",
            paddingBottom: "10px",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SearchButton></SearchButton>
          {/* Other UI components */}
        </Container>
      </Grid>
      <Container >
      <AdvancedSettings></AdvancedSettings>
      </Container>
      <Grid item xs={12}>
        <MainPaperWeatherDetails></MainPaperWeatherDetails>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            paddingBottom: "10px",
            justifyContent: "center",
            "& > :not(style)": {
              m: 2,
              width: 128,
              height: 128,
            },
          }}
        >
        {/* TODO: map array of next 5 days weather */}
          <OthersPaperWeatherDetails></OthersPaperWeatherDetails>
          <OthersPaperWeatherDetails></OthersPaperWeatherDetails>
          <OthersPaperWeatherDetails></OthersPaperWeatherDetails>
          <OthersPaperWeatherDetails></OthersPaperWeatherDetails>
          <OthersPaperWeatherDetails></OthersPaperWeatherDetails>
        </Box>
      </Grid>
    </Grid>
  );
};

export default WeatherPage;
