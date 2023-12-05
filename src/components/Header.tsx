import * as React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";
import SwitchMode from "./SwitchMode";


const useStyles = makeStyles((theme) => ({
  main:{
    backgroundColor: "#fff",
    color: "#005",
    opacity: .2
  },
  navlinks: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(-2),
    display: "flex",
  },
  logo: {
    flexGrow: 1,
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1.2),
    marginRight: theme.spacing(6),
    "&:hover": {
      color: "black",
      borderBottom: "1px solid",
    },
  }
}));


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
