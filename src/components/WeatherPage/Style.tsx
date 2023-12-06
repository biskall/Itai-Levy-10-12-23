import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  gridSearchButton: {
    paddingBottom: "10px",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  gridItem: {
    paddingBottom: "0px",
  },
  gridMainPaperWeatherDetails:{
  },
  box: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    "& > :not(style)": {
      margin: theme.spacing(2),
      width: 128,
      height: 128,
    },
  },
  cityTitle: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
    paddingBottom: "5px",
    color: theme.palette.info.dark, 
    fontSize: '1.5em', 
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
}));

export default useStyles;