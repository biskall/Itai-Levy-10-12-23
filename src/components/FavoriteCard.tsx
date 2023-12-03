import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { makeStyles } from "@material-ui/core"; 

interface CityCardProps {
    name: string;
    temperature: string;
    weather: string;
}

const useStyles = makeStyles((theme) => ({
    mainCard:{
        backgroundColor: "#fff",
        color: "#000",
        opacity: .7
    }
}));

const FavoritesCard: React.FC<CityCardProps> = ({ name, temperature, weather }) => {
    const classes = useStyles();
  
    React.useEffect(() => {
      // Dispatch action to fetch weather data for default city or Tel Aviv
    }, []);

    return (
        <Card className={classes.mainCard}>
            <CardContent>
              <Typography variant="h6" align="center" gutterBottom>
              {name}
              </Typography>
              <Typography variant="subtitle1" align="center" gutterBottom>
              {temperature}
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center">
              {weather}
              </Typography>
            </CardContent>
          </Card>
    );
};

export default FavoritesCard;