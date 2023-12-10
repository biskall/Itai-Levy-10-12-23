import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import SwitchMode from "../SwitchMode/SwitchMode";
import useStyles from "./Style";


function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <AppBar position="static" className={classes.main}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          WeatherApp
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/favorite" className={classes.link}>
              Favorites
            </Link>
            <SwitchMode></SwitchMode>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Header;
