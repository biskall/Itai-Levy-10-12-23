import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  main:{
    backgroundColor: "#ffff",
    color: "#002",
    opacity: .7
  },
  link:{
    textDecoration:"none",
    color: "#fff",
    fontSize: "20px",
  },
  icon:{
    color: "#fff"
  }
}));

export default useStyles;