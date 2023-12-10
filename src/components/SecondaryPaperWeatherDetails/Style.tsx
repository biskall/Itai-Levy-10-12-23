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
  degreeSign1: {
    fontSize: '0.5 em', 
    verticalAlign: 'small',
    position: 'relative',
    top: -5, 
    marginRight: -5,
    marginLeft: -1,
  },
    degreeSign2: {
    fontSize: '0.5 em', 
    verticalAlign: 'small',
    position: 'relative',
    top: -5, 
    marginRight: -5,
    marginLeft: -2,
  },
  temperature: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
    marginLeft: 30,
    marginBottom: -20,
  },
  typoMin: {
    justifyContent: 'center',
    display: 'flex',
  },
  typoMid: {
    justifyContent: 'center',
    display: 'flex',
    marginLeft: 3,
    marginRight: 4,
  },
  typoMax: {
    justifyContent: 'center',
    display: 'flex',
  },
  sunImage: {
    width: '50px', 
    height: '50px', 
  },
}));

export default useStyles;