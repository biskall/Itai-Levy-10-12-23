import React from 'react';
import { CircularProgress, Typography, Box } from '@mui/material';

interface SpinnerProps {
  isLoading: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ isLoading }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="200px" // Set a minimum height for the spinner container
    >
      {isLoading && (
        <>
          <CircularProgress style={{ color: 'red' }} size={50} />
          <Typography variant="caption" color="secondary">
            Loading...
          </Typography>
        </>
      )}
    </Box>
  );
};

export default Spinner;