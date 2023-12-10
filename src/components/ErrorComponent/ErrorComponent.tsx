import {
    Box,
    Alert,
    AlertTitle
  } from "@mui/material";


const ErrorComponent = () => {

    return (
        <Box style={{ marginTop: '20px' }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              height="100vh"
            >
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                An error occurred. Please try again later.
              </Alert>
            </Box>
        </Box>
    )
}

export default ErrorComponent;