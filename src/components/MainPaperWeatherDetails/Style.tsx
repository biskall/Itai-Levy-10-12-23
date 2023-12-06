import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  mainBox: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    '& > :not(style)': {
      margin: theme.spacing(0),
      width: 328,
      height: 128,
    },
  },
  paper: {
    elevation: 3,
    textAlign: 'center',
    backgroundColor: "#fff",
    color: "#000",
    opacity: .6
  },
  degreeSign: {
    fontSize: '0.5 em', 
    verticalAlign: 'small',
    position: 'relative',
    top: -5, 
    marginRight: -5,
    marginLeft: -5,
  },
  subtitle: {
    marginLeft: -7, 
  },
}));

export default useStyles;