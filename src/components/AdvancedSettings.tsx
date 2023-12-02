import * as React from 'react';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@material-ui/core';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function AdvancedSettings() {
  const [selected, setSelected] = React.useState(false);

  return (
    <Box
    style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center"
        }}>
    <Checkbox  style={{
        marginRight: '1%', 
      }} 
      {...label} 
      icon={<FavoriteBorder />} 
      checkedIcon={<Favorite />}
      />
    <FormControl style={{
          marginLeft: '1%', 
        }}>
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
    >
      <FormControlLabel value="Celsius" control={<Radio />} label="Celsius" />
      <FormControlLabel value="Fahrenheit" control={<Radio />} label="Fahrenheit" />
    </RadioGroup>
  </FormControl>
  </Box>
  );
}

export default AdvancedSettings;