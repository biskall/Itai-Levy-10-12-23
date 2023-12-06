import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: '2px 14px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    backgroundColor: "#fff",
    color: "#000",
    opacity: .8
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: '10px',
  },
}));

export default useStyles;