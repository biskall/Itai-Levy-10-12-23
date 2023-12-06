import * as React from 'react';
import {FavoriteBorder, Favorite} from '@mui/icons-material';
import {Radio, 
RadioGroup,
FormControlLabel,  
FormControl, 
Checkbox,
Box} from '@material-ui/core';
import useStyles from "./Style";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function AdvancedSettings() {
  const [selected, setSelected] = React.useState(false);

  return (
    <Box
    style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        marginTop: -10,
        marginLeft: '1%',
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