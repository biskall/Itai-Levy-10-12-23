import React, { useEffect } from 'react';
import { Container, Typography, Grid } from "@mui/material";
import FavoritesCard from "../FavoritesCard/FavoriteCard";
import { useAppDispatch, useAppSelector } from '../../store/Hook';
import { cardFavoriteActions } from '../../store/slice/CardFavorite';
import ErrorComponent from '../ErrorComponent/ErrorComponent';

const FavoritesPage: React.FC = () => {
  const favoriteData = useAppSelector((state) => state.cardFavorite.WeatherDataWithKeyAndName);
  const isError = useAppSelector((state) => state.cardFavorite.IsError);
  const dispatch = useAppDispatch();

  // Function to initialize the component state based on favorites
  const initialStep = async () => {
      await dispatch(cardFavoriteActions.getAllFavoritesWeatherData());
  }

  useEffect(() => {
    initialStep();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  return (
    <Container maxWidth="md">
      {isError && <ErrorComponent />}
      {!isError && (
        <>
          <Typography variant="h4" align="center" sx={{ mt: 4, mb: 2 }}>
            Favorite Cities
          </Typography>
          {favoriteData && (
            <Grid container spacing={2} justifyContent="center">
              {favoriteData.map((city, index) => (
                <Grid item key={index} xs={12} sm={6} md={3}>
                  <FavoritesCard {...city} />
                </Grid>
              ))}
            </Grid>
          )}
        </>
      )}
    </Container>
  );
};


export default FavoritesPage;

