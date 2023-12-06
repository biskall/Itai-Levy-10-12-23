// import {
//   fetchWeather,
//   addToFavorites,
//   removeFromFavorites,
// } from "../actions/weatherActions";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import FavoritesCard from "../FavoritesCard/FavoriteCard";
import useStyles from "./Style";

interface CityData {
    name: string;
    temperature: string;
    weather: string;
}

const citiesData: CityData[] = [
    { name: 'City 1', temperature: '25°C', weather: 'Sunny' },
    { name: 'City 2', temperature: '18°C', weather: 'Cloudy' },
    { name: 'City 3', temperature: '30°C', weather: 'Clear Sky' },
    { name: 'City 4', temperature: '22°C', weather: 'Rainy' },
    // Add more cities as needed
  ];
  

const FavoritesPage: React.FC = () => {
  const classes = useStyles();

  React.useEffect(() => {
    // Dispatch action to fetch weather data for default city or Tel Aviv
  }, []);

  return (
    <Container maxWidth="md">
    <Typography variant="h4" align="center" sx={{ mt: 4, mb: 2 }}>
      Favorite Cities
    </Typography>
    <Grid container spacing={2} justifyContent="center">
      {citiesData.map((city, index) => (
        <Grid item key={index} xs={12} sm={6} md={3}>
          <FavoritesCard {...city}/>
        </Grid>
      ))}
    </Grid>
  </Container>
  );
};

export default FavoritesPage;

