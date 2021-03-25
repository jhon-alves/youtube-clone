import React from 'react';
import { makeStyles } from '@material-ui/core';

import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Content from './components/Content';

const useStyles = makeStyles ((theme) => ({
  root: {
    display: 'flex',
    background: theme.palette.background.dark,
    height: '100vh',
  },
}));

function HomePage(){
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <NavBar />
      <SideBar />
      <Content />
    </div>
  );
}

export default HomePage;