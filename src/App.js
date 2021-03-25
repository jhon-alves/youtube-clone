import React,{ useState } from 'react';
import { 
  ThemeProvider,
  createMuiTheme,
  makeStyles
} from '@material-ui/core';

import HomePage from './HomePage';

const useStyles = makeStyles({
  root: {
    display: 'flex'
  },
});

function App() {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);
  
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary:{
        main: '#101010',
      },
      secondary: {
        main: '#0066ff',
      },
      background: {
        default: darkMode ? '#232323' : '#FFF',
        dark: darkMode ? '#181818' : '#F4F6F8',
        paper: darkMode ? '#232323' : '#FFF',
      }
    },
  });


  return (
    <ThemeProvider theme={theme} className={classes.root}>
      <HomePage darkMode={darkMode} setDarkMode={setDarkMode}/>
    </ThemeProvider>
  );
}

export default App;
