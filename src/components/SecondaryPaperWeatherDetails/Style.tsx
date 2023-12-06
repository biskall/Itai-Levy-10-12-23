import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  mainBox: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    '& > :not(style)': {
      margin: theme.spacing(0),
      width: 128,
      height: 128,
    },
  },
  paper: {
    elevation: 3,
    textAlign: 'center',
    backgroundColor: "#fff",
    color: "#000",
    opacity: .4
  },
  degreeSign: {
    fontSize: '0.5 em', 
    verticalAlign: 'small',
    position: 'relative',
    top: -5, 
    marginRight: -5,
    marginLeft: -3,
  },
  temperature: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -65, 
    marginBottom: -20,
  },
  sunImage: {
    width: '50px', 
    height: '50px', 
  },
}));

export default useStyles;