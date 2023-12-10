import React, {useState,useEffect} from "react";
import { Typography, Card, CardContent } from "@mui/material";
import useStyles from "./Style";
import { useAppDispatch, useAppSelector } from '../../store/Hook';
import { weatherActions } from "../../store/slice/WeatherSlice";
import {  WeatherDataWithKeyAndName } from "../../interfaces/AllInterfaces";
import { useNavigate } from "react-router-dom";


const FavoritesCard: React.FC<WeatherDataWithKeyAndName> = (weatherData) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isCelsius = useAppSelector((state) => state.mode.isCelsius);
    const [data, setData] = useState<any>();

    const handleCardClick = () => {
      // Navigate to another component when the card is clicked
      dispatch(weatherActions.getWeatherDataByKey(data.cityKey));
      navigate("/");
    };

    // Function to initialize the component state based on favorites
    const initialStep = async () => {
        setData(weatherData);
    };

    useEffect(() => {
      setTimeout(() => initialStep(), 100);
    }, [weatherData,isCelsius]);

    useEffect(() => {
      setTimeout(() => initialStep(), 100);
    }, []);

    return (
      <>{data && 
        <Card className={classes.mainCard} onClick={handleCardClick}>
            <CardContent>
              <Typography variant="h6" align="center" gutterBottom>
              {data.cityName}
              </Typography>
              <Typography variant="subtitle1" align="center" gutterBottom>
              {isCelsius === true ? data?.currentWeatherDataDetails[0]?.Temperature?.Metric?.Value : data?.currentWeatherDataDetails[0]?.Temperature?.Imperial?.Value}
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center"> 
              {data?.currentWeatherDataDetails[0]?.WeatherText} 
              </Typography>
            </CardContent>
        </Card>}
      </>
    );
};

export default FavoritesCard;