import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function MainPaperWeatherDetails() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        '& > :not(style)': {
          m: 2,
          width: 328,
          height: 128,
        },
      }}
    >
      <Paper elevation={3}>
        <h3>today</h3>
      </Paper>
    </Box>
  );
}

export default MainPaperWeatherDetails;