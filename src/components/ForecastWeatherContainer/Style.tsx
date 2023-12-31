import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    "& > :not(style)": {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      width: 128,
      height: 128,
    },
  },
}));

export default useStyles;