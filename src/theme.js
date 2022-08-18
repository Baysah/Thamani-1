import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(65,117,127)',
    },
    secondary: {
      main: 'rgb(255,243,1)',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
