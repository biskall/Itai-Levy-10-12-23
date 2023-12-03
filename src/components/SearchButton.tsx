import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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

function SearchButton() {
  const classes = useStyles();

  return (
    // TODO: Autocomplete in search button from Material-UI
    <Paper component="form" className={classes.paper}>
      <InputBase
        className={classes.input}
        placeholder="Search City"
        inputProps={{ 'aria-label': 'Search City' }}
        
      />
      <IconButton type="button" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchButton;
