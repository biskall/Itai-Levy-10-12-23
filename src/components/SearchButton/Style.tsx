import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: '0px 0px 0px 0px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    backgroundColor: "#fff",
    color: "#000",
    opacity: .6
  },
  input: {
    marginLeft: theme.spacing(0),
    flex: 1,
  },
}));

export default useStyles;