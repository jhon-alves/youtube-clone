import React from 'react';
import {
  useTheme,
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Switch
 } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import VideoCall from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';

const useStyles = makeStyles ((theme) =>({
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuIcon: {
    marginRight: theme.spacing(2)
  },
  logo: {
    height: 25,
  },
  icons: {
    marginRight: theme.spacing(1)
  },
}));

function NavBar({ darkMode, setDarkMode }){
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar 
        position="fixed" 
        color="inherit"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton 
            edge="start" 
            className={classes.menuIcon}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img src={
            theme.palette.type === 'dark' 
            ? "/images/logo-white.png"
            : "/images/logo-black.png"}
           alt="logo" className={classes.logo} />
          <div className={classes.grow} />
          <Switch 
            value={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className={classes.icons}
          />
          <IconButton className={classes.icons}>
            <VideoCall />
          </IconButton>
          <IconButton className={classes.icons}>
            <AppsIcon />
          </IconButton>
          <IconButton className={classes.icons}>
            <MoreVert />
          </IconButton>

          <Button 
            color="secondary" 
            variant="outlined"
            startIcon={<AccountCircle />}
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  
  );
}

export default NavBar;
