import { useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import useStyles from "./Style";
import SearchButton from "../SearchButton/SearchButton";
import MainPaperWeatherDetails from "../MainPaperWeatherDetails/MainPaperWeatherDetails";
import AdvancedSettings from "../AdvancedSettings/AdvancedSettings";
import ForecastWeatherContainer from "../ForecastWeatherContainer/ForecastWeatherContainer";
import { useAppDispatch, useAppSelector } from '../../store/Hook';
import { favoriteActions } from "../../store/slice/FavoriteSlice"
import { weatherActions } from "../../store/slice/WeatherSlice";
import { messageForAlert } from "../../interfaces/exampleData";
import Spinner from "../SpinnerComponent/Spinner";


const WeatherPage = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const currentWeatherDatakeys = useAppSelector((state) => state.weather.currentWeatherDatakeys);
  const defultWeatherDataKeys = useAppSelector((state) => state.weather.defultWeatherDataKeys);
  const currentWeatherDataDetails = useAppSelector((state) => state.weather.currentWeatherDataDetails);
  const isError = useAppSelector((state) => state.weather.IsError);
  const isLoading = useAppSelector((state) => state.weather.IsLoading);

  // Function to perform initial steps, including fetching weather data and initializing local storage
  const initialStep = async () => {
    try {
      if (currentWeatherDatakeys.cityKey != null && currentWeatherDatakeys.cityKey !== "") {
        await dispatch(weatherActions.getWeatherDataByKey(currentWeatherDatakeys.cityKey));
      } else {
        await dispatch(weatherActions.getWeatherDataByKey(defultWeatherDataKeys.cityKey));
      }
    } catch {
    }
  };


  useEffect(() => {
    if (isError) {
      alert(messageForAlert);
    }
    initialStep();
    dispatch(favoriteActions.initialLocalStorage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentWeatherDatakeys]);

  return (
    <Box style={{ marginTop: "20px" }}>
      {isLoading && <Spinner isLoading={isLoading} />}
      {!isLoading &&
        <Grid container spacing={3} className={classes.gridItem}>
          <Grid item container direction="column" className={classes.gridSearchButton} >
            {/* <NewSearchButton /> */}
            <SearchButton />
          </Grid>
          <Container>
            <AdvancedSettings
              cityKey={currentWeatherDatakeys.cityKey ? currentWeatherDatakeys.cityKey : defultWeatherDataKeys.cityKey}
              cityName={currentWeatherDatakeys.cityName ? currentWeatherDatakeys.cityName : defultWeatherDataKeys.cityName} />
          </Container>
          <Grid item xs={12} className={classes.gridMainPaperWeatherDetails}>
            <Typography variant="h5" className={classes.cityTitle} >
              {currentWeatherDatakeys.cityName ? currentWeatherDatakeys.cityName : defultWeatherDataKeys.cityName}
            </Typography>
            {currentWeatherDataDetails &&
              <MainPaperWeatherDetails WeatherData={currentWeatherDataDetails} />
            }
          </Grid>
          <Grid item xs={12}>
            <ForecastWeatherContainer
              cityKey={currentWeatherDatakeys.cityKey ? currentWeatherDatakeys.cityKey : defultWeatherDataKeys.cityKey}
            />
          </Grid>
        </Grid>}
    </Box>
  );
};

export default WeatherPage;

