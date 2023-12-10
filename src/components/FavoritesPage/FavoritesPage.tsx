import React, { useEffect } from 'react';
import { Container, Typography, Grid } from "@mui/material";
import FavoritesCard from "../FavoritesCard/FavoriteCard";
import { useAppDispatch, useAppSelector } from '../../store/Hook';
import { cardFavoriteActions } from '../../store/slice/CardFavorite';



const FavoritesPage: React.FC = () => {
  const favoriteData = useAppSelector((state) => state.cardFavorite.WeatherDataWithKeyAndName);
  const dispatch = useAppDispatch();


  const initialStep = async () => {
    try {
      await dispatch(cardFavoriteActions.getAllFavoritesWeatherData());
    } catch (error) {
      console.error("Error dispatching action", error);
    }
  }

  useEffect(() => {
    initialStep();
  }, []);


  return (
    <Container maxWidth="md">
    <Typography variant="h4" align="center" sx={{ mt: 4, mb: 2 }}>
      Favorite Cities
    </Typography>
    {favoriteData &&
    <Grid container spacing={2} justifyContent="center">
      {favoriteData.map((city, index) => (
        <Grid item key={index} xs={12} sm={6} md={3}>
          <FavoritesCard {...city}/>
        </Grid>
      ))}
    </Grid>}
  </Container>
  );
};


export default FavoritesPage;

