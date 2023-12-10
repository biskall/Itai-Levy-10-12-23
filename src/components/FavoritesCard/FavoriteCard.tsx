import React, {useState,useEffect} from "react";
import { Typography, Card, CardContent } from "@mui/material";
import useStyles from "./Style";
import { useAppDispatch, useAppSelector } from '../../store/Hook';
import { modeActions } from '../../store/slice/modeSlice';
import { weatherActions } from "../../store/slice/WeatherSlice";
import { CurrentWeatherDataDetails, WeatherDataWithKeyAndName } from "../../interfaces/AllInterfaces"; // TODO: when the app will be ready delte this line
import { useNavigate } from "react-router-dom";

interface CityCardProps {
  weatherData: WeatherDataWithKeyAndName,
}

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

    const initialStep = async () => {
      try{
        setData(weatherData);
      }catch{

      }
    };

    useEffect(() => {
      setTimeout(() => initialStep(), 100);
    }, [data]);

    return (
      <>{data && 
        <Card className={classes.mainCard} onClick={handleCardClick}>
            <CardContent>
              <Typography variant="h6" align="center" gutterBottom>
              {data.cityName}
              </Typography>
              <Typography variant="subtitle1" align="center" gutterBottom>
              {isCelsius === true ? (data?.currentWeatherDataDetails[0]?.Temperature?.Metric?.Value) : (data?.currentWeatherDataDetails[0]?.Temperature?.Imperial?.Value)}
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