import React from "react";
import { Typography, Card, CardContent } from "@mui/material";
import useStyles from "./Style"; 

interface CityCardProps {
    name: string;
    temperature: string;
    weather: string;
}

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