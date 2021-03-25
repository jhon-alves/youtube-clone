import React from 'react';
import { 
  makeStyles,
  Box,
  Typography,
  Toolbar,
  Grid
} from '@material-ui/core';

const useStyles = makeStyles ((theme) => ({
  titleOne:{
    fontWeight: 800,
    fontSize: 20,
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    paddingRight: theme.spacing(6),
    paddingLeft: theme.spacing(6),
  },
  videos: {
    cursor: 'pointer'
  }
}));

const videos = [
  {
    id: 1,
    title: 'React + Material-UI',
    channel: 'Jonatas Alves',
    views: '11 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb1.jpg',
  },
  {
    id: 2,
    title: 'React + Material-UI',
    channel: 'Jonatas Alves',
    views: '957 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb1.jpg',
  },
  {
    id: 3,
    title: 'React + Material-UI',
    channel: 'Jonatas Alves',
    views: '106 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb1.jpg',
  },
  {
    id: 4,
    title: 'React + Material-UI',
    channel: 'Jonatas Alves',
    views: '5,6 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb1.jpg',
  },
  {
    id: 5,
    title: 'React + Material-UI',
    channel: 'Jonatas Alves',
    views: '2,2 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb1.jpg',
  },
  {
    id: 6,
    title: 'React + Material-UI',
    channel: 'Jonatas Alves',
    views: '233 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb1.jpg',
  },
  {
    id: 7,
    title: 'React + Material-UI',
    channel: 'Jonatas Alves',
    views: '118 mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb1.jpg',
  },
  {
    id: 8,
    title: 'React + Material-UI',
    channel: 'Jonatas Alves',
    views: '1,9 mi de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb1.jpg',
  },
];

function Content(){
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.content}>
        <Box p={0}>
          <Toolbar />
          <Typography
            variant='h5'
            color='textPrimary'
            className={classes.titleOne}
          >
            Recomendados
          </Typography>
          
          <Grid container spacing={2}>
            {
              videos.map((item, index) => (
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <Box className={classes.videos}>
                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display='block'
                      variant='body2'
                      color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
                </Grid>
              ))
            }
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Content;