import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
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

export default useStyles;